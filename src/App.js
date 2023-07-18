import React from 'react';
import ReactDOM from 'react-dom';
import { choice, remove } from './Helpers';
import { fruits } from './Foods';

const randomFruit = choice(fruits);

const messages = [
  `I'd like one ${randomFruit}, please.`,
  `Here you go: ${randomFruit}`,
  'Delicious! May I have another?',
];

remove(fruits, randomFruit);

const remainingFruits = fruits.length;

const remainingMessage = `I'm sorry, we're all out. We have ${remainingFruits} left.`;

messages.push(remainingMessage);

console.log(messages.map((message) => message));

;

export default App;

// This file should import the fruits and both array helpers. It should then:

// - Randomly draw a fruit from the array
// - Log the message “I’d like one *RANDOMFRUIT*, please.”
// - Log the message “Here you go: *RANDOMFRUIT*”
// - Log the message “Delicious! May I have another?”
// - Remove the fruit from the array of fruits
// - Log the message “I’m sorry, we’re all out. We have *FRUITSLEFT* left.”