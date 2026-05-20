/* ===== Data ===== */
const services = [
  { icon: "briefcase", title: "Portfolio Websites", desc: "Showcase your work with elegant, image-first portfolios that convert visitors into clients." },
  { icon: "rocket", title: "Landing Pages", desc: "High-converting landing pages built around a single goal — leads, bookings, or sales." },
  { icon: "store", title: "Small Business Websites", desc: "Professional, trust-building websites that help local businesses stand out and grow." },
  { icon: "wrench", title: "Service Business Websites", desc: "Clear, conversion-focused sites for clinics, salons, gyms and local service providers." },
  { icon: "refresh-cw", title: "Website Redesign", desc: "Transform an outdated website into a modern, fast, and credible online presence." },
  { icon: "smartphone", title: "Mobile Responsive Design", desc: "Pixel-perfect experiences that look stunning on every phone, tablet, and desktop." },
];

const whyItems = [
  { icon: "sparkles", title: "Modern Premium Design", desc: "Aesthetic that signals trust and quality from the first scroll." },
  { icon: "smartphone", title: "Mobile Friendly", desc: "Built mobile-first — flawless on every device your customers use." },
  { icon: "zap", title: "Lightning Fast", desc: "Optimized for sub-second loads. Speed wins customers, Google rewards it." },
  { icon: "search", title: "SEO Ready Structure", desc: "Semantic, performant code that helps you rank where it matters." },
  { icon: "target", title: "Conversion Focused", desc: "Every section guides visitors toward booking, calling, or buying." },
  { icon: "mouse-pointer-click", title: "Smooth UX", desc: "Polished micro-interactions that feel premium — never overwhelming." },
];

const projects = [
  { title: "Lumen Dental Care", category: "Clinics", img: "assets/portfolio-clinic.jpg" },
  { title: "Maison Hair Atelier", category: "Salons", img: "assets/portfolio-salon.jpg" },
  { title: "Noir Fine Dining", category: "Restaurants", img: "assets/portfolio-restaurant.jpg" },
  { title: "Forge Athletic Club", category: "Fitness Centers", img: "assets/portfolio-fitness.jpg" },
  { title: "Hilltop Estates", category: "Real Estate", img: "assets/portfolio-realestate.jpg" },
  { title: "Pawsome Pet Care", category: "Pet Services", img: "assets/portfolio-pet.jpg" },
];

const testimonials = [
  { quote: "Within two months of launch, our online bookings doubled. Madan didn't just build a website — he built us a customer pipeline.", name: "Priya Shah", role: "Owner, Lumen Dental Care" },
  { quote: "Every client mentions how 'expensive' our salon looks now. Madan understood our brand instantly and made it feel premium.", name: "Aanya Verma", role: "Founder, Maison Hair Atelier" },
  { quote: "Fast, communicative, and genuinely cared about our business growing. Best money our restaurant ever spent.", name: "Marcus Reeves", role: "Co-owner, Noir Fine Dining" },
  { quote: "Our gym membership signups went up 3x after the redesign. The site loads instantly and looks like a million bucks.", name: "Diego Alvarez", role: "Director, Forge Athletic Club" },
];

const steps = [
  { icon: "message-circle", title: "Consultation", desc: "We talk about your business, your goals, and the customers you want to attract." },
  { icon: "pen-tool", title: "Planning & Design", desc: "I craft a strategic blueprint and design every screen for clarity and conversion." },
  { icon: "code-2", title: "Development", desc: "Hand-coded, lightning-fast, fully responsive — built to scale with your business." },
  { icon: "rocket", title: "Launch & Support", desc: "Smooth launch, training, and ongoing support so you can focus on what you do best." },
];

/* ===== Render ===== */
const ic = (name) => `<i data-lucide="${name}"></i>`;
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

document.getElementById("services-grid").innerHTML = services.map(s => `
  <div class="svc-card glass">
    <div class="svc-glow"></div>
    <div class="svc-icon">${ic(s.icon)}</div>
    <h3 class="svc-title">${esc(s.title)}</h3>
    <p class="svc-desc">${esc(s.desc)}</p>
  </div>`).join("");

document.getElementById("why-grid").innerHTML = whyItems.map(it => `
  <div class="why-card">
    ${ic(it.icon)}
    <h3>${esc(it.title)}</h3>
    <p>${esc(it.desc)}</p>
  </div>`).join("");

document.getElementById("portfolio-grid").innerHTML = projects.map(p => `
  <a href="#contact" class="proj glass">
    <div class="img-wrap"><img src="${p.img}" alt="${esc(p.title)} website preview" loading="lazy" /></div>
    <div class="proj-meta">
      <div>
        <p class="proj-cat">${esc(p.category)}</p>
        <h3 class="proj-title">${esc(p.title)}</h3>
      </div>
      <span class="proj-arrow">${ic("arrow-up-right")}</span>
    </div>
  </a>`).join("");

document.getElementById("testi-grid").innerHTML = testimonials.map(t => `
  <figure class="testi glass">
    <svg class="quote" viewBox="0 0 24 24" fill="currentColor"><path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6V9a2 2 0 0 0 0-2zm12 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6V9a2 2 0 0 0 0-2z"/></svg>
    <div class="stars">${Array(5).fill(0).map(() => '<svg viewBox="0 0 24 24"><path d="M12 2l2.92 6.26L22 9.27l-5.5 4.78L18.18 22 12 18.27 5.82 22l1.68-7.95L2 9.27l7.08-1.01L12 2z"/></svg>').join("")}</div>
    <blockquote>"${esc(t.quote)}"</blockquote>
    <figcaption>
      <div class="avatar">${esc(t.name[0])}</div>
      <div><p class="medium">${esc(t.name)}</p><p class="xs muted">${esc(t.role)}</p></div>
    </figcaption>
  </figure>`).join("");

document.getElementById("process-grid").innerHTML = steps.map((s, i) => `
  <div class="step">
    <div class="step-icon">${ic(s.icon)}</div>
    <div class="step-card glass">
      <p class="step-num">Step ${i + 1}</p>
      <h3 class="step-title">${esc(s.title)}</h3>
      <p class="step-desc">${esc(s.desc)}</p>
    </div>
  </div>`).join("");

/* Year */
document.getElementById("year").textContent = new Date().getFullYear();

/* Lucide icons render */
if (window.lucide) window.lucide.createIcons();

/* Navbar scroll */
const nav = document.getElementById("navbar");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
onScroll(); window.addEventListener("scroll", onScroll);

/* Mobile menu */
const menuBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => menu.classList.toggle("open"));
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));

/* Reveal on scroll */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12, rootMargin: "-40px" });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* Contact form -> Formspree (async, stay on page) */
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const submitBtn = document.getElementById("submit-btn");
const submitText = document.getElementById("submit-text");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.textContent = ""; status.className = "form-status";

  const data = new FormData(form);
  const name = (data.get("name") || "").toString().trim();
  const email = (data.get("email") || "").toString().trim();
  const message = (data.get("message") || "").toString().trim();
  if (!name) return fail("Name is required");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fail("Valid email required");
  if (message.length < 5) return fail("Tell me a bit more");

  submitBtn.disabled = true;
  submitText.textContent = "Sending…";
  try {
    const res = await fetch(form.action, { method: "POST", headers: { Accept: "application/json" }, body: data });
    if (!res.ok) throw new Error("Failed");
    status.textContent = "Thanks! I'll be in touch within a few hours.";
    status.className = "form-status ok";
    form.reset();
  } catch {
    fail("Couldn't send your message. Please try again or WhatsApp me.");
  } finally {
    submitBtn.disabled = false;
    submitText.textContent = "Send Message";
  }

  function fail(msg) {
    status.textContent = msg; status.className = "form-status err";
  }
});
