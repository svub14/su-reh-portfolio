/* ============================================================
   SITE RENDERING LOGIC — you generally don't need to edit this.
   Edit js/data.js instead to change content.
   ============================================================ */

function mediaPlaceholderHTML() {
  return `
    <div class="media-placeholder">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="3" y="5" width="18" height="14" rx="2"/>
        <circle cx="9" cy="10" r="1.5"/>
        <path d="M3 16l5-5 4 4 3-3 6 6"/>
      </svg>
      <span>Add a photo or video<br>in js/data.js</span>
    </div>`;
}

function firstMediaHTML(project, cssClass) {
  const m = project.media && project.media[0];
  if (!m) return mediaPlaceholderHTML();
  if (m.type === "video") {
    return `<video src="${m.src}" muted loop playsinline autoplay class="${cssClass || ""}"></video>`;
  }
  return `<img src="${m.src}" alt="${escapeHTML(m.caption || project.title)}" class="${cssClass || ""}">`;
}

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function tagsHTML(tags) {
  return (tags || []).map((t) => `<span class="tag">${escapeHTML(t)}</span>`).join("");
}

function projectCardHTML(project) {
  return `
    <article class="project-card" data-project-id="${project.id}">
      <div class="card-media">${firstMediaHTML(project)}</div>
      <div class="card-body">
        <div class="card-tags">${tagsHTML(project.tags)}</div>
        <h3>${escapeHTML(project.title)}</h3>
        <p>${escapeHTML(project.summary || "")}</p>
        <div class="card-meta">${escapeHTML(project.role || "")}${project.year ? " · " + escapeHTML(project.year) : ""}</div>
      </div>
    </article>`;
}

function renderProjectGrid(containerEl, projects) {
  if (!projects.length) {
    containerEl.innerHTML = `<div class="empty-note">No projects yet — add one in <code>js/data.js</code>.</div>`;
    return;
  }
  containerEl.innerHTML = projects.map(projectCardHTML).join("");
  containerEl.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => openProjectModal(card.dataset.projectId));
  });
}

/* ---------------- Modal ---------------- */

let modalEls = null;

function ensureModal() {
  if (modalEls) return modalEls;
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      <button class="modal-close" aria-label="Close">&times;</button>
      <div class="modal-tags"></div>
      <h2></h2>
      <p class="modal-role"></p>
      <div class="modal-media-main"></div>
      <div class="modal-thumbs"></div>
      <div class="modal-body"></div>
    </div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeProjectModal();
  });
  overlay.querySelector(".modal-close").addEventListener("click", closeProjectModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProjectModal();
  });
  modalEls = overlay;
  return overlay;
}

function setMainMedia(container, mediaItem, project) {
  if (!mediaItem) {
    container.innerHTML = mediaPlaceholderHTML();
    return;
  }
  if (mediaItem.type === "video") {
    container.innerHTML = `<video src="${mediaItem.src}" controls></video>`;
  } else {
    container.innerHTML = `<img src="${mediaItem.src}" alt="${escapeHTML(mediaItem.caption || project.title)}">`;
  }
}

function openProjectModal(projectId) {
  const project = PROJECTS.find((p) => p.id === projectId);
  if (!project) return;
  const overlay = ensureModal();

  overlay.querySelector(".modal-tags").innerHTML = tagsHTML(project.tags);
  overlay.querySelector("h2").textContent = project.title;
  overlay.querySelector(".modal-role").textContent = [project.role, project.year].filter(Boolean).join(" · ");

  const mainMediaEl = overlay.querySelector(".modal-media-main");
  const thumbsEl = overlay.querySelector(".modal-thumbs");
  const media = project.media || [];
  setMainMedia(mainMediaEl, media[0], project);

  if (media.length > 1) {
    thumbsEl.innerHTML = media
      .map((m, i) => (m.type === "video"
        ? `<video src="${m.src}" data-i="${i}" class="${i === 0 ? "active" : ""}" muted></video>`
        : `<img src="${m.src}" data-i="${i}" class="${i === 0 ? "active" : ""}" alt="">`))
      .join("");
    thumbsEl.querySelectorAll("[data-i]").forEach((el) => {
      el.addEventListener("click", () => {
        const i = Number(el.dataset.i);
        setMainMedia(mainMediaEl, media[i], project);
        thumbsEl.querySelectorAll("[data-i]").forEach((t) => t.classList.remove("active"));
        el.classList.add("active");
      });
    });
  } else {
    thumbsEl.innerHTML = "";
  }

  const bodyEl = overlay.querySelector(".modal-body");
  let html = (project.description || []).map((p) => `<p>${escapeHTML(p)}</p>`).join("");
  if (project.myRole) {
    html += `<div class="modal-block"><h4>My Role</h4><p>${escapeHTML(project.myRole)}</p></div>`;
  }
  if (project.tools && project.tools.length) {
    html += `<div class="modal-block"><h4>Tools &amp; Methods</h4><div class="modal-tools">${tagsHTML(project.tools)}</div></div>`;
  }
  bodyEl.innerHTML = html;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  if (!modalEls) return;
  modalEls.classList.remove("open");
  document.body.style.overflow = "";
}

/* ---------------- Nav (mobile toggle + active link) ---------------- */

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }
  const current = document.body.dataset.page;
  document.querySelectorAll(".nav-links a").forEach((a) => {
    if (a.dataset.page === current) a.classList.add("active");
  });
}

/* ---------------- Footer year / shared init ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  initNav();

  const resumeLinks = document.querySelectorAll("[data-resume-link]");
  resumeLinks.forEach((a) => (a.href = PROFILE.resumeFile));

  const linkedinLinks = document.querySelectorAll("[data-linkedin-link]");
  linkedinLinks.forEach((a) => (a.href = PROFILE.linkedin));

  const emailLinks = document.querySelectorAll("[data-email-link]");
  emailLinks.forEach((a) => (a.href = "mailto:" + PROFILE.email));
});
