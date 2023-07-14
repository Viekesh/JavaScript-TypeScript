"use strict";



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




// ex 1 :

// Defining and processing text based on patterns is needed quite frequently in modern web applications. Pattern matching enables developers to incorporate faux intelligence in apps as they’re able to recognize portions of text and extracts data automatically.

// Without relying on artificial intelligence or natural language processing, developers can implement pattern matching and data extraction using regular expressions, a language agnostic syntax that allows developers to describe patterns in text using tokens, quantifiers and other pieces of the syntax.




const post =
    'This waffle is brilliant! #foodie #waffles #instafood #nutella #chocolate #hazelnut #icecream';

// You can implement the getTags() function as shown below.

const getTags = (post) => {
    const pattern = /(?<=#)\w+/gi;
    const detectTags = post.match(pattern);
    return detectTags && detectTags.length > 1 ? detectTags : detectTags[0];
};

console.log(getTags(post));



// The const named 'pattern' contains a regular expression which allows us to detect words that begin with a '#' character. We then use the match method to extract such words in an Array which we then return back to the user.
 
// If you run the app now, you’ll notice an array full of hashtags.
