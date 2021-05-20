//random number
function generateRandNum (num){
    return Math.floor(Math.random()*num)
}
//collect quotes
const quotes = {
    message: ["Do Something Great!",
            "Do What You Love!",
            "I feel like making dreams come true.",
            "Every day is a fresh start.",
            "Stop Waiting!"],

    address: ["./img/DoSomethingGreat.jpeg",
              "./img/DoWhatYouLove.jpeg",
              "./img/DreamComeTrue.jpeg" ,
              "./img/freshStart.jpeg",
              "./img/StopWaiting.jpeg"]
}

//return random quote function

const randomQuote = () => {
    let randNum = generateRandNum(quotes.message.length);
    document.getElementById("quote").innerHTML = quotes.message[randNum]
    document.getElementById("image").src = quotes.address[randNum]
}

