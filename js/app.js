// FOR THE COLLAPSEABLE IN THE NAVIGATION
document.addEventListener('DOMContentLoaded', function () {
  var homeLink = document.getElementById('home');
  
  homeLink.addEventListener('click', function() {
    var childLinks = document.querySelector('.child-links');
    childLinks.style.display = childLinks.style.display === 'block' ? 'none' : 'block';
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
