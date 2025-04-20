document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const menu = document.querySelector(".menu")

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active")

    // Animate hamburger to X
    const spans = menuToggle.querySelectorAll("span")
    spans.forEach((span) => span.classList.toggle("active"))
  })

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target) && menu.classList.contains("active")) {
      menu.classList.remove("active")

      const spans = menuToggle.querySelectorAll("span")
      spans.forEach((span) => span.classList.remove("active"))
    }
  })

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId !== "#") {
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          })
        }
      }
    })
  })

  // Parallax effect for blog images
  const blogPosts = document.querySelectorAll(".blog-post")

  window.addEventListener("scroll", () => {
    blogPosts.forEach((post) => {
      const image = post.querySelector(".blog-image")
      const scrollPosition = window.pageYOffset
      const postPosition = post.offsetTop
      const postHeight = post.offsetHeight

      if (scrollPosition + window.innerHeight > postPosition && scrollPosition < postPosition + postHeight) {
        const parallaxValue = (scrollPosition - postPosition) * 0.2
        image.style.transform = `translateY(${parallaxValue}px)`
      }
    })
  })
})
