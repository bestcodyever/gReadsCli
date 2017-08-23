$(document).ready(() => {})
// const url = 'http://localhost:8080/'
const url = 'https://damp-wildwood-87158.herokuapp.com/'
$(`.lb1`).click(function() {
  window.location.replace('./books.html')
})
$(`.lb2`).click(function() {
  window.location.replace('./authors.html')
})
$(`#booksBtn`).click(function() {
  window.location.replace('./books.html')
})
$(`#authorsBtn`).click(function() {
  console.log('hi');
  window.location.replace('./authors.html')
})

$.get(url, function(books){
  for (var i = 0; i < books.length; i++) {
    $(`.listOfBooks`).append(
    `<div class="card" style="width: 28rem; margin-right: 1vw;margin-bottom: 1vw">
  <img class="card-img-top" src="${books[i].cover_url}" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">${books[i].title}</h4>
    <p class="card-text">${books[i].description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Genre: ${books[i].genre}</li>
    <li class="list-group-item">Id: ${books[i].id}</li>
  </ul>
</div>`
  )}
})

$.get(url + 'authors', function(authors){
  console.log(authors);
  for (var i = 0; i < authors.length; i++) {
    $(`.listOfAuthors`).append(
    `<div class="card" style="width: 28rem; margin-right: 1vw;margin-bottom: 1vw">
  <img class="card-img-top" src="${authors[i].portrait_url}" alt="Card image cap" style="height: 30vw;">
  <div class="card-body">
    <h4 class="card-title">${authors[i].first_name} ${authors[i].last_name}</h4>
    <p class="card-text">${authors[i].biography}</p>
  </div>
</div>`
  )}
})
