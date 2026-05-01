/* =========================================================
   STICKY HEADER SHADOW ON SCROLL
========================================================= */

const header = document.getElementById("main-header");

if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 10);
  });
}


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {

  const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

      if (entry.isIntersecting) {

        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 60);

        revealObserver.unobserve(entry.target);
      }
    });

  }, { threshold: 0.12 });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
}


/* =========================================================
   ADD TO CART BUTTON SUCCESS EFFECT
========================================================= */

const pinkButtons = document.querySelectorAll(".btn-pink");

pinkButtons.forEach(button => {

  button.addEventListener("click", function () {

    const originalText = this.textContent.toLowerCase();

    if (originalText.includes("cart")) {

      this.textContent = "✓ Added!";
      this.style.background =
        "linear-gradient(135deg,#4caf50,#388e3c)";

      setTimeout(() => {
        this.textContent = "Add to cart";
        this.style.background = "";
      }, 1400);
    }
  });
});


/* =========================================================
   HERO SLIDER
========================================================= */

const slider = document.getElementById("slider");

if (slider) {

  const slides = slider.children;

  let currentSlide = 0;
  const totalSlides = slides.length;

  // Display current slide
  function showSlide(index) {
    slider.style.transform =
      `translateX(-${index * 100}%)`;
  }

  // Next slide
  function nextSlide() {
    currentSlide =
      (currentSlide + 1) % totalSlides;

    showSlide(currentSlide);
  }

  // Previous slide
  function prevSlide() {
    currentSlide =
      (currentSlide - 1 + totalSlides)
      % totalSlides;

    showSlide(currentSlide);
  }

  // Auto slide
  let autoSlide =
    setInterval(nextSlide, 3000);

  // Reset auto slide timer
  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 3000);
  }

  // Next button
  const nextBtn =
    document.getElementById("next");

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetAutoSlide();
    });
  }

  // Previous button
  const prevBtn =
    document.getElementById("prev");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetAutoSlide();
    });
  }
}


/* =========================================================
   IMAGE SWAP ANIMATION
========================================================= */

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

if (img1 && img2) {

  let swapped = false;

  setInterval(() => {

    if (!swapped) {

      img1.classList.remove("left-0", "top-0");
      img1.classList.add("left-[150px]", "top-[40px]");

      img2.classList.remove(
        "left-[150px]",
        "top-[40px]"
      );

      img2.classList.add("left-0", "top-0");

    } else {

      img1.classList.add("left-0", "top-0");
      img1.classList.remove(
        "left-[150px]",
        "top-[40px]"
      );

      img2.classList.add(
        "left-[150px]",
        "top-[40px]"
      );

      img2.classList.remove("left-0", "top-0");
    }

    swapped = !swapped;

  }, 3000);
}


/* =========================================================
   CATEGORY SLIDER
========================================================= */

const categorySlider =
  document.getElementById("categorySlider");

if (categorySlider) {

  let categoryIndex = 0;

  const totalItems = 6;
  const visibleItems = 4;
  const maxIndex =
    totalItems - visibleItems;

  // Next category
  const nextCategoryBtn =
    document.getElementById("nextCat");

  if (nextCategoryBtn) {

    nextCategoryBtn.onclick = () => {

      if (categoryIndex < maxIndex) {

        categoryIndex++;

        categorySlider.style.transform =
          `translateX(-${categoryIndex * 25}%)`;
      }
    };
  }

  // Previous category
  const prevCategoryBtn =
    document.getElementById("prevCat");

  if (prevCategoryBtn) {

    prevCategoryBtn.onclick = () => {

      if (categoryIndex > 0) {

        categoryIndex--;

        categorySlider.style.transform =
          `translateX(-${categoryIndex * 25}%)`;
      }
    };
  }
}


/* =========================================================
   FEATURE BOX AUTO SWITCH
========================================================= */

const featureBoxes =
  document.querySelectorAll(".feature-box");

if (featureBoxes.length > 0) {

  let activeFeature = 0;

  function showNextFeature() {

    featureBoxes.forEach(box => {
      box.classList.remove("active");
    });

    featureBoxes[activeFeature]
      .classList.add("active");

    activeFeature =
      (activeFeature + 1)
      % featureBoxes.length;
  }

  showNextFeature();

  setInterval(showNextFeature, 3000);
}


/* =========================================================
   TESTIMONIAL SLIDER
========================================================= */

const testimonialSlider =
  document.getElementById("testiSlider");

if (testimonialSlider) {

  let testimonialIndex = 0;
  const totalTestimonials = 2;

  // Update slide
  function updateTestimonialSlide() {

    testimonialSlider.style.transform =
      `translateX(-${testimonialIndex * 100}%)`;
  }

  // Next testimonial
  const nextTestimonialBtn =
    document.getElementById("nextBtn");

  if (nextTestimonialBtn) {

    nextTestimonialBtn.onclick = () => {

      testimonialIndex =
        (testimonialIndex + 1)
        % totalTestimonials;

      updateTestimonialSlide();
    };
  }

  // Previous testimonial
  const prevTestimonialBtn =
    document.getElementById("prevBtn");

  if (prevTestimonialBtn) {

    prevTestimonialBtn.onclick = () => {

      testimonialIndex =
        (testimonialIndex - 1 + totalTestimonials)
        % totalTestimonials;

      updateTestimonialSlide();
    };
  }

  // Auto slide
  setInterval(() => {

    testimonialIndex =
      (testimonialIndex + 1)
      % totalTestimonials;

    updateTestimonialSlide();

  }, 3000);
}


/* =========================================================
   SHOP DROPDOWN MENU
========================================================= */

const shopBtn =
  document.getElementById("shopBtn");

const shopDropdown =
  document.getElementById("shopDropdown");

if (shopBtn && shopDropdown) {

  // Toggle dropdown
  shopBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    shopDropdown.classList.toggle("hidden");
  });

  // Close dropdown outside click
  document.addEventListener("click", (e) => {

    if (
      !shopBtn.contains(e.target) &&
      !shopDropdown.contains(e.target)
    ) {
      shopDropdown.classList.add("hidden");
    }
  });
}


/* =========================================================
   FILTER TOGGLE
========================================================= */

function toggleFilter(id) {

  const filterElement =
    document.getElementById(id);

  if (filterElement) {
    filterElement.classList.toggle("hidden");
  }
}


/* =========================================================
   SORT DROPDOWN
========================================================= */

const sortBtn =
  document.getElementById("sortBtn");

const sortDropdown =
  document.getElementById("sortDropdown");

const selectedSort =
  document.getElementById("selectedSort");

if (
  sortBtn &&
  sortDropdown &&
  selectedSort
) {

  // Toggle dropdown
  sortBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    sortDropdown.classList.toggle("hidden");
  });

  // Close dropdown outside click
  document.addEventListener("click", (e) => {

    if (
      !sortBtn.contains(e.target) &&
      !sortDropdown.contains(e.target)
    ) {
      sortDropdown.classList.add("hidden");
    }
  });
}

// Select sort option
function selectSort(value) {

  if (selectedSort && sortDropdown) {

    selectedSort.textContent = value;
    sortDropdown.classList.add("hidden");
  }
}


/* =========================================================
   CART CALCULATION
========================================================= */

const cartItems =
  document.querySelectorAll(".cart-item");

if (cartItems.length > 0) {

  // Update cart totals
  function updateCart() {

    let subtotal = 0;

    cartItems.forEach(item => {

      const price =
        parseInt(item.dataset.price);

      const quantity =
        parseInt(
          item.querySelector(".quantity")
          .textContent
        );

      const total = price * quantity;

      item.querySelector(".item-total")
        .textContent = `₹${total}`;

      subtotal += total;
    });

    const shipping = 50;
    const gst = 50;

    const finalTotal =
      subtotal + shipping + gst;

    const subtotalElement =
      document.getElementById("subtotal");

    const finalTotalElement =
      document.getElementById("finalTotal");

    if (subtotalElement) {
      subtotalElement.textContent =
        `₹${subtotal}`;
    }

    if (finalTotalElement) {
      finalTotalElement.textContent =
        `₹${finalTotal}`;
    }
  }

  // Quantity button events
  cartItems.forEach(item => {

    const increaseBtn =
      item.querySelector(".increase");

    const decreaseBtn =
      item.querySelector(".decrease");

    const quantityElement =
      item.querySelector(".quantity");

    // Increase quantity
    increaseBtn?.addEventListener("click", () => {

      quantityElement.textContent =
        parseInt(quantityElement.textContent) + 1;

      updateCart();
    });

    // Decrease quantity
    decreaseBtn?.addEventListener("click", () => {

      let quantity =
        parseInt(quantityElement.textContent);

      if (quantity > 1) {

        quantityElement.textContent =
          quantity - 1;

        updateCart();
      }
    });
  });

  // Initial calculation
  updateCart();
}


/* =========================================================
   PLACE ORDER LOADER
========================================================= */

function placeOrder() {

  const loader =
    document.getElementById("loader");

  if (loader) {

    loader.classList.remove("hidden");

    document.body.classList.add(
      "overflow-hidden"
    );

    setTimeout(() => {
      window.location.href =
        "checkout.html";
    }, 2000);
  }
}
