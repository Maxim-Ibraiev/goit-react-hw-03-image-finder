const axios = require('axios');

const key = '19175032-3cc6a7c5a21d8db9de954fc56';

function fetchImages(query, page = 1) {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(r => r.data.hits);
}

export { fetchImages };
