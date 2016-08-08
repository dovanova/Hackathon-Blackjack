
var cardValue = [1,2,3,4,5,6,7,8,9,10,11,12,13];


var cardSuit = ["Club","Diamond","Heart","Spade"];


//creates all of the cards in the deck by suit
var cards = function(){

var cardSorted = [];

for(i=0; i<cardSuit.length;i++){
	cardSorted[i] = [];
	
	for(j=0; j<cardValue.length;j++){
		cardSorted[i][j] = cardValue[j] + " " + cardSuit[i];
	}
}
console.log(cardSorted);
}


