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
 
  var solutions = [];
  // declare inner function that takes arguments (rowIndex, chessBoard) 
  var recurse = function recurse (rowIndex, chessBoard) {
    // create base case
    if (solutions.length === 1) {
      return;
    }
    if (rowIndex === n) {
      solutions.push(chessBoard);
    } else {
      for (var c = 0; c < n; c++) {
        // create a copy of the chessBoard
        var updatedChessBoard = chessBoard.map(function(arr) {
          return arr.slice();
        });

        updatedChessBoard[rowIndex][c] = 1;
        var boardInstance = new Board(updatedChessBoard);
        // if the conflict check is false
        // invoke the recursive function with rowIndex plus 1, and updated chessBoard
        if (!boardInstance.hasColConflictAt(c)) {
          recurse(rowIndex + 1, updatedChessBoard);
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
  var solution = solutions[0];            

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var solutions = [];
  // declare inner function that takes arguments (rowIndex, chessBoard) 
  var recurse = function recurse (rowIndex, chessBoard) {
    // create base case
    if (rowIndex === n) {
      // push the chessBoard to solutions array
      solutions.push(chessBoard);
    } else {
      for (var c = 0; c < n; c++) {
        // create a copy of the chessBoard
        var updatedChessBoard = chessBoard.map(function(arr) {
          return arr.slice();
        });

        updatedChessBoard[rowIndex][c] = 1;
        var boardInstance = new Board(updatedChessBoard);
        // if the conflict check is false
        // invoke the recursive function with rowIndex plus 1, and updated chessBoard
        if (!boardInstance.hasColConflictAt(c)) {
          recurse(rowIndex + 1, updatedChessBoard);
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
  var solutionCount = solutions.length;       
         
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var solutions = [];
  // declare inner function that takes arguments (rowIndex, chessBoard) 
  var recurse = function recurse (rowIndex, chessBoard) {
    // create base case
    if (solutions.length === 1) {
      return;
    }

    if (rowIndex === n) {
      // push the chessBoard to solutions array
      solutions.push(chessBoard);
    } else {
      for (var c = 0; c < n; c++) {
        // create a copy of the chessBoard
        var updatedChessBoard = chessBoard.map(function(arr) {
          return arr.slice();
        });

        updatedChessBoard[rowIndex][c] = 1;
        var boardInstance = new Board(updatedChessBoard);
        // if the conflict check is false
        // invoke the recursive function with rowIndex plus 1, and updated chessBoard
        if (!boardInstance.hasColConflictAt(c) && !boardInstance.hasMajorDiagonalConflictAt(c - Math.min(c, rowIndex), rowIndex - Math.min(c, rowIndex)) && !boardInstance.hasMinorDiagonalConflictAt(c + Math.min(n - 1 - c, rowIndex), rowIndex - Math.min(n - 1 - c, rowIndex))) {
          recurse(rowIndex + 1, updatedChessBoard);
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
  if (solutions.length === 0) {
    return {'n': n};
  }
  var solution = solutions[0];       
         
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

  var solutions = [];
  // declare inner function that takes arguments (rowIndex, chessBoard) 
  var recurse = function recurse (rowIndex, chessBoard) {
    // create base case
    if (rowIndex === n) {
      // push the chessBoard to solutions array
      solutions.push(chessBoard);
    } else {
      for (var c = 0; c < n; c++) {
        // create a copy of the chessBoard
        var updatedChessBoard = chessBoard.map(function(arr) {
          return arr.slice();
        });

        updatedChessBoard[rowIndex][c] = 1;
        var boardInstance = new Board(updatedChessBoard);
        // if the conflict check is false
        // invoke the recursive function with rowIndex plus 1, and updated chessBoard
        if (!boardInstance.hasColConflictAt(c) && !boardInstance.hasMajorDiagonalConflictAt(c - Math.min(c, rowIndex), rowIndex - Math.min(c, rowIndex)) && !boardInstance.hasMinorDiagonalConflictAt(c + Math.min(n - 1 - c, rowIndex), rowIndex - Math.min(n - 1 - c, rowIndex))) {
          recurse(rowIndex + 1, updatedChessBoard);
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

  var solutionCount = solutions.length;       
         
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
