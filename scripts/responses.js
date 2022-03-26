function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } 
    else if (input == "paper") {
        return "scissors";
    } 
    else if (input == "scissors") {
        return "rock";
    }

    //greeting responses
    if(input=="good morning"){
        return "good morning";
    }
    else if(input=="good afternoon"){
        return "good afternoon";
    }
    else if(input=="good night"){
        return "good night";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } 
    else if (input == "goodbye" || input=="bye") {
        return "Talk to you later!";
    } 
    else {
        return "Try asking something else!";
    }
}

    