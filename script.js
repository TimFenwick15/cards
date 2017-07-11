
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


let lockToTop = false;
const infoStyles = function() {

  const info = document.getElementById('info');

  if (lockToTop && document.body.scrollTop === 0) {
    // Apply the floating style
    info.setAttribute('style', 'width: calc(80% + 20px);height: 150px;left: 50%;transform: translate(-50%, 0);margin: 10 auto;');
    lockToTop = false;
  }
  if (!lockToTop && document.body.scrollTop !== 0) {
    // Apply the locked style
    info.setAttribute('style', 'width: 100%;height: 50px;position: fixed;margin: 0;');
    lockToTop = true;
  }
}
setInterval(infoStyles, 100);

