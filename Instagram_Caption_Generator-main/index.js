
// Creates a random value between 0 and 5 
function randomNumberGenerator(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return rand; 
}

// Shuffles the order of array 
function shuffle(arr) {
    let currentIndex = arr.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = randomNumberGenerator(arr);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }

  return arr;
}


function sadInstaQuotes() {
    const sadQuotes = ["A multitude of people, yet loneliness creep", "I’m not okay, but it’s okay", "Pretending to be happy, hoping that the saying “fake it till you make it” actualizes",
    "Clouds let rain go when they get too heavy. The same is true for humans", "Don’t cry over someone who wouldn’t cry over you", "Dear Past, stop tapping me on the shoulders, I don’t wanna look back",
    "Sometimes you laugh because you’ve got no more room for crying.", "It’s sad when someone you know becomes someone you knew", 
    "Disappointed but not surprised",  "Wish I could turn back time"]; 

    let index = randomNumberGenerator(sadQuotes); 
    let sad = shuffle(sadQuotes); 

    let output = sad[index];  
    document.getElementById("quote").innerHTML= output; 
}

function happyInstaQuotes() {
    const happyQuotes = ["Me, myself and I", "The way to get started is to quit talking and begin doing.", "Success is a collection of problems solved",
    "Say yes to new adventures", "Be the type of person you want to meet", "Selfie in paradise", "A smile is a curve that sets everything straight", "The biggest adventure you can take is to live the life of your dreams",
    "Last name ever, first name greatest", "One of the most effective ways to cheer yourself up is to cheer someone else up", "Life is too short to be anything but happy", 
    "The happiest people don't have the best of everything; they make the best of everything", "Be the type of person you want to meet","I literally have to remind myself all the time that being afraid of things going wrong isn't the way to make things go right",
    "My life isn’t perfect, but it’s the best thing that’s ever happened to me", "Each life is made up of mistakes and learning, waiting and growing, practicing patience and being persistent", "You’re only here for a short visit. Don’t hurry, don’t worry. And be sure to smell the flowers along the way",
    "You have one life. Live it! Enjoy it!", "There are sunrise and a sunset every single day, and they’re absolutely free. Don’t miss so many of them", "Celebrating with my favourites!",
    "God is really creative, I mean… Just look at me", "Happiness is the richest thing we will ever own"];

    let index = randomNumberGenerator(happyQuotes); 
    let happy = shuffle(happyQuotes); 

    let output = happy[index];  
    document.getElementById("quote").innerHTML= output; 
}

function funnyInstaQuotes() {
    const funnyQuotes = ["Vodka may not be the answer but it’s worth a shot", "My favorite exercise is a cross between a lunge and a crunch ... I call it lunch", "I need a six-month holiday, twice a year", "There are 16-year-olds competing at the Olympics and some of us (me) still push on pull doors",
    "Friday ... Our second-favorite F word", "Friends buy you lunch. Best friends eat your lunch", "First rule of Sundays: If you can’t reach it from your couch, you don’t need it", "You think nothing is impossible? Try getting me out of bed before 12 PM",
    "If you want to be sure that you never forget your wife’s birthday, just try forgetting it once", "I talk a lot, so I've learned to just tune myself out...", "I am running away from my responsibilities and it feels good", "I'm not superstitious, but I am a little stitious",
    "For my new year's resolution, I gave up drinking... during the week", "I got nothing", "Dear MATH, stop asking to find your X, she’s not coming back", "With great girlfriend comes great expenses", "Do I run? Yes, Out of time, patients and money", "Wine + dinner = winner",
    "Before you marry a person, you should first make them use a computer with slow Internet to see who they really are", "Insomnia sharpens your math skills because you spend all night calculating how much sleep you’ll get if you’re able to ‘fall asleep right now", "There is no sunrise so beautiful that it is worth waking me up to see i",
    "I never feel more alone than when I’m trying to put sunscreen on my back", "Here’s something to think about: How come you never see a headline like ‘Psychic Wins Lottery'" ]; 

    let index = randomNumberGenerator(funnyQuotes); 
    let funny = shuffle(funnyQuotes); 

    let output = funny[index];  
    document.getElementById("quote").innerHTML= output; 

}

function romanticInstaQuotes () {
    const romanticQuotes = ["Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me", "Home is wherever I’m with you", "You stole my heart, but I’ll let you keep it", "Life isn’t perfect, but we are", "Together is my favorite place to be",
    "Best thing that’s ever happened to me", "Thank you, Tinder", "Even when I want to kill you, I love you", "I like you even when I'm hungry", "I love you more than pizza, and that's saying a lot", "You're my end and my beginning. Even when I lose, I'm winning", "You've stolen a pizza of my heart",
    "Here's our submission for the best couple award", "You can't blame gravity for falling in love", "If I had a flower every time I thought of you, I could walk in my garden forever", "Thanks for being so good at killing spiders", "In my totally unbiased opinion, we’re the cutest couple ever", 
    "It all started with Netflix and Chill", "Hey, we clean up pretty well!", "You stole my heart, but I’ll let you keep it", "I’d like to keep loving you this way forever", "You have this incredible way of making my heart happy", "I love you more than I have ever found a way to say to you", "I want to be with you until my last page",
    "I must have wished for you so hard and so often that you had no choice but to come true", "Your voice is my favorite sound", "I may not be your first date, kiss, or love – but I want to be your last everything", "Being in love with you makes every morning worth getting up for", "The brightness of my day doesn’t depend on the amount of sunshine. Everything depends on your smile",
    "Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive", "You are my best friend, my human diary, and my other half. You mean the world to me and I love you"]; 

    let index = randomNumberGenerator(romanticQuotes); 
    let romantic = shuffle(romanticQuotes); 
    
    let output = romantic[index];  
    document.getElementById("quote").innerHTML= output; 
}

// Function takes userinput and stores it into userInput variable, and a conditional statment is made on which array to output
function outputQuote() {
    let userInput = document.getElementById("textBox").value;
    let result = userInput.toLowerCase()                // Forces the userinput to be lowercase to ensure consistancy
    
    if (result === "happy" || result === "joyful") {
        happyInstaQuotes(); 
    }else if(result === "sad" || result === "depressed") {
        sadInstaQuotes(); 
    }else if (result === "love" || result === "romantic") {
        romanticInstaQuotes(); 
    }else if (result === "funny") {
        funnyInstaQuotes(); 
    }else {
        document.getElementById("quote").innerHTML = "Erorr, not a valid input. Try a happy, funny or sad caption"
    }
}

// creating variables from selectors
let quoteText = document.querySelector("#quote");
let quoteButton = document.querySelector("button"); 
let speechButton = document.querySelector(".speech"); 
let synth = speechSynthesis;
let copyButton = document.querySelector(".copy"); 
let instaButton = document.querySelector(".insta")

// The SpeechSynthesisUtterance is a web speech API that represent a speech request
speechButton.addEventListener("click", function(){
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText}`);
        synth.speak(utterance);
        
});

//Function to copy quote into user's clipboard 
copyButton.addEventListener("click", function(){
    //writeText() property writes the specified text string to the system clipboard
    navigator.clipboard.writeText(quoteText.innerText); 
});

// Opens instagram on a new page when button is clicked 
instaButton.addEventListener("click", function(){
    let instagramURL = "https://www.instagram.com/?hl=en"; 
    window.open(instagramURL, "_blank"); 
}); 
