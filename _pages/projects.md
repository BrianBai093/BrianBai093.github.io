---
layout: page
title: projects
permalink: /projects/
description: Selected projects and case studies.
nav: true
nav_order: 2
display_categories:
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{% assign sorted_projects = site.projects | sort: "importance" %}

{% if sorted_projects.size > 0 %}
{% if page.horizontal %}

<div class="container">
<div class="row row-cols-1 row-cols-md-2">
{% for project in sorted_projects %}
{% include projects_horizontal.liquid %}
{% endfor %}
</div>
</div>
{% else %}
<div class="row row-cols-1 row-cols-md-3">
{% for project in sorted_projects %}
{% include projects.liquid %}
{% endfor %}
</div>
{% endif %}
{% else %}

  <p class="post-description">Projects will appear here after entries are added to the <code>_projects</code> folder.</p>
{% endif %}
</div>
