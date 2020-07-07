import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { MovieFinderService } from './movieFinderService';


function displayMovieResults(response) {
  if(response.results.length > 5) {
    for (let i = 0; i < 5; i++) {
      $("#title"+i).text(response.results[i].title);
      $("#result"+i+" .image").html(`<img src=https://image.tmdb.org/t/p/w500${response.results[i].poster_path} >`);
      $(".result"+i+"-summary").html(`Release date: ${response.results[i].release_date}<br>`);
      $(".result"+i+"-summary").html(response.results[i].overview);
      $("#result"+i).show();

    }
  } else {
    for (let i = 0; i < response.results.length; i++){
      $("#title"+i).text(response.results[i].title);
      $("#result"+i+" .image").html(`<img src=https://image.tmdb.org/t/p/w500${response.results[i].poster_path} >`);
      $(".result"+i+"-summary").html(`Release date: ${response.results[i].release_date}<br>`);
      $(".result"+i+"-summary").html(response.results[i].overview);
      $("#result"+i).show();
    }
  }
}

function displayPeopleResults(response) {
  if(response.results[0].known_for.length > 5) {
    for (let i = 0; i < 5; i++) {
      $("#title"+i).text(response.results[0].known_for[i].title);
      $("#result"+i+" .image").html(`<img src=https://image.tmdb.org/t/p/w500${response.results[0].known_for[i].poster_path} >`);
      $(".result"+i+"-summary").html(`Release date: ${response.results[0].release_date}<br>`);
      $(".result"+i+"-summary").html(response.results[0].overview);
      $("#result"+i).show();
    }
  } else {
    for (let i = 0; i < response.results[0].known_for.length; i++){
      $("#title"+i).text(response.results[0].known_for[i].title);
      $("#result"+i+" .image").html(`<img src=https://image.tmdb.org/t/p/w500${response.results[0].known_for[i].poster_path} >`);
      $(".result"+i+"-summary").html(`Release date: ${response.results[0].known_for[i].release_date}<br>`);
      $(".result"+i+"-summary").html(response.results[0].known_for[i].overview);
      $("#result"+i).show();
    }
  }
}

$(document).ready(function(){
  let srch = new MovieFinderService();
  $("#movie-search-form").submit(function (event) {
    event.preventDefault();
    let title = $("#movie-search").val();
    $("#movie-search").val("");

    (async() => {
      const response = await srch.searchMovie(title);
      displayMovieResults(response);
    })();
  });

  $("#people-search-form").submit(function (event) {
    event.preventDefault();
    let person = $("#people-search").val();
    $("#people-search").val("");

    (async() => {
      const response = await srch.searchPerson(person);
      displayPeopleResults(response);
    })();
  });
});


// <li> Here is your movie: ${movie} The official title is: ${response.results[0].title} ${response.results[0].overview}<br> <img src=https://image.tmdb.org/t/p/w500${response.results[0].poster_path} ></li>`);