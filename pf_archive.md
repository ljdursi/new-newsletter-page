---
layout: pagefind_archive
title: PageFind Archive Search
permalink: /pf_archive
---

<!-- markdownlint-disable MD033 -->

Enter text below to search back issues

<div id="pf2search"></div>
<script type="type/javascript">
    console.log('Adding eventlistner');
    window.addEventListener('DOMContentLoaded', (event) => {
        new PagefindUI({ element: "#pf2search", showSubResults: true, pageSize: 20, bundlePath: "/assets/pagefind/" });
    });
</script>

<br/><br/>

<ol class="archive-issue">
{% for post in site.newsletter_issues reversed %}
    <li><a href="{{ post.url | remove: '.html'}}">{{ post.title }}</a>{% if post.subtitle %} - {{ post.subtitle }}{% endif %}</li>
{% endfor %}
</ol>
