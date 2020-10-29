---
layout: page
title: About
permalink: /about
bgColor: #2c5cae

services:
    items:
        -   icon: meeting
            title: Hiring 
            description: Hiring from outside research, writing job ads, onboarding, the responsibility ladder.
        -   icon: management-1
            title: Managing
            description: One-on-Ones, giving feedback, coaching and training, distributed teams.
        -   icon: meeting-1
            title: Managing upwards
            description: Building and sustaining support for projects, shepharding multi-institution collaborations, communications.
        -   icon: target-1
            title: Career paths
            description: for our team members and ourselves.
        -   icon: degree
            title: R&D computing and academic credit
            description: We always provide people a complete solution focused of any business.
        -   icon: efficiency
            title: Automation and reproducibility
            description: We always provide people a complete solution focused of any business.
        -   icon: graphic
            title: Lifecycle of development
            description: R&D Software planning and development throughout the lifecycle.
        -   icon: benchmark
            title: Grants and Sustainability
            description: We always provide people a complete solution focused of any business.

service:
    icon: meeting
    title: Hiring 
    description: Hiring from outside research, writing job ads, onboarding, the responsibility ladder.
---

Research Computing is a tough field that combines the challenges of many disciplines.

Like IT or commercial software development, we need to deliver real usable tools to support our users; but like research, our projects are often extremely open-ended, with complexity coming not from unvalidated requirements but the uncertaintainty of the new, requiring experimentation and discovery. Like academia, we often work with team members who are trainees, not employees; like nonprofits we are called on to enact real changes with ongoing programmes or products while funded only by budgets dependent on multiple short-term grants.

But while there are many websites and podcasts, newsletters and tutorials, on the bytes and flops and Mbit/s of research computing, there is very little out there on the genuinely hard day-to-day work of designing, building and managing R&D computing teams, projects, and software. Commercial or open-source software development, research, nonprofit, IT, business - our field is too different for advice from those fields to routinely directly carry over, even if there are lessons we can learn from them.

{% include service-item.html 
    title=page.service.title
    description=page.service.description
    icon=page.service.icon
 %}

{% capture services %}{% include services.html items=page.services.items %}{% endcapture %}
{{ services | markdownify }}