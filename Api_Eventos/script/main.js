const cpets = document.getElementById('pets-container');
const url = `https://api.petfinder.com/v2/animals`;
let mascotas = [];

function todo() {
  fetch('https://api.petfinder.com/v2/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: 'ipYUMpbzMKDh7vZ9FjfxyaDkqaMC4ghpA8puAkiLe3sppXVRT5',
      client_secret: 'rdTZTyL44guvU7wXMRzoboGXjiQmS8jArW0qX2IW'
    })
  })
    .then(res => res.json())
    .then(data => {
      const token = data.access_token;
      fetch(url, {
        method: 'GET',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          mascotas = data.animals;
          renderMascotas();
          setupFavoriteHandler();
        });
    });
}

function renderMascotas() {
  cpets.innerHTML = '';

  mascotas.forEach(mascota => {
    let imageSrc = mascota.photos[0]?.full || mascota.photos[0]?.large || mascota.photos[0]?.medium || mascota.photos[0]?.small || '';

    cpets.innerHTML += `
      <div class="card" id="cd" data-id="${mascota.id}">
        <div class="card-image">
          <img src="${imageSrc}" alt="Foto de ${mascota.name}">
          <button class="favorite" id="btF" data-id="${mascota.id}">&#9829;</button>
        </div>
        <div class="card-content">
          <div class="header">
            <h2>${mascota.name}</h2>
            <span class="age">2 Años</span>
          </div>
          <p class="description">${mascota.description || 'Sin descripción disponible.'}</p>
          <button class="more-button">Conocer Más</button>
        </div>
      </div>
    `;
  });
}

document.addEventListener('DOMContentLoaded', todo);

function setupFavoriteHandler() {
  cpets.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('favorite')) {
      let idMascota = e.target.getAttribute('data-id');
      console.log('ID de mascota favorita:', idMascota);
    }
  });
}