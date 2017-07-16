// regular expressions

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
 *
 */
