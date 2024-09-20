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


// FOR THE HAMBURGER MENU AND PERSISTENT NAVIGATION
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const sidebar = document.querySelector('.sidebar');
  const navLinks = document.querySelectorAll('.sidebar a');

  // Check localStorage to see if the hamburger menu should be open
  if (localStorage.getItem('menuState') === 'open') {
    sidebar.classList.add('nav-active');
    burger.classList.add('toggle');
  }

  // Toggle the hamburger menu and save its state
  burger.addEventListener('click', function () {
    sidebar.classList.toggle('nav-active');
    burger.classList.toggle('toggle');

    // Save the menu state in localStorage
    if (sidebar.classList.contains('nav-active')) {
      localStorage.setItem('menuState', 'open');
    } else {
      localStorage.setItem('menuState', 'closed');
    }
  });
});


