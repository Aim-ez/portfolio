const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
    card.addEventListener("click", function() {
        card.querySelector(".card-inner").classList.toggle("flipped");
    });
});



/**
 * Below is how to only get the FIRST card to flip
 */

//const card = document.querySelector(".card");

//card.addEventListener("click", function(){
  //  card.querySelector(".card-inner").classList.toggle("flipped");
//});