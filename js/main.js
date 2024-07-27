// ====== Loading Page ======
const loading = document.getElementById("loading");
if (sessionStorage != null) {
  loading.classList.add(sessionStorage.loading);
}
setTimeout(() => {
  loading.classList.add("loading-close");
  sessionStorage.setItem("loading", "loading-close");
}, 1000);

// ====== Show And Hide Nav-Bar ======
const closeOpenIcon = document.querySelector(".icon");
closeOpenIcon.addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("show");
  document.querySelector(".icon").classList.toggle("show");
});

// ====== Change background Nav-Bar ======
const navBar = document.querySelector("nav");
const imageChange = document.querySelector("nav .image img");
window.addEventListener("scroll", () => {
  if (scrollY >= 55) {
    navBar.classList.add("light-animation");
    imageChange.setAttribute("src", "images/logo-dark.png");
  } else {
    navBar.classList.remove("light-animation");
    imageChange.setAttribute("src", "images/logo-light.png");
  }
});

// ====== Change Nav-Bar Links In Scroll ======
const links = document.querySelectorAll("nav ul li a");
const linkHome = document.getElementById("linkHome");
const linkAbout = document.getElementById("linkAbout");
const linkPortfolio = document.getElementById("linkPortfolio");
const linkServices = document.getElementById("linkServices");
const linkPricing = document.getElementById("linkPricing");
const linkBlog = document.getElementById("linkBlog");
const linkContact = document.getElementById("linkContact");
window.addEventListener("scroll", () => {
  if (scrollY >= -5 && scrollY <= 550) {
    links.forEach((allLink) => {
      linkHome.classList.add("active");
      allLink.classList.remove("active");
    });
  } else if (scrollY >= 550 && scrollY <= 1800) {
    links.forEach((allLink) => {
      linkAbout.classList.add("active");
      allLink.classList.remove("active");
    });
  } else if (scrollY >= 1800 && scrollY <= 4200) {
    links.forEach((allLink) => {
      linkPortfolio.classList.add("active");
      allLink.classList.remove("active");
    });
  } else if (scrollY >= 4200 && scrollY <= 5500) {
    links.forEach((allLink) => {
      linkServices.classList.add("active");
      allLink.classList.remove("active");
    });
  } else if (scrollY >= 5500 && scrollY <= 7000) {
    links.forEach((allLink) => {
      linkPricing.classList.add("active");
      allLink.classList.remove("active");
    });
  } else if (scrollY >= 7000 && scrollY <= 7800) {
    links.forEach((allLink) => {
      linkBlog.classList.add("active");
      allLink.classList.remove("active");
    });
  } else if (scrollY >= 7800) {
    links.forEach((allLink) => {
      allLink.classList.remove("active");
      linkContact.classList.add("active");
    });
  }
});

// ====== Auto Write Words ======
let x = 0;
const autoWrite = document.querySelector(".auto-write");
const autoWriteFn = () => {
  const title = "SUCCESS ";
  autoWrite.innerHTML = title.slice(0, x);
  x++;
  if (title.length < x) {
    x = 1;
  }
};
const SetIntervalAutoWrite = setInterval(autoWriteFn, 300);

// ====== Progress Width Style ======
const progress = document.querySelectorAll(".progress span");
window.addEventListener("scroll", () => {
  if (scrollY >= 500) {
    progress.forEach((element) => {
      element.style.width = element.dataset.width;
    });
  } else {
    progress.forEach((element) => {
      element.style.width = "0%";
    });
  }
});

// ====== Arrow Back Up ======
const backUp = document.querySelector(".back-up");
window.addEventListener("scroll", () => {
  if (scrollY >= 300) {
    backUp.style.display = "flex";
  } else {
    backUp.style.display = "none";
  }
});
backUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ====== Counter Increase Numbers ======
const numbersIncrease = document.querySelectorAll("#num");
numbersIncrease.forEach((item) => {
  let startValue = 0;
  let endValue = item.dataset.value;
  let counter = setInterval(() => {
    startValue++;
    item.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, 1000 / endValue);
});

// ====== Filter Images ======
const ulAttack = document.querySelectorAll(".portfolio ul li");
const boxs = document.querySelectorAll(".portfolio .items .item");
ulAttack.forEach((li) => {
  li.addEventListener("click", (e) => {
    // -----
    ulAttack.forEach((element) => {
      element.classList.remove("active");
    });
    li.classList.add("active");
    //------
    boxs.forEach((item) => {
      item.style.display = "none";
    });
    let boxShow = document.querySelectorAll(
      `.${e.target.textContent.toLowerCase()}`
    );
    boxShow.forEach((eo) => {
      eo.style.display = "block";
    });
  });
});

// ====== Open Model Image ======
const model = document.querySelector(".model");
const iconOpen = Array.from(document.querySelectorAll(".portfolio .items .item .layer i"));
const imageChangeModel = document.querySelector(".model .image-change");
const next = document.querySelector(".model .image-change #next");
const prev = document.querySelector(".model .image-change #prev");
const close = document.querySelector(".model .image-change #close");
let currentIndex;

iconOpen.forEach((item , index) => {
  item.addEventListener("click", (e) => {
    model.style.display = "flex";
    let imagePath = e.target.parentElement.parentElement.querySelector("img").getAttribute('src');
    imageChangeModel.style.backgroundImage = `url(${imagePath})`;
    currentIndex = index;
  });
});

next.addEventListener("click" , nextImage);
function nextImage() {
  currentIndex++
  if (currentIndex == iconOpen.length) {
    currentIndex = 0;
  }
  let imagePath = iconOpen[currentIndex].parentElement.parentElement.querySelector("img").getAttribute('src');
  imageChangeModel.style.backgroundImage = `url(${imagePath})`;
}

prev.addEventListener("click" , prevImage);
function prevImage() {
  currentIndex--
  if (currentIndex == -1) {
    currentIndex = iconOpen.length - 1;
  }
  let imagePath = iconOpen[currentIndex].parentElement.parentElement.querySelector("img").getAttribute('src');
  imageChangeModel.style.backgroundImage = `url(${imagePath})`;
}

close.addEventListener("click" , closeImage);
function closeImage() {
  model.style.display = "none";
}

document.addEventListener("keyup" , (e)=>{
  if (e.code == "ArrowRight") {
    nextImage();
  } else if (e.code == "ArrowLeft") {
    prevImage();
  }else if (e.code == "Escape") {
    closeImage();
  }
});

model.addEventListener("click" , (eo)=>{
  if (eo.target.getAttribute("id" ) == "model"){
    closeImage();
  }
});
