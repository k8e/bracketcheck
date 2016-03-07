var matchMap = {
  '{': '}',
  '[': ']',
  '(': ')'
};

function bracketCheck(testStrings) {
// Returns array of boolean values, indicating whether or not the
// inputted strings of brackets are closed according to closer map
  var results = [];

  // Go through all the strings in given array
  testStrings.forEach(function(str) {
    var closed = true;  // Are all brackets in the string closed?
    var currChar;       // Current character in string
    var openBracket;    // Currently open bracket
    var stack = [];     // Stack of open brackets

    // Go through every character in the string
    var chars = str.split('');
    for (var pos = 0; pos < str.length; pos++) {
      currChar = chars[pos];
      if (currChar == '{' || currChar == '[' || currChar == '(') {
        // Add open bracket to stack
        stack.push(currChar);
      } else if (currChar == '}' || currChar == ']' || currChar == ')') {
        openBracket = stack.pop();
        // Test if current character matches currently open bracket
        if ( !isMatch(openBracket, currChar, matchMap) ) {
          closed = false;
        }
      }
    }

    // Append results for this string
    if (closed && stack.length == 0) {  // (The open bracket stack must be empty)
      results.push(true);
    } else {
      results.push(false);
    }

  });
  return results;
}

function isMatch(opener, closer, openCloseMap) {
  // Returns true if given strings form a complete closed parenthesis,
  // based on given map
  return openCloseMap[opener] == closer;
}
