function bracketCheck(brackStrings) {
// Returns array of YES/NO values, indicating whether or not the
// inputted strings of brackets are closed

  var bracketMatch = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  var results = [];
  // Go through all the bracket strings
  brackStrings.forEach(function(brackStr) {
    var stack = [];
    var closed = true;
    var brackets = brackStr.split('');
    for (var i = 0; i < brackStr.length; i++) {
      if (brackets[i] == '{' || brackets[i] == '[' || brackets[i] == '(') {
        stack.push(brackets[i]);
      } else if (brackets[i] == '}' || brackets[i] == ']' || brackets[i] == ')') {
        var openBracket = stack.pop();
        // Test for matching closing bracket to most recently opened bracket
        if (!(bracketMatch[openBracket] == brackets[i])) {
          closed = false;
        }
      }
    }
    // Put together results for this bracket string
    if (closed && stack.length == 0) {
      results.push(true);
    } else {
      results.push(false);
    }
  });
  return results;
}
