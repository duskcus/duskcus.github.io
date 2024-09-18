function myFunction() {
    // JavaScript for collapsible functionality
    document.getElementById('home').addEventListener('click', function() {
      var childLinks = document.querySelector('.child-links');
      childLinks.style.display = childLinks.style.display === 'block' ? 'none' : 'block';
    });
}
