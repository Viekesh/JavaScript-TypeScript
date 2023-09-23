"use strict";



// A regular expression is a search pattern that forms a search pattern.

// The search pattern can be used for text search and text replace operation.

// When you search data in a text you can use this search pattern to describe what you are searching for.

// A regular expression is a single character or a more complicated pattern.



// Syntax :

// /pattern/modifiers;

// Ex :

// /w3schools/i;

// Ex explained:

// /w3schools/i  is a regular expression.

// w3schools  is a pattern (to be used in a search).

// i  is a modifier (modifies the search to be case-insensitive).

// In JavaScript, regular expressions are often used with the two string methods: search() and replace().

// The search() method uses an expression to search for a match, and returns the position of the match.

// The replace() method returns a modified string where the pattern is replaced.



// ex 1:

// search() method :
// The search() method searches a string for a specified value and returns the position of the match:

let text1 = "Visit W3Schools!";

let searchtext = text1.search("W3School");

console.log("search method : ", searchtext);



// search() method with regular expression to do a case-insensitive search for "w3schools" in a string :

let text2 = "Visit WW3Schools";

let searchtext2 = text2.search(/w3schools/i);

console.log("search text 2 : ", searchtext2);









// ex 2:

// replace() method

let text3 = "Visit Microsoft";

let result = text3.replace("Microsoft", "W3School");

console.log("replace method : ", result);



// replace method with regular expression

let text4 = "Visit Microsoft!";

let result2 = text4.replace(/microsoft/i, "w3school");

console.log("result 2 : ", result2)

// Regular expression arguments (instead of string arguments) can be used in the methods above.
// Regular expressions can make your search much more powerful (case insensitive for example).









// Regular Expression modifiers :

// ex 3:

// i : perform case-insensitive matching

let text22 = "visit w3school";

let result22 = text22.match(/w3school/i);

// console.log("case insensitive match : ", result22);
console.log(`ex 3: case insensitive matching: ${result22}`);








// ex 4:

// g : perform global match (find all matches rather than stopping after the first match)

let text33 = "Is this all there is?";

let result33 = text33.match(/is/g);

// console.log("global match : ", result33);
console.log(`ex 4: global match: ${result33}`);









// ex 5:

// m : perform multiline matching

// Do a multiline search for "is" at the beginning of each line in a string:

let text44 = "\nIs th\nis it?";

let result44 = text44.match(/^is/m);

// console.log("multiline matching :", result44);
console.log(`ex 5: multiline matching: ${result44}`);









// Let’s say you have a variable that stores a paragraph such as the one you see on the screen.

// Your task is to process this paragraph and extract the email addresses from the text to be collected and used for sending newsletters or for flagging them for review.

// In such a case, you need a way to detect the e-mail addresses as a pattern. This is where regular expressions come in.

// Regular Expressions or RegEx in short is a language-agnostic way of defining patterns in text, which can then be used for detection, extraction, and manipulation. 

// A regex pattern is a set of special characters enclosed within a pair of forward slashes.

// Take the following for example. This pattern will identify the words ‘wall’ and ‘fell’. Breaking down this pattern is easy.

// "/\w{2}ll/gi"

// here forward slash is only used for separating things

// backward slash w character

// It is known as the word character class and its job is simply select a word which includes alphanumeric and underscore.

// The digit 2 in a pair of curly braces is known as quantifier. Together we are looking for a combination of two alphanumeric characters that are followed by a pair of ELLs. The character class and quantifier will match the WA of wall and FE of fell.

// The gi that you see after the ending forward slash are flags which help you configure the search.

// For instance here we want more than one match throughout the text which is why both wall and fell get detected

// The l flag is simply means that the search is case sensitive so it doesn't matter the words appear in upper or lower case. They will get selected.









// A regular expression is defined by a combination of Character Classes, which describe the pattern of characters to select, such as words, numbers only, whitespace, etc., quantifiers, which describe the quantity of a character class or pattern to match. For instance, select 1 or more instances of the _ sign.

// We also have anchors which can be used to define the boundary of text. For instance, the pattern must be at the beginning of the string or the end of the string and so on. 

// Likewise, there are several other specialized characters, which are used to define patterns.

// A great place to learn about Regular Expressions is Regexr.com which provides a real-time engine to express text and play with writing patterns based on a ready reckoner and documentation including a ton of community submitted patterns, ready for use.

// Since Regex is truly language agnostic, it is beyond the scope of this course and I would encourage you to check out Regexr.com to learn more about the patterns themselves. 

// With that said, JavaScript includes comprehensive support for Regular Expressions and we’ll see it in use over the next few topics but first, let’s look at a few RegEx patterns to familiarize ourselves with what we’re up against.


// Pattern 1 :

// /grape\w*/gi

// This pattern here matches words like grape, grapes, grape sauce, and everything made with grape. Notice the use of the word character class along with the asterisk (\w*) which matches 0 or more of the preceding characters until it hits a whitespace or line break.  This way, all words beginning with grape will be detected with this pattern.



// Pattern 2 :

// /#\w+/gi

// This next pattern matches hashtags, which are commonly used on social networking platforms such as Twitter and Facebook. We’re essentially looking for one or more instances of words that must be preceded by a hash character. The + quantifier unlike the asterisk quantifier matches 1 or more instances of the preceding character class.



// Pattern 3 :

// /(‘).+\1/gi

// This pattern is a bit complicated and uses a feature known as capture groups which enables us to select the content that is enclosed in a pair of single quotes. The single quote inside the parenthesis is the start of the sequence and the \1 at the end denotes the same capture group that we started with. The .+ in the middle simply means any set of characters until we hit the ending capture group. The capture group stores the identified text in the Regex engine which can then be recalled.



// Pattern 4 :

// /(?<=http://|https://).+\b/gi

// This next one selects the URL portion from the string samples listed below and is very useful in extracting URLs from a given piece of text. You might want to use this to turn URLs to hyperlinks automatically. 

// Here, we’re using something called a positive lookbehind which only selects text if it precedes the contents of the parenthesis.  

// The pipe character in the middle is the OR operator which basically says that select text that follows http:// or https:// but do not select this specific bit.



// Pattern 5 :

// /colou?r/gi

// This final one selects both the American and British spellings of the word color by using the optional quantifier denoted by a question mark, which will match 0 or 1 of the preceding character which is, in this case, is the character ‘u’ which is missing in the American spelling but is present in the British version.









// ex 2:

// Defining and processing text based on patterns is needed quite frequently in modern web applications. Pattern 
// matching enables developers to incorporate faux intelligence in apps as they’re able to recognize portions of 
// text and extracts data automatically.

// Without relying on artificial intelligence or natural language processing, developers can implement pattern 
// matching and data extraction using regular expressions, a language agnostic syntax that allows developers to 
// describe patterns in text using tokens, quantifiers and other pieces of the syntax.

// JavaScript enables you to work with RegEx using a number of methods, such as exec(), test(), search(), match() 
// and matchAll(). In this exercise, we’ll work with the match() method to extract hashtags from a post. This is 
// something that you will use if you’re building a social media application that accepts hashtags as a way of 
// defining keywords to tag the post which enables easy categorization of content.

// You’ll notice a string in the constant named 'post' with hashtags in them. We have a function named getTags 
// which doesn’t do anything as yet but accepts a parameter named 'post'. 


const post =
    'This waffle is brilliant! #foodie #waffles #instafood #nutella #chocolate #hazelnut #icecream';

// You can implement the getTags() function as shown below.

const getTags = (post) => {
    const pattern = /(?<=#)\w+/gi;
    const detectTags = post.match(pattern);
    return detectTags && detectTags.length > 1 ? detectTags : detectTags[0];
};

console.log(getTags(post));

// The const named 'pattern' contains a regular expression which allows us to detect words that begin with a '#' 
// character. We then use the match method to extract such words in an Array which we then return back to the user.
 
// If you run the app now, you’ll notice an array full of hashtags.



// RegExp.exec() and RegExp.test() accepts regular expressions as parameters

// replace(), replaceAll(), match(), matchAll(), search() and split() methods can accept regular expressions as 
// parameter


// What will be the output of following?
const str = "I love js";
const patt = new RegExp("z");
const res = patt.exec(str);
console.log(res)

// RegExp.exec(str) returns array if the regular expression matches the string, otherwise null.


// What will be the output of following?
const str1 = "I love js";
const patt1 = new RegExp("z");
const res1 = patt1.test(str1);
console.log(res);
// RegExp.test(str) is used to test if the regular expression matches the part of string. If it matches, it 
// returns true, otherwise false.

// What will be the output of following?
const str2 = "No pain, no gain"; 
const res2 = str2.match(/ain/g);
console.log(res2);

// String.match(regex) matches a string  with the regex and returns an array containing the results of that 
// search, or null if no matches are found.



// We talked about Regular Expressions in the previous topic and how they’re instrumental in helping you detect, 
// extract and process text based on defined patterns. 

// The first thing that we need to do is express a regular expression pattern in our code. This can be done in one 
//of two ways.

// If you’re working with a static pattern that doesn’t need to be created programmatically, then you can simply express the pattern directly as shown below.

const pattern22 = /colou?rs?/gi;

// On the other hand, if you need to construct a pattern as a string and then convert it to a regex, which can be parsed, then you can use the RegExp constructor function which looks as shown below.

const pattern33 = new RegExp('/colou?rs?/gi');

// Once you have a pattern, the next thing to do is to use the pattern. For this purpose, JavaScript provides you with a ton of functions.

// Here, we’ll take a look at the exec method which is used to perform a search for a given pattern, the test method, which is used to assert the presence of text that matches a pattern, the search method which provides the starting index number where a pattern is found, the match method which finds and extracts text that matches a pattern and in the same vein the matchAll which does the same thing but returns an iterator.

// The outcome in this case is an array with the first match. Accessing index 0 here gets me the word it has found.  

// Since we’re using the global flag in our expression marked by the ‘g’ flag at the end, we’re bound to get more than one instances of the match but in this case, exec needs to be run multiple times.  

// So running it again, gets me the next match, colour, the british spelling. Running this again, yields the word colours. Once more yields an error because we’ve got all the matches. 

// It is therefore better to use a while loop instead. Notice something different here. I’ve declared a variable and in the while loop, we’ve enclosed the assignment statement in parenthesis exclusively before attempting to use the not equal to operator with null.  

// This way, we assign the outcome of the exec statement to results, then compare the value of results with null and if its not null, we continue with our loop. 

// As you can now see, we get all matches, extracted from our text. Pretty cool, right? Regex is quite interesting once you get the hang of it. 

// Now, you can also express the pattern using the RegExp constructor function which looks like this. Since the pattern is expressed as a string, there is no need for the pair of forward slashes and the flag must be expressed as the second argument. 

// Let’s make better use of this in this next example where I have an excerpt from an article.  

// I’ll build a function to find and confirm the presence of a word, in this case, the name of an actor. Last time around, we used the ‘in’ operator to do something like this. The RegEx equivalent uses the RegExp constructor function to programmatically construct the pattern which in this case is just the name of the actor along with the global and ignore case flags. 

// And now we can use the test method like so which returns a true or false depending on the match. 

// Here you can see it produce a ‘true’ because we do have johnny depp in the text. 

// Now, let me also take this opportunity to quickly show you the search method which can be used like so. This one does not return a true or false but the index number at which the matched word begins. 

// Alright, for our next example, we have this text which contains two email IDs, which need to be extracted for processing. Let’s write a function named getEmails which accepts a string. I’m going to copy and paste the RegEx pattern for email addresses.  

// Don’t be startled by this complex-looking pattern. Once you look closely, you’ll find this easier to understand. This first segment calls for alphanumeric text which forms the user part of an email address. All we’re saying is that we’re looking for either alphabets, numbers, and possibly a dot or underscore in this portion of the mail ID. This must be followed by an AT sign and then the domain name which is formed is again alphanumeric and is followed by a dot which has been escaped using a back-slash and finally the TLD which can contain letters a - z ranging from 2 - 6 characters. 

// Now to detect email address, we’ll use the string.match method like so. 

// This will return an array of extracted values. let’s return this result and execute our method and there you go. We get an array of email IDs extracted from our paragraph. 

// Let’s enhance the function to return an array only if more than one mail IDs are detected. So now if we have just one mail ID, we’ll get a string otherwise an array of strings. Let’s see one more example of the match method which is probably one of the most useful of the lot. 

// Here, I have a social media post text, of the kind you see on Instagram and Twitter. The text contains a number of hashtags and our job is to extract them. 

// I’ll build a function named getTags. The pattern here uses something known as a positive lookbehind as seen in the parenthesis with the question mark, a less than and equal to sign followed by the hash which is part of every hashtag. 

// This is followed by the word character class. In a nutshell, we’re saying find words that are preceded by a hash but do not select the hash as a part of the process. 

// When we use a match with this pattern we get an array of hashtags minus the hash character itself which isn’t needed if you want to process the tags as categories to organize the post under. 

// With this done, let’s look at the matchAll method. I have a message which describes the distance of a location from two points in miles. We want to extract the numeric distance value. 

// Inside the function that we’re building, we’ll define the pattern which includes a named capture group. A capture group is like a variable that stores the matched text inside the regex engine so you can easily access the result. 

// We’ve named our capture group miles and its looking for a set of digits that precede the word miles denoted here using a negative lookahead which basically prevents including the word miles in the match. 

// This time I’ll use the matchAll method. 

// If we output the matchAll, you’ll notice it returns an iterator. An iterator is like using your left and right arrow keys to browse through a photo album. You press the right button on the keyboard to advance a photo forward manually. 

// Likewise, the iterator has to be manually advanced. If you invoke next on the iterator and access the value at index 0 you’ll get the extracted value. 

// Let’s use a for-of loop with this to extract all values. This results in these two objects, each representing the two matched values 200 and 150. Notice the capture group denoted by the word miles. So we’ll access groups.miles like so and we get our two values directly.  

// When it comes to text processing, Regex methods that you saw in this video are extremely handy.