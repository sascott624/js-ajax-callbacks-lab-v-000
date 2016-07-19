function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
  // #user-details-partial is the partial template
}


function search(){
  $("#search").on('click', function(){
    var searchTerm = $("#search-terms").val();
    searchRepositories(searchTerm);
  })
}

function searchRepositories(searchTerm){
  $.get("https://api.github.com/search/repositories?q=" + searchTerm, function(response){
    $('#results').html(response);
    console.log(response);
  })
}


$(document).ready(function (){
  handlebarsSetup()
  search();
});
