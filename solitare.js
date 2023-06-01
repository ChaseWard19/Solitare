// shuffle
let deck = [
    // clubs
    ['ace', 'clubs'], ['two', 'clubs'], ['three', 'clubs'], ['four', 'clubs'], ['five', 'clubs'], ['six', 'clubs'], ['seven', 'clubs'], ['eight', 'clubs'], ['nine', 'clubs'], ['ten', 'clubs'], ['jack', 'clubs'], ['queen', 'clubs'], ['king', 'clubs'],
    // spades
    ['ace', 'spades'], ['two', 'spades'], ['three', 'spades'], ['four', 'spades'], ['five', 'spades'], ['six', 'spades'], ['seven', 'spades'], ['eight', 'spades'], ['nine', 'spades'], ['ten', 'spades'], ['jack', 'spades'], ['queen', 'spades'], ['king', 'spades'],
    // diamonds
    ['ace', 'diamonds'], ['two', 'diamonds'], ['three', 'diamonds'], ['four', 'diamonds'], ['five', 'diamonds'], ['six', 'diamonds'], ['seven', 'diamonds'], ['eight', 'diamonds'], ['nine', 'diamonds'], ['ten', 'diamonds'], ['jack', 'diamonds'], ['queen', 'diamonds'], ['king', 'diamonds'],
    // hearts
    ['ace', 'hearts'], ['two', 'hearts'], ['three', 'hearts'], ['four', 'hearts'], ['five', 'hearts'], ['six', 'hearts'], ['seven', 'hearts'], ['eight', 'hearts'], ['nine', 'hearts'], ['ten', 'hearts'], ['jack', 'hearts'], ['queen', 'hearts'], ['king', 'hearts']
]

// shuffle
let currentIndex = deck.length,  randomIndex;
while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [deck[currentIndex], deck[randomIndex]] = [
    deck[randomIndex], deck[currentIndex]];
}

// pre-game set tableau 
let cardClass = document.querySelectorAll('.card')
cardClass.forEach(card => {
    card.style.backgroundImage = 'url(/'+deck[0][1]+'/'+deck[0][0]+'.png)'
    console.log('url(/'+deck[0][1]+'/'+deck[0][0]+'.png)')
    card.style.backgroundRepeat = 'no-repeat'
    card.style.borderRadius = '7%'
    card.style.position = 'relative'
    deck.splice(0, 1)
})

let cardId
// get id of clicked card
cardClass = document.getElementsByClassName("card")
const cardPressed = e => {
    cardId = e.target.id
}
for (let card of cardClass) {
    card.addEventListener("click", cardPressed)
}

// make card follow mouse
document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body')
    clickedCard = document.getElementById(cardId);
    let left = e.offsetX;
    let top = e.offsetY;
    clickedCard.style.left = left + 'px';
    clickedCard.style.top = top + 'px';
})