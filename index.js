const form = document.querySelector('form');
const results = document.querySelector('#search-results ul');
form.addEventListener('submit', function(event) )
  event.preventDefault();
  
  const interests = this.elements.interests.value;
  const location = this.elements.location
