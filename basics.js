// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( 15 );
//Return type is "number". All types of numerical values are
//Return type is "Number". All objects that represent numbers are of type "Number"

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( "hello" );
//Return type is String
//Return type is "String". This object is a String object.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( [ "dog", "cat", "horse" ] );
//This is type "Object". An array is a object and not one of the primitive data types.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( NaN );
//Return value of this is "Number". Even though it is not a number it is a numeric type and something that results from operations with actual numbers.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburger" + "s";
//This operation concatenates an "s" to "hamburger"

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburgers" - "s";
//You can't use the "-" operand on Strings so it returns "Nan"

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"johnny" + 5;
//Using forced conversions this turns 5 into a string and concatenates it to "johnny" to get "johnny5"

// What is the return value of the below code sample? Provide a sentence or two of explanation.
99 * "luftbaloons";
//This returns "Nan" because you can't perform an arithmetic operations on a string.

// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop();
numbers.push( 10 );
numbers.unshift( 3 );

//[3, 2, 4, 6, 10]

// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );
//This returns [dot, dash, pause, dash, dot]. The join method command adds dash between the string values in the morse array and turns it in to a string. The split method divdes the morMorse string be the space
//delimiter and puts it into an array.

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles );
bands.unshift( stones );
bands[ bands.length - 1 ].pop();
bands[0].shift();
bands[1][3] = "Ringo";
//The push and unshift methods add the beatles and stones array tothe bands array. The bands array now has two arrays in it. The next line removes the last element from the second array in the bands array.
