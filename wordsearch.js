const wordSearch = (letters, word) => {
    // tranpose the letter matrix
    // add rows of the tranposed to original matrix
    const transLetters = transpose(letters);
    letters = letters.concat(transLetters);
    const horizontalJoin = letters.map(ls => ls.join(''))
    
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    if (word === "") return true



    return false
};

const transpose = function (matrix) {
    let newMatrix = [];
    // i = # of arrays - original rows
    for (let j = 0; j < matrix[0].length; j++) {
      newMatrix.push([]);
    }
    //console.log(newMatrix.length);
    for (let i = 0; i < matrix.length; i++) {
      // j = # of values in array - original columns
      for (let j = 0; j < matrix[0].length; j++) {
        newMatrix[j][i] = matrix[i][j];
      }
    }
    return newMatrix;
  };

  
module.exports = wordSearch
const letters = [
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ];

const transLetters = transpose(letters);
const joined = letters.concat(transLetters);
console.log(joined);


const transpose = function(matrix) {
  // Create a new matrix to hold the transposed values
  let newMatrix = [];

  // Populate the new matrix with arrays
  for (let j = 0; j < matrix[0].length; j++) {
    newMatrix.push([]);
  }

  // Populate the new matrix with transposed values
  for (let i = 0; i < matrix.length; i++) {
    // j = # of values in array - original columns
    for (let j = 0; j < matrix[0].length; j++) {
      newMatrix[j][i] = matrix[i][j];
    }
  }

  return newMatrix;
};

const wordSearch = (letters, word) => {
  // Transpose the letter matrix
  // Add rows of the transposed to original matrix
  const transLetters = transpose(letters);
  letters = letters.concat(transLetters);
  const horizontalJoin = letters.map(ls => ls.join(''));
  
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  
  if (word === "") return true;

  return false;
};

module.exports = wordSearch;

// Test the function
const letters = [
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
];

const transLetters = transpose(letters);
const joined = letters.concat(transLetters);
console.log(joined);

