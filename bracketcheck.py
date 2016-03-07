str = "{}[]()((([)))"
match = {'{':'}','[':']','(':')'}
bracket_stack = []
unclosed = []
line_count = 0
lines = []
for char in str:
    if ( char=='\n' ) : line_count += 1
    if ( char=='{' or char=='[' or char=='(' ) :
        bracket_stack.append({'char': char, 'line': line_count})
    elif ( char=='}' or char==']' or char==')' ) :
        open_bracket = bracket_stack.pop()
        if ( not (char==match[open_bracket['char']]) ) :
            unclosed.append(open_bracket)
while ( len(bracket_stack) > 0 ) :
    for bracket in bracket_stack :
        unclosed.append(bracket_stack.pop())
if ( len(unclosed) > 0 ) :
    print "{} unclosed brackets".format(len(unclosed))
    for bracket in unclosed :
        print "at {}".format(bracket['line'])
