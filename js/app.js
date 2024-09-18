document.addEventListener('DOMContentLoaded', function () {
  var homeLink = document.getElementById('home');
  
  homeLink.addEventListener('click', function() {
    var childLinks = document.querySelector('.child-links');
    childLinks.style.display = childLinks.style.display === 'block' ? 'none' : 'block';
  });
});
