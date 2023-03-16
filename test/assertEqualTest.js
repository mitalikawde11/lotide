const assertEqual = require('../assertEqual');

// Test cases
assertEqual("Lighthouse Labs", "Bootcamp");   // Failed
assertEqual(1, 1);            // Passed
assertEqual("Good", "Good");  // Passed
assertEqual(3, 4);            // Failed      
assertEqual("6", 6);          // Failed      