---
layout: page
title: Jobs Leading Research Computing Teams
permalink: /jobs
bgColor: "#1E63BD"
bgImg: "/assets/images/pages/jobs.png"
---

Research Computing is a tough field that combines the challenges of many disciplines, and managing research computing teams is a specialty. Here I keep track of jobs in that specialty; highlights are posted weekly in the Research Computing Teams [Newsletter](https://www.researchcomputingteams.org/archive)

Email me a job link to have it added to the job board for free; listings will appear once they have been approved for relevance and as non-spam.  Jobs should have, as a responsibility, the managing of projects or products, or the leading or mentoring of people.

<div id="jobs-container">
  <div class="jobs-filters" style="margin-bottom: 1.5rem;">
    <input type="text" id="job-search" placeholder="Search jobs..."
           style="padding: 0.5rem; width: 100%; max-width: 400px; margin-bottom: 1rem; border: 1px solid #ccc; border-radius: 4px;">

    <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem;">
      <select id="filter-sector" style="padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
        <option value="">All Sectors</option>
      </select>

      <select id="filter-technical" style="padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
        <option value="">All Technical Areas</option>
      </select>

      <select id="filter-role" style="padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
        <option value="">All Role Types</option>
      </select>

      <select id="filter-domain" style="padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
        <option value="">All Domains</option>
      </select>
    </div>
  </div>

  <div id="jobs-count" style="margin-bottom: 1rem; color: #666;"></div>

  <div id="jobs-list"></div>

  <div id="jobs-loading" style="text-align: center; padding: 2rem;">
    Loading jobs...
  </div>

  <div id="jobs-error" style="display: none; color: #c00; padding: 1rem; background: #fee; border: 1px solid #c00; border-radius: 4px;">
    Error loading jobs. Please try again later.
  </div>
</div>

<style>
  .job-item {
    border: 1px solid #ddd;
    padding: 1.5rem;
    margin-bottom: 1rem;
    border-radius: 4px;
    background: white;
  }

  .job-item:hover {
    border-color: #1E63BD;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .job-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .job-title a {
    color: #1E63BD;
    text-decoration: none;
  }

  .job-title a:hover {
    text-decoration: underline;
  }

  .job-company {
    font-size: 1rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .job-location {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
  }

  .job-description {
    color: #444;
    line-height: 1.6;
    margin-bottom: 0.75rem;
  }

  .job-categories {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .job-category {
    background: #e8f4fd;
    color: #1E63BD;
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
    font-size: 0.85rem;
  }

  .job-posted {
    color: #999;
    font-size: 0.85rem;
    margin-top: 0.5rem;
  }
</style>

<script>
(function() {
  // Adjust this path to where jobs.json is hosted
  const DATA_URL = '{{ site.baseurl }}/assets/data/jobs.json';

  let allJobs = [];
  let filteredJobs = [];

  // Load jobs data
  async function loadJobs() {
    try {
      const response = await fetch(DATA_URL);
      if (!response.ok) throw new Error('Failed to fetch jobs');

      const data = await response.json();
      allJobs = data.jobs;
      filteredJobs = allJobs;

      populateFilters();
      renderJobs();

      document.getElementById('jobs-loading').style.display = 'none';
    } catch (error) {
      console.error('Error loading jobs:', error);
      document.getElementById('jobs-loading').style.display = 'none';
      document.getElementById('jobs-error').style.display = 'block';
    }
  }

  // Populate filter dropdowns
  function populateFilters() {
    const categoryTypes = {
      sector: new Set(),
      technical: new Set(),
      role: new Set(),
      domain: new Set()
    };

    allJobs.forEach(job => {
      Object.entries(job.categoryTypes).forEach(([type, categories]) => {
        if (categoryTypes[type]) {
          categories.forEach(cat => categoryTypes[type].add(cat));
        }
      });
    });

    // Populate each filter
    Object.entries(categoryTypes).forEach(([type, categories]) => {
      const select = document.getElementById(`filter-${type}`);
      Array.from(categories).sort().forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        select.appendChild(option);
      });
    });
  }

  // Filter jobs
  function filterJobs() {
    const searchTerm = document.getElementById('job-search').value.toLowerCase();
    const sectorFilter = document.getElementById('filter-sector').value;
    const technicalFilter = document.getElementById('filter-technical').value;
    const roleFilter = document.getElementById('filter-role').value;
    const domainFilter = document.getElementById('filter-domain').value;

    filteredJobs = allJobs.filter(job => {
      // Text search
      if (searchTerm) {
        const searchableText = `${job.title} ${job.company} ${job.location} ${job.description}`.toLowerCase();
        if (!searchableText.includes(searchTerm)) return false;
      }

      // Category filters
      if (sectorFilter && !(job.categoryTypes.sector || []).includes(sectorFilter)) return false;
      if (technicalFilter && !(job.categoryTypes.technical || []).includes(technicalFilter)) return false;
      if (roleFilter && !(job.categoryTypes.role || []).includes(roleFilter)) return false;
      if (domainFilter && !(job.categoryTypes.domain || []).includes(domainFilter)) return false;

      return true;
    });

    renderJobs();
  }

  // Render jobs list
  function renderJobs() {
    const container = document.getElementById('jobs-list');
    const countDiv = document.getElementById('jobs-count');

    countDiv.textContent = `Showing ${filteredJobs.length} of ${allJobs.length} jobs`;

    if (filteredJobs.length === 0) {
      container.innerHTML = '<p style="text-align: center; padding: 2rem; color: #666;">No jobs match your filters.</p>';
      return;
    }

    container.innerHTML = filteredJobs.map(job => {
      const postedDate = job.posted ? new Date(job.posted).toLocaleDateString() : '';

      return `
        <div class="job-item" id="job-${job.id}">
          <div class="job-title">
            <a href="${job.url}" target="_blank" rel="noopener">${job.title}</a>
          </div>
          <div class="job-company">${job.company}</div>
          ${job.location ? `<div class="job-location">📍 ${job.location}</div>` : ''}
          ${job.description ? `<div class="job-description">${job.description}</div>` : ''}
          ${job.categories.length ? `
            <div class="job-categories">
              ${job.categories.map(cat => `<span class="job-category">${cat}</span>`).join('')}
            </div>
          ` : ''}
          ${postedDate ? `<div class="job-posted">Posted: ${postedDate}</div>` : ''}
        </div>
      `;
    }).join('');
  }

  // Event listeners
  document.getElementById('job-search').addEventListener('input', filterJobs);
  document.getElementById('filter-sector').addEventListener('change', filterJobs);
  document.getElementById('filter-technical').addEventListener('change', filterJobs);
  document.getElementById('filter-role').addEventListener('change', filterJobs);
  document.getElementById('filter-domain').addEventListener('change', filterJobs);

  // Load jobs on page load
  loadJobs();
})();
</script>
