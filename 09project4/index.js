const cards = document.querySelectorAll(".card");
console.log(cards);

var isFlipped = false;
var firstcard ;
var secondCard;

 cards.forEach((card)=>card.addEventListener("click",flip))

function flip(){
    // console.log("card flippped")
    this.classList.add("flip")
    if(!isFlipped){
        isFlipped = true;
        firstcard = this
    }else{
        secondCard = this
        console.log(firstcard)
        console.log(secondCard)

        checkIt();
    }
}
function checkIt(){
    // console.log("Checking....")
    if(firstcard.dataset.data-image == secondCard.dataset.data-image){
        success();
    }else{
        fail();
    }

}
function success(){
    // console.log("Succes")
    firstcard.removeEventListener('click',flip);
    secondCard.removeEventListener('click',flip);
    reset();
}

function fail(){
    // console.log("Failed")
    setTimeout(()=>{
        firstcard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    },1000)

}

function reset(){
    isFlipped = false;
    firstcard = null;
    secondCard = null;
}

// shuffling

(function shuffle(){
    cards.forEach((card)=>{
        var index =Math.floor(Math.random()*16)
        card.style.order = index;
    })
})();