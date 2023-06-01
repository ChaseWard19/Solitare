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

const cardClass = document.querySelectorAll('.card')
cardClass.forEach(card => {
    for (iterate=0; iterate<8; iterate++) {
        let row2Array = []
        row2Array.push(card)
        console.log(row2Array)
    }
})