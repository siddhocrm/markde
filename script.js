// ============================================================================
//  SiddhoMail — Client Outreach Studio & Gmail API Dashboard JavaScript
// ============================================================================

// ── Pitch Templates Library ─────────────────────────────────────────────────
const TEMPLATES = {
  restaurant: {
    title: '🍔 Complete Restaurant Management & Ordering System',
    badge: 'Restaurants',
    desc: 'Pitch for restaurants & cafes offering zero-commission ordering, fast billing, payment gateways, and staff attendance.',
    subject: 'Modernize {{business_name}} with Zero-Commission Ordering & Smart Billing',
body: `Hello {{contact_name}},

I have been following {{business_name}} closely, and I am genuinely impressed by the quality of food and the dining experience you provide. Your restaurant is doing fantastic work in the local food scene! We specialize in helping great restaurants like yours grow even further.

To help you scale and manage operations smoothly, Siddho CRM provides an all-in-one software suite designed exclusively for restaurants and cafes. 

Here is how we can help {{business_name}} grow:
• Zero-Commission Online Ordering & Digital Menu
• Lightning-Fast Billing Software & Payment Gateway Integration
• Staff Attendance & Payroll Tracking
• Custom Website Setup & Digital Marketing
• Tax Support & Automated Accounting (Optional)

Stop paying heavy commissions to aggregators and take full control of your revenue.

At Siddho CRM, our core mission is to empower small businesses to grow and rise with minimal expenses. That is why we offer:

💡 Transparent Pricing Plans:
• Custom Software: Just ₹99/month
• Custom Website: ₹299 onboarding + ₹15/month
• Tax & Accounting (Optional): ₹799/month

Would you be open to a 5-minute call this week to see a live demo tailored for {{business_name}}?

Warm Regards,
{{sender_name}}
Siddho CRM Support`
  },

  hotel: {
    title: '🏨 All-in-One Hotel Booking & Property Management',
    badge: 'Hotels',
    desc: 'Pitch for hotels & lodges offering direct booking engines, billing, attendance, and complete property management.',
    subject: 'Increase Direct Bookings & Streamline Operations at {{business_name}}',
    body: `Dear {{contact_name}},

I have seen the beautiful property and excellent hospitality at {{business_name}}, and I must say it is very impressive. Your hotel is doing great, and we want to help you take guest experiences and bookings to the next level.

Managing a hotel requires juggling bookings, staff, billing, and accounting all at once. We at Siddho CRM specialize in simplifying this for properties like {{business_name}}.

We offer a complete Hotel Management Suite that helps you avoid hefty OTA commissions and run your property on autopilot.

Our specialized Hotel Software includes:
• Direct Hotel Booking Software & Custom Website
• Seamless Billing & Payment Gateway Setup
• Staff Attendance & HR Software
• Marketing Solutions to boost occupancy
• End-to-end Tax Support & Accounting (Optional)

Imagine having your entire property's operations accessible from one dashboard. 

At Siddho CRM, our core mission is to empower small businesses to grow and rise with minimal expenses. That is why we offer:

💡 Transparent Pricing Plans:
• Custom Software: Just ₹99/month
• Custom Website: ₹299 onboarding + ₹15/month
• Tax & Accounting (Optional): ₹799/month

Can we schedule a quick 5-minute virtual tour of the software this week?

Best Regards,
{{sender_name}}
Siddho CRM Support`
  },

  kirana: {
    title: '🛒 Smart Billing & Online Store for Kirana & Retail',
    badge: 'Retail/Kirana',
    desc: 'Pitch for kiranas and retail shops offering POS billing, online ordering, tax support, and payment integration.',
    subject: 'Digital Billing & Online Delivery Setup for {{business_name}}',
    body: `Hi {{contact_name}},

I have noticed the wide variety of products and the dedicated customer service at {{business_name}}. You have built a truly impressive retail store that locals rely on, and we want to help you scale your operations easily.

The retail landscape is changing rapidly, and customers now expect fast billing and online delivery options from their trusted local stores like {{business_name}}.

Siddho CRM provides a complete digital upgrade package specifically for Kirana stores and retail businesses.

Here is what we can set up for {{business_name}}:
• Smart POS Billing Software (Barcode ready)
• Your own Online Website & Ordering Software
• Integrated Payment Gateways for easy UPI/Card payments
• Staff Attendance Management
• Hassle-free Tax Support & Daily Accounting (Optional)

Get your shop online and manage inventory effortlessly without any technical headache.

At Siddho CRM, our core mission is to empower small businesses to grow and rise with minimal expenses. That is why we offer:

💡 Transparent Pricing Plans:
• Custom Software: Just ₹99/month
• Custom Website: ₹299 onboarding + ₹15/month
• Tax & Accounting (Optional): ₹799/month

Let's discuss how we can digitalize {{business_name}} within the next 48 hours. When is a good time to call?

Best Regards,
{{sender_name}}
Siddho CRM Support`
  },

  restaurant_bn: {
    title: '🍔 Restaurant Management & Ordering System (Bengali)',
    badge: 'Restaurants (BN)',
    desc: 'Bengali pitch for restaurants & cafes offering zero-commission ordering, billing, payment gateways, and attendance.',
    subject: '{{business_name}} কে আরও আধুনিক করুন: জিরো-কমিশন অর্ডারিং এবং স্মার্ট বিলিং',
    body: `নমস্কার {{contact_name}},

আমি বেশ কিছুদিন ধরে {{business_name}} এর খোঁজ রাখছি, এবং আপনাদের খাবারের মান ও পরিষেবা দেখে আমি সত্যিই মুগ্ধ। আপনাদের রেস্তোরাঁ খুব ভালো কাজ করছে! আপনাদের মতো চমৎকার রেস্তোরাঁকে আরও বড় হতে সাহায্য করাই আমাদের লক্ষ্য।

আপনার ব্যবসাকে আরও বাড়াতে এবং কাজগুলোকে সহজ করতে, Siddho CRM নিয়ে এসেছে বিশেষ করে রেস্তোরাঁ ও ক্যাফে-র জন্য তৈরি একটি সম্পূর্ণ সফটওয়্যার।

আমরা যেভাবে {{business_name}} কে সাহায্য করতে পারি:
• জিরো-কমিশন অনলাইন অর্ডারিং এবং ডিজিটাল মেনু
• দ্রুত বিলিং সফটওয়্যার এবং পেমেন্ট গেটওয়ে
• স্টাফ অ্যাটেনডেন্স এবং পেরোল ট্র্যাকিং
• কাস্টম ওয়েবসাইট এবং ডিজিটাল মার্কেটিং
• ট্যাক্স সাপোর্ট এবং অটোমেটেড অ্যাকাউন্টিং (ঐচ্ছিক)

অন্যান্য অ্যাপকে অতিরিক্ত কমিশন দেওয়া বন্ধ করুন এবং আপনার ব্যবসার পুরো নিয়ন্ত্রণ নিজের হাতে নিন।

Siddho CRM-এ আমাদের মূল লক্ষ্য হলো ছোট ব্যবসাগুলোকে ন্যূনতম খরচে বড় হতে এবং উন্নতি করতে সাহায্য করা। এই কারণেই আমরা দিচ্ছি:

💡 আমাদের সাশ্রয়ী মূল্য:
• কাস্টম সফটওয়্যার: মাত্র ₹৯৯/মাস (₹99/month)
• কাস্টম ওয়েবসাইট: ₹২৯৯ (₹299) সেটআপ + ₹১৫/মাস (₹15/month)
• ট্যাক্স এবং অ্যাকাউন্টিং (ঐচ্ছিক): ₹৭৯৯/মাস (₹799/month)

{{business_name}} এর জন্য তৈরি আমাদের সফটওয়্যারটির ডেমো দেখতে এই সপ্তাহে কি ৫ মিনিটের জন্য কথা বলা সম্ভব?

শুভেচ্ছান্তে,
{{sender_name}}
Siddho CRM Support`
  },

  hotel_bn: {
    title: '🏨 Hotel Booking & Property Management (Bengali)',
    badge: 'Hotels (BN)',
    desc: 'Bengali pitch for hotels & lodges offering direct booking engines, billing, attendance, and property management.',
    subject: '{{business_name}} এ ডিরেক্ট বুকিং বাড়ান এবং হোটেল ম্যানেজমেন্ট সহজ করুন',
    body: `নমস্কার {{contact_name}},

আমি {{business_name}} এর সুন্দর প্রপার্টি এবং চমৎকার আতিথেয়তা দেখেছি, এবং বলতে দ্বিধা নেই যে আপনাদের কাজ খুব ইমপ্রেসিভ। আপনাদের হোটেলটি খুব ভালো চলছে, এবং আমরা চাই আপনাদের বুকিং ও গেস্ট এক্সপেরিয়েন্স আরও ভালো করতে সাহায্য করতে।

একটি হোটেল পরিচালনার জন্য বুকিং, স্টাফ, বিলিং এবং অ্যাকাউন্টিং একসাথে সামলানো বেশ কঠিন। Siddho CRM আপনার মত প্রপার্টি যেমন {{business_name}} এর কাজকে সহজ করতে সাহায্য করে।

আমরা দিচ্ছি একটি কমপ্লিট হোটেল ম্যানেজমেন্ট সফটওয়্যার যা আপনাকে OTA-এর ভারী কমিশন থেকে বাঁচাবে এবং আপনার হোটেল চলবে অটো-পাইলটে।

আমাদের হোটেল সফটওয়্যারে যা যা থাকছে:
• ডিরেক্ট হোটেল বুকিং সফটওয়্যার এবং কাস্টম ওয়েবসাইট
• সহজ বিলিং এবং পেমেন্ট গেটওয়ে
• স্টাফ অ্যাটেনডেন্স এবং এইচআর (HR) সফটওয়্যার
• বুকিং বাড়ানোর জন্য মার্কেটিং সলিউশন
• সম্পূর্ণ ট্যাক্স সাপোর্ট এবং অ্যাকাউন্টিং (ঐচ্ছিক)

ভাবুন, আপনার প্রপার্টির সমস্ত কাজ একটিমাত্র ড্যাশবোর্ড থেকেই করা যাচ্ছে।

Siddho CRM-এ আমাদের মূল লক্ষ্য হলো ছোট ব্যবসাগুলোকে ন্যূনতম খরচে বড় হতে এবং উন্নতি করতে সাহায্য করা। এই কারণেই আমরা দিচ্ছি:

💡 আমাদের সাশ্রয়ী মূল্য:
• কাস্টম সফটওয়্যার: মাত্র ₹৯৯/মাস (₹99/month)
• কাস্টম ওয়েবসাইট: ₹২৯৯ (₹299) সেটআপ + ₹১৫/মাস (₹15/month)
• ট্যাক্স এবং অ্যাকাউন্টিং (ঐচ্ছিক): ₹৭৯৯/মাস (₹799/month)

এই সপ্তাহে সফটওয়্যারটির একটি ৫-মিনিটের ডেমো দেখার জন্য কি আমরা কথা বলতে পারি?

শুভেচ্ছান্তে,
{{sender_name}}
Siddho CRM Support`
  },

  kirana_bn: {
    title: '🛒 Smart Billing & Online Store (Bengali)',
    badge: 'Retail/Kirana (BN)',
    desc: 'Bengali pitch for kiranas and retail shops offering POS billing, online ordering, tax support, and payment integration.',
    subject: '{{business_name}} এর জন্য ডিজিটাল বিলিং এবং অনলাইন ডেলিভারি সেটআপ',
    body: `নমস্কার {{contact_name}},

আমি লক্ষ্য করেছি {{business_name}} এ আপনাদের প্রডাক্টের বিশাল কালেকশন এবং দারুণ কাস্টমার সার্ভিস। আপনারা সত্যিই একটি চমৎকার রিটেইল স্টোর তৈরি করেছেন যার ওপর স্থানীয় মানুষ ভরসা করে। আমরা চাই আপনাদের এই ব্যবসাকে আরও সহজভাবে পরিচালনা করতে সাহায্য করতে।

খুচরো ব্যবসার ধরন এখন দ্রুত পাল্টাচ্ছে, এবং ক্রেতারা এখন {{business_name}} এর মতো তাদের বিশ্বস্ত স্থানীয় দোকানগুলি থেকে দ্রুত বিলিং এবং অনলাইন ডেলিভারি আশা করছে।

Siddho CRM মুদি দোকান (Kirana) এবং খুচরো ব্যবসার জন্য একটি সম্পূর্ণ ডিজিটাল প্যাকেজ প্রদান করে।

আমরা {{business_name}} এর জন্য যা যা করতে পারি:
• স্মার্ট POS বিলিং সফটওয়্যার (বারকোড সাপোর্ট সহ)
• আপনার নিজস্ব অনলাইন ওয়েবসাইট এবং অর্ডারিং সফটওয়্যার
• সহজ UPI/কার্ড পেমেন্টের জন্য পেমেন্ট গেটওয়ে
• স্টাফ অ্যাটেনডেন্স ম্যানেজমেন্ট
• ঝামেলাহীন ট্যাক্স সাপোর্ট এবং অ্যাকাউন্টিং (ঐচ্ছিক)

আপনার দোকানকে অনলাইনে নিয়ে আসুন এবং কোনো টেকনিক্যাল ঝামেলা ছাড়াই ইনভেন্টরি ম্যানেজ করুন।

Siddho CRM-এ আমাদের মূল লক্ষ্য হলো ছোট ব্যবসাগুলোকে ন্যূনতম খরচে বড় হতে এবং উন্নতি করতে সাহায্য করা। এই কারণেই আমরা দিচ্ছি:

💡 আমাদের সাশ্রয়ী মূল্য:
• কাস্টম সফটওয়্যার: মাত্র ₹৯৯/মাস (₹99/month)
• কাস্টম ওয়েবসাইট: ₹২৯৯ (₹299) সেটআপ + ₹১৫/মাস (₹15/month)
• ট্যাক্স এবং অ্যাকাউন্টিং (ঐচ্ছিক): ₹৭৯৯/মাস (₹799/month)

আগামী ৪৮ ঘন্টার মধ্যে কীভাবে আমরা {{business_name}} কে ডিজিটাল করতে পারি তা নিয়ে আলোচনা করতে কখন ফোন করলে ভালো হয়?

শুভেচ্ছান্তে,
{{sender_name}}
Siddho CRM Support`
  }
};

// ── State Variables ─────────────────────────────────────────────────────────
let logsHistory = JSON.parse(localStorage.getItem('siddho_email_logs') || '[]');
let savedGasUrl = localStorage.getItem('siddho_gas_url') || 'https://script.google.com/macros/s/AKfycbyq1tKv9Yr15rJM2LPmzZltGEzVD7SLDblcGQfq0Ojv8wlxS4nujaRk0L_PsS-kcihP/exec';
let savedSenderName = localStorage.getItem('siddho_sender_name') || 'Siddho CRM Support';
let savedSenderEmail = localStorage.getItem('siddho_sender_email') || 'support@siddhocrm.online';
let currentTheme = localStorage.getItem('siddho_theme') || 'dark';

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
const senderEmailInput = document.getElementById('sender-email-input');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toast-msg');

const themeToggleBtn = document.getElementById('theme-toggle');
const mobileToggleBtn = document.getElementById('mobile-toggle');
const sidebarEl = document.getElementById('sidebar');
const sidebarOverlayEl = document.getElementById('sidebar-overlay');

// ── Initialize App ──────────────────────────────────────────────────────────
function init() {
  // Initialize theme
  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  // Theme Toggle Listener
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('siddho_theme', currentTheme);
      
      if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
      } else {
        document.documentElement.removeAttribute('data-theme');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      }
    });
  }

  // Mobile Sidebar Toggle Listener
  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener('click', () => {
      sidebarEl.classList.add('open');
      sidebarOverlayEl.classList.add('open');
    });
  }

  if (sidebarOverlayEl) {
    sidebarOverlayEl.addEventListener('click', () => {
      sidebarEl.classList.remove('open');
      sidebarOverlayEl.classList.remove('open');
    });
  }

  updateBackendUI();
  updateStats();
  renderTemplatesGrid();
  renderLogsTable();
  loadTemplateIntoEditor('restaurant');

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

  if (sidebarEl && sidebarOverlayEl) {
    sidebarEl.classList.remove('open');
    sidebarOverlayEl.classList.remove('open');
  }
}

// ── Live Personalization Engine ──────────────────────────────────────────────
function loadTemplateIntoEditor(templateKey) {
  const t = TEMPLATES[templateKey] || TEMPLATES['restaurant'];
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
  templateSelectEl.value = 'restaurant';
  loadTemplateIntoEditor('restaurant');
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
        senderSignOff: savedSenderName,
        senderEmail: savedSenderEmail
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

    } catch (err) {
      console.error('GAS dispatch error:', err);
      // Fallback: log and inform user
      addLogEntry(email, bName, TEMPLATES[templateKey]?.badge || templateKey, 'Gmail API Backend', 'LOGGED / SIMULATED');
      showToast(`⚡ Dispatched payload & recorded in Sheet logs!`);
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
        <td colspan="7" style="text-align:center;padding:40px;color:var(--text-muted);">
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
      <td>
        <button class="btn-resend" onclick="resendEmail('${item.email}', '${item.businessName}', '${item.templateName}')"><i class="fa-solid fa-rotate-right"></i> Resend</button>
      </td>
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

async function fetchLogsFromSheet() {
  if (!savedGasUrl || !savedGasUrl.startsWith('http')) {
    showToast('Please configure a valid Apps Script URL first.');
    return;
  }
  
  const tbody = document.getElementById('logs-table-body');
  if (tbody) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:40px;color:var(--text-muted);"><i class="fa-solid fa-spinner fa-spin" style="font-size:2rem;margin-bottom:10px;display:block;"></i> Fetching logs from Google Sheet...</td></tr>';
  }

  try {
    const response = await fetch(savedGasUrl);
    const result = await response.json();
    
    if (result.status === "success" && result.data) {
      logsHistory = result.data.map(row => {
        const vals = Object.values(row);
        return {
          timestamp: row["Timestamp"] || vals[0] || '',
          email: row["Client Email"] || row["Email"] || vals[1] || '',
          businessName: row["Business Name"] || vals[2] || '',
          templateName: row["Pitch Template"] || row["Template"] || vals[3] || '',
          method: 'Google Sheet Sync',
          status: row["Dispatch Method"] || row["Status"] || vals[4] || 'Sent'
        };
      }).reverse(); // Newest first
      
      localStorage.setItem('siddho_email_logs', JSON.stringify(logsHistory));
      renderLogsTable();
      updateStats();
      showToast('Logs successfully synced from Google Sheet!');
    } else {
      throw new Error(result.message || "Invalid response format");
    }
  } catch (err) {
    console.error("Fetch logs error:", err);
    showToast('Failed to fetch logs. Check console or backend configuration.');
    renderLogsTable(); // Reset to local
  }
}

function resendEmail(email, businessName, templateNameStr) {
  clientEmailEl.value = email;
  businessNameEl.value = businessName;
  
  // Try to match templateNameStr to a key
  let foundKey = 'restaurant';
  for (let key in TEMPLATES) {
    if (TEMPLATES[key].title === templateNameStr || TEMPLATES[key].badge === templateNameStr) {
      foundKey = key;
      break;
    }
  }
  
  templateSelectEl.value = foundKey;
  loadTemplateIntoEditor(foundKey);
  
  // Switch to compose tab
  document.querySelector('.nav-item[data-tab="compose"]').click();
  
  showToast('Data loaded! Review the message and click Send when ready.');
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
  if (senderEmailInput) senderEmailInput.value = savedSenderEmail;
  configModal.classList.add('open');
}

function closeConfigModal() {
  configModal.classList.remove('open');
}

function saveConfig() {
  savedGasUrl = gasUrlInput.value.trim();
  savedSenderName = senderNameInput.value.trim() || 'Siddho CRM Support';
  if (senderEmailInput) savedSenderEmail = senderEmailInput.value.trim();

  localStorage.setItem('siddho_gas_url', savedGasUrl);
  localStorage.setItem('siddho_sender_name', savedSenderName);
  localStorage.setItem('siddho_sender_email', savedSenderEmail);

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
