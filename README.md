# Su Reh — Portfolio Website

A simple, editable portfolio site: **Home**, **Projects**, and **About**.

## How to view it

Just double-click `index.html` (or open it from your browser with
File → Open). No install, no server, no build step needed.

## How to edit content (the important part)

**You only need to edit one file: [`js/data.js`](js/data.js).**
Open it in any text editor (Notepad, VS Code, etc.) — it's full of
comments explaining exactly how to:

- Add a new project
- Add photos or videos to a project
- Remove a project or photo
- Update your bio, education, experience, skills, and contact info

After editing `js/data.js`, just save the file and refresh the page
in your browser — no other steps required.

## Adding photos & videos

1. Drop image files into `assets/images/projects/`
   (`.jpg`, `.png`, or `.webp` all work).
2. Drop video files into `assets/videos/` (`.mp4` works best).
3. Reference them in `js/data.js` inside a project's `media: [ ]` list, e.g.:

   ```js
   media: [
     { type: "image", src: "assets/images/projects/my-photo.jpg", caption: "Prototype v2" },
     { type: "video", src: "assets/videos/my-clip.mp4", caption: "Bench test" },
   ],
   ```

Until you add real files, a project shows a dashed placeholder box
that says "Add a photo or video" — that's expected, not a bug.

## Updating your resume

Replace `assets/resume/Su-Reh-Resume.pdf` with a new PDF of the same
name (or update the file name in the `resumeFile` field at the top of
`js/data.js`).

## Adding your photo to the About page

Open `about.html`, find the `<div class="about-photo" id="about-photo">`
element, and replace it with an `<img>` tag pointing at a photo you've
placed in `assets/images/`, e.g.:

```html
<img src="assets/images/my-photo.jpg" alt="Su Reh" style="width:100%; border-radius:6px;">
```

## Putting it online (free options, when you're ready)

- **Netlify Drop**: go to https://app.netlify.com/drop and drag the whole
  `su-reh-portfolio` folder onto the page. It gives you a live URL
  instantly, and you can drag-and-drop again anytime you make edits.
- **GitHub Pages**: create a GitHub repo, upload these files, then
  enable Pages in the repo settings for a free `yourname.github.io` URL.

## File structure

```
index.html          Home page
projects.html        Projects grid page
about.html            About / resume page
css/style.css         All styling (colors, spacing, fonts)
js/data.js            <-- EDIT THIS to change any content
js/main.js            Rendering logic (rarely needs edits)
assets/images/        Your photos
assets/videos/         Your videos
assets/resume/          Your resume PDF
```
