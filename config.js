/**
 * ============================================================
 *  BRAND CONFIG — Edit ONLY this file to fully rebrand the site
 *  One file. One client. 15 minutes.
 * ============================================================
 */

const BRAND = {

  // ── Core Identity ─────────────────────────────────────────
  name:        "Alex Cafe",                          // Brand name shown everywhere
  tagline:     "أفضل تجربة قهوة في صعيد مصر",       // Hero subtitle
  description: "كافيه أليكس - وجهتك المثالية للقهوة والمشروبات الفاخرة في سوهاج",

  // ── Colors (also update --primary-red in css/style.css) ───
  primaryColor: "#000000",   // Main brand color — match with CSS :root

  // ── Logo ──────────────────────────────────────────────────
  logoLetter:  "A",          // Single letter shown in navbar logo
  logoFile:    "",           // Optional: path to image logo, e.g. "assets/logo.png"
  faviconColor: "%23000000", // URL-encoded hex for SVG favicon (# = %23)

  // ── Contact ───────────────────────────────────────────────
  phone:      "+20 100 000 0000",
  whatsapp:   "201000000000",   // No + or spaces — used in wa.me links
  email:      "hello@alexcafe.com",
  city:       "سوهاج، مصر",

  // ── API ───────────────────────────────────────────────────
  apiBase:    "https://api.alexcafe.com/api",

  // ── Domain ────────────────────────────────────────────────
  domain:     "https://pioneersxai.github.io/Alex-Cafe",

  // ── Social Links (set to "" to hide) ─────────────────────
  social: {
    twitter:   "",
    linkedin:  "",
    instagram: "",
    youtube:   "",
    tiktok:    "",
  },

  // ── Language & Direction ──────────────────────────────────
  lang: "ar",    // "ar" for Arabic, "en" for English
  dir:  "rtl",   // "rtl" for Arabic, "ltr" for English

  // ── Products (shown in products/features section) ─────────
  products: [
    {
      id:          "menu",
      name:        "قائمة المشروبات",
      tagline:     "قهوة فاخرة لكل ذوق",
      description: "تشكيلة واسعة من القهوة المختصة والمشروبات الباردة والساخنة",
      icon:        "fas fa-coffee",
      link:        "#menu",
    },
    {
      id:          "reserve",
      name:        "حجز طاولة",
      tagline:     "احجز مكانك مسبقاً",
      description: "احجز طاولتك في كافيه أليكس وتمتع بتجربة لا تنسى",
      icon:        "fas fa-chair",
      link:        "#reserve",
    },
    {
      id:          "catering",
      name:        "خدمة المناسبات",
      tagline:     "نحضر القهوة إليك",
      description: "خدمة تقديم القهوة والمشروبات للمناسبات والفعاليات الخاصة في سوهاج",
      icon:        "fas fa-glass-cheers",
      link:        "#catering",
    },
  ],

  // ── Pricing Tiers ─────────────────────────────────────────
  pricing: [
    {
      name:     "فردي",
      price:    "50",
      currency: "جنيه",
      period:   "للشخص",
      features: ["قهوة مختصة", "مشروب بارد", "واي فاي مجاني", "جلسة مريحة"],
      cta:      "تعال الآن",
      featured: false,
    },
    {
      name:     "مجموعة",
      price:    "180",
      currency: "جنيه",
      period:   "لـ 4 أشخاص",
      features: ["4 مشروبات", "حلويات مجانية", "واي فاي مجاني", "حجز مسبق"],
      cta:      "الأكثر طلباً",
      featured: true,
    },
    {
      name:     "مناسبات",
      price:    "اتصل بنا",
      currency: "",
      period:   "",
      features: ["باقة مخصصة", "خدمة VIP", "ديكور خاص", "طاقم متخصص"],
      cta:      "تواصل معنا",
      featured: false,
    },
  ],

};

// ── Auto-apply brand to page ───────────────────────────────
// Runs on DOMContentLoaded and replaces all [data-brand] elements
document.addEventListener("DOMContentLoaded", () => {

  // Page title
  document.title = `${BRAND.name} - ${BRAND.tagline}`;

  // Lang & direction
  document.documentElement.lang = BRAND.lang;
  document.documentElement.dir  = BRAND.dir;

  // Replace all elements that have data-brand attributes
  const replacements = {
    "brand-name":        BRAND.name,
    "brand-tagline":     BRAND.tagline,
    "brand-description": BRAND.description,
    "brand-phone":       BRAND.phone,
    "brand-email":       BRAND.email,
    "brand-city":        BRAND.city,
    "brand-whatsapp":    BRAND.whatsapp,
  };

  Object.entries(replacements).forEach(([key, value]) => {
    document.querySelectorAll(`[data-brand="${key}"]`).forEach(el => {
      el.textContent = value;
    });
  });

  // WhatsApp links
  document.querySelectorAll("[data-whatsapp-link]").forEach(el => {
    el.href = `https://wa.me/${BRAND.whatsapp}`;
  });

  // Phone links
  document.querySelectorAll("[data-phone-link]").forEach(el => {
    el.href = `tel:${BRAND.phone}`;
  });

  // Email links
  document.querySelectorAll("[data-email-link]").forEach(el => {
    el.href = `mailto:${BRAND.email}`;
  });

  // Social links
  const socialMap = {
    "social-twitter":   BRAND.social.twitter,
    "social-linkedin":  BRAND.social.linkedin,
    "social-instagram": BRAND.social.instagram,
    "social-youtube":   BRAND.social.youtube,
    "social-tiktok":    BRAND.social.tiktok,
  };
  Object.entries(socialMap).forEach(([key, url]) => {
    document.querySelectorAll(`[data-brand="${key}"]`).forEach(el => {
      if (!url) { el.style.display = "none"; return; }
      el.href = url;
    });
  });

  // Logo letter
  document.querySelectorAll("[data-brand='logo-letter']").forEach(el => {
    el.textContent = BRAND.logoLetter;
  });

  // Apply brand color
  document.documentElement.style.setProperty('--primary-red', BRAND.primaryColor);

});
