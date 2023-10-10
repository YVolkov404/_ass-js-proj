import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const instance = axios.create({
  q: `${search}`,
  category: `${category}`,
});

return axios.get('http://localhost:1234/', {
  params: {
    baseUrl: 'https://pixabay.com/api/',
    key: '39908765-01641b9876d1c1af0468ed447',
    q: `${search}`,
    image_type: 'vector',
    category: `${category}`,
    page: 1,
    per_page: 30,
  },
});

async function getVectors(q, category) {
  try {
    return axios.get('http://localhost:1234/', {
      params: {
        baseUrl: 'https://pixabay.com/api/',
        key: '39908765-01641b9876d1c1af0468ed447',
        q: `${search}`,
        image_type: 'vector',
        category: `${category}`,
        page: 1,
        per_page: 30,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}

const res = document.querySelector('h1');

res.addEventListener('click', onClick);

async function onClick(e) {
  e.currentTarget.textContent;

  instance.defaults.params.q = 'javascript';
  instance.defaults.params.category = 'coding';

  try {
    const { response } = await getVectors('summer', 'cities');
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}
