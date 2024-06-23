---
layout: pagefind_archive
title: Archive Search
permalink: /archive
---

<!-- markdownlint-disable MD033 -->

Enter text below to search back issues

<div id="pf2search"></div>

<br/><br/>

<ol class="archive-issue">
{% for post in site.newsletter_issues reversed %}
    <li><a href="{{ post.url | remove: '.html'}}">{{ post.title }}</a>{% if post.subtitle %} - {{ post.subtitle }}{% endif %}</li>
{% endfor %}
</ol>
