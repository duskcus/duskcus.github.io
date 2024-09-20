// FOR THE COLLAPSEABLE IN THE NAVIGATION
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.parent').forEach(function (link) {
    link.addEventListener('click', function() {
      // Get the target ID from the data attribute
      var targetId = this.getAttribute('data-target');
      var childLinks = document.getElementById(targetId);

      // Toggle the display of the corresponding child-links
      if (childLinks.style.display === 'block') {
        childLinks.style.display = 'none';
      } else {
        childLinks.style.display = 'block';
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

