const input = require('sync-input');

/**
 * Represents a simple terminal chatbot.
 */
class ChattyBot {
    /**
     * Creates a new instance of ChattyBot.
     * @param {string} botName - The name of the chatbot.
     * @param {number} birthYear - The year the chatbot was created.
     */
    constructor(botName = "", birthYear = 0) {
        this.botName = botName;
        this.birthYear = birthYear;
        this.userName = null;
        this.userAge = null;
    }

    /**
     * Prints the chatbot's name and birth year to the terminal.
     * @returns {void}
     */
    printSelfIntroduction() {
        console.log(`Hello! My name is ${this.botName}.`);
        console.log(`I was created in ${this.birthYear}.`);
    }

    /**
     * Prompts the user to input their name and greets them.
     * @returns {void}
     */
    gatherUserName() {
        this.userName = input("Please, remind me your name.\n");
        console.log(`What a great name you have, ${this.userName}!`);
    }

    /**
     * Prompts the user to input remainders of their age divided by 3, 5, and 7,
     * and calculates their age using the Chinese Remainder Theorem.
     * @returns {void}
     */
    guessUserAge() {
        console.log("Let me guess your age.");
        console.log("Enter remainders of dividing your age by 3, 5 and 7.");
        const remainder3 = Number(input());
        const remainder5 = Number(input());
        const remainder7 = Number(input());

        this.userAge = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105;
        console.log(`Your age is ${this.userAge}; that's a good time to start programming!`);
    }

    /**
     * Prompts the user to enter a number and counts from 0 up to that number.
     * @returns {void}
     */
    proveCountingSkills() {
        console.log(`Now I will prove to you that I can count to any number you want.`);
        const endingNumber = Number(input());
        for (let i = 0; i <= endingNumber; i++) {
            console.log(`${i} !`);
        }
        console.log("Completed, have a nice day!");
    }

    /**
     * Tests the user's basic programming knowledge with a multiple-choice question.
     * Repeats the question until the correct answer is provided.
     * @returns {void}
     */
    testUserKnowledge() {
        console.log("Let's test your programming knowledge.");
        console.log("Why do we use methods?");
        console.log("1. To repeat a statement multiple times.");
        console.log("2. To decompose a program into several small subroutines.");
        console.log("3. To determine the execution time of a program.");
        console.log("4. To interrupt the execution of a program.");

        function receiveAndAnalyseResult() {
            const userAnswer = Number(input());
            if (userAnswer === 2) {
                console.log("Congratulations, have a nice day!");
            } else {
                console.log("Please, try again.");
                receiveAndAnalyseResult();
            }
        }

        receiveAndAnalyseResult();
    }
}

const chatty = new ChattyBot("Martin", 2001);

chatty.printSelfIntroduction()
chatty.gatherUserName()
chatty.guessUserAge()
chatty.proveCountingSkills()
chatty.testUserKnowledge()