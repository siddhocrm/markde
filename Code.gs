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
    var recipientEmail = payload.recipientEmail;
    var businessName = payload.businessName || "Valued Client";
    var subject = payload.subject || "Software Proposal from Siddho CRM";
    var messageBody = payload.messageBody || "";
    var templateKey = payload.templateKey || "Custom";
    var senderSignOff = payload.senderSignOff || "Siddho CRM Team";

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

    // Send email via official Gmail account of the script owner
    GmailApp.sendEmail(recipientEmail, subject, messageBody, {
      htmlBody: htmlBody,
      name: senderSignOff
    });

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
  return createJsonResponse({
    status: "online",
    service: "Siddho CRM Email & Outreach Backend",
    timestamp: new Date().toISOString()
  });
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
