import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { MovieFinderService } from './movieFinderService';

function displayResults(response) {
  if(response.results.length > 5) {
    for (let i = 0; i < 5; i++) {
        $("#title"+i).text(response.results[i].title);
        $("#result"+i+" .image").append(`<img src=https://image.tmdb.org/t/p/w500${response.results[i].poster_path} >`);
        $(".result"+i+"-summary").append(`Release date: ${response.results[i].release_date}<br>`);
        $(".result"+i+"-summary").append(response.results[i].overview);
    }
  }
}

$(document).ready(function(){
  let srch = new MovieFinderService();

  (async() => {
    const response = await srch.searchMovie("Avengers");
    displayResults(response);
  })();
});


// <li> Here is your movie: ${movie} The official title is: ${response.results[0].title} ${response.results[0].overview}<br> <img src=https://image.tmdb.org/t/p/w500${response.results[0].poster_path} ></li>`);