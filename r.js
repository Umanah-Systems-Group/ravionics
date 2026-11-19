// Ravionics site: motion only. Everything readable is in the HTML already.
// The live 3D aircraft come from the shared library (/assets/v3d.js), loaded when a scene nears the screen.
// Off-screen scenes and films are paused. With reduced motion, scenes draw one still frame and films do not play.

const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const ease = (t) => 1 - Math.pow(1 - clamp(t, 0, 1), 3);
const smooth = (t) => { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); };
const isPhone = () => innerWidth < 860;
document.documentElement.classList.add("js");

let lib = null;
const loadLib = () => (lib ??= import("/assets/v3d.js?v=fb915182f6"));
let glOk = null;
const webgl = () => { if (glOk === null) { try { glOk = !!document.createElement("canvas").getContext("webgl2"); } catch { glOk = false; } } return glOk; };

/** Mount a scene once; run it only while on screen. `tick` (optional) is called every frame with the api. */
function scene(el, { onMount, tick } = {}) {
  if (!el || !webgl()) return;
  let api = null, loading = false, on = false, raf = 0;
  const loop = () => { if (!on) return; tick?.(api, performance.now() / 1000); raf = requestAnimationFrame(loop); };
  new IntersectionObserver(async ([e]) => {
    on = e.isIntersecting;
    if (on && !api && !loading) {
      loading = true;
      try {
        const m = await loadLib();
        api = m.mount(el, { ...JSON.parse(el.dataset.v3d), still: reduce });
        el.classList.add("live3d");
        onMount?.(api);
      } catch (err) { console.warn("3D scene did not start", err); return; }
    }
    if (!api) return;
    if (on) { api.start(); if (tick && !reduce) { cancelAnimationFrame(raf); loop(); } else tick?.(api, 0); }
    else { api.stop(); cancelAnimationFrame(raf); }
  }, { rootMargin: "200px" }).observe(el);
  return () => api;
}

/* ---------- planning figures shared by the readouts (reference aircraft, simulator estimates) ---------- */
const figures = (tilt, folded) => ({
  phase: tilt >= 82 ? "Vertical takeoff" : tilt >= 8 ? "Transition" : "Cruise and loiter",
  props: folded ? "2 of 10" : "10 of 10",
  power: tilt >= 82 ? "about 20 kW" : tilt >= 8 ? "about 22 kW" : "about 3 to 4 kW",
  source: tilt >= 8 ? "battery helps the diesel" : "diesel alone, battery recharging",
  kw: tilt >= 82 ? 20 : tilt >= 8 ? 22 : 3.5,
});

/* ---------- header ---------- */
function header() {
  const top = $(".top"), nav = $("#nav"), burger = $(".burger");
  let last = scrollY;
  const onScroll = () => {
    const y = scrollY;
    top.classList.toggle("solid", y > 30);
    const open = nav.classList.contains("open");
    if (!open) top.classList.toggle("hide", y > 500 && y > last + 4);
    if (y < last - 4) top.classList.remove("hide");
    last = y;
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  const close = () => { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); };
  burger.addEventListener("click", () => { const o = nav.classList.toggle("open"); burger.setAttribute("aria-expanded", String(o)); });
  $$("a", nav).forEach((a) => a.addEventListener("click", close));
  addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  // Mark the section in view.
  const links = new Map($$("a", nav).map((a) => [a.getAttribute("href").slice(1), a]));
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) links.forEach((a, id) => a.classList.toggle("on", id === e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
  links.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
}

/* ---------- sections arrive ---------- */
function reveals() {
  const els = $$("[data-in]");
  if (reduce || !("IntersectionObserver" in window)) return els.forEach((e) => e.classList.add("in"));
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -10% 0px" });
  els.forEach((e) => io.observe(e));
}

/* ---------- films play only on screen ---------- */
function films() {
  if (reduce) return;
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    const v = e.target;
    if (e.isIntersecting) { if (v.preload === "none") v.preload = "auto"; v.play().catch(() => {}); } else v.pause();
  }), { rootMargin: "150px" });
  $$("video.loop").forEach((v) => io.observe(v));
}

/* ---------- hero: an 18 s loop of a sortie, with a live readout ---------- */
function hero() {
  const root = $(".hero");
  requestAnimationFrame(() => root.classList.add("ready"));
  const hud = (k) => $(`[data-hud=${k}]`, root);
  const pips = $$("[data-hud=pips] i", root);
  let lastPhase = "";
  const show = (tilt, folded) => {
    const f = figures(tilt, folded);
    hud("tilt").textContent = `${Math.round(tilt)}°`;
    hud("tiltbar").style.setProperty("--g", String(tilt / 90));
    if (f.phase !== lastPhase) { lastPhase = f.phase; hud("phase").textContent = f.phase; hud("power").textContent = f.power; }
    pips.forEach((p) => p.classList.toggle("on", !folded || p.dataset.tip === "1"));
  };
  scene($(".v3d", root), {
    tick(api, t) {
      const phone = isPhone();
      const c = reduce ? 0.55 : (t % 18) / 18;
      // 0 to .17 hover, .17 to .4 transition, .4 to .75 cruise, .75 to .95 back to hover.
      const k = c < 0.17 ? 1 : c < 0.4 ? 1 - smooth((c - 0.17) / 0.23) : c < 0.75 ? 0 : c < 0.95 ? smooth((c - 0.75) / 0.2) : 1;
      const tilt = 90 * k, folded = k < 0.06;
      api.set({ tilt, fold: folded ? 1 : 0, yaw: 0.95 + Math.sin(t * 0.13) * 0.42, pitch: 0.2 + Math.sin(t * 0.09) * 0.05, zoom: phone ? 1.45 : 0.94, dx: phone ? 0 : 0.17, dy: phone ? 0.02 : -0.09, lit: c > 0.45 && c < 0.75 ? "all" : ["power", "batt", "harness"] });
      show(tilt, folded);
    },
  });
}

/* ---------- one sortie, driven by the scroll ---------- */
function flight() {
  const root = $(".flight");
  if (!root) return;
  const steps = $$(".step", root), bar = $(".bar", root);
  const out = (k, v) => ($(`[data-fl=${k}]`, root).textContent = v);
  let api = null, cur = -1;
  const progress = () => { const r = root.getBoundingClientRect(); return clamp(-r.top / (r.height - innerHeight), 0, 1); };
  const frame = () => {
    const p = reduce ? 0.8 : progress();
    const step = p < 0.24 ? 0 : p < 0.5 ? 1 : p < 0.72 ? 2 : 3;
    if (step !== cur) { cur = step; steps.forEach((s, i) => s.classList.toggle("on", i === step)); }
    bar.style.setProperty("--p", String(p));
    const tilt = 90 * (1 - smooth((p - 0.24) / 0.22));
    const folded = p > 0.5;
    const f = figures(tilt, folded);
    out("tilt", `${Math.round(tilt)}°`); out("props", f.props); out("power", f.power);
    if (!api) return;
    const phone = isPhone();
    const x = smooth((p - 0.72) / 0.28);
    const order = api.model.order;
    const lit = p < 0.5 ? ["batt", "harness"] : p < 0.72 ? ["power", "harness", "fuel"] : order.slice(0, Math.max(1, Math.ceil(x * order.length)));
    api.set({ tilt, fold: folded ? 1 : 0, yaw: 1.15 - p * 0.9, pitch: 0.34 - p * 0.12 + x * 0.1, zoom: (phone ? 1.4 : 0.95) * (1 + x * 0.22), lit, dx: phone ? 0 : 0.02, dy: phone ? 0.04 : 0.02 });
  };
  addEventListener("scroll", frame, { passive: true });
  addEventListener("resize", frame);
  frame();
  scene($(".v3d", root), { onMount(a) { api = a; frame(); } });
}

/* ---------- inside: pick a system ---------- */
function inside() {
  const btns = $$(".syslist button");
  let api = null, auto = !reduce, k = 0, visible = false;
  const pick = (name) => {
    btns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.sys === name)));
    api?.set({ lit: name ? [name] : "all" });
  };
  btns.forEach((b) => b.addEventListener("click", () => { auto = false; pick(b.getAttribute("aria-pressed") === "true" ? null : b.dataset.sys); }));
  const el = $(".insidev");
  scene(el, { onMount(a) { api = a; pick(btns[0].dataset.sys); } });
  if (el) new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(el);
  setInterval(() => { if (!auto || !visible || !api) return; k = (k + 1) % btns.length; pick(btns[k].dataset.sys); }, 2600);
}

/* ---------- tilt the wing yourself ---------- */
function tryit() {
  const root = $(".tryit");
  if (!root) return;
  const input = $("input", root);
  const out = (k, v) => ($(`[data-live=${k}]`, root).textContent = v);
  let api = null;
  const update = () => {
    const deg = Number(input.value), folded = deg < 8, f = figures(deg, folded);
    input.style.setProperty("--v", String((deg / 90) * 100));
    out("deg", `${deg}°`); out("mode", deg >= 82 ? "Hover" : deg >= 8 ? "Transition" : "Cruise and loiter");
    out("props", folded ? "2 of 10 (wingtips)" : "10 of 10"); out("power", f.power); out("source", f.source);
    api?.set({ tilt: deg, fold: folded ? 1 : 0, lit: folded ? ["power", "harness", "fuel"] : ["power", "batt", "harness"] });
  };
  input.addEventListener("input", update);
  scene($(".tryv", root), { onMount(a) { api = a; update(); }, tick(a, t) { a.set({ yaw: 0.85 + Math.sin(t * 0.15) * 0.25 }); } });
  update();
}

/* ---------- the relay: a cursor walks the day ---------- */
function relay() {
  const lanes = $("[data-relay]");
  if (!lanes || reduce) return;
  let on = false, t0 = performance.now();
  new IntersectionObserver(([e]) => { on = e.isIntersecting; if (on) step(); }).observe(lanes);
  const step = () => { if (!on) return; lanes.style.setProperty("--t", String(((performance.now() - t0) / 14000) % 1)); requestAnimationFrame(step); };
}

/* ---------- control levels: tabs ---------- */
function modes() {
  const tabs = $$("[role=tab]", $(".modes"));
  const select = (t, focus) => {
    tabs.forEach((x) => { const on = x === t; x.setAttribute("aria-selected", String(on)); x.tabIndex = on ? 0 : -1; document.getElementById(x.getAttribute("aria-controls")).hidden = !on; });
    if (focus) t.focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => select(t));
    t.addEventListener("keydown", (e) => {
      const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); }
    });
  });
}

/* ---------- contact form (Formspree), stays on the page if sending fails ---------- */
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
films();
hero();
flight();
inside();
tryit();
relay();
modes();
contact();
