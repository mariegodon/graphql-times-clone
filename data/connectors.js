import axios from 'axios';

const Reviews = {
  getAll() {
    return axios.get('http://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=1785e30e33534822a5e1dfd32edd2647')
      .then(res => {
        return res.data.results;
      });
  },
};

export { Reviews };