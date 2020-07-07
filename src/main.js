import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { MovieFinderService } from './movieFinderService';

function createCard(info) {
  //title
  //release_date
  //overview
  //poster_path
}

function displayResults(response) {
  if(response.results.length > 5) {
    for (let i = 0; i < 5; i++) {

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
