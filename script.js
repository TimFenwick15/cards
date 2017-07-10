console.log('working');

const renderCard = function(text) {
  const card = document.getElementById('cards');
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = text;
  card.appendChild(div);
}
let cardData = [];
fetch('http://localhost:1337/card')
  .then(res => res.json())
  .then(res => res.forEach(renderCard));
  //.then(res => res.forEach(alert));

