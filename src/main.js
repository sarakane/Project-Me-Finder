import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { MovieFinderService } from './movieFinderService';


$(document).ready(function(){
  let srch = new MovieFinderService();

  (async() => {
    const response = await srch.searchGenre("action");
    const response2 = await srch.searchMovieId(706510);
    console.log(response);
    console.log(response2);
  })();
});

