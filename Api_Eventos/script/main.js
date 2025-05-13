const cpets = document.getElementById('pets-container');
const favoritesContainer = document.getElementById('favorites-container');
const url = `https://api.petfinder.com/v2/animals`;
let mascotas = []; // Guardamos las mascotas cargadas

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
          renderFavoritos();
        });
    });
}

function renderMascotas() {
  cpets.innerHTML = '';
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

  mascotas.forEach(mascota => {
    let imageSrc = mascota.photos[0]?.full || mascota.photos[0]?.large || mascota.photos[0]?.medium || mascota.photos[0]?.small || '';
    let isFavorito = favoritos.includes(mascota.id.toString());

    cpets.innerHTML += `
      <div class="card" data-id="${mascota.id}">
        <div class="card-image">
          <img src="${imageSrc}" alt="Foto de ${mascota.name}">
          <button class="favorite ${isFavorito ? 'favorited' : ''}" data-id="${mascota.id}">&#9829;</button>
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

function renderFavoritos() {
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  favoritesContainer.innerHTML = '';

  if (favoritos.length === 0) {
    favoritesContainer.innerHTML = '<p>No has agregado mascotas favoritas aún.</p>';
    return;
  }

  favoritos.forEach(id => {
    const mascota = mascotas.find(m => m.id.toString() === id);
    if (mascota) {
      let imageSrc = mascota.photos[0]?.full || mascota.photos[0]?.large || mascota.photos[0]?.medium || mascota.photos[0]?.small || '';
      favoritesContainer.innerHTML += `
        <div class="card" data-id="${mascota.id}">
          <div class="card-image">
            <img src="${imageSrc}" alt="Foto de ${mascota.name}">
            <button class="favorite favorited" data-id="${mascota.id}">&#9829;</button>
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
    }
  });
}

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('favorite')) {
    const id = e.target.dataset.id;
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    if (favoritos.includes(id)) {
      favoritos = favoritos.filter(fav => fav !== id);
      e.target.classList.remove('favorited');
    } else {
      favoritos.push(id);
      e.target.classList.add('favorited');
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    renderFavoritos();
  }
});

document.addEventListener('DOMContentLoaded', todo);
