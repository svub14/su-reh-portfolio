/* ============================================================
   SITE CONTENT — EDIT THIS FILE TO UPDATE YOUR WEBSITE
   ============================================================
   This is the ONLY file you need to touch to add, remove, or
   change projects, photos, videos, or your bio. You do not need
   to know how to code — just follow the patterns already here.

   HOW TO ADD A PROJECT
   ---------------------
   1. Put your images/videos in:
        assets/images/projects/   (for photos)
        assets/videos/            (for video files)
   2. Copy one of the objects inside the PROJECTS array below,
      paste it as a new entry, and edit the text/paths.
   3. Save this file and refresh the website in your browser.

   HOW TO ADD A PHOTO TO A PROJECT
   ---------------------------------
   Inside a project's "media" list, add a line like:
        { type: "image", src: "assets/images/projects/YOUR-FILE.jpg", caption: "What this shows" }

   HOW TO ADD A VIDEO TO A PROJECT
   ---------------------------------
        { type: "video", src: "assets/videos/YOUR-FILE.mp4", caption: "What this shows" }

   HOW TO REMOVE A PROJECT OR PHOTO
   -----------------------------------
   Just delete that whole { ... } block (and its comma) from the list.

   A project with an empty media: [] list will show a friendly
   "add photos here" placeholder on the site — that's expected
   until you drop real files in.
   ============================================================ */

const PROFILE = {
  name: "Su Reh",
  tagline: "Mechanical Engineering, Stanford University ‘28",
  homeIntro:
    "I'm a mechanical engineering student at Stanford who builds and tests mechanisms and hands-on prototypes — spanning research, product design, and creative builds. This is a growing collection of my research, CAD work, and projects.",
  location: "Stanford, CA",
  email: "sreh14@stanford.edu",
  phone: "619-988-8286",
  linkedin: "https://www.linkedin.com/in/su-reh",
  resumeFile: "assets/resume/Su-Reh-Resume.pdf",

  aboutBio:
    "I'm a mechanical engineering major at Stanford University (Class of 2028), currently doing research in the Soft Intelligent Materials (SIM) Lab and the Zhao Lab, where I work on minimally invasive medical devices — from thrombectomy tools that clear blood clots to retrievable devices for kidney stone removal. I like projects that move between CAD, simulation, and hands-on fabrication, and I'm always looking to add more of that work here as I take on new projects.",

  education: [
    {
      school: "Stanford University",
      detail: "B.S. Mechanical Engineering",
      date: "Anticipated graduation June 2028",
    },
  ],

  experience: [
    {
      role: "Research Assistant",
      org: "Zhao Lab, Department of Mechanical Engineering, Stanford University",
      date: "September 2025 – Present",
      bullets: [
        "Designed 20+ conceptual variations of the lab's milli-spinner device using free-body diagrams, 3D modeling, and MATLAB calculations to evaluate how spinner geometry affects clot-removal performance.",
        "Assisted in experimental design, data collection, and device performance testing to observe vascular flow and clot disruption.",
        "Collaborated with graduate researchers to refine experimental setups using SolidWorks CAD and Elegoo 3D printing, enabling design iterations and improving testing efficiency, decreasing clot removal time from an average of two minutes.",
        "Conducted in vitro biomechanical testing using a clot made from swine-blood clot models and vascular flow models to evaluate device performance and clot removal efficiency.",
      ],
    },
    {
      role: "Co-Leading Student Researcher, Retrievable Spinner Basket (RSB)",
      org: "Stanford Undergraduate Research Institute, Dept. of Mechanical Engineering, Stanford University",
      date: "June 2026 – August 2026",
      bullets: [
        "Designed the retrievable spinner basket and its mechanism for deployment in a model vessel using COMSOL simulations.",
        "Conducted design testing and experiments to evaluate device performance, removing up to 20 fabricated kidney stones per test.",
        "Engineered a deformable mesh using superelastic NiTi alloy, enabling large, recoverable volumetric changes, allowing the device to contract for smooth deployment through a ureteroscope's working channel, and collapse down to a narrow 1 mm tube.",
        "Used CAD software to design the device's motor base and adaptor, integrating the shaft-motor coupling to ensure stable torque transfer and minimize vibration during high-speed rotation.",
      ],
    },
    {
      role: "Design Intern",
      org: "FabZone Armor, San Diego",
      date: "July 2025 – September 2025",
      bullets: [
        "Created parametric CAD models and detailed manufacturing drawings in SolidWorks for skid plates, rock sliders, and cab-mount supports, defining tolerances and material call-outs.",
        "Performed interference detection and design validation within CAD assemblies to verify proper mechanical fit under real-world mounting conditions.",
        "Collaborated with the fabrication team to translate digital prototypes into physical parts, iterating on geometry and drawings based on shop feedback.",
      ],
    },
    {
      role: "Co-Student Researcher",
      org: "UCSD Create Action Research, San Diego",
      date: "April 2023 – May 2024",
      bullets: [
        "Conducted social science research examining disparities in college admissions outcomes for underrepresented students.",
        "Designed and administered surveys to 200+ high school students on college awareness, resource access, and post-secondary planning.",
        "Used Python to collect and preprocess survey data and used statistical analysis to interpret survey results, identifying key trends and disparities influencing college access and informing recommendations for underrepresented students.",
      ],
    },
  ],

  leadership: [
    {
      role: "Materials Coordinator & Lesson Instructor",
      org: "Sprout Up, Stanford University",
      date: "September 2024 – Present",
      bullets: [
        "Taught environmental education to 1st and 2nd grade classrooms in local Palo Alto public elementary schools.",
        "Taught weekly during winter quarter and coordinated lesson materials across classrooms.",
      ],
    },
  ],

  skills: [
    {
      category: "Engineering",
      items: ["Mechanical Design", "Engineering Analysis", "Experimental Testing", "Design Validation", "Technical Documentation"],
    },
    {
      category: "CAD & Modeling",
      items: ["SolidWorks", "Fusion 360", "Parametric Modeling", "Assembly Design", "Engineering Drawings", "Tolerance Analysis"],
    },
    {
      category: "Programming & Data",
      items: ["Python", "MATLAB"],
    },
    {
      category: "Fabrication & Prototyping",
      items: ["3D Printing (Resin and PLA)", "Mechanical Assembly", "Prototype Development"],
    },
  ],
};

/* ============================================================
   PROJECTS
   Order here = order shown on the site. The first 3 with
   "featured: true" appear on the Home page.
   ============================================================ */

const PROJECTS = [
  {
    id: "retrievable-spinner-basket",
    title: "Retrievable Spinner Basket for Kidney Stone Removal",
    year: "2026",
    featured: true,
    tags: ["Medical Device", "CAD", "NiTi Alloy", "Fabrication"],
    role: "Co-Leading Student Researcher — Zhao Lab, Stanford ME SURI",
    summary:
      "A flexible, retrievable spinner basket that captures kidney stone fragments via localized suction while staying maneuverable in narrow intrarenal spaces.",
    description: [
      "The spinner basket generates localized suction through rotation to capture stone fragments without entraining renal fluid — reducing the risk of sepsis or renal collapse associated with standard vacuum aspiration. Using flow field circulation, it captures distant stone fragments while preserving stable intrarenal pressure and visualization.",
      "The design uses a redesigned sidewall structure with superelastic Ti-Ni (nickel-titanium) alloy to achieve controllable volume adjustment, allowing the basket to contract for smooth passage through a ureteroscope's working channel and expand to capture stones in complex, narrow spaces.",
      "Research question: How can kidney stone retrieval be improved while maintaining stable intrarenal pressure and minimizing procedural risks?",
    ],
    myRole:
      "Co-led the project alongside a PhD mentor: performed experiments, built several design iterations for the system and spinner basket, and fabricated the spinner basket via hand braiding.",
    tools: ["CAD", "COMSOL Simulation", "Hand Braiding", "Data Cataloguing", "Model Fabrication"],
    media: [
      { type: "image", src: "assets/images/projects/rsb-purple-base.jpg", caption: "3D-printed motor base and shaft adaptor" },
      { type: "video", src: "assets/videos/rsb-demo.mp4", caption: "Spinner basket deployment test" },
      { type: "image", src: "assets/images/projects/rsb-wire-1.jpg", caption: "Fraying the NiTi wire before braiding" },
      { type: "image", src: "assets/images/projects/rsb-wire-2.jpg", caption: "Hand-braiding the basket shape" },
      { type: "image", src: "assets/images/projects/rsb-wire-3.jpg", caption: "Close-up of the finished woven basket" },
    ],
  },
  {
    id: "milli-spinner-thrombectomy",
    title: "Milli-Spinner Thrombectomy Device",
    year: "2025",
    featured: true,
    tags: ["Medical Device", "CAD", "Testing"],
    role: "Research Assistant — Zhao Lab / SIM Lab, Stanford",
    summary:
      "A minimally invasive thrombectomy device that reduces blood clot volume by up to 95% by mechanically altering clot microstructure, rather than cutting or rupturing it.",
    description: [
      "The milli-spinner is placed in an artery or vein to clear blood clots by modifying the clot's microstructure rather than relying on rupture or cutting, which are the failure points of many current thrombectomy methods. It works by mechanically densifying the clot's fibrin network and releasing red blood cells through spinning-induced compression and shear forces.",
      "In vitro tests using swine-blood clot models and vascular flow models, along with in vivo experiments, demonstrate ultrafast clot debulking and high-fidelity revascularization, outperforming standard aspiration thrombectomy.",
      "Research question: How does mechanical densification of a clot's fibrin network enable the milli-spinner to achieve volume reduction without clot rupture?",
    ],
    myRole:
      "Research assistant to a PhD mentor: conducted in vitro biomechanical testing, assisted in experimental design and data collection, and helped refine experimental setups using SolidWorks CAD and 3D-printed fixtures — decreasing average clot removal time from two minutes.",
    tools: ["SolidWorks CAD", "COMSOL Simulation", "3D Printing (Resin and PLA)", "Experimental Design", "Clot Fabrication"],
    media: [
      { type: "image", src: "assets/images/projects/milli-base.jpg", caption: "3D-printed milli-spinner motor base" },
      { type: "video", src: "assets/videos/milli-demo.mp4", caption: "Milli-spinner bench test in vascular flow model" },
      { type: "image", src: "assets/images/projects/milli-spinner-tip.jpg", caption: "Close-up of the spinner tip" },
    ],
  },
  {
    id: "phone-stand",
    title: "Adjustable Laser-Cut Phone Stand",
    year: "2026",
    featured: true,
    tags: ["CAD", "Laser Cutting", "Tolerance Analysis", "Product Design"],
    role: "Designer & Fabricator — ME 102, Stanford University",
    summary:
      "A laser-cut wood phone stand with a rotary-shaft and dowel-pin joint mechanism that locks into 4 angles, for both landscape and vertical viewing.",
    description: [
      "The brief was simple: give your most important carry something to stand on. I started by prototyping three separate aspects in cardboard and foam — angular adjustment, stand support, and phone support — before combining them into a first CAD design.",
      "My first prototype used a fixed joint that made it nearly impossible to adjust the angle or close the stand, so I redesigned the support mechanism around a rotary shaft and dowel-pin joints instead. Sliding the shaft into a different slot locks the phone bed into one of 4 angles — stable enough for watching videos in landscape, or propped upright for scrolling.",
      "I also ran a tolerance analysis on the laser-cut slot that the rotary shaft rides in: nominal width 0.3 in with a target tolerance of ±0.003 in, measured at 0.303 in on the final part.",
    ],
    myRole:
      "Designed and fabricated the stand solo: built and tested cardboard/foam prototypes for the angular-adjustment, stand-support, and phone-support mechanisms, iterated through two CAD designs after the first joint design failed to rotate smoothly, and laser-cut and assembled the final wood prototype.",
    tools: ["CAD", "Laser Cutting", "Tolerance Analysis", "Rapid Prototyping"],
    media: [
      { type: "image", src: "assets/images/projects/phonestand-1.jpg", caption: "Project overview" },
      { type: "image", src: "assets/images/projects/phonestand-2.jpg", caption: "Prototyping and sketching" },
      { type: "image", src: "assets/images/projects/phonestand-3.jpg", caption: "Tolerance analysis and final design" },
      { type: "image", src: "assets/images/projects/phonestand-4.jpg", caption: "Reflection" },
    ],
  },
  {
    id: "bloom",
    title: "Bloom",
    year: "2026",
    featured: false,
    tags: ["Art", "Arduino", "Sculpture", "For Fun"],
    role: "Student Artist — Intro to Art and Technology, Stanford University",
    summary:
      "A glowing, LED-lit artificial flower planted in real grass — a sculpture about how technology's beauty can quietly displace and drain the natural world around it.",
    description: [
      "The main theme for this project was technology and its relationship with nature. At first glance, the glowing flower demands admiration, its LED-lit stem casting a soft, captivating light. But look closer: what anchors it is not soil alone — electrical wires snake out from the base like roots, threading through the earth where the real plants quietly grow, threatened by the artificial flower beside them.",
      "The piece explores the seductive nature of technological progress: how it's presented to us as something beautiful, something worth celebrating, while its true roots quietly displace and drain the natural world beneath it. The flower is pristine because it cannot die, cannot wilt, cannot feel. The grass beside it can — and the artificial flower is the reason for its death.",
      "When classmates first saw the piece, they were drawn straight to the flower — it was only after a closer look that they noticed the real grass dying underneath it, and the message clicked.",
    ],
    myRole:
      "Designed and built the piece solo: sculpted and hand-painted the flower, wired the LED-lit stem with Arduino, and planted it directly in living grass so the artificial flower visibly competes with and drains the real plant growing beneath it.",
    tools: ["CAD", "Arduino", "Gardening", "Painting"],
    media: [
      { type: "image", src: "assets/images/projects/bloom-1.png", caption: "Bloom — LED-lit flower planted in real grass" },
      { type: "video", src: "assets/videos/bloom-demo.mp4", caption: "Bloom demo" },
    ],
  },

  /* ------------------------------------------------------------
     TEMPLATE: duplicate this block to add a new project.
     Set featured: true to also show it on the Home page.
  ------------------------------------------------------------
  {
    id: "unique-short-name",
    title: "Project Title",
    year: "2026",
    featured: false,
    tags: ["Tag One", "Tag Two"],
    role: "Your role — Lab / Company",
    summary: "One or two sentence summary shown on the project card.",
    description: [
      "First paragraph of the full write-up.",
      "Second paragraph, if needed."
    ],
    myRole: "A sentence or two on specifically what you did.",
    tools: ["Tool 1", "Tool 2"],
    media: [
      { type: "image", src: "assets/images/projects/your-photo.jpg", caption: "Caption here" }
    ],
  },
  ------------------------------------------------------------ */
];
