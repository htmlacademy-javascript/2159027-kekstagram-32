const BASE_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data'
};
const ErrorText = {
  GET_DATA: 'Упс, что-то погло не так'
};

const getData = () => fetch(
  `${BASE_URL}${Route.GET_DATA}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(ErrorText.GET_DATA);
    }
    return response.json();
  });


export {getData};
