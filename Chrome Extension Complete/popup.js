
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    revision: '2023-02-22',
    Authorization: 'Klaviyo-API-Key pk_3edfd0d82c9ac29db8f2eec294b047e3ca'
  }
};

fetch('https://a.klaviyo.com/api/lists/', options)
  .then(response => response.json())
  .then((response) => {
    const listResponse = response.data;
    const finder = document.getElementById('listNames');
    
    for (let i = 0; i < listResponse.length; i++) {
      const campaignItem = listResponse[i];
      const campaignName = campaignItem.attributes.name;
      const pElement = document.createElement('p');
      pElement.textContent = campaignName;
      finder.appendChild(pElement);
    }
  })
  .catch((error) => {});

