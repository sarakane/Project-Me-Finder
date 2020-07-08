import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { MovieFinderService } from './movieFinderService';

function displayResults(response) {
  //title
  //release_date
  //overview
  //poster_path

  if(response.results.length > 5) {
    for (let i = 0; i < 5; i++) {
      $("#title"+i).text(response.results[i].title);
      $("#result"+i+" .image").html(`<img src=https://image.tmdb.org/t/p/w500${response.results[i].poster_path} >`);
      $(".result"+i+"-summary").html(`Release date: ${response.results[i].release_date}<br>`);
      $(".result"+i+"-summary").html(response.results[i].overview);
    }
  }
/*   $("#title0").text(response.results[0].title);
  $("#result0 .image").append(`<img src=https://image.tmdb.org/t/p/w500${response.results[0].poster_path} >`);
  $(".result0-summary").append(`Release date: ${response.results[0].release_date}<br>`);
  $(".result0-summary").append(response.results[0].overview); */
}

$(document).ready(function(){
  let srch = new MovieFinderService();
  
  (async() => {
    const response = await srch.searchMovie();
    displayResults(response);

  })();


  $("#add-to-list0").click(function(event) {
    event.preventDefault();
    console.log();

  });
  $("#add-to-list1").click(function() {
    
  });
  $("#add-to-list2").click(function() {
    
  });
  $("#add-to-list3").click(function() {
    
  });
  $("#add-to-list4").click(function() {
    
  });




  $("#button0").click(function(event) {
    event.preventDefault();

    $("input:checkbox[name=id-tags0]:checked").each(function() {
      const checkedtags = $(this).val();
      $("#result0-summary").append(checkedtags);
    });
  });
    
  $("#button1").click(function(event) {
    event.preventDefault();
    $("input:checkbox[name=id-tags1]:checked").each(function() {
      const checkedtags = $(this).val();
      $("#result0-summary").append(checkedtags);
      
    });
  });

  $("#button2").click(function(event) {
    event.preventDefault();
    $("input:checkbox[name=id-tags2]:checked").each(function() {
      const checkedtags = $(this).val();
      $("#result0-summary").append(checkedtags);
    });
  });

  $("#button3").click(function(event) {
    event.preventDefault();
    $("input:checkbox[name=id-tags3]:checked").each(function() {
      const checkedtags = $(this).val();
      $("#result0-summary").append(checkedtags);
    });
  });

  $("#button4").click(function(event) {
    event.preventDefault();
    $("input:checkbox[name=id-tags4]:checked").each(function() {
      const checkedtags = $(this).val();
      $("#result0-summary").append(checkedtags);
    });
  });
  
});

// /* <li> Here is your movie: ${movie} The official title is: ${response.results[0].title} ${response.results[0].overview}<br> <img src=https://image.tmdb.org/t/p/w500${response.results[0].poster_path} ></li>`);}