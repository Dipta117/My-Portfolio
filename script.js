
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });
});

document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('active');
});
 const video = document.getElementById('bgVideo');
  video.playbackRate = 0.48; 
