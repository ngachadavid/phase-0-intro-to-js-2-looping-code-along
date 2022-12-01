function writeCards(name, events) {
    let thankYouCards = [];
    for (let i = 0; i < name.length; i++) {
        thankYouCards.push( `Thank you, ${name[i]}, for the wonderful ${events} gift!`);
    }
    return thankYouCards;
}

function countDown(num) {
    while(num > 0) {
        console.log(num);
        num -=1;
    }
    console.log(num);
}