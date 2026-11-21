// Ravionics site: small, progressive. Everything readable is in the HTML already.
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
document.documentElement.classList.add("js");

/* header: solid on scroll, hides going down, burger menu, marks the section in view */
function header() {
  const top = $(".top"), nav = $("#nav"), burger = $(".burger");
  let last = scrollY;
  const onScroll = () => {
    const y = scrollY;
    top.classList.toggle("solid", y > 30);
    if (!nav.classList.contains("open")) top.classList.toggle("hide", y > 500 && y > last + 4);
    if (y < last - 4) top.classList.remove("hide");
    last = y;
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  const close = () => { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); };
  burger.addEventListener("click", () => { const o = nav.classList.toggle("open"); burger.setAttribute("aria-expanded", String(o)); });
  $$("a", nav).forEach((a) => a.addEventListener("click", close));
  addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  const links = new Map($$("a", nav).map((a) => [a.getAttribute("href").slice(1), a]));
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) links.forEach((a, id) => a.classList.toggle("on", id === e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
  links.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
}

/* sections arrive */
function reveals() {
  requestAnimationFrame(() => document.body.classList.add("ready"));
  const els = $$("[data-in]");
  if (reduce || !("IntersectionObserver" in window)) return els.forEach((e) => e.classList.add("in"));
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
  els.forEach((e) => io.observe(e));
}

/* the turnaround viewer */
function viewer() {
  const stage = $("[data-viewer]");
  if (!stage) return;
  const btns = $$(".thumbs button");
  const show = (name) => {
    $$("figure", stage).forEach((f) => f.classList.toggle("on", f.dataset.view === name));
    btns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.show === name)));
  };
  let auto = !reduce, k = 0, visible = false;
  btns.forEach((b) => b.addEventListener("click", () => { auto = false; show(b.dataset.show); }));
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(stage);
  setInterval(() => { if (!auto || !visible) return; k = (k + 1) % btns.length; show(btns[k].dataset.show); }, 3600);
}

/* control levels: tabs */
function tabs() {
  const list = $$("[role=tab]");
  const select = (t, focus) => {
    list.forEach((x) => { const on = x === t; x.setAttribute("aria-selected", String(on)); x.tabIndex = on ? 0 : -1; document.getElementById(x.getAttribute("aria-controls")).hidden = !on; });
    if (focus) t.focus();
  };
  list.forEach((t, i) => {
    t.addEventListener("click", () => select(t));
    t.addEventListener("keydown", (e) => {
      const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (d) { e.preventDefault(); select(list[(i + d + list.length) % list.length], true); }
    });
  });
}

/* contact form (Formspree); stays on the page if sending fails */
function contact() {
  const form = $("#contactForm");
  if (!form) return;
  const btn = $("button[type=submit]", form), status = $("[data-form-status]", form), label = btn.innerHTML;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    btn.disabled = true; btn.textContent = "Sending..."; status.textContent = "";
    try {
      const res = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (res.ok) { location.href = "/thanks.html"; return; }
      status.textContent = "Something went wrong. Please try again.";
    } catch { status.textContent = "Network error. Please check your connection and try again."; }
    btn.disabled = false; btn.innerHTML = label;
  });
}

header();
reveals();
viewer();
tabs();
contact();
