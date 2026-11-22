#!/usr/bin/env python3
"""Builds the Ravionics pages from one shared header and footer.
Run: python3 tools/pages.py, then node tools/stamp.mjs. Pages are plain static HTML."""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
F = "/media/films"
S = "/media/stills"

NAV = [("/", "Home"), ("/fregata.html", "FREGATA"), ("/technology.html", "Technology"),
       ("/missions.html", "Missions"), ("/field-kit.html", "Field Kit"), ("/about.html", "About"),
       ("/contact.html", "Contact")]

MARK = ('<svg class="mark" viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">'
        '<path d="M2 15.5 L13 13 L16 9 L19 13 L30 15.5 L19 17 L16 23 L13 17 Z" fill="currentColor"/></svg>')


def head(title, desc, body, here):
    links = "\n".join(
        f'    <a href="{h}"{" aria-current=\"page\"" if h == here else ""}>{n}</a>' for h, n in NAV)
    label = dict(NAV).get(here, "")
    return f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta name="theme-color" content="#05070a">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:image" content="https://ravionics.com/og-fregata.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/fonts/archivo.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/r.css">
<script type="module" src="/r.js"></script>
</head>
<body class="{body}">
<a class="skip" href="#main">Skip to content</a>
<header class="bar" id="bar">
  <a class="wordmark" href="/" aria-label="Ravionics, home">{MARK}<span>Ravionics</span></a>
  <nav class="links" id="links" aria-label="Main">
{links}
  </nav>
  <p class="clock" aria-label="Clock"><span id="clock">UTC --:--:--</span> <span class="clock-sep">/</span> {label or "Ravionics"}</p>
  <button class="menu" id="menu" aria-expanded="false" aria-controls="links" aria-label="Open menu">
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M3 8h18M3 16h18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
  </button>
</header>

<main id="main">
'''


FOOT = '''</main>

<footer class="foot">
  <div class="foot-top">
    <p class="foot-line">Always watching.<br>Never armed.</p>
    <a class="btn btn-glass foot-cta" href="/contact.html">Request a briefing <span aria-hidden="true">&rarr;</span></a>
  </div>
  <div class="foot-grid">
    <nav class="foot-col" aria-label="Aircraft"><b>Aircraft</b><a href="/fregata.html">FREGATA</a><a href="/technology.html">Technology</a><a href="/missions.html">Missions</a><a href="/field-kit.html">Field Kit</a></nav>
    <nav class="foot-col" aria-label="Company"><b>Company</b><a href="/">Home</a><a href="/about.html">About</a><a href="/contact.html">Contact</a><a href="/ravionics-infographic.html">Gap Map</a><a href="/ravionics-cost-model.html">Coverage Model</a></nav>
    <nav class="foot-col" aria-label="Family"><b>Family</b><a href="https://galleion.umanahsystems.com/" rel="noopener">Galleion</a><a href="https://umanahsystems.com/" rel="noopener">Umanah Systems Group</a><a href="/privacy.html">Privacy</a><a href="/terms.html">Terms</a></nav>
  </div>
  <a class="foot-giant" href="/" aria-label="Ravionics, home"><svg viewBox="0 0 1000 150" role="img" aria-hidden="true"><text x="500" y="128" text-anchor="middle" textLength="990" lengthAdjust="spacingAndGlyphs">RAVIONICS</text></svg></a>
  <div class="foot-base"><p>&copy; 2026 Ravionics, a Umanah Systems Group program. All rights reserved.</p></div>
</footer>
</body>
</html>
'''


def scrub(id_, name, length, title, label, chapters, notes):
    ch = "".join(f'<li data-at="{a}">{t}</li>' for a, t in chapters)
    nt = "\n".join(
        f'        <div data-at="{a}"><p class="n">{n}</p><h3>{h}</h3><p>{p}</p></div>' for a, n, h, p in notes)
    return f'''  <section class="scrub capture" id="film-{id_}" style="--len: {length}vh" aria-labelledby="film-{id_}-h">
    <div class="scrub-pin">
      <img class="scrub-still" src="{F}/{name}.jpg" alt="" aria-hidden="true">
      <video class="scrub-film" muted playsinline preload="none" poster="{F}/{name}.jpg" data-src="{F}/{name}.mp4" data-src-m="{F}/{name}-m.mp4" aria-label="Concept animation: {label}"></video>
      <div class="film-shade" aria-hidden="true"></div>
      <div class="film-head">
        <h2 id="film-{id_}-h">{title}</h2>
      </div>
      <ol class="film-chapters" aria-hidden="true">{ch}</ol>
      <div class="scrub-notes">
{nt}
      </div>
    </div>
  </section>
'''


def tour(id_, length, h, items, films):
    fl = "\n".join(
        f'      <img class="k-jobs-film{" on" if i == 0 else ""}" src="{src}" alt="{alt}" loading="lazy" width="1920" height="1080">'
        for i, (src, alt) in enumerate(films))
    li = "\n".join(
        f'        <li><span class="n">{i + 1:02d}</span><h3>{t}</h3><p>{p}</p></li>' for i, (t, p) in enumerate(items))
    return f'''  <section class="k-jobs" id="{id_}" style="--len: {length}vh" aria-labelledby="{id_}-h">
    <div class="k-jobs-stage">
      <h2 class="k-jobs-h" id="{id_}-h">{h}</h2>
{fl}
      <ol class="k-jobs-list">
{li}
      </ol>
    </div>
  </section>
'''


def services(id_, h, rows, intro=""):
    rs = "\n".join(f'''        <div class="service" data-reveal>
          <dt>{t}</dt>
          <dd><p>{p}</p>{f'<p class="who">{w}</p>' if w else ''}</dd>
        </div>''' for t, p, w in rows)
    ip = f'\n      <p class="svc-intro" data-reveal>{intro}</p>' if intro else ""
    return f'''  <section class="services" aria-labelledby="{id_}">
    <div class="wrap">
      <h2 id="{id_}" data-reveal>{h}</h2>{ip}
      <dl class="service-list">
{rs}
      </dl>
    </div>
  </section>
'''


def table(id_, h, p, cap, rows, note):
    rs = "\n".join(f'            <tr><td>{a}</td><td>{b}</td><td>{c}</td></tr>' for a, b, c in rows)
    return f'''  <section class="technology" aria-labelledby="{id_}">
    <div class="wrap">
      <div class="tech-head">
        <h2 id="{id_}" data-reveal>{h}</h2>
        <p data-reveal>{p}</p>
      </div>
      <div class="table-wrap" data-reveal>
        <table>
          <caption>{cap}</caption>
          <thead><tr><th scope="col">Job</th><th scope="col">How FREGATA does it</th><th scope="col">Figure</th></tr></thead>
          <tbody>
{rs}
          </tbody>
        </table>
      </div>
      <p class="small">{note}</p>
    </div>
  </section>
'''


def close(h, href="/contact.html", btn="Request a briefing", pic=None):
    img = (f'    <img class="k-close-img" src="{pic}" alt="" width="1920" height="1080" loading="lazy" aria-hidden="true">\n'
           if pic else "")
    cls = "k-close k-close-pic" if pic else "k-close"
    return f'''  <section class="{cls}" aria-labelledby="close-h">
{img}    <h2 id="close-h" class="k-close-h" data-reveal>{h}</h2>
    <div class="actions k-close-actions" data-reveal><a class="btn btn-glass btn-big" href="{href}">{btn} <span aria-hidden="true">&rarr;</span></a></div>
  </section>
'''


def page_head(h1, lead, cls="page-head"):
    return f'''  <section class="{cls}" aria-labelledby="ph-h">
    <h1 id="ph-h">{h1}</h1>
    <p class="lead">{lead}</p>
  </section>
'''


def loop_show(name, h, p, label, still=False):
    if still:
        media = f'<img class="showcase-film" src="{name}" alt="{label}" width="1920" height="1080" loading="lazy">'
    else:
        media = (f'<video class="showcase-film loop" muted loop playsinline preload="none" poster="{F}/{name}.jpg" aria-label="Concept animation: {label}">'
                 f'<source src="{F}/{name}-m.mp4" type="video/mp4" media="(max-width: 760px)"><source src="{F}/{name}.mp4" type="video/mp4"></video>')
    return f'''  <section class="showcase" aria-label="{h}">
    {media}
    <div class="showcase-copy" data-reveal>
      <h2>{h}</h2>
      <p>{p}</p>
    </div>
  </section>
'''


def duo(cards):
    cs = "\n".join(f'''    <a href="{href}">
      <img src="{img}" alt="{alt}" width="1920" height="1080" loading="lazy">
      <div class="duo-copy"><p class="n">{n}</p><h2>{h}</h2><p>{p}</p><span class="go">{go} <span aria-hidden="true">&rarr;</span></span></div>
    </a>''' for href, img, alt, n, h, p, go in cards)
    return f'''  <section class="duo" aria-label="More about FREGATA">
{cs}
  </section>
'''


# ------------------------------------------------------------------ pages
def index():
    out = head("Ravionics | FREGATA. Always Watching.",
               "FREGATA by Ravionics: an unarmed, uncrewed tilt-wing aircraft that lifts off a ship's deck like a helicopter, flies like an airplane and is designed to stay on watch for a full day.",
               "pg-index", "/")
    out += f'''  <section class="k-hero" id="hero" aria-labelledby="hero-h">
    <video class="k-hero-film" muted loop playsinline autoplay preload="auto" poster="{F}/orbit.jpg" aria-label="Concept animation: the camera circles FREGATA on a dark stage, its long wing flat and the two wingtip propellers turning">
      <source src="{F}/orbit-m.mp4" type="video/mp4" media="(max-width: 760px)">
      <source src="{F}/orbit.mp4" type="video/mp4">
    </video>
    <span class="corners" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
    <h1 id="hero-h" class="k-hero-h"><span>Always</span> <span>Watching</span></h1>
    <div class="k-hero-foot">
      <p>FREGATA lifts off a ship's deck like a helicopter, turns its whole wing to fly like an airplane, and is built to stay on watch for a full day.</p>
      <a class="k-scroll" href="#about">Scroll <span aria-hidden="true">&darr;</span></a>
    </div>
  </section>
  <section class="k-statement" id="about" aria-label="What Ravionics does">
    <p class="k-big" data-words>A coastline, a harbor or a pipeline needs watching every hour of every day. Crewed patrols are expensive and small drones come home after an hour. FREGATA needs no runway, rides a long wing for hours on two propellers, and hands over to the next aircraft before it leaves. It carries cameras, never weapons.</p>
  </section>
'''
    out += scrub("takeoff", "takeoff", 720, "Deck to wing<br><span>in one smooth turn</span>",
                 "FREGATA lifts straight up from a pad, folds its legs, tilts its wing and tail from upright to flat and flies away on its two wingtip propellers",
                 [("0-0.3", "Lift"), ("0.3-0.72", "Tilt"), ("0.72-0.82", "Fold"), ("0.82-1.01", "Cruise")],
                 [("0.02-0.29", "01 &middot; Lift", "Straight up, off the deck", "Wing on edge, all ten propellers pointing at the sky. The legs fold into the body as it climbs."),
                  ("0.3-0.71", "02 &middot; Tilt", "The whole wing turns", "Wing and tail tilt forward together as speed builds. The body stays level the whole way, and the flight software holds it steady through every degree."),
                  ("0.72-0.81", "03 &middot; Fold", "Eight propellers rest", "Once the wing carries the weight, eight propellers stop and fold flat against their pods."),
                  ("0.82-1.01", "04 &middot; Cruise", "Two are enough", "The wingtip propellers pull FREGATA along on a few kilowatts. Hours of this is what a day on watch looks like.")])
    out += f'''  <section class="teasers" id="platform" aria-labelledby="tz-h">
    <div class="tz-head">
      <h2 id="tz-h" data-reveal>One aircraft, a full day<br><span>and a relay that never goes dark</span></h2>
    </div>
    <article class="tz">
      <video class="tz-media tz-loop" muted loop playsinline preload="none" poster="{F}/turn.jpg" aria-label="Concept animation: FREGATA on its pad, turning slowly, wing on edge and ready to lift"><source src="{F}/turn-m.mp4" type="video/mp4" media="(max-width: 760px)"><source src="{F}/turn.mp4" type="video/mp4"></video>
      <div class="tz-shade" aria-hidden="true"></div>
      <a class="tz-copy" href="/fregata.html" data-reveal>
        <p class="tz-n">01 <span>The aircraft</span></p>
        <h3>FREGATA</h3>
        <p class="tz-line">Twenty feet of wing, ten electric propellers and a sensor ball under the nose. Named for the bird that barely lands.</p>
        <span class="tz-go">Meet FREGATA <span aria-hidden="true">&rarr;</span></span>
      </a>
    </article>
    <article class="tz">
      <img class="tz-media tz-still" src="{F}/xray-end.jpg" alt="" loading="lazy" aria-hidden="true">
      <div class="tz-shade" aria-hidden="true"></div>
      <a class="tz-copy" href="/technology.html" data-reveal>
        <p class="tz-n">02 <span>Technology</span></p>
        <h3>See inside</h3>
        <p class="tz-line">Two heavy-fuel diesels, a battery for the hungry minutes of hover, and one wiring spine to every motor.</p>
        <span class="tz-go">Look through the skin <span aria-hidden="true">&rarr;</span></span>
      </a>
    </article>
    <article class="tz">
      <img class="tz-media tz-still" src="{S}/cruise_top.webp" alt="" loading="lazy" aria-hidden="true">
      <div class="tz-shade" aria-hidden="true"></div>
      <a class="tz-copy" href="/missions.html" data-reveal>
        <p class="tz-n">03 <span>Missions</span></p>
        <h3>Always one on station</h3>
        <p class="tz-line">Harbors, coasts, shipping lanes, pipelines and search areas, watched around the clock by a small crew.</p>
        <span class="tz-go">See the relay <span aria-hidden="true">&rarr;</span></span>
      </a>
    </article>
    <article class="tz">
      <img class="tz-media tz-still" src="{F}/explode-end.jpg" alt="" loading="lazy" aria-hidden="true">
      <div class="tz-shade" aria-hidden="true"></div>
      <a class="tz-copy" href="/field-kit.html" data-reveal>
        <p class="tz-n">04 <span>Field kit</span></p>
        <h3>Two people. No tools.</h3>
        <p class="tz-line">Five modules that two people can carry, locked by pins and checked by the software. Cases to takeoff in under thirty minutes, target.</p>
        <span class="tz-go">See it come apart <span aria-hidden="true">&rarr;</span></span>
      </a>
    </article>
  </section>
  <section class="soft" id="gap" aria-labelledby="soft-h">
    <div class="soft-in">
      <div class="soft-head">
        <h2 id="soft-h" data-reveal>Flown by Galleion <span>before it ever leaves the ground</span></h2>
        <p class="lead" data-reveal>Galleion is the Umanah Systems Group software where FREGATA is designed, simulated, flown and kept: the hover-to-wing transition, the fence it will not cross, ground control, relief planning and a signed record of every sortie.</p>
      </div>
      <div class="soft-shots">
        <figure class="wipe soft-wide" data-wipe><img src="{F}/sys-power.jpg" width="1920" height="1080" loading="lazy" alt="FREGATA seen through its skin, the two diesels and generators lit in gold"><figcaption><strong>Power</strong> Two heavy-fuel diesels, sized in Galleion.</figcaption></figure>
        <figure class="wipe" data-wipe><img src="{F}/sys-wiring-960.jpg" width="960" height="540" loading="lazy" alt="FREGATA seen through its skin, the wiring spine lit from the body to every motor"><figcaption><strong>Wiring</strong> One spine to all ten motors.</figcaption></figure>
        <figure class="wipe" data-wipe><img src="{F}/sys-eyes-960.jpg" width="960" height="540" loading="lazy" alt="FREGATA seen through its skin, the sensor ball under the nose lit in gold"><figcaption><strong>Eyes</strong> Day and thermal cameras under the nose.</figcaption></figure>
      </div>
    </div>
  </section>
'''
    out += close("Keep watch. Around the clock.", pic=f"{S}/hover_34.webp")
    return out + FOOT


def fregata():
    out = head("FREGATA &middot; Ravionics",
               "FREGATA: an unarmed, uncrewed tilt-wing aircraft with a 20 ft wing and ten electric propellers, designed for a full day on watch.",
               "pg-fregata", "/fregata.html")
    out += page_head("Named for the bird<br><span>that barely lands.</span>",
                     "The frigatebird stays aloft over open sea for days on a long, efficient wing. FREGATA is built on the same idea: lift off without a runway, then ride a long wing for hours while ten small propellers rest.")
    out += loop_show("turn", "Ready to lift", "Wing on edge, ten propellers pointing at the sky, three legs on the pad. No runway, no catapult, no net.",
                     "FREGATA turning slowly on its pad, wing on edge and ready to lift")
    out += tour("views", 640, "One aircraft.<br><span>Six views.</span>",
                [("Front", "A long, thin wing with upturned tips, and the sensor ball under the nose."),
                 ("Ready", "Wing and tail on edge. All ten propellers lift together."),
                 ("Transition", "Wing and tail tilt forward together while the body stays level."),
                 ("Cruise", "Wing flat. Eight propellers fold away; the two at the wingtips pull."),
                 ("From above", "Twenty feet of wing and a slim body built around the fuel."),
                 ("From behind", "A tail crossbar with two propellers that tilts with the wing.")],
                [(f"{S}/hover_front.webp", "FREGATA from the front, on its pad"),
                 (f"{S}/hover_34.webp", "FREGATA ready to lift, wing on edge"),
                 (f"{S}/transition_34.webp", "FREGATA in transition, wing half tilted"),
                 (f"{S}/cruise_34.webp", "FREGATA in cruise, wing flat"),
                 (f"{S}/cruise_top.webp", "FREGATA in cruise seen from above"),
                 (f"{S}/rear.webp", "FREGATA from behind, the tail crossbar and its two propellers")])
    out += f'''  <section class="cinema" id="orbit" aria-labelledby="orbit-h">
    <div class="wrap">
      <div class="tech-head">
        <h2 id="orbit-h" data-reveal>All the way round</h2>
        <p data-reveal>In cruise, from every side. The wingtip propellers turn; the other eight lie folded flat against their pods.</p>
      </div>
      <div class="reel" data-reveal>
        <figure>
          <video class="spin-film loop" muted loop playsinline preload="none" poster="{F}/orbit.jpg" aria-label="Concept animation: the camera circles FREGATA in cruise on a dark stage"><source src="{F}/orbit-m.mp4" type="video/mp4" media="(max-width: 760px)"><source src="{F}/orbit.mp4" type="video/mp4"></video>
        </figure>
      </div>
    </div>
  </section>
'''
    out += table("fr-t", "FREGATA in numbers", "Design goals and planning estimates from Ravionics sizing in Galleion.", "FREGATA",
                 [("Wingspan", "Long wing with upturned winglets", "20 ft"),
                  ("Propellers", "Four on each wing, two on the tail", "10, electric"),
                  ("Turning in cruise", "The two at the wingtips", "2"),
                  ("On station", "Long, slow loiter on the wing", "24 h target"),
                  ("Runway", "Lifts straight up like a helicopter", "None"),
                  ("Power", "Heavy-fuel diesels and a battery", "Hybrid electric"),
                  ("Field assembly", "Five modules, two people, no tools", "Under 30 min, target"),
                  ("Weapons", "Surveillance and awareness only", "None, ever")],
                 "Design goals and estimates, not measurements.")
    out += duo([("/technology.html", f"{F}/xray-end.jpg", "FREGATA seen through its skin, engines, battery and wiring glowing", "Technology", "See inside", "Two diesels, a battery, ten motors and one wiring spine, lit up one system at a time.", "Technology"),
                ("/field-kit.html", f"{F}/explode-end.jpg", "FREGATA pulled apart into its five modules", "Field Kit", "Five modules, two people", "It comes apart for the case and clicks back together in the field.", "Field Kit")])
    out += close("Built to stay up.", pic=f"{S}/cruise_34.webp")
    return out + FOOT


SYS = [("power", "Power", "Two small heavy-fuel diesels turn generators. They fly the aircraft in cruise and top up the battery."),
       ("battery", "Battery", "Covers takeoff, landing and the transition, the few minutes when power demand peaks."),
       ("fuel", "Fuel", "One tank in the middle of the body, on the same heavy fuel the ship already carries."),
       ("brain", "Flight computer", "Autopilot, safety checks and the radio link, with a backup that takes over on its own."),
       ("eyes", "Sensor ball", "A swappable pod under the nose with day and thermal cameras, looking down and out to sea."),
       ("wiring", "Wiring spine", "Power and data along one spine to all ten motors, with blind-mate plugs at every module joint.")]


def technology():
    out = head("Technology &middot; Ravionics",
               "Inside FREGATA: hybrid diesel-electric power, a battery for hover, ten electric motors, a flight computer and one wiring spine.",
               "pg-tech", "/technology.html")
    out += page_head("One wing.<br><span>Three ways to fly.</span>",
                     "The body stays level the whole time. The wing and the tail crossbar turn together, from pointing at the sky to lying flat, and the flight software holds the aircraft steady through every degree.")
    out += scrub("xray", "xray", 620, "Look through<br><span>the skin</span>",
                 "the skin of FREGATA fades to a gold outline, showing the two diesels and generators, the fuel tank, the battery, the flight computer and the blue wiring spine to every motor",
                 [("0-0.3", "Outside"), ("0.3-0.65", "Through"), ("0.65-1.01", "Inside")],
                 [("0.02-0.29", "01 &middot; Outside", "A smooth, sealed body", "Graphite skin, gold trim and nothing hanging in the wind but the sensor ball."),
                  ("0.3-0.64", "02 &middot; Through", "The skin falls away", "What is left is everything that keeps it up: power, fuel, battery, brain and the wires between them."),
                  ("0.65-1.01", "03 &middot; Inside", "Built around the fuel", "The tank sits at the balance point, so the aircraft stays trimmed as it burns a day of fuel.")])
    out += tour("systems", 640, "Six systems.<br><span>One aircraft.</span>",
                [(n, p) for _, n, p in SYS],
                [(f"{F}/sys-{k}.jpg", f"FREGATA seen through its skin, the {n.lower()} lit in gold") for k, n, _ in SYS])
    out += services("modes-h", "Three ways to fly", [
        ("Lift", "Wing on edge, all ten propellers pointing at the sky. The battery helps the diesels through the few hungry minutes of vertical flight.", "Off a ship's deck or a pad the size of a parking space."),
        ("Transition", "Wing and tail tilt forward together as speed builds, until the wing carries the weight.", "The hardest moment for a tilt-wing, and the one we simulate most."),
        ("Loiter", "Eight propellers fold flat against their pods. The two at the wingtips pull FREGATA along on a few kilowatts, and the diesels recharge the battery.", "Hours of this is a day on watch."),
        ("Motor out", "Ten propellers share the load. If one stops, the others make up the difference and the aircraft heads for its recovery point.", "Checked in simulation for every motor.")])
    out += f'''  <section class="parts-sec" aria-labelledby="cut-h">
    <div class="parts-head">
      <h2 id="cut-h" data-reveal>Cutaways</h2>
      <p data-reveal>Hover or tap a picture to see inside.</p>
    </div>
    <div class="parts-grid">
      <figure class="part-card" data-reveal><img src="{S}/hover_34-900.webp" alt="FREGATA ready to lift" width="900" height="506" loading="lazy"><img class="cut" src="{F}/sys-battery-960.jpg" alt="" aria-hidden="true" width="960" height="540" loading="lazy"><button class="cut-btn" type="button" aria-pressed="false">See inside</button><figcaption><h3>Hover</h3><p>The battery does the heavy work for a few minutes.</p><p class="spec">Lift, transition, landing</p></figcaption></figure>
      <figure class="part-card" data-reveal><img src="{S}/cruise_34-900.webp" alt="FREGATA in cruise" width="900" height="506" loading="lazy"><img class="cut" src="{F}/sys-power-960.jpg" alt="" aria-hidden="true" width="960" height="540" loading="lazy"><button class="cut-btn" type="button" aria-pressed="false">See inside</button><figcaption><h3>Cruise</h3><p>The diesels fly it and top up the battery.</p><p class="spec">Hours on station</p></figcaption></figure>
      <figure class="part-card" data-reveal><img src="{S}/hover_front-900.webp" alt="FREGATA from the front" width="900" height="506" loading="lazy"><img class="cut" src="{F}/sys-eyes-960.jpg" alt="" aria-hidden="true" width="960" height="540" loading="lazy"><button class="cut-btn" type="button" aria-pressed="false">See inside</button><figcaption><h3>Eyes</h3><p>Day and thermal cameras under the nose, swappable in the field.</p><p class="spec">Looking down and out to sea</p></figcaption></figure>
    </div>
  </section>
'''
    out += close("Simulate it first. Then fly it.", href="/missions.html", btn="See the missions")
    return out + FOOT


def missions():
    out = head("Missions &middot; Ravionics",
               "FREGATA keeps watch over harbors, coasts, shipping lanes, pipelines and search areas around the clock, relieved automatically. Surveillance only, never armed.",
               "pg-missions", "/missions.html")
    out += page_head("Always one<br><span>on station.</span>",
                     "A relief aircraft arrives before the one on station turns for home, so the picture never goes dark. Surveillance and awareness only: FREGATA carries no weapons.")
    out += loop_show(f"{S}/cruise_top.webp", "A day on watch", "Long, slow orbits on the wing, two propellers turning, the cameras looking down.", "FREGATA in cruise seen from above, its long wing flat", still=True)
    bars = [("FRG-01", [(0, 9.5, "on"), (9.5, 10.5, "tr"), (19, 20, "tr"), (20, 24, "on")]),
            ("FRG-02", [(8, 9, "tr"), (9, 18, "on"), (18, 19, "tr")]),
            ("FRG-03", [(17, 18, "tr"), (18, 24, "on")])]
    rows = ""
    for name, segs in bars:
        s = "".join(f'<i class="{c}" style="--a:{a / 24 * 100:.2f}%;--b:{(b - a) / 24 * 100:.2f}%"></i>' for a, b, c in segs)
        rows += f'        <div class="relay-row"><b>{name}</b><span class="relay-track">{s}</span></div>\n'
    out += f'''  <section class="relay-sec" id="markets" aria-labelledby="relay-h">
    <div class="wrap">
      <div class="tech-head">
        <h2 id="relay-h" data-reveal>One day, three aircraft</h2>
        <p data-reveal>An illustrative relay plan. Galleion schedules each relief so the next aircraft is on station before the last one leaves.</p>
      </div>
      <div class="relay" role="img" aria-label="Relay plan: three aircraft take turns on station across 24 hours, overlapping at each handover, so coverage never breaks">
{rows}        <div class="relay-row relay-cov"><b>Coverage</b><span class="relay-track"><i class="on" style="--a:0%;--b:100%"></i></span></div>
        <div class="relay-axis" aria-hidden="true"><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>24:00</span></div>
        <p class="relay-key"><span class="k-on">On station</span><span class="k-tr">Transit</span><span>Coverage: unbroken</span></p>
      </div>
    </div>
  </section>
'''
    out += services("use-h", "Where it keeps watch", [
        ("Ports and coasts", "Maritime awareness over harbors, approaches and shipping lanes, day and night.", "From a ship's deck or a pad ashore."),
        ("Pipelines and power", "Long, steady patrols of lines, sites and corridors far from any runway.", "One crew watches hundreds of kilometres."),
        ("Search and recovery", "Hours over a search area instead of minutes, with the thermal camera looking for people in the water.", "Relieved before it has to turn home."),
        ("Borders and wide areas", "A persistent view of large areas with a small crew.", "The goal is 3 to 4 people per shift for the whole relay.")])
    modes = [("auto", "Autonomous", "It flies the plan.", "Takeoff, transition, the route, the orbit and the landing are flown by the aircraft. The crew watches, approves and steps in only when they choose to."),
             ("guided", "Guided", "Point, and it goes.", "Tap a new orbit, a new heading or a new height. The aircraft works out how to get there safely and tells you before it does."),
             ("manual", "Manual", "Hands on the sticks.", "A pilot can always take direct control. If the link drops, the aircraft takes back over, holds safe and heads for its planned recovery.")]
    tabs = "".join(f'<button role="tab" id="t-{k}" aria-controls="p-{k}" aria-selected="{"true" if i == 0 else "false"}"{"" if i == 0 else " tabindex=\"-1\""}>{n}</button>' for i, (k, n, _, _) in enumerate(modes))
    panels = "\n".join(f'        <div class="mode-panel" role="tabpanel" id="p-{k}" aria-labelledby="t-{k}"{"" if i == 0 else " hidden"}><h3>{h}</h3><p>{p}</p></div>' for i, (k, _, h, p) in enumerate(modes))
    out += f'''  <section class="modes-sec" aria-labelledby="ctl-h">
    <img class="modes-bg" src="{S}/transition_34.webp" alt="" width="1920" height="1080" loading="lazy" aria-hidden="true">
    <div class="wrap">
      <h2 id="ctl-h" data-reveal>Autonomous by default.<br><span>Yours when you want it.</span></h2>
      <div class="modes" data-tabs data-reveal>
        <div class="mode-tabs" role="tablist" aria-label="Control modes">{tabs}</div>
{panels}
      </div>
    </div>
  </section>
'''
    out += services("safe-h", "Built to be trusted", [
        ("A fence it will not cross", "The approved area is loaded before takeoff and checked many times a second.", ""),
        ("A safe place to land", "If something fails, it chooses the clearest spot within reach.", ""),
        ("A motor out is not the end", "Ten propellers share the load.", ""),
        ("Never armed", "FREGATA carries cameras and a radio. It has no weapons and never will.", "")])
    out += close("Never goes dark.", pic=f"{S}/cruise_34.webp")
    return out + FOOT


def field_kit():
    out = head("Field Kit &middot; Ravionics",
               "FREGATA travels in cases and comes apart into five modules two people can carry. Cases to takeoff in under 30 minutes, target.",
               "pg-kit", "/field-kit.html")
    out += page_head("Two people.<br><span>No tools.</span>",
                     "FREGATA travels in cases and comes apart into five modules, each light enough for two people to carry. Pins lock them, plugs mate blind, and every module tells the software who it is.")
    out += scrub("explode", "explode", 560, "Five modules<br><span>that click together</span>",
                 "FREGATA pulls apart into its five modules: the body, the left and right wings, the tail and the sensor ball, then waits in pieces",
                 [("0-0.3", "Whole"), ("0.3-0.75", "Apart"), ("0.75-1.01", "Five")],
                 [("0.02-0.29", "01 &middot; Whole", "One aircraft", "Ready to fly, with every joint locked and every plug mated."),
                  ("0.3-0.74", "02 &middot; Apart", "Pins out, pieces off", "The wings come off sideways, the tail lifts away and the sensor ball drops out of the nose."),
                  ("0.75-1.01", "03 &middot; Five", "Each one in a case", "Body, left wing, right wing, tail and sensor ball. Each module knows its own ID, calibration and hours.")])
    out += services("kit-h", "Cases to takeoff", [
        ("1. Open the cases", "Body, left wing, right wing, tail and sensor ball.", ""),
        ("2. Click the modules together", "Tool-free locking pins and blind-mate power and data plugs.", ""),
        ("3. Let the software check", "Each module's ID, calibration and hours are read and verified. A copied or changed module is refused.", ""),
        ("4. Preflight goes green, lift off", "Motors, power, fence and link are all checked before the first propeller turns.", "Under 30 minutes, target.")])
    out += loop_show(f"{S}/hover_front.webp", "Three legs, no wheels", "Flat pads that sit on a deck or on rough ground, folding into the body in flight.", "FREGATA from the front on its three legs", still=True)
    out += f'''  <section class="gallery" aria-labelledby="kit-g">
    <div class="parts-head">
      <h2 id="kit-g" data-reveal>From every side</h2>
      <p data-reveal>The same model the films are rendered from.</p>
    </div>
    <div class="gal-grid">
      <figure data-reveal><img src="{F}/explode-end.jpg" width="1920" height="1080" loading="lazy" alt="FREGATA apart in five modules"><figcaption>Apart, five modules.</figcaption></figure>
      <figure data-reveal><img src="{F}/explode.jpg" width="1920" height="1080" loading="lazy" alt="FREGATA assembled"><figcaption>Together, ready for preflight.</figcaption></figure>
      <figure data-reveal><img src="{S}/rear.webp" width="1920" height="1080" loading="lazy" alt="FREGATA from behind"><figcaption>The tail crossbar comes off as one piece.</figcaption></figure>
      <figure data-reveal><img src="{S}/cruise_top.webp" width="1920" height="1080" loading="lazy" alt="FREGATA from above"><figcaption>Each wing half is one module.</figcaption></figure>
    </div>
  </section>
'''
    out += close("Out of the case. Into the air.")
    return out + FOOT


def about():
    out = head("About &middot; Ravionics",
               "Ravionics is a Umanah Systems Group aircraft program building persistent, unarmed aerial surveillance, designed and flown in Galleion.",
               "pg-about", "/about.html")
    out += page_head("Where it<br><span>stands.</span>",
                     "Ravionics is a Umanah Systems Group aircraft program building persistent, unarmed aerial surveillance for governments, coast and port authorities and infrastructure operators.")
    out += '''  <section class="k-statement" aria-label="Why Ravionics">
    <p class="k-big" data-words>The hard part of watching a coast is not seeing. It is staying. Ravionics builds for the long watch: an aircraft that needs no runway, rides its wing for hours, and a relay that hands over before anyone has to turn for home.</p>
  </section>
'''
    out += services("now-h", "Where we are", [
        ("Assessed awardable", "Tradewinds Solutions Marketplace and DARPA ERIS assessed the Ravionics proposals as awardable.", ""),
        ("In simulation", "The design, the flight software and the ground control all run in simulation today. No flight has been made yet.", "Every figure on this site is a design goal or an estimate."),
        ("Next", "Bench tests of the hybrid power and the motors, then hardware in the loop, then flight trials.", ""),
        ("Resources", 'The <a href="/ravionics-infographic.html">Gap Map</a> and the <a href="/ravionics-cost-model.html">Coverage Model</a>.', "")])
    out += duo([("https://galleion.umanahsystems.com/", f"{F}/sys-brain.jpg", "FREGATA seen through its skin, the flight computer lit in gold", "Galleion", "The software is its other half", "Design, simulation, flight software, ground control, relief planning and module records, in one place.", "Explore Galleion"),
                ("/contact.html", f"{S}/hover_34.webp", "FREGATA ready to lift", "Contact", "Request a briefing", "For agencies with a watch to keep, operators of coasts, ports and pipelines, and investors.", "Contact")])
    out += close("Keep a watch with us.")
    return out + FOOT


def contact():
    out = head("Contact &middot; Ravionics",
               "Request a FREGATA briefing from Ravionics: for agencies, coast, port and pipeline operators, and investors.",
               "pg-contact", "/contact.html")
    opts = ["Government / Defense Procurement", "Investment Inquiry", "Operational Partnership", "Energy / Infrastructure Partnership", "General Inquiry"]
    o = "".join(f'<option>{x}</option>' for x in opts)
    out += f'''  <section class="contact-sec" id="contact" aria-labelledby="ph-h">
    <img class="contact-bg" src="{S}/hover_front.webp" alt="" width="1920" height="1080" aria-hidden="true">
    <div class="contact-in">
      <div class="contact-copy">
        <h1 id="ph-h">Request<br><span>a briefing.</span></h1>
        <p class="lead">For agencies with a watch to keep, operators of coasts, ports and pipelines, and investors who see what a full day on station means at fleet scale. Tell us about the mission.</p>
      </div>
      <form class="cform" id="contactForm" action="https://formspree.io/f/xeelnkqj" method="POST">
        <label>Full name<input name="name" autocomplete="name" required></label>
        <label>Organization<input name="organization" autocomplete="organization"></label>
        <label>Email<input type="email" name="email" autocomplete="email" required></label>
        <label>Inquiry type<select name="inquiry_type" required><option value="">Select one</option>{o}</select></label>
        <label class="wide">Message<textarea name="message" rows="5" required></textarea></label>
        <input type="hidden" name="_next" value="https://ravionics.com/thanks.html">
        <div class="wide cform-foot"><button class="btn btn-glass btn-big" type="submit">Send message <span aria-hidden="true">&rarr;</span></button><p class="cform-status" data-form-status role="status"></p></div>
      </form>
    </div>
  </section>
'''
    return out + FOOT


def notfound():
    out = head("Not found &middot; Ravionics", "This page is not on station.", "pg-404", "")
    out += page_head("Not on<br><span>station.</span>", 'This page has flown off. Try the <a href="/">home page</a> or <a href="/fregata.html">meet FREGATA</a>.')
    return out + FOOT


PAGES = {"index.html": index, "fregata.html": fregata, "technology.html": technology, "missions.html": missions,
         "field-kit.html": field_kit, "about.html": about, "contact.html": contact, "404.html": notfound}

if __name__ == "__main__":
    for name, fn in PAGES.items():
        (ROOT / name).write_text(fn())
        print("wrote", name)
