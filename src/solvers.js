/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  

  
  
  // var solutions = []
  var solutions = [];
  // declare inner function that takes arguments (rowIndex, chessBoard) 
  var recurse = function recurse (rowIndex, chessBoard) {
    // create base case
    // if rowIndex === (n)
    if (n === 2) {debugger};
    if (rowIndex === n) {
      // push the chessBoard to solutions array
      solutions.push(chessBoard);
    } else {
    // else 
      // create a for loop from rowIndex to n - 1 (for each row...)
      for (var r = rowIndex; r < n; r++) {
        // create a for loop again from 0 to n -1 (for each column)
        for (var c = 0; c < n; c++) {
          // create a copy of the chessBoard
          var updatedChessBoard = chessBoard.slice();
  
          updatedChessBoard[r][c] = 1;
          var boardInstance = new Board(updatedChessBoard);
          // if the conflict check is false
            // invoke the recursive function with rowIndex plus 1, and updated chessBoard
          console.log(boardInstance.hasColConflictAt(c));
          if (!boardInstance.hasColConflictAt(c)) {
            recurse(rowIndex + 1, updatedChessBoard);
          }
        }
      }
    }
  };
   
  var emptyChessBoard = [];

  for (var i = 0; i < n; i++) {
    var emptyRow = [];
    for (var j = 0; j < n; j++) {
      emptyRow.push(0);
    }
    emptyChessBoard.push(emptyRow);
  }

  recurse(0, emptyChessBoard);
  console.log(solutions);
  var solution = solutions[0];       
         

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
