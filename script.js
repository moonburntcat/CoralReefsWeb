const currentPage = window.location.pathname.split("/").pop();
const pageName = currentPage === "" ? "index.html" : currentPage;

document.querySelectorAll(".nav-links a").forEach((link) => {
  const href = link.getAttribute("href");
  if (!href) return;
  if (href === pageName) {
    link.classList.add("active");
  }
});

const speciesPages = [
  "species.html",
  "species-acropora.html",
  "species-acanthastrea.html",
  "species-cynarina.html",
  "species-diploastrea.html",
  "species-euphflfiaancora.html",
  "species-favosites.html",
  "species-galaxea.html",
  "species-lobophyllia.html",
  "species-lobophytum.html",
  "species-montipora.html",
  "species-knopia.html",
  "species-podabacia.html",
  "species-pocillopora.html",
  "species-porites.html",
  "species-sarcophyton.html",
  "species-sinularia.html",
  "species-turbinaria.html",
  "species-zoanthus.html",
  "species-cn.html",
  "species-acropora-cn.html",
  "species-acanthastrea-cn.html",
  "species-cynarina-cn.html",
  "species-diploastrea-cn.html",
  "species-euphflfiaancora-cn.html",
  "species-favosites-cn.html",
  "species-galaxea-cn.html",
  "species-lobophyllia-cn.html",
  "species-lobophytum-cn.html",
  "species-montipora-cn.html",
  "species-knopia-cn.html",
  "species-podabacia-cn.html",
  "species-pocillopora-cn.html",
  "species-porites-cn.html",
  "species-sarcophyton-cn.html",
  "species-sinularia-cn.html",
  "species-turbinaria-cn.html",
  "species-zoanthus-cn.html",
];

if (speciesPages.includes(pageName)) {
  document
    .querySelectorAll("[data-nav-species]")
    .forEach((el) => el.classList.add("active"));
}

const langPairs = {
  "index.html": "index-cn.html",
  "index-cn.html": "index.html",
  "ecosystems.html": "ecosystems-cn.html",
  "ecosystems-cn.html": "ecosystems.html",
  "species.html": "species-cn.html",
  "species-cn.html": "species.html",
  "conservation.html": "conservation-cn.html",
  "conservation-cn.html": "conservation.html",
  "lab.html": "lab-cn.html",
  "lab-cn.html": "lab.html",
  "species-acropora.html": "species-acropora-cn.html",
  "species-acropora-cn.html": "species-acropora.html",
  "species-acanthastrea.html": "species-acanthastrea-cn.html",
  "species-acanthastrea-cn.html": "species-acanthastrea.html",
  "species-cynarina.html": "species-cynarina-cn.html",
  "species-cynarina-cn.html": "species-cynarina.html",
  "species-diploastrea.html": "species-diploastrea-cn.html",
  "species-diploastrea-cn.html": "species-diploastrea.html",
  "species-euphflfiaancora.html": "species-euphflfiaancora-cn.html",
  "species-euphflfiaancora-cn.html": "species-euphflfiaancora.html",
  "species-favosites.html": "species-favosites-cn.html",
  "species-favosites-cn.html": "species-favosites.html",
  "species-galaxea.html": "species-galaxea-cn.html",
  "species-galaxea-cn.html": "species-galaxea.html",
  "species-lobophyllia.html": "species-lobophyllia-cn.html",
  "species-lobophyllia-cn.html": "species-lobophyllia.html",
  "species-lobophytum.html": "species-lobophytum-cn.html",
  "species-lobophytum-cn.html": "species-lobophytum.html",
  "species-montipora.html": "species-montipora-cn.html",
  "species-montipora-cn.html": "species-montipora.html",
  "species-knopia.html": "species-knopia-cn.html",
  "species-knopia-cn.html": "species-knopia.html",
  "species-podabacia.html": "species-podabacia-cn.html",
  "species-podabacia-cn.html": "species-podabacia.html",
  "species-pocillopora.html": "species-pocillopora-cn.html",
  "species-pocillopora-cn.html": "species-pocillopora.html",
  "species-porites.html": "species-porites-cn.html",
  "species-porites-cn.html": "species-porites.html",
  "species-sarcophyton.html": "species-sarcophyton-cn.html",
  "species-sarcophyton-cn.html": "species-sarcophyton.html",
  "species-sinularia.html": "species-sinularia-cn.html",
  "species-sinularia-cn.html": "species-sinularia.html",
  "species-turbinaria.html": "species-turbinaria-cn.html",
  "species-turbinaria-cn.html": "species-turbinaria.html",
  "species-zoanthus.html": "species-zoanthus-cn.html",
  "species-zoanthus-cn.html": "species-zoanthus.html",
};

const langButton = document.querySelector("[data-lang-toggle]");
if (langButton) {
  langButton.textContent = pageName.includes("-cn") ? "English" : "中文";
  langButton.addEventListener("click", () => {
    const target = langPairs[pageName] || "index.html";
    window.location.href = target;
  });
}

const tipsEn = [
  "Choose reef-safe sunscreens free of oxybenzone.",
  "Support fisheries that follow sustainable practices.",
  "Reduce single-use plastics that can reach the ocean.",
  "Share coral stories to raise awareness in your community.",
];

const tipsCn = [
  "选择不含苯氧苯酮的友珊瑚防晒霜。",
  "支持遵守可持续捕捞的渔业。",
  "减少一次性塑料制品进入海洋。",
  "把珊瑚的故事分享给身边的人。",
];

const tipList = pageName.includes("-cn") ? tipsCn : tipsEn;

const tipTarget = document.querySelector("[data-daily-tip]");
if (tipTarget) {
  const today = new Date();
  const index = today.getDate() % tipList.length;
  tipTarget.textContent = tipList[index];
}

const heroSlider = document.querySelector("[data-hero-slider]");
if (heroSlider) {
  const track = heroSlider.querySelector("[data-slider-track]");
  const slides = Array.from(heroSlider.querySelectorAll("[data-slider-slide]"));
  const dots = Array.from(heroSlider.querySelectorAll("[data-slider-dot]"));
  let currentIndex = 0;
  let timer;

  const goToSlide = (index) => {
    if (!track) return;
    currentIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentIndex);
    });
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    timer = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      goToSlide(idx);
      startAutoPlay();
    });
  });

  heroSlider.addEventListener("mouseenter", stopAutoPlay);
  heroSlider.addEventListener("mouseleave", startAutoPlay);

  goToSlide(0);
  startAutoPlay();
}

