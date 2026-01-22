/*
 * name: Michael Ulery
 * CS364 - H2
 * Documentation: I sued the following site to vallidate my regex: https://regex101.com/. I recieved no other help or used any other resources.
 *
 */

//1: match the word "hello"
const regex01 = /hello/;

//2: match phone numbers in the format (123) 456-7890
const regex02 = /\(\d{3}\)\s\d{3}-\d{4}/;

//3: match valid email addresses
const regex03 = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

//4: find all words that start with a capital letter
const regex04 = /[A-Z][a-z]+/;

//5: match strings with any one of these characters: ; [, ], {, }, ^ 
const regex05 = /\b(\w*(\;|\[|\]|\{|\}|\^)+\w*)|((\;|\[|\]|\{|\}|\^)+\w*)/;

//6: match dates in the format DD/MM/YYYY
const regex06 = /(\d{2}\/\d{2}\/\d{4})/;

//7: find all words that are exactly 4 characters long
const regex07 = /\b\w{4}\b/;

//8: to find sequences where any character is repeated three or more times 
const regex08 = /(\w)\1+/;

//9: match URLs starting with http:// or https://
const regex09 = /\bhttps[A-Za-z0-9-.\\\:\/]*|\bhttp[A-Za-z0-9-.\\\:\/]*/;

//10: Validate a Password
const regex10 = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}/;


