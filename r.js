// Ravionics page behaviour: scroll films, reveals, video loops, tours, cutaways, tabs, the contact form. Content is visible without script.
document.documentElement.classList.add('js');

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const phone = () => matchMedia('(max-width: 760px)').matches;

/* ------------------------------------------------------------------ menu */
const menu = document.getElementById('menu');
const links = document.getElementById('links');
menu?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
links?.addEventListener('click', (e) => { if (e.target.closest('a')) { links.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false'); } });

const bar = document.getElementById('bar');
const onScroll = () => bar && bar.classList.toggle('solid', scrollY > 40);
addEventListener('scroll', onScroll, { passive: true }); onScroll();

/* --------------------------------------------------------------- reveals */
// Children of a section rise in turn; content is visible without script.
const groups = new Map();
document.querySelectorAll('[data-reveal]').forEach((el) => {
  const key = el.closest('section, article') || document.body;
  const n = groups.get(key) || 0; groups.set(key, n + 1);
  el.style.setProperty('--d', `${Math.min(n, 6) * 80}ms`);
});
const revealIO = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); revealIO.unobserve(e.target); }
}, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
document.querySelectorAll('[data-reveal]').forEach((el) => revealIO.observe(el));

/* ---------------------------------------------------------- video loops */
const vidIO = new IntersectionObserver((entries) => {
  for (const e of entries) {
    const v = e.target;
    if (e.isIntersecting) { if (v.preload === 'none') { v.preload = 'auto'; v.load(); } if (!reduced) v.play().catch(() => {}); }
    else v.pause();
  }
}, { threshold: 0.15 });
document.querySelectorAll('video.loop').forEach((v) => vidIO.observe(v));

/* ---------------------------------------------------------- mission clock */
const clock = document.getElementById('clock');
if (clock) {
  const tick = () => { const d = new Date(); clock.textContent = `UTC ${d.toISOString().slice(11, 19)}`; };
  tick(); setInterval(tick, 1000);
}

/* ------------------------------------------- statement: words light up */
const big = document.querySelector('[data-words]');
if (big) {
  big.innerHTML = big.textContent.trim().split(/\s+/).map((w) => `<span class="w">${w}</span>`).join(' ');
  const words = [...big.querySelectorAll('.w')];
  const lightWords = () => {
    const r = big.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.35)));
    const n = reduced ? words.length : Math.round(p * words.length);
    words.forEach((w, i) => w.classList.toggle('on', i < n));
  };
  addEventListener('scroll', lightWords, { passive: true }); lightWords();
}

/* ------------------------------------------- shared: progress through a tall section */
const progress = (el) => {
  const r = el.getBoundingClientRect();
  return Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)));
};

/* --------------------------------------------- pinned sections that step */
const stepper = (el, n, onStep) => {
  let cur = -1;
  const run = () => {
    const i = Math.min(n - 1, Math.floor(progress(el) * n * 0.999));
    if (i !== cur) { cur = i; el.dataset.step = String(i); onStep(i); }
  };
  addEventListener('scroll', run, { passive: true }); addEventListener('resize', run); run();
};

/* tours: a pinned picture beside a list; each step lights one item and shows its picture or clip */
document.querySelectorAll('.k-jobs').forEach((jobs) => {
  const items = [...jobs.querySelectorAll('.k-jobs-list li')];
  const films = [...jobs.querySelectorAll('.k-jobs-film')];
  let shown = -1;
  stepper(jobs, items.length, (i) => {
    items.forEach((li, k) => li.classList.toggle('on', k === i));
    if (i === shown || !films.length) return; shown = i;
    films.forEach((v, k) => {
      const isV = v.tagName === 'VIDEO';
      if (k === i) { if (isV && v.preload === 'none') { v.preload = 'auto'; v.load(); } v.classList.add('on'); if (isV && !reduced) v.play().catch(() => {}); }
      else { v.classList.remove('on'); if (isV) setTimeout(() => { if (!v.classList.contains('on')) v.pause(); }, 1200); }
    });
  });
});

/* wipes: screens slide open */
// observe the parent: a clipped element never counts as intersecting
const wipeIO = new IntersectionObserver((es) => { for (const e of es) if (e.isIntersecting) { e.target.querySelectorAll('[data-wipe]').forEach((w) => w.classList.add('in')); wipeIO.unobserve(e.target); } }, { threshold: 0.15 });
document.querySelectorAll('[data-wipe]').forEach((el, i) => { el.style.transitionDelay = `${(i % 3) * 160}ms`; if (reduced) el.classList.add('in'); });
if (!reduced) new Set([...document.querySelectorAll('[data-wipe]')].map((el) => el.parentElement)).forEach((p) => wipeIO.observe(p));

/* footer: the name rises into place */
const giant = document.querySelector('.foot-giant');
if (giant) {
  const onG = () => { const r = giant.getBoundingClientRect(); const p = Math.min(1, Math.max(0, (innerHeight - r.top) / (r.height * 2.2))); giant.style.setProperty('--gy', `${(18 - p * 18).toFixed(1)}%`); };
  if (reduced) { giant.style.setProperty('--gy', '0%'); } else { addEventListener('scroll', onG, { passive: true }); onG(); }
}

/* ------------------------------------------- scroll film: the clip follows the scroll
   <section class="scrub" style="--len: 400vh"><div class="scrub-pin"><video class="scrub-film" muted playsinline preload="auto" src="...">
   <div class="scrub-notes"><p data-at="0.1-0.35">...</p></div></div></section>
   Clips must be encoded all-intra or with a short GOP (ffmpeg -g 4) so seeking is smooth. */
document.querySelectorAll('.scrub').forEach((sec) => {
  const v = sec.querySelector('.scrub-film');
  const still = sec.querySelector('.scrub-still');
  const notes = [...sec.querySelectorAll('[data-at]')].map((n) => { const [a, b] = n.dataset.at.split('-').map(Number); return { n, a, b }; });
  let want = 0, raf = 0, ready = false;
  const seek = () => { raf = 0; if (ready && v.duration) { const t = want * (v.duration - 0.05); if (Math.abs(v.currentTime - t) > 0.02) v.currentTime = t; } };
  const onS = () => {
    want = progress(sec);
    notes.forEach(({ n, a, b }) => n.classList.toggle('on', want >= a && want < b));
    if (!raf) raf = requestAnimationFrame(seek);
  };
  // The still stays up until the film has really drawn a frame, so a phone that
  // can't or won't load the clip still shows a picture, never a black box.
  const show = () => { if (v.readyState >= 2) sec.classList.add('film-live'); };
  v.addEventListener('seeked', show); v.addEventListener('loadeddata', show);
  // Load only when the section is near. The whole clip is fetched into memory:
  // phones (iOS above all) only scrub smoothly through a clip they already hold.
  const src = (matchMedia('(max-width: 760px)').matches && v.dataset.srcM) || v.dataset.src;
  const load = () => {
    if (v.dataset.loading) return; v.dataset.loading = '1';
    const go = (url) => {
      v.src = url; v.load();
      v.addEventListener('loadedmetadata', () => {
        ready = true;
        // a muted play/pause wakes the decoder on iOS, so seeks draw frames
        const p = v.play(); if (p && p.then) p.then(() => { v.pause(); onS(); }).catch(() => onS()); else onS();
      }, { once: true });
    };
    fetch(src).then((r) => { if (!r.ok) throw new Error(r.status); return r.blob(); })
      .then((b) => go(URL.createObjectURL(b))).catch(() => go(src));
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { io.disconnect(); load(); } }, { rootMargin: '150% 0px' });
    io.observe(sec);
  } else load();
  addEventListener('scroll', onS, { passive: true }); onS();
});

/* ------------------------------------------- part cards: show the cutaway on tap */
document.querySelectorAll('.part-card .cut-btn').forEach((b) => {
  b.addEventListener('click', () => {
    const on = b.closest('.part-card').classList.toggle('show-cut');
    b.setAttribute('aria-pressed', String(on)); b.textContent = on ? 'Outside' : 'See inside';
  });
});

/* ------------------------------------------- closing picture eases in */
const closePic = document.querySelector('.k-close-pic');
if (closePic) new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { closePic.classList.add('in-view'); o.disconnect(); } }, { threshold: 0.2 }).observe(closePic);

/* ------------------------------------------- vehicle teasers: short loops play only while in view */
const loops = document.querySelectorAll('.tz-loop');
if (loops.length && 'IntersectionObserver' in window && !reduced) {
  const lo = new IntersectionObserver((es) => {
    for (const e of es) { if (e.isIntersecting) e.target.play().catch(() => {}); else e.target.pause(); }
  }, { rootMargin: '120px 0px' });
  loops.forEach((v) => lo.observe(v));
}

/* ------------------------------------------- hero film plays only while in view */
const heroFilm = document.querySelector('.k-hero-film');
if (heroFilm && heroFilm.tagName === 'VIDEO') {
  if (reduced) heroFilm.removeAttribute('autoplay');
  else new IntersectionObserver((es) => { if (es[es.length - 1].isIntersecting) heroFilm.play().catch(() => {}); else heroFilm.pause(); }).observe(heroFilm);
}

/* ------------------------------------------- tabs: control modes */
document.querySelectorAll('[data-tabs]').forEach((box) => {
  const tabs = [...box.querySelectorAll('[role="tab"]')];
  const pick = (t, focus) => {
    tabs.forEach((o) => { const on = o === t; o.setAttribute('aria-selected', String(on)); o.tabIndex = on ? 0 : -1; const p = document.getElementById(o.getAttribute('aria-controls')); if (p) p.hidden = !on; });
    if (focus) t.focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => pick(t));
    t.addEventListener('keydown', (e) => { const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (d) { e.preventDefault(); pick(tabs[(i + d + tabs.length) % tabs.length], true); } });
  });
});

/* ------------------------------------------- relay: the bars draw in */
const relay = document.querySelector('.relay');
if (relay) new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { relay.classList.add('in'); o.disconnect(); } }, { threshold: 0.3 }).observe(relay);

/* ------------------------------------------- contact form (Formspree); stays on the page if sending fails */
const form = document.getElementById('contactForm');
if (form) {
  const btn = form.querySelector('button[type=submit]'), status = form.querySelector('[data-form-status]'), label = btn.innerHTML;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    btn.disabled = true; btn.textContent = 'Sending...'; status.textContent = '';
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (res.ok) { location.href = '/thanks.html'; return; }
      status.textContent = 'Something went wrong. Please try again.';
    } catch { status.textContent = 'Network error. Please check your connection and try again.'; }
    btn.disabled = false; btn.innerHTML = label;
  });
}
