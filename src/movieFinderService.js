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
  async searchGenre(searchQuery) {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${searchQuery}`)
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

  async searchMovieId(movieID) {
    return fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.API_KEY}&language=en-US`)
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