/*
 *
 *
 *
 *
 */

 let regex = {
   any_digit : '\\d',
   any_non_digit_char : '\\D',
   any_char : '.',
   period : '\\.',
   chars_a_to_z : '[a-z]',
   nums_0_to_9 : '[0-9]',
   alpha_numeric_range : '[A-Za-z0-9_]',
   any_alphanumeric : '\\w',
   any_non_alphanumeric : '\\W'
 }

for (x in regex) {
  console.log(regex[x]);
}

/*
 * regex, matching specified characters
 * https://regexone.com/lesson/matching_characters?
 *
 * there is a method for matching specific characters using regular expressions, by defining them inside square brackets. for example, the pattern [abc] will only match a single a, b, or c letter and nothing else
 * regex : [cmf]an, will return 'can', 'man
, and 'fan'
 */

/*
 * regex, excluding specific characters
 *
 * use a similar expression to exclude specific characters, square brackets [] and the ^ hat
 *
 * regex : [^b]og will return 'hog' and 'dog', but avoid 'bog'
 */

/*
 * character ranges
 * when using square bracket notation, there is a shorthand for matching a range of sequential characters by using a dash '-'
 *
 * for example, the patter [0-6] will only accept any single digit character from zero to six, and nothing else
 *
 * and likewise, [^n-p] will only match any single character except for letters n to p
 *
 * multiple character ranges can also be used in the same set of brackets, along with individual characters. an example of this is the alphanumeric \w metacharacter which is equivalent to the character range [A-Za-z0-9_] and oten used to match characters in english text
 */

/*
 * repetition syntax
 *
 * if we want to match some number of an element... use repetition syntax
 * for example, a{3} will match the 'a' character exactly three times. certain regex engines will even allow specification of a range for this repetition; such that a{1, 3} will match the character no more than 3 times, but no less than once
 *
 * examples :
 * w{3}     , match three w's
 * [wxy]{5} , match five characters, each of which can be a w, x, or y
 * .{2, 6}  , match between 2 and 6 of any character
 *
 */
