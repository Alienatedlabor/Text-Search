//declarations
const sampleInput = document.getElementById('sample');
const quaesitumInput = document.getElementById('quaesitum');
const searchButton = document.getElementById('search-button');
const highlightSpan = document.getElementsByClassName('highlight');
//assigning event listeners
searchButton.addEventListener("click", submitClick)
//functions and shit
//split is splitting up data with each space, essentially allowing word-search
function mainCheck(query){
  var thingsSearchedForAmount = 0;
  if (quaesitumInput.value.length > 2){
    query = query.split(" ");
  }
  for (let i = 0; i < query.length; i++) {
    const currentQuery = query[i];
    if (currentQuery === quaesitumInput.value) {
      thingsSearchedForAmount++ 
    }  
  } 
  alert (`${quaesitumInput.value} occurs ${thingsSearchedForAmount} times!`) 
}
function subCheck(query){
  if (query.includes(quaesitumInput.value)){
    alert (`${quaesitumInput.value} occurs!`)
  }
}
//subcheck maincheck allows phrase search
function submitClick(){
  var query = sampleInput.value;
  if (quaesitumInput.value.includes(" ")){
    subCheck(query);
  } else {
    mainCheck(query);
  }
}/*replace query with query & highlight
highlight class made, span in html*/
let highlightQuery = query.replace(query, highlightSpan)