/* ---------------------------------------------------------------------- */
/*  Data                                                                  */
/* ---------------------------------------------------------------------- */

const DESTINATIONS = [
  {
    id: "philippines",
    name: "Philippines",
    tagline: "Discover Wonderful",
    location: "Bicol Region",
    blurb: "A perfect volcanic cone mirrored in still water, ringed by palms and quiet, unhurried mornings.",
    cardBlurb: "A perfect volcanic cone mirrored in still water, ringed by quiet palms.",
    image: "ph1.jpg",
  },
  {
    id: "boracay",
    name: "Boracay",
    tagline: "Explore Beautiful",
    location: "Visayas",
    blurb: "Palm-lined backwaters, misty tea hills, and slow boat mornings that ask nothing of you but time.",
    cardBlurb: "White sand beaches and clear water, perfect for a relaxing beach getaway.",
    image: "bora.jpg",
    heroImage: "bora1.jpg",
  },
  {
    id: "kashmir",
    name: "Palawan",
    tagline: "Discover Serene",
    location: "Luzon",
    blurb: "A valley ringed by snow, saffron fields, and still lakes that hold the mountains in reflection.",
    cardBlurb: "A stunning lagoon surrounded by limestone cliffs and calm turquoise water.",
    image: "puertoprincesa1.jpg",
    heroImage: "puertoprincesa.jpg",
  },
  {
    id: "himachal",
    name: "Siargao",
    tagline: "Wander Through",
    location: "Mindanao",
    blurb: "Pine ridgelines and apple orchards, with mountain towns strung along roads that never quite stop climbing.",
    cardBlurb: "A laid-back island known for surfing, palm trees, and island hopping.",
    image: "siargao1.jpg",
    heroImage: "siargao.jpg",
  },
  {
    id: "goa",
    name: "Cebu",
    tagline: "Unwind in",
    location: "Visayas",
    blurb: "Sunburnt coastline and Portuguese lanes, where evenings end slowly at the edge of warm water.",
    cardBlurb: "A historic city with old churches, good food, and easy island escapes nearby.",
    image: "cebu1.jpg",
    heroImage: "cebu.jpg",
  },
  {
    id: "ilocos",
    name: "Ilocos",
    tagline: "Journey Through",
    location: "Ilocos Region",
    blurb: "Cobblestone streets and centuries-old churches, where horse-drawn calesas trot past capiz-shuttered houses at dusk.",
    cardBlurb: "Spanish-era streets, heritage churches, and a slower pace steeped in history.",
    image: "ilocos1.jpg",
    heroImage: "ilocos.jpg",
  },
  {
    id: "zambales",
    name: "Zambales",
    tagline: "Escape to",
    location: "Central Luzon",
    blurb: "Sun-bleached coves below a lonely lighthouse, where fishing boats rest on quiet sand and orange hills meet the sea.",
    cardBlurb: "Laid-back coastal coves, rolling hills, and a weekend escape from the city.",
    image: "zambales1.jpg",
    heroImage: "zambales.jpg",
  },
  {
    id: "baguio",
    name: "Baguio",
    tagline: "Breathe In",
    location: "Cordillera Region",
    blurb: "Pine-scented mountain air, a mirror-still boating lake, and cool evenings that feel far from the lowland heat.",
    cardBlurb: "A cool mountain city of pine trees, parks, and easy weekend escapes.",
    image: "baguio1.jpg",
    heroImage: "baguio.jpg",
  },
  {
    id: "bohol",
    name: "Bohol",
    tagline: "Roam the Hills of",
    location: "Visayas",
    blurb: "Grass-covered hills that turn chocolate brown in the dry season, watched over by rice fields and quiet island coves.",
    cardBlurb: "Famous chocolate-hued hills, tarsiers, and postcard island coves.",
    image: "bahol1.jpg",
    heroImage: "bohol.jpg",
  },
  {
    id: "bukidnon",
    name: "Bukidnon",
    tagline: "Rise Above",
    location: "Mindanao",
    blurb: "Rolling highland pastures and misty waterfalls tucked into mossy ravines, high above the Mindanao lowlands.",
    cardBlurb: "Highland pastures, cool air, and hidden waterfalls in the mountains.",
    image: "bukidnon1.jpg",
    heroImage: "bukidnon.jpg",
  },
  {
    id: "intramuros",
    name: "Intramuros",
    tagline: "Step Into",
    location: "Metro Manila",
    blurb: "Centuries-old stone walls and cobbled gates that hold four hundred years of history inside the old walled city.",
    cardBlurb: "The old walled city — stone forts, cobbled streets, and colonial history.",
    image: "intramuros1.jpg",
    heroImage: "intramuros.jpg",
  },
];

const ACTIVITIES = ["Adventure", "Nature", "Beaches", "Culture", "Wildlife", "Food"];
const PRICES = ["Budget", "Moderate", "Luxury"];

// main hero background image
const HERO_BG = "ph1.jpg";

// id used for the special Palawan destinations page
const PALAWAN_DESTINATION_ID = "kashmir";

/* ---------------------------------------------------------------------- */
/*  Palawan sub-destinations data                                        */
/* ---------------------------------------------------------------------- */

const PALAWAN_FEATURED = {
  name: "El Nido",
  location: "Northern Palawan",
  tag: "Most Popular",
  blurb: "Towering limestone karsts cradle lagoons of impossibly clear turquoise water, with hidden beaches and secret lagoons reachable only by boat.",
  image: "elnido.jpg",
  // Three signature spots shown as photo cards beside the intro copy —
  // same "photo + serif name + short line" treatment as the Palawan
  // destinations section below.
  spots: [
    {
      name: "Small Lagoon",
      image: "elnido9.jpg",
      blurb: "A narrow limestone corridor opening into a bright turquoise pool, reached by kayak through a low entrance cave.",
    },
    {
      name: "Secret Beach",
      image: "elnido7.jpg",
      blurb: "Tucked behind sheer cliff walls and reached by swimming through a narrow gap in the rock — no boat can dock directly.",
    },
    {
      name: "Snake Island",
      image: "elnido8.jpg",
      blurb: "A slender, curving sandbar that surfaces at low tide, linking the shore to a small forested islet.",
    },
  ],
};

// The 6 remaining El Nido shots (not used above) — flow through the
// auto-scrolling marquee strip beneath the featured card.
const EL_NIDO_MORE_PHOTOS = [
  "el_nido2.jpg",
  "elnido3.jpg",
  "elnido4.jpg",
  "elnido5.jpg",
  "elnido6.jpg",
  "elnido10.jpg",
];

const CORON_FEATURED = {
  name: "Coron",
  location: "Northern Palawan",
  tag: "Wrecks & Lagoons",
  blurb: "Sunken WWII wrecks, mirror-still crater lakes, and jagged limestone islands rising straight out of the sea — reachable only by island-hopping boat.",
  spots: [
    {
      name: "Kayangan Lake",
      image: "coron5.jpg",
      blurb: "Often called the cleanest lake in the country, reached by a steep stairway and a floating boardwalk over the reef below.",
    },
    {
      name: "Twin Lagoon",
      image: "coron4.jpg",
      blurb: "Two lagoons joined by a narrow, cave-like passage — paddle through at low tide for the full effect.",
    },
    {
      name: "Siete Pecados",
      image: "coron10.jpg",
      blurb: "A shallow marine park thick with coral and reef fish, just offshore and perfect for an easy snorkel.",
    },
  ],
};

// The 7 remaining Coron shots — same auto-scrolling marquee treatment
// as El Nido's.
const CORON_MORE_PHOTOS = [
  "coron.jpg",
  "coron2.jpg",
  "coron3.jpg",
  "coron6.jpg",
  "coron7.jpg",
  "coron8.jpg",
  "coron9.jpg",
];

const PUERTO_FEATURED = {
  name: "Puerto Princesa",
  location: "Central Palawan",
  tag: "Underground River",
  blurb: "A UNESCO World Heritage cave river winds beneath the jungle, while quiet lagoons and limestone coves ring the coastline just outside the city.",
  image: "puerto.jpg",
  spots: [
    {
      name: "Subterranean River",
      image: "puerto9.jpg",
      blurb: "A navigable underground river drifting through cathedral-like limestone caverns lit by shafts of daylight.",
    },
    {
      name: "Hidden Lagoon",
      image: "puerto8.jpg",
      blurb: "A turquoise cove tucked between jungle-topped cliffs, reached by a short paddle from the open bay.",
    },
    {
      name: "Sheltered Cove",
      image: "puerto6.jpg",
      blurb: "A quiet sandbar beach beneath towering limestone, where outrigger boats anchor just offshore.",
    },
  ],
};

// The 7 remaining Puerto Princesa shots — same auto-scrolling marquee
// treatment as El Nido's and Coron's.
const PUERTO_MORE_PHOTOS = [
  "puerto2.jpg",
  "puerto3.jpg",
  "puerto4.jpg",
  "puerto5.jpg",
  "puerto7.jpg",
  "puerto10.jpg",
];

const PALAWAN_SPOTS = [
  {
    id: "coron",
    name: "Coron",
    location: "Northern Palawan",
    blurb: "Sunken WWII wrecks, mirror-still crater lakes, and jagged limestone islands rising straight out of the sea.",
    image: "coron1.jpg",
  },
  {
    id: "ppur",
    name: "Puerto Princesa Underground River",
    location: "Puerto Princesa",
    blurb: "A UNESCO World Heritage site where a navigable river winds for kilometers through a limestone cave system.",
    image: "ppur1.jpg",
  },
  {
    id: "portbarton",
    name: "Port Barton",
    location: "Central Palawan",
    blurb: "A laid-back fishing village with quiet beaches, easy island-hopping, and far fewer crowds than El Nido.",
    image: "portbarton1.jpg",
  },
];

/* ---------------------------------------------------------------------- */
/*  State                                                                 */
/* ---------------------------------------------------------------------- */

let activeIndex = 0; // Philippines stays the default active slide
let selDestination = "";
let selActivity = "";
let selPrice = "";
let refreshDestFilter = () => {};

/* ---------------------------------------------------------------------- */
/*  DOM refs                                                              */
/* ---------------------------------------------------------------------- */

const bgLayers = document.getElementById("bgLayers");
const ghostWord = document.getElementById("ghostWord");
const tagline = document.getElementById("tagline");
const destTitle = document.getElementById("destTitle");
const destTitleReflection = document.getElementById("destTitleReflection");
const prevLabel = document.getElementById("prevLabel");
const nextLabel = document.getElementById("nextLabel");
const mobilePrevLabel = document.getElementById("mobilePrevLabel");
const mobileNextLabel = document.getElementById("mobileNextLabel");
const indicatorsEl = document.getElementById("indicators");
const cardGrid = document.getElementById("cardGrid");

const resultsPanel = document.getElementById("resultsPanel");
const resultsThumb = document.getElementById("resultsThumb");
const resultsTitle = document.getElementById("resultsTitle");
const resultsBlurb = document.getElementById("resultsBlurb");

const philippinesView = document.getElementById("philippinesView");
const palawanView = document.getElementById("palawanView");
const discoverSection = document.querySelector(".discover");

/* ---------------------------------------------------------------------- */
/*  Build hero background layers + indicators + cards (data-driven)       */
/* ---------------------------------------------------------------------- */

function buildHeroLayers() {
  DESTINATIONS.forEach((d, i) => {
    const layer = document.createElement("div");
    layer.className = "hero-bg-layer" + (i === 0 ? " active" : "");
    layer.style.backgroundImage = `url(${d.heroImage || HERO_BG})`;
    layer.dataset.index = i;
    bgLayers.appendChild(layer);
  });
}

function buildIndicators() {
  indicatorsEl.innerHTML = "";
  DESTINATIONS.forEach((d, i) => {
    const btn = document.createElement("button");
    btn.className = "indicator" + (i === 0 ? " active" : "");
    btn.textContent = "0" + i;
    btn.setAttribute("aria-label", "Go to " + d.name);
    btn.addEventListener("click", () => goTo(i));
    indicatorsEl.appendChild(btn);
  });
}

function buildCards() {
  cardGrid.innerHTML = "";
  DESTINATIONS.filter((d) => d.id !== "philippines").slice(0, 10).forEach((d, i) => {
    const card = document.createElement("article");
    card.className = "card reveal";
    card.style.transitionDelay = `${i * 0.12}s`;
    card.dataset.id = d.id;
    card.innerHTML = `
      <div class="card-image-wrap">
        <div class="card-image" style="background-image:url(${d.image})"></div>
        <div class="card-gradient"></div>
        <span class="card-tag">${d.location}</span>
        <h3 class="card-name">${d.name}</h3>
      </div>
      <p class="card-blurb">${d.cardBlurb}</p>
      <button class="card-explore" data-id="${d.id}">
        Explore <i data-lucide="chevron-right"></i>
      </button>
    `;
    cardGrid.appendChild(card);
  });

  // whole card is clickable (image, blurb, or the Explore link) — moving
  // the hero to that destination. Palawan is auto-detected in goTo() /
  // syncBelowHeroView() and swaps the grid below the hero accordingly.
  cardGrid.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      const idx = DESTINATIONS.findIndex((d) => d.id === card.dataset.id);
      goTo(idx);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  if (window.lucide) lucide.createIcons();
}

/* ---------------------------------------------------------------------- */
/*  Palawan view                                                          */
/* ---------------------------------------------------------------------- */

// Shared markup for a featured-destination block: the photo-card +
// intro/CTA hero, followed by an auto-scrolling marquee of its
// remaining photos. Used for both El Nido and Coron below.
function renderFeaturedBlock(featured, morePhotos, modifierClass) {
  return `
    <div class="palawan-hero-card ${modifierClass} reveal">
      <div class="el-nido-gallery">
        ${featured.spots
          .map(
            (s) => `
          <article class="el-nido-card">
            <div class="el-nido-card-image" style="background-image:url(${s.image})"></div>
            <h4>${s.name}</h4>
            <p>${s.blurb}</p>
          </article>`
          )
          .join("")}
      </div>
      <div class="palawan-hero-info">
        <span class="card-tag palawan-tag">${featured.tag} · ${featured.location}</span>
        <h3>${featured.name}</h3>
        <p>${featured.blurb}</p>
        <button class="card-explore palawan-cta">
          Plan your trip <i data-lucide="arrow-right"></i>
        </button>
      </div>
    </div>

    <div class="el-nido-marquee reveal">
      <div class="el-nido-marquee-track">
        ${morePhotos
          .concat(morePhotos)
          .map((img) => `<div class="el-nido-marquee-tile" style="background-image:url(${img})"></div>`)
          .join("")}
      </div>
    </div>
  `;
}

function renderPalawanView() {
  palawanView.innerHTML = `
    <button class="breadcrumb-back" id="backToPhilippines">
      <i data-lucide="arrow-left"></i>
      <span>Back to Philippines</span>
    </button>

    <div class="discover-heading">
      <h2>Discover Palawan</h2>
      <p>Limestone cliffs, hidden lagoons, and some of the clearest water in the country — Palawan's islands, one quiet cove at a time.</p>
    </div>

    ${renderFeaturedBlock(PALAWAN_FEATURED, EL_NIDO_MORE_PHOTOS, "hero-elnido")}
    ${renderFeaturedBlock(CORON_FEATURED, CORON_MORE_PHOTOS, "hero-coron")}
    ${renderFeaturedBlock(PUERTO_FEATURED, PUERTO_MORE_PHOTOS, "hero-puerto")}
  `;

  // "Back to Philippines" routes the hero back to Philippines too,
  // via goTo() — that keeps the hero title and the grid below always
  // pointing at the same destination.
  document.getElementById("backToPhilippines").addEventListener("click", () => {
    const idx = DESTINATIONS.findIndex((d) => d.id === "philippines");
    goTo(idx);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  if (window.lucide) lucide.createIcons();
  observeReveals(palawanView);
  // El Nido is the first section, so start the whole view tinted toward
  // it right away instead of leaving the heading area on plain cream
  // until the card scrolls into the middle of the screen.
  discoverSection.classList.add("bg-elnido");
  observePalawanBackgrounds();
}

// As the page scrolls through the El Nido / Coron / Puerto Princesa
// blocks, ease the section background toward a soft tint of whichever
// one is currently centered in view, instead of staying flat white.
const PALAWAN_BG_CLASSES = {
  "hero-elnido": "bg-elnido",
  "hero-coron": "bg-coron",
  "hero-puerto": "bg-puerto",
};

function observePalawanBackgrounds() {
  const sections = palawanView.querySelectorAll(".palawan-hero-card");

  const bgObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const modifier = Object.keys(PALAWAN_BG_CLASSES).find((cls) =>
          entry.target.classList.contains(cls)
        );
        if (!modifier) return;
        Object.values(PALAWAN_BG_CLASSES).forEach((bgClass) =>
          discoverSection.classList.remove(bgClass)
        );
        discoverSection.classList.add(PALAWAN_BG_CLASSES[modifier]);
      });
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
  );

  sections.forEach((section) => bgObserver.observe(section));
}

function showPalawanView() {
  renderPalawanView();
  philippinesView.classList.add("view-hidden");
  palawanView.classList.remove("view-hidden");
}

function showPhilippinesView() {
  palawanView.classList.add("view-hidden");
  philippinesView.classList.remove("view-hidden");
  discoverSection.classList.remove("bg-elnido", "bg-coron", "bg-puerto");
}

// Keeps the grid below the hero in lockstep with whichever destination
// the hero carousel is currently showing: Palawan gets its own grid,
// hiding "Discover Philippines"; every other destination shows the
// normal Philippines grid.
function syncBelowHeroView() {
  const active = DESTINATIONS[activeIndex];
  const isPalawan = active.id === PALAWAN_DESTINATION_ID;

  if (isPalawan && palawanView.classList.contains("view-hidden")) {
    showPalawanView();
  } else if (!isPalawan && palawanView.classList.contains("view-hidden") === false) {
    showPhilippinesView();
  }
}

/* ---------------------------------------------------------------------- */
/*  Carousel logic                                                        */
/* ---------------------------------------------------------------------- */

function render() {
  const active = DESTINATIONS[activeIndex];
  const prevIndex = (activeIndex - 1 + DESTINATIONS.length) % DESTINATIONS.length;
  const nextIndex = (activeIndex + 1) % DESTINATIONS.length;

  // background crossfade
  bgLayers.querySelectorAll(".hero-bg-layer").forEach((layer) => {
    layer.classList.toggle("active", Number(layer.dataset.index) === activeIndex);
  });

  // ghost word
  ghostWord.style.opacity = "0";
  setTimeout(() => {
    ghostWord.textContent = active.name.toUpperCase();
    ghostWord.style.opacity = "1";
  }, 200);

  // tagline + title fade
  tagline.classList.remove("in");
  destTitle.classList.remove("in");
  void tagline.offsetWidth; // restart transition
  tagline.textContent = active.tagline;
  destTitle.childNodes[0].textContent = active.name.toUpperCase();
  destTitleReflection.textContent = active.name.toUpperCase();
  requestAnimationFrame(() => {
    tagline.classList.add("in");
    destTitle.classList.add("in");
  });

  // side labels
  prevLabel.textContent = DESTINATIONS[prevIndex].name;
  nextLabel.textContent = DESTINATIONS[nextIndex].name;
  mobilePrevLabel.textContent = DESTINATIONS[prevIndex].name;
  mobileNextLabel.textContent = DESTINATIONS[nextIndex].name;

  // indicators
  indicatorsEl.querySelectorAll(".indicator").forEach((el, i) => {
    el.classList.toggle("active", i === activeIndex);
  });
}

function goTo(index) {
  activeIndex = ((index % DESTINATIONS.length) + DESTINATIONS.length) % DESTINATIONS.length;
  selDestination = DESTINATIONS[activeIndex].name;
  refreshDestFilter();
  render();
  hideResults();
  syncBelowHeroView();
}

function goPrev() {
  goTo(activeIndex - 1);
}

function goNext() {
  goTo(activeIndex + 1);
}

document.querySelector(".side-nav--left").addEventListener("click", goPrev);
document.querySelector(".side-nav--right").addEventListener("click", goNext);
document.getElementById("mobilePrevBtn").addEventListener("click", goPrev);
document.getElementById("mobileNextBtn").addEventListener("click", goNext);

/* ---------------------------------------------------------------------- */
/*  Search bar: dropdowns                                                 */
/* ---------------------------------------------------------------------- */

function buildDropdown(container, options, getSelected, onSelect) {
  container.innerHTML = "";
  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "dropdown-option" + (getSelected() === opt ? " selected" : "");
    btn.innerHTML = `<span>${opt}</span><i data-lucide="check" class="check"></i>`;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      onSelect(getSelected() === opt ? "" : opt);
    });
    container.appendChild(btn);
  });
  if (window.lucide) lucide.createIcons();
}

function closeAllDropdowns() {
  document.querySelectorAll(".filter.open").forEach((f) => f.classList.remove("open"));
}

function setupFilter({ btnId, dropdownId, valueId, options, getSelected, setSelected }) {
  const btn = document.getElementById(btnId);
  const dropdownEl = document.getElementById(dropdownId);
  const valueEl = document.getElementById(valueId);
  const filterEl = btn.closest(".filter");

  function refresh() {
    valueEl.textContent = getSelected() || "Any";
    buildDropdown(dropdownEl, options, getSelected, (val) => {
      setSelected(val);
      refresh();
      closeAllDropdowns();
    });
  }

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = filterEl.classList.contains("open");
    closeAllDropdowns();
    if (!isOpen) filterEl.classList.add("open");
  });

  refresh();
  return refresh;
}

refreshDestFilter = setupFilter({
  btnId: "destFilterBtn",
  dropdownId: "destDropdown",
  valueId: "destFilterValue",
  options: DESTINATIONS.map((d) => d.name),
  getSelected: () => selDestination,
  setSelected: (v) => {
    selDestination = v;
    if (v) {
      const idx = DESTINATIONS.findIndex((d) => d.name === v);
      if (idx !== -1) goTo(idx);
    }
  },
});

setupFilter({
  btnId: "activityFilterBtn",
  dropdownId: "activityDropdown",
  valueId: "activityFilterValue",
  options: ACTIVITIES,
  getSelected: () => selActivity,
  setSelected: (v) => (selActivity = v),
});

setupFilter({
  btnId: "priceFilterBtn",
  dropdownId: "priceDropdown",
  valueId: "priceFilterValue",
  options: PRICES,
  getSelected: () => selPrice,
  setSelected: (v) => (selPrice = v),
});

document.addEventListener("click", () => closeAllDropdowns());

/* ---------------------------------------------------------------------- */
/*  Search button + results panel                                        */
/* ---------------------------------------------------------------------- */

function showResults() {
  const active = DESTINATIONS[activeIndex];
  resultsThumb.style.backgroundImage = `url(${HERO_BG})`;

  let title = active.name;
  if (selActivity) title += " · " + selActivity;
  if (selPrice) title += " · " + selPrice;
  resultsTitle.textContent = title;

  resultsBlurb.textContent =
    active.blurb.length > 90 ? active.blurb.slice(0, 90) + "…" : active.blurb;

  resultsPanel.classList.add("show");
}

function hideResults() {
  resultsPanel.classList.remove("show");
}

document.getElementById("searchBtn").addEventListener("click", () => {
  if (selDestination) {
    const idx = DESTINATIONS.findIndex((d) => d.name === selDestination);
    if (idx !== -1) {
      activeIndex = idx;
      render();
      syncBelowHeroView();
    }
  }
  showResults();
});

document.getElementById("resultsCloseBtn").addEventListener("click", hideResults);

/* ---------------------------------------------------------------------- */
/*  Mobile menu                                                           */
/* ---------------------------------------------------------------------- */

const mobileMenu = document.getElementById("mobileMenu");
document.getElementById("menuOpenBtn").addEventListener("click", () => mobileMenu.classList.add("show"));
document.getElementById("menuCloseBtn").addEventListener("click", () => mobileMenu.classList.remove("show"));
mobileMenu.querySelectorAll(".mobile-menu-nav a").forEach((a) =>
  a.addEventListener("click", () => mobileMenu.classList.remove("show"))
);

/* ---------------------------------------------------------------------- */
/*  Navbar: hides on scroll down, reappears when cursor moves near top    */
/* ---------------------------------------------------------------------- */

const siteHeader = document.querySelector(".site-header");
let lastScrollY = window.scrollY;
const TOP_REVEAL_ZONE = 80; // px from top of viewport that brings the navbar back

function onScroll() {
  const currentY = window.scrollY;
  if (currentY <= TOP_REVEAL_ZONE) {
    siteHeader.classList.remove("nav-hidden");
  } else if (currentY > lastScrollY) {
    siteHeader.classList.add("nav-hidden");
  }
  lastScrollY = currentY;
}

function onMouseMove(e) {
  if (e.clientY < TOP_REVEAL_ZONE) {
    siteHeader.classList.remove("nav-hidden");
  }
}

document.addEventListener("scroll", onScroll);
document.addEventListener("mousemove", onMouseMove);

/* ---------------------------------------------------------------------- */
/*  Init                                                                  */
/* ---------------------------------------------------------------------- */

document.getElementById("footerCopy").textContent =
  "© " + new Date().getFullYear() + " Travalgo Journeys. Crafted for slow, considered travel.";

// Shared scroll-reveal observer — content built once at init() (the
// Philippines card grid) and content rebuilt later on the fly (the
// Palawan view, re-rendered each time it's shown) both register their
// ".reveal" elements through this one observer.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

function observeReveals(root = document) {
  root.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
}

function init() {
  buildHeroLayers();
  buildIndicators();
  buildCards();
  render();
  syncBelowHeroView();

  // entrance animation
  requestAnimationFrame(() => {
    setTimeout(() => {
      tagline.classList.add("in");
      destTitle.classList.add("in");
    }, 80);
  });

  if (window.lucide) {
    lucide.createIcons();
  } else {
    window.addEventListener("load", () => window.lucide && lucide.createIcons());
  }

  observeReveals();
}

init();