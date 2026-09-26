const ratio = 0.1;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

function handleIntersect(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("ease-in-visible");
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersect, options);

document.querySelectorAll(".ease-in").forEach(function (r) {
  observer.observe(r);
});

const privacy = document.getElementById("privacyScrollbar");
const toggleCheckbox = document.getElementById("display-privacy");

toggleCheckbox.addEventListener("change", function () {
  if (this.checked) {
    privacy.style.display = "block";
  } else {
    privacy.style.display = "none";
  }
});
