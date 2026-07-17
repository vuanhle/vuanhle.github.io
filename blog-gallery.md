---
layout: homepage
title: Blog & Gallery | Vu-Anh Le
description: A stack-library of essays, notes, and visual field logs from Vu-Anh Le across AI research, capital, and deep tech.
permalink: /blog-gallery/
---

# Blog & Gallery

<p class="lead">A stack library for research notes, investment thinking, and visual fragments from the frontier between AI, science, and company building.</p>

{% include subscribe-form.html id="blog-gallery" %}

<section class="stack-library" aria-label="Blog and gallery stack library">
  {% for post in site.posts %}
  <a class="stack-card" href="{{ post.url | relative_url }}" aria-label="Open {{ post.title }}">
    <img src="{{ post.thumbnail | default: '/assets/img/frontier-data-compute-ai.webp' | relative_url }}" alt="{{ post.thumbnail_alt | default: post.title }}" loading="lazy" decoding="async">
    <span class="stack-index">{{ forloop.index | prepend: '00' | slice: -2, 2 }}</span>
    <div class="stack-card-body">
      <p class="eyebrow">{{ post.category_label | default: 'Field Note' }}</p>
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
    </div>
  </a>
  {% endfor %}
</section>

{% if site.posts.size == 0 %}
<p>No posts are published yet.</p>
{% endif %}
