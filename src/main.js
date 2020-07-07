import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { MovieFinderService } from './movieFinderService';

$(document).ready(function(){
  let srch = new MovieFinderService();

  (async() => {
    const response = await srch.searchMovie("Avengers");
    displayResults(response);
  })();
});
