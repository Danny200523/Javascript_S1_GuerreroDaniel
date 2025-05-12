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
      cpets.innerHTML += `
      <div class="card">
        <div class="card-image">
          <img src="${data.animals[0].photos[0].full}" alt="Foto de Coco">
          <button class="favorite">&#9829;</button>
        </div>
        <div class="card-content">
          <div class="header">
            <h2>${data.animals[0].name}</h2>
            <span class="age">2 Años</span>
          </div>
          <p class="description">
          ${data.animals[0].description}
          </p>
          <button class="more-button">Conocer Más</button>
        </div>
      </div>
      `;
    });
})
}
document.addEventListener('DOMContentLoaded', todo);