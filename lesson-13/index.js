const urlHotelsContent = 'https://fe-student-api.herokuapp.com/api';

fetch(urlHotelsContent + '/hotels/popular') 
  .then(response => response.json())
  .then(function(data) {

    const hotelsInform = document.getElementById('hotels-inform');

    data.forEach(function(elem) {
      const content = `
        <div>
          <a href="#"><img class='hotels__inform-img' src="${elem.imageUrl}" alt="${elem.name}"></a>
          <p class='hotels__inform-name'>${elem.name}</p>
          <p class='hotels__inform-city'>${elem.city}</p>
          <p class='hotels__inform-city'>${elem.country}</p>
        </div>
      `;

      hotelsInform.innerHTML += content;
    });
  })
  
  .catch(function(err) {
    alert('Fetch problem: ' + err.message);
  });