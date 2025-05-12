const cpets = document.getElementById('pets-container');
const url = `https://api.petfinder.com/v2/animals`;

function todo(){
  fetch('https://api.petfinder.com/v2/oauth2/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: 'ipYUMpbzMKDh7vZ9FjfxyaDkqaMC4ghpA8puAkiLe3sppXVRT5',
    client_secret: 'rdTZTyL44guvU7wXMRzoboGXjiQmS8jArW0qX2IW'
  })
})
  .then(res => res.json())
  .then(data => {
    const token = data.access_token;
    console.log('Token recibido:', token);
    fetch(`${url}`,{
    method: 'GET',
    headers: {
      'accept':'*/*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      for (let i = 0; i < data.animals.length; i++) {
        let imageSrc = '';
        if (data.animals[i].photos && data.animals[i].photos.length > 0) {
          if (data.animals[i].photos[0].full) {
            imageSrc = data.animals[i].photos[0].full;
          } else if (data.animals[i].photos[0].large) {
            imageSrc = data.animals[i].photos[0].large;
          } else if (data.animals[i].photos[0].medium) {
            imageSrc = data.animals[i].photos[0].medium;
          } else if (data.animals[i].photos[0].small) {
            imageSrc = data.animals[i].photos[0].small;
          }
        }
        cpets.innerHTML += `
      <div class="card">
        <div class="card-image">
          <img src="${imageSrc}" alt="Foto de ${data.animals[i].name}">
          <button class="favorite">&#9829;</button>
        </div>
        <div class="card-content">
          <div class="header">
            <h2>${data.animals[i].name}</h2>
            <span class="age">2 Años</span>
          </div>
          <p class="description">
          ${data.animals[i].description}
          </p>
          <button class="more-button">Conocer Más</button>
        </div>
      </div>
      `;
      }});
    });
}
document.addEventListener('DOMContentLoaded', todo);