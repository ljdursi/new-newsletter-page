---
title: Items by Tag
permalink: /items/tags/
layout: page
---

{% for tag in site.tags %}
  {% assign t = tag | first %}
  {% assign posts = tag | last %}
  <div class="blog-list-container hidden" id="{{ t }}-container">
      {% for post in posts %}
        {% if post.tags contains t %}
        <section class="blog-entries">
          <h1 class="post-title"><a href="{% if site.baseurl == "/" %}{{ post.url }}{% else %}{{ post.url | prepend: site.baseurl }}{% endif %}">{{post.title}}</a></h1>
          <div class="blog-data">

            {% if post.tags.size > 0 %}
              <ul class="tags">
                {% for tag in post.tags %}
                    <li><a href="{% if site.baseurl == "/" %}/tag.html#{{ tag }}{% else %}{{ site.baseurl }}/tag.html#{{ tag }}{% endif %}" onclick="location.reload();" class="tag">{{ tag }}</a></li>
                {% endfor %}
              </ul>
            {% endif %}
          </div>

          <p class="post-content">{{ post.content | split:"<!-- more -->" | first | strip_html  |truncatewords: 85 }}</p>
          <a class="read-more" href="{% if site.baseurl == "/" %}{{ post.url }}{% else %}{{ post.url | prepend: site.baseurl }}{% endif %}">Continue...</a>
        </section>

        {% endif %}
      {% endfor %}

      <h1>Tag: <span class="tag-name">{{ t }}</span></h1>
  </div>
{% endfor %}
