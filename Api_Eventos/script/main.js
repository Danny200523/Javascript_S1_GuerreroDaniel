const cpets = document.getElementById('pets-container');
const url = `https://api.petfinder.com/v2/animals`;

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
    fetch(`https://cors-anywhere.herokuapp.com/https://api.petfinder.com/v2/animals`,{
    method: 'GET',
    headers: {
      'accept':'*/*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    }
  })
    .then(response => response.json())
    .then(data => {
      cpets.innerHTML = `
      <div class="card">
  <div class="card-image">
    <img src="https://images.unsplash.com/photo-1601758123927-196d3f13b6c9" alt="Foto de Coco">
    <button class="favorite">&#9829;</button>
  </div>
  <div class="card-content">
    <div class="header">
      <h2>Coco</h2>
      <span class="age">2 Años</span>
    </div>
    <p class="description">
      Coco es un pájaro colorido que puede aprender a hablar y silbar melodías.
    </p>
    <button class="more-button">Conocer Más</button>
  </div>
</div>
      `;
    });
})