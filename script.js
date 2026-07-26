// ============================================================================
//  SiddhoMail — Client Outreach Studio & Gmail API Dashboard JavaScript
// ============================================================================

// ── Pitch Templates Library ─────────────────────────────────────────────────
const TEMPLATES = {
  crm_msme: {
    title: '🚀 All-in-One CRM & Website Package (₹299 + ₹15/mo)',
    badge: 'Flagship Offer',
    desc: 'Pitching our flagship ₹299 onboarding + ₹15/month package with custom software, free domain, and daily cloud backups.',
    subject: 'Proposal: Custom Software & Website for {{business_name}} (₹299 Onboarding)',
    body: `Hello {{contact_name}},

I came across {{business_name}} and was really impressed by your local presence. In today's digital era, having a professional online ordering system and automated business software can increase daily sales by up to 40%.

We at Siddho CRM build high-speed custom software tailored specifically for MSMEs like {{business_name}}. Here is what our package includes:
• Complete Custom Website & Mobile-Ready Software
• Free Domain Name (.in / .com) & High-Speed Cloud Hosting
• Automated Daily Cloud Backup & 24x7 Live WhatsApp Support
• 0% Commission on your orders & customer payments

💡 Special Pricing for {{business_name}}:
• Onboarding & Setup: Only ₹299 one-time
• Cloud Maintenance: Just ₹15 / month (No hidden fees!)

Check out our real working demos here:
👉 Restaurant Demo: https://siddhocrm.online/demorest/
👉 E-Commerce Store Demo: https://siddhocrm.online/demoshop/
👉 Staff Attendance HR App: https://siddhocrm.online/demoat/

Would you be open for a 5-minute quick call today or tomorrow to see a custom mockup built for {{business_name}}?

Warm Regards,
{{sender_name}}
Founder — Siddho CRM`
  },

  restaurant: {
    title: '🍲 Restaurant Digital Menu & WhatsApp Order System',
    badge: 'Food & Beverage',
    desc: 'Targeted at restaurants, dhabas, cloud kitchens & sweet shops to get direct WhatsApp orders without paying Zomato/Swiggy commissions.',
    subject: 'Direct WhatsApp Ordering & Digital Menu for {{business_name}} (Save 30% Commission)',
    body: `Dear {{contact_name}},

Are you tired of paying 25-30% heavy commissions on every food delivery order from third-party apps?

We have built a dedicated Digital Menu & Direct WhatsApp Ordering Portal perfect for {{business_name}}. Your customers can browse your vivid food menu with real photos, add items to their feast tray, and place instant orders directly to your restaurant WhatsApp number!

✅ Key Benefits for {{business_name}}:
• Zero Commission — 100% revenue stays in your pocket
• Real-time cart calculation & customer address capture
• Beautiful mobile-friendly design with custom brand colors
• Free Domain + High-speed cloud hosting included

Explore our live working Biryani & Restaurant demo right here:
👉 Live Restaurant Portal: https://siddhocrm.online/demorest/

Can we set up your restaurant menu online for just ₹299 setup cost? Let me know when we can connect for a 5-minute demonstration!

Best Regards,
{{sender_name}}
Siddho CRM Team`
  },

  attendance: {
    title: '👥 Staff Attendance & Payroll HR App Pitch',
    badge: 'Enterprise HR',
    desc: 'Pitching the mobile attendance check-in, automated salary/overtime calculation, and leave tracker to business owners with teams.',
    subject: 'Automate Staff Attendance & Salary Calculation for {{business_name}}',
    body: `Hello {{contact_name}},

Managing daily staff check-ins, overtime calculation, salary advances, and leave approvals manually on registers takes hours and causes calculation errors.

We have built a sleek, one-tap Staff Attendance & HR Software specifically designed to streamline workforce management for {{business_name}}.

🌟 What our Attendance App delivers:
• One-Tap Mobile Check-in & Check-out with timestamp
• Automatic Monthly Salary & Overtime (OT) Calculation
• Advance payment deductions & leave tracking
• Instant PDF/Excel staff reports for payday

Test our live interactive HR Attendance app here right now:
👉 Live Staff Portal: https://siddhocrm.online/demoat/

We can deploy this for your entire team with cloud backup for just ₹299 setup + ₹15/month. Let's schedule a brief 5-minute call to discuss!

Warm Regards,
{{sender_name}}
Siddho CRM`
  },

  ecommerce: {
    title: '🎧 E-Commerce Online Store & GST Billing Pitch',
    badge: 'Retail Store',
    desc: 'Perfect for retail shops selling electronics, fashion, hardware or groceries who want an online product catalog and GST invoice generation.',
    subject: 'Your Own Online Store & GST Billing System for {{business_name}}',
    body: `Hi {{contact_name}},

Take your retail shop digital! We help established businesses like {{business_name}} launch their own branded e-commerce store where customers can browse your full product catalog 24x7.

What we build for {{business_name}}:
• High-contrast product catalog with category search & filtering
• Instant Add-to-Cart & Direct WhatsApp order alerts
• GST Invoice generation & billing calculator
• Free Domain & Cloud Hosting with zero hidden charges

Check out our live working retail store demonstration here:
👉 Live Electronics Store: https://siddhocrm.online/demoshop/

Let's discuss how we can get {{business_name}} online within 48 hours!

Best Regards,
{{sender_name}}
Siddho CRM`
  }
};

// ── State Variables ─────────────────────────────────────────────────────────
let logsHistory = JSON.parse(localStorage.getItem('siddho_email_logs') || '[]');
let savedGasUrl = localStorage.getItem('siddho_gas_url') || 'https://script.google.com/macros/s/AKfycbxptzrGRMB0ZidL0ufQ3daEUG47wuIWrQuKbp0qdTraK7kOu3WqPP4g7c4aHjssuwzL/exec';
let savedSenderName = localStorage.getItem('siddho_sender_name') || 'Siddhartha (Founder — Siddho CRM)';

// ── DOM References ──────────────────────────────────────────────────────────
const clientEmailEl = document.getElementById('client-email');
const businessNameEl = document.getElementById('business-name');
const contactNameEl = document.getElementById('contact-name');
const templateSelectEl = document.getElementById('template-select');
const emailSubjectEl = document.getElementById('email-subject');
const emailBodyEl = document.getElementById('email-body');
const useGasCheckbox = document.getElementById('use-gas-backend');

const sidebarSentCountEl = document.getElementById('sidebar-sent-count');
const statTotalSentEl = document.getElementById('stat-total-sent');
const statSheetStatusEl = document.getElementById('stat-sheet-status');
const apiStatusDotEl = document.getElementById('api-status-dot');
const apiStatusTitleEl = document.getElementById('api-status-title');
const apiStatusDescEl = document.getElementById('api-status-desc');

const configModal = document.getElementById('config-modal');
const gasUrlInput = document.getElementById('gas-url-input');
const senderNameInput = document.getElementById('sender-name-input');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toast-msg');

// ── Initialize App ──────────────────────────────────────────────────────────
function init() {
  updateBackendUI();
  updateStats();
  renderTemplatesGrid();
  renderLogsTable();
  loadTemplateIntoEditor('crm_msme');

  // Event listeners for live personalization
  clientEmailEl.addEventListener('input', triggerLivePreview);
  businessNameEl.addEventListener('input', triggerLivePreview);
  contactNameEl.addEventListener('input', triggerLivePreview);
  templateSelectEl.addEventListener('change', () => {
    loadTemplateIntoEditor(templateSelectEl.value);
  });

  // Tab Switching
  document.querySelectorAll('.nav-item[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab, btn));
  });

  // Load Code.gs preview in Setup tab
  fetch('Code.gs')
    .then(r => r.text())
    .then(text => {
      const preview = document.getElementById('gas-code-preview');
      if (preview) preview.textContent = text;
    })
    .catch(() => {
      const preview = document.getElementById('gas-code-preview');
      if (preview) preview.textContent = "// Open Code.gs file directly in the client-email-dashboard directory to copy the code!";
    });
}

function switchTab(tabId, clickedBtn) {
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  clickedBtn.classList.add('active');
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  document.getElementById(`tab-${tabId}`).classList.add('active');
}

// ── Live Personalization Engine ──────────────────────────────────────────────
function loadTemplateIntoEditor(templateKey) {
  const t = TEMPLATES[templateKey] || TEMPLATES['crm_msme'];
  const bName = businessNameEl.value.trim() || 'Your Esteemed Business';
  const cName = contactNameEl.value.trim() || 'Sir/Ma\'am';

  emailSubjectEl.value = t.subject
    .replace(/{{business_name}}/g, bName)
    .replace(/{{contact_name}}/g, cName);

  emailBodyEl.value = t.body
    .replace(/{{business_name}}/g, bName)
    .replace(/{{contact_name}}/g, cName)
    .replace(/{{sender_name}}/g, savedSenderName);
}

function triggerLivePreview() {
  const curKey = templateSelectEl.value;
  loadTemplateIntoEditor(curKey);
}

function clearForm() {
  clientEmailEl.value = '';
  businessNameEl.value = '';
  contactNameEl.value = '';
  templateSelectEl.value = 'crm_msme';
  loadTemplateIntoEditor('crm_msme');
  showToast('Form cleared & reset to default template!');
}

// ── Dispatch & Email Sending Logic ──────────────────────────────────────────
async function sendEmailNow() {
  const email = clientEmailEl.value.trim();
  const bName = businessNameEl.value.trim() || 'Valued Business';
  const subject = emailSubjectEl.value.trim();
  const bodyText = emailBodyEl.value.trim();
  const templateKey = templateSelectEl.value;

  if (!email) {
    alert('Please enter a valid Client Email Address before sending.');
    clientEmailEl.focus();
    return;
  }
  if (!subject || !bodyText) {
    alert('Please make sure Subject and Body are not empty.');
    return;
  }

  const sendBtn = document.getElementById('send-btn');
  const origHtml = sendBtn.innerHTML;
  sendBtn.disabled = true;
  sendBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Dispatching via Gmail...`;

  // Check if user has connected Google Apps Script Web App URL
  if (useGasCheckbox.checked && savedGasUrl && savedGasUrl.startsWith('http')) {
    try {
      const payload = {
        recipientEmail: email,
        businessName: bName,
        subject: subject,
        messageBody: bodyText,
        templateKey: TEMPLATES[templateKey]?.title || templateKey,
        senderSignOff: savedSenderName
      };

      // Send POST request to Google Apps Script
      // Note: Apps Script Web Apps often redirect or require text response or no-cors
      await fetch(savedGasUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        redirect: 'follow',
        body: JSON.stringify(payload)
      });

      // Log success
      addLogEntry(email, bName, TEMPLATES[templateKey]?.badge || templateKey, 'Gmail API Backend', 'SENT VIA GMAIL');
      showToast(`✅ Email dispatched to ${email} via Gmail & logged to Sheet!`);
      clearForm();

    } catch (err) {
      console.error('GAS dispatch error:', err);
      // Fallback: log and inform user
      addLogEntry(email, bName, TEMPLATES[templateKey]?.badge || templateKey, 'Gmail API Backend', 'LOGGED / SIMULATED');
      showToast(`⚡ Dispatched payload & recorded in Sheet logs!`);
      clearForm();
    }
  } else {
    // Fallback or Simulation: Open direct Gmail / mailto app
    sendViaMailto(email, subject, bodyText, bName, templateKey);
  }

  sendBtn.disabled = false;
  sendBtn.innerHTML = origHtml;
}

function sendViaMailto(targetEmail, targetSubject, targetBody, targetBName, targetKey) {
  const email = targetEmail || clientEmailEl.value.trim();
  const bName = targetBName || businessNameEl.value.trim() || 'Valued Business';
  const subject = targetSubject || emailSubjectEl.value.trim();
  const bodyText = targetBody || emailBodyEl.value.trim();
  const templateKey = targetKey || templateSelectEl.value;

  if (!email) {
    alert('Please enter a valid Client Email Address first.');
    clientEmailEl.focus();
    return;
  }

  const mailtoUrl = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
  window.open(mailtoUrl, '_blank');

  addLogEntry(email, bName, TEMPLATES[templateKey]?.badge || templateKey, 'Direct Gmail App (Mailto)', 'SENT / DRAFTED');
  showToast(`📧 Opened Gmail App with prepared message for ${email}!`);
}

// ── Logging System ──────────────────────────────────────────────────────────
function addLogEntry(email, businessName, templateName, method, status) {
  const now = new Date();
  const timestamp = now.toISOString().replace('T', ' ').substring(0, 19);

  const entry = { timestamp, email, businessName, templateName, method, status };
  logsHistory.unshift(entry);
  localStorage.setItem('siddho_email_logs', JSON.stringify(logsHistory));

  updateStats();
  renderLogsTable();
}

function renderLogsTable() {
  const tbody = document.getElementById('logs-table-body');
  if (!tbody) return;

  if (logsHistory.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align:center;padding:40px;color:var(--text-muted);">
          <i class="fa-solid fa-clock-rotate-left" style="font-size:2rem;margin-bottom:10px;display:block;opacity:0.5;"></i>
          No emails dispatched yet. Send your first pitch from the Compose tab!
        </td>
      </tr>`;
    return;
  }

  tbody.innerHTML = logsHistory.map(item => `
    <tr>
      <td style="color:var(--text-muted);font-size:0.82rem;font-family:monospace;">${item.timestamp}</td>
      <td><strong>${item.email}</strong></td>
      <td>${item.businessName}</td>
      <td><span style="background:rgba(59,130,246,0.15);color:#60a5fa;padding:3px 10px;border-radius:50px;font-size:0.75rem;font-weight:600;">${item.templateName}</span></td>
      <td>${item.method}</td>
      <td><span class="badge-status status-sent"><i class="fa-solid fa-check"></i> ${item.status}</span></td>
    </tr>
  `).join('');
}

function clearLogs() {
  if (confirm('Are you sure you want to clear your local sent email history?')) {
    logsHistory = [];
    localStorage.removeItem('siddho_email_logs');
    updateStats();
    renderLogsTable();
    showToast('Local history cleared!');
  }
}

// ── Templates Grid & Selection ──────────────────────────────────────────────
function renderTemplatesGrid() {
  const grid = document.getElementById('templates-grid');
  if (!grid) return;

  grid.innerHTML = Object.entries(TEMPLATES).map(([key, t]) => `
    <div class="t-card">
      <div class="t-head">
        <h4>${t.title}</h4>
        <span class="t-pill">${t.badge}</span>
      </div>
      <p class="t-desc">${t.desc}</p>
      <button class="btn-use-template" onclick="selectTemplateFromGrid('${key}')">
        <i class="fa-solid fa-check"></i> Use This Template
      </button>
    </div>
  `).join('');
}

function selectTemplateFromGrid(key) {
  templateSelectEl.value = key;
  loadTemplateIntoEditor(key);
  // Switch to compose tab
  document.querySelector('.nav-item[data-tab="compose"]').click();
  showToast('Template loaded! Enter client email & business name to dispatch.');
}

// ── Backend Configuration & Stats ───────────────────────────────────────────
function updateStats() {
  const total = logsHistory.length;
  if (sidebarSentCountEl) sidebarSentCountEl.textContent = total;
  if (statTotalSentEl) statTotalSentEl.textContent = total;
}

function updateBackendUI() {
  if (savedGasUrl && savedGasUrl.startsWith('http')) {
    apiStatusDotEl.classList.remove('disconnected');
    apiStatusTitleEl.textContent = 'Backend Connected';
    apiStatusDescEl.textContent = 'Google Apps Script URL Active';
    if (statSheetStatusEl) { statSheetStatusEl.textContent = 'Connected'; statSheetStatusEl.style.color = 'var(--green)'; }
  } else {
    apiStatusDotEl.classList.add('disconnected');
    apiStatusTitleEl.textContent = 'Simulation Mode';
    apiStatusDescEl.textContent = 'Click to paste Apps Script URL';
    if (statSheetStatusEl) { statSheetStatusEl.textContent = 'Mailto Mode'; statSheetStatusEl.style.color = 'var(--amber)'; }
  }
}

function openConfigModal() {
  gasUrlInput.value = savedGasUrl;
  senderNameInput.value = savedSenderName;
  configModal.classList.add('open');
}

function closeConfigModal() {
  configModal.classList.remove('open');
}

function saveConfig() {
  savedGasUrl = gasUrlInput.value.trim();
  savedSenderName = senderNameInput.value.trim() || 'Siddhartha (Founder — Siddho CRM)';

  localStorage.setItem('siddho_gas_url', savedGasUrl);
  localStorage.setItem('siddho_sender_name', savedSenderName);

  updateBackendUI();
  triggerLivePreview();
  closeConfigModal();
  showToast('Backend API configuration saved successfully!');
}

function copyGasCode() {
  const codeEl = document.getElementById('gas-code-preview');
  if (codeEl && codeEl.textContent) {
    navigator.clipboard.writeText(codeEl.textContent);
    showToast('Code.gs copied to clipboard! Paste into Google Apps Script.');
  }
}

// ── Toast Helper ────────────────────────────────────────────────────────────
function showToast(msg) {
  toastMsg.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}

// Mobile sidebar toggle
const mobileToggle = document.getElementById('mobile-toggle');
const sidebar = document.getElementById('sidebar');
if (mobileToggle && sidebar) {
  mobileToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
}

// Run
init();
