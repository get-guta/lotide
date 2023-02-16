const assertEqual = require('../assertEqual');
const arrayHead = require('../head');

assertEqual(arrayHead([5,7,9]), 5);
assertEqual(arrayHead(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(arrayHead([]),undefined);
assertEqual(arrayHead([5]),5);