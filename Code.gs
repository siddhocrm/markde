/**
 * ============================================================================
 *  Siddho CRM — Google Apps Script Backend for Client Email Outreach & Sheets Log
 * ============================================================================
 * 
 * INSTRUCTIONS TO DEPLOY:
 * 1. Open Google Sheets -> menu "Extensions" -> "Apps Script".
 * 2. Delete any default code inside Code.gs and paste THIS entire file.
 * 3. Click the blue "Deploy" button at top right -> "New deployment".
 * 4. Select type: "Web app".
 * 5. Set Description: "Siddho CRM Email Backend"
 * 6. Set Execute as: "Me (your email address)"
 * 7. Set Who has access: "Anyone" (CRITICAL: must be Anyone so dashboard can send requests).
 * 8. Click "Deploy" -> Authorize access when prompted.
 * 9. Copy the generated Web App URL and paste it inside the Siddho CRM Email Dashboard settings!
 */

function doPost(e) {
  try {
    // Parse incoming JSON payload from frontend dashboard
    var payload = JSON.parse(e.postData.contents);
    
    // --- Authentication Flow ---
    if (payload.action === 'verifyPassword') {
      var actualPass = getSitePassword();
      if (payload.password === actualPass) {
        return createJsonResponse({ status: "success", message: "Authenticated" });
      } else {
        return createJsonResponse({ status: "error", message: "Incorrect password" });
      }
    }

    // --- Existing Email Dispatch Flow ---
    var recipientEmail = payload.recipientEmail;
    var businessName = payload.businessName || "Valued Client";
    var subject = payload.subject || "Software Proposal from Siddho CRM";
    var messageBody = payload.messageBody || "";
    var templateKey = payload.templateKey || "Custom";
    var senderSignOff = payload.senderSignOff || "Siddho CRM Team";
    var senderEmail = payload.senderEmail || "";

    if (!recipientEmail || !messageBody) {
      return createJsonResponse({
        status: "error",
        message: "Missing required fields: recipientEmail or messageBody"
      });
    }

    // Convert newlines in messageBody to <br> for HTML email payload
    var htmlBody = messageBody.replace(/\n/g, '<br>') + 
                   '<br><br><hr style="border:none;border-top:1px solid #eee;margin:20px 0;">' +
                   '<p style="color:#666;font-size:12px;">Sent via official Gmail integration · Powered by <strong>Siddho CRM</strong></p>';

    var emailOptions = {
      htmlBody: htmlBody,
      name: senderSignOff
    };

    if (senderEmail) {
      emailOptions.from = senderEmail;
    }

    // Send email via official Gmail account of the script owner (or alias)
    GmailApp.sendEmail(recipientEmail, subject, messageBody, emailOptions);

    // Log this transaction into the active Google Sheet
    logToSheet(recipientEmail, businessName, templateKey, subject, "SENT VIA GMAIL");

    return createJsonResponse({
      status: "success",
      message: "Email successfully dispatched to " + recipientEmail + " via Gmail and logged to Google Sheet!"
    });

  } catch (err) {
    return createJsonResponse({
      status: "error",
      message: "Backend Execution Error: " + err.toString()
    });
  }
}

/**
 * Handle GET requests (e.g. status check or testing URL directly in browser)
 */
function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0];
    var data = sheet.getDataRange().getValues();
    
    var rows = [];
    if (data.length > 1) {
      var headers = data[0];
      for (var i = 1; i < data.length; i++) {
        var obj = {};
        for (var j = 0; j < headers.length; j++) {
          obj[headers[j]] = data[i][j];
        }
        rows.push(obj);
      }
    }
    
    return createJsonResponse({
      status: "success",
      data: rows,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    return createJsonResponse({
      status: "error",
      message: err.toString()
    });
  }
}

/**
 * Append transaction row to Sheet
 */
function logToSheet(email, businessName, template, subject, status) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0]; // Log to the first/active sheet
    var timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");
    
    // Append row: [Timestamp, Client Email, Business Name, Template used, Status]
    sheet.appendRow([timestamp, email, businessName, template, status]);
  } catch(e) {
    // If spreadsheet logging fails, silently log to Apps Script console
    console.error("Sheet append error: " + e.toString());
  }
}

/**
 * Helper to return CORS-friendly JSON
 */
function createJsonResponse(dataObject) {
  return ContentService.createTextOutput(JSON.stringify(dataObject))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Retrieve site password from 'Settings' sheet, creating it if it doesn't exist
 */
function getSitePassword() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var settingsSheet = ss.getSheetByName("Settings");
  
  if (!settingsSheet) {
    settingsSheet = ss.insertSheet("Settings");
    settingsSheet.appendRow(["Site Password", "Description"]);
    settingsSheet.appendRow(["admin123", "Change this password to secure your dashboard."]);
    settingsSheet.setColumnWidth(1, 200);
    settingsSheet.setColumnWidth(2, 400);
  }
  
  return settingsSheet.getRange(2, 1).getValue().toString();
}
