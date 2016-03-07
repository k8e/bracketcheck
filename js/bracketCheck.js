var matchMap = {
  '{': '}',
  '[': ']',
  '(': ')'
};

function bracketCheck(testStrings) {
// Returns array of boolean values, indicating whether or not the
// inputted strings of brackets are closed according to closer map
  var results = [];

  testStrings.forEach(function(str) {
    var closed = true;  // Initially assume all brackets are closed
    var currChar;       // Current character in string
    var openBracket;    // Currently open bracket
    var stack = [];     // Stack of open brackets

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
    if (closed && stack.length == 0) {
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
