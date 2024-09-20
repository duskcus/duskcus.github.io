// FOR THE COLLAPSEABLE IN THE NAVIGATION
document.addEventListener('DOMContentLoaded', function () {
  // Function to handle the toggle of the collapsible section
  document.querySelectorAll('.parent').forEach(function (link) {
    // Get the target ID from the data attribute
    var targetId = link.getAttribute('data-target');
    var childLinks = document.getElementById(targetId);
    // Check localStorage to see if this section should be open
    if (localStorage.getItem(targetId) === 'open') {
      childLinks.style.display = 'block'; // Keep it open if stored as 'open'
    } else {
      childLinks.style.display = 'none'; // Otherwise, it's closed
    }
    // Add click event listener to toggle the section
    link.addEventListener('click', function() {
      if (childLinks.style.display === 'block') {
        childLinks.style.display = 'none';
        localStorage.setItem(targetId, 'closed'); // Save the closed state
      } else {
        childLinks.style.display = 'block';
        localStorage.setItem(targetId, 'open');   // Save the open state
      }
    });
  });
});


// SETS NUMBERS FOR EACH LINE IN THE CODESNIPPET
document.addEventListener("DOMContentLoaded", function() {
  const codeSnippets = document.querySelectorAll(".codesnippet-wrapper");
  codeSnippets.forEach(function(wrapper) {
    const codeElement = wrapper.querySelector(".codesnippet code");
    const lineNumberElement = wrapper.querySelector(".line-numbers");
    const codeLines = codeElement.innerText.split('\n').length;
    for (let i = 1; i <= codeLines; i++) {
      const lineNumber = document.createElement("span");
      lineNumber.textContent = i;
      lineNumberElement.appendChild(lineNumber);
    }
  });
});


// HAMBURGER MENU
const navSlide = () => {
    const Burger = document.querySelector('.burger');
    const Nav = document.querySelector('.sidebar'); // Target sidebar for toggling
    const NavLinks = document.querySelectorAll('.sidebar a');
    Burger.addEventListener('click', () => {
        // Toggle sidebar visibility
        Nav.classList.toggle('nav-active');
        // Animate the links
        NavLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 0.5}s`;
            }
        });
        // Animate burger icon
        Burger.classList.toggle('toggle');
    });
}
navSlide();

