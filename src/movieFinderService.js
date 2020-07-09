export class MovieFinderService {

  async searchMovie(searchQuery) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchQuery}&language=en-US`)
      .then(function(response) {
        if (response.ok && response.status === 200) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .catch(function(error) {
        return error;
      })
      .then(function(jsonifiedResponse) {
        return jsonifiedResponse;
      });
  }

  async searchPerson(searchQuery) {
    return fetch(`https://api.themoviedb.org/3/search/person?api_key=${process.env.API_KEY}&query=${searchQuery}&language=en-US`)
      .then(function(response) {
        if (response.ok && response.status === 200) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .catch(function(error) {
        return error;
      })
      .then(function(jsonifiedResponse) {
        return jsonifiedResponse;
      });
  }
}