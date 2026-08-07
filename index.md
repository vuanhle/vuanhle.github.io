---
layout: homepage
title: Vu-Anh Le | Machine Learning Theory
description: Vu-Anh Le researches machine learning theory.
---

<figure class="hero-figure">
  <img src="/assets/img/machine-learning-theory-hero.webp" alt="Manga illustration explaining the foundations of machine learning theory" width="1536" height="1024" loading="eager" decoding="async" fetchpriority="high">
  <figcaption>Machine Learning Theory.</figcaption>
</figure>

<section class="intro-panel">
  <p class="eyebrow">Machine Learning Theory</p>
  <h1>Advance computational learning</h1>
  <p class="hero-role-line" aria-live="polite"><span class="hero-role-prefix">I am a...</span><span data-rotating-role>wanna-be computer scientist</span></p>
  <style>
    .hero-role-line { height: 2.9em; min-height: 2.9em; margin: -2px 0 17px; overflow: hidden; color: #8bd6a8; font-size: 1.5em; font-style: italic; font-weight: 600; line-height: 1.45; }
    .hero-role-prefix { display: block; }
    .hero-role-line [data-rotating-role] { display: block; transition: opacity .22s ease; }
    .hero-role-line [data-rotating-role].is-changing { opacity: 0; }
    @media (prefers-reduced-motion: reduce) { .hero-role-line [data-rotating-role] { transition: none; } }
  </style>
  <script>
    (() => {
      const role = document.querySelector('[data-rotating-role]');
      if (!role) return;
      const roles = [
        'wanna-be computer scientist',
        'amateur historian',
        'manga addict'
      ];
      let index = 0;
      window.setInterval(() => {
        role.classList.add('is-changing');
        window.setTimeout(() => {
          index = (index + 1) % roles.length;
          role.textContent = roles[index];
          role.classList.remove('is-changing');
        }, 220);
      }, 2000);
    })();
  </script>
  <p class="lead">I am Anh, a Ph.D. student in Computer Science at the University of Virginia and a researcher focused on machine learning theory.</p>
  <div class="research-interest-grid" aria-label="Research interests">
    <article class="research-interest-card">
      <h2>Constrained Learning</h2>
      <p>Studying which outputs are admissible and developing learning and generative methods that satisfy scientific, structural, physical, or safety requirements.</p>
    </article>
    <article class="research-interest-card">
      <h2>Closed-Loop Learning</h2>
      <p>Investigating how learning systems should select observations, interventions, and experiments to support efficient causal discovery and scientific reasoning.</p>
    </article>
    <article class="research-interest-card">
      <h2>Assurance of the Learning Systems</h2>
      <p>Developing theoretical guarantees, verification methods, and uncertainty-aware mechanisms for determining when the outputs of autonomous learning systems are reliable.</p>
    </article>
  </div>
  <div class="cta-row">
    <a class="button-link button-link-strong" href="/research/">Research</a>
    <a class="button-link button-link-strong" href="mailto:mcu7uh@virginia.edu">Contact Me</a>
  </div>
</section>

<div class="logo-strip" aria-label="Affiliations and experience">
  <img src="/assets/img/logo-uva.webp" alt="University of Virginia logo" loading="lazy" decoding="async">
  <img src="/assets/img/logo-uva-cs.webp" alt="University of Virginia Department of Computer Science logo" loading="lazy" decoding="async">
  <img src="/assets/img/logo-mit.webp" alt="Massachusetts Institute of Technology logo" loading="lazy" decoding="async">
  <img src="/assets/img/logo-mit-ccse.webp" alt="MIT Center for Computational Science and Engineering logo" loading="lazy" decoding="async">
  <img src="/assets/img/logo-mit-nse.webp" alt="MIT Department of Nuclear Science and Engineering logo" loading="lazy" decoding="async">
</div>

<section>
  <h2>Experience</h2>
  <p>I am shaping my career around research in machine learning theory.</p>
  <div class="experience-list">
    <article class="experience-item">
      <img src="/assets/img/logo-uva.webp" alt="University of Virginia logo" loading="lazy" decoding="async">
      <div>
        <p class="eyebrow">Aug 2026 - Present</p>
        <h3>Doctoral Student, University of Virginia</h3>
        <p>Conducting Ph.D. research on machine learning theory.</p>
        <p>Currently under 1st-year research rotations.</p>
      </div>
    </article>
    <article class="experience-item">
      <img src="/assets/img/logo-mit.webp" alt="MIT logo" loading="lazy" decoding="async">
      <div>
        <p class="eyebrow">Jun 2024 - Aug 2024</p>
        <h3>MIT Summer Research Program Intern, Massachusetts Institute of Technology</h3>
        <p>Developed quantitative models and extended PyLENM, an open-source environmental informatics package.</p>
        <p>Advised by <a href="https://cse.mit.edu/people/haruko-wainwright/">Prof. Haruko Wainwright</a> (MIT's Center for Computational Science and Engineering; Department of Nuclear Science and Engineering), PI at <a href="https://sites.google.com/mit.edu/h-wainwrights-group/group">Haruko Group</a>.</p>
      </div>
    </article>
  </div>
</section>

<section>
  <h2>Publications</h2>
  <p>My live publication record is maintained on <a href="https://scholar.google.com/citations?user=v3_DrtcAAAAJ&hl=en">Google Scholar</a>.</p>
</section>

<section>
  <h2>News</h2>
  <ul class="tight-list">
    <li><strong>Aug. 2026:</strong> Starting my Ph.D. in Computer Science at the University of Virginia as part of the RAISE group.</li>
    <li><strong>2025:</strong> RN-F appears in the ICML 2025 DIG-BUGS workshop program.</li>
  </ul>
</section>

<section class="beyond-research">
  <h2>Beyond Research</h2>
  <p>Outside of academia, I'm a big fan of history, comics, and travelling.</p>
</section>
