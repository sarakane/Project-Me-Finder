import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { MovieFinderService } from './movieFinderService';


function displayMovieResults(response) {
  if(response.results.length > 5) {
    for (let i = 0; i < 5; i++) {
      $("#title"+i).text(response.results[i].title);
      if (response.results[i].poster_path){
        $("#result"+i+" .image").html(`<img src=https://image.tmdb.org/t/p/w500${response.results[i].poster_path} >`);
      } else {
        $("#result"+i+" .image").empty();
      }
      $(".result"+i+"-summary").html(response.results[i].overview);
      $(".result"+i+"-summary").append(` <br> <br> Release date: ${response.results[i].release_date}<br><br>`);
      $("#result"+i).show();

    }
  } else {
    for (let i = 0; i < response.results.length; i++){
      $("#title"+i).text(response.results[i].title);
      if (response.results[i].poster_path){
        $("#result"+i+" .image").html(`<img src=https://image.tmdb.org/t/p/w500${response.results[i].poster_path} >`);
      } else {
        $("#result"+i+" .image").empty();
      }
      $(".result"+i+"-summary").html(response.results[i].overview);
      $(".result"+i+"-summary").append(` <br> <br> Release date: ${response.results[i].release_date}<br><br>`);
      $("#result"+i).show();
    }
  }
}

function displayPeopleResults(response) {
  if(response.results[0].known_for.length > 5) {
    for (let i = 0; i < 5; i++) {
      $("#title"+i).text(response.results[0].known_for[i].title);
      $("#result"+i+" .image").html(`<img src=https://image.tmdb.org/t/p/w500${response.results[0].known_for[i].poster_path} >`);
      $(".result"+i+"-summary").html(response.results[0].known_for[i].overview);
      $(".result"+i+"-summary").append(` <br> <br> Release date: ${response.results[0].known_for[i].release_date}<br><br>`);
      $("#result"+i).show();
    }
  } else {
    for (let i = 0; i < response.results[0].known_for.length; i++){
      $("#title"+i).text(response.results[0].known_for[i].title);
      $("#result"+i+" .image").html(`<img src=https://image.tmdb.org/t/p/w500${response.results[0].known_for[i].poster_path} >`);
      $(".result"+i+"-summary").html(response.results[0].known_for[i].overview);
      $(".result"+i+"-summary").append(` <br> <br> Release date: ${response.results[0].known_for[i].release_date}<br><br>`);
      $("#result"+i).show();
    }
  }
}

$(document).ready(function(){
  let srch = new MovieFinderService();
  let response;
  
  $("#movie-search-form").submit(function (event) {
    event.preventDefault();
    let title = $("#movie-search").val();
    $("#movie-search").val("");
    $("#result0, #result1, #result2, #result3, #result4").hide();
    $("#display-tag0, #display-tag1, #display-tag2, #display-tag3, #display-tag4").empty();
    $(".reset-tag").each(function(){
      $(this).prop("checked", false);
    });

    (async() => {
      response = await srch.searchMovie(title);
      displayMovieResults(response);
    })();
  });

  $("#people-search-form").submit(function (event) {
    event.preventDefault();
    let person = $("#people-search").val();
    $("#people-search").val("");
    $("#result0, #result1, #result2, #result3, #result4").hide();
    $("#display-tag0, #display-tag1, #display-tag2, #display-tag3, #display-tag4").empty();
    $(".reset-tag").each(function(){
      $(this).prop("checked", false);
    });

    (async() => {
      const response = await srch.searchPerson(person);
      displayPeopleResults(response);
    })();
  });
});

$("#add-to-list0").click(function(event) {
  event.preventDefault();
  let listTitle0 = document.getElementById("title0").innerHTML;
  $(".displayFavorite").append(`<li>${listTitle0}</li><br>`);
});

$("#add-to-list1").click(function(event) {
  event.preventDefault();
  let listTitle1 = document.getElementById("title1").innerHTML;
  $(".displayFavorite").append(`<li>${listTitle1}<li><br>`);
});

$("#add-to-list2").click(function(event) {
  event.preventDefault();
  let listTitle2 = document.getElementById("title2").innerHTML;
  $(".displayFavorite").append(`<li>${listTitle2}<li><br>`);
});

$("#add-to-list3").click(function(event) {
  event.preventDefault();
  let listTitle3 = document.getElementById("title3").innerHTML;
  $(".displayFavorite").append(`<li>${listTitle3}<li><br>`);
});

$("#add-to-list4").click(function(event) {
  event.preventDefault();
  let listTitle4 = document.getElementById("title4").innerHTML;
  $(".displayFavorite").append(`<li>${listTitle4}<li><br>`);
});

$("#button0").click(function(event) {
  event.preventDefault();
  $("#display-tag0").empty();
  $("input:checkbox[name=id-tags0]:checked").each(function() {
    const checkedtags = $(this).val();
    $("#display-tag0").append(`<br>#${checkedtags} `);
  });
});
    
$("#button1").click(function(event) {
  event.preventDefault();
  $("#display-tag1").empty();
  $("input:checkbox[name=id-tags1]:checked").each(function() {
    const checkedtags = $(this).val();
    $("#display-tag1").append(`<br>#${checkedtags}`);
  });
});

$("#button2").click(function(event) {
  event.preventDefault();
  $("#display-tag2").empty();
  $("input:checkbox[name=id-tags2]:checked").each(function() {
    const checkedtags = $(this).val();
    $("#display-tag2").append(`<br>#${checkedtags} `);
  });
});

$("#button3").click(function(event) {
  event.preventDefault();
  $("#display-tag3").empty();
  $("input:checkbox[name=id-tags3]:checked").each(function() {
    const checkedtags = $(this).val();
    $("#display-tag3").append(`<br>#${checkedtags} `);
  });
});

$("#button4").click(function(event) {
  event.preventDefault();
  $("#display-tag3").empty();
  $("input:checkbox[name=id-tags4]:checked").each(function() {
    const checkedtags = $(this).val();
    $("#display-tag4").append(`<br>#${checkedtags} `);
  });
});