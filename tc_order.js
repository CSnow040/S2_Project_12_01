"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1
  
   Author: Caleb Snow
   Date:   2/27/19
     
   Filename: tc_order.js  

   The item array contains the ID numbers of the items ordered by the customer
   The itemDescription array contains the description of each item
   The itemPrice array contains the price of each item
   The itemQty array contains the quantity ordered of each item
   
*/
//This places the parameters for the variable named item to make indiviual numbering for each item 
var item = [
    10582, 23015, 41807, 10041
];
//Gives each item a description that will be planted into the JavaScript for the cart  
var itemDescription = [
    "1975 Green Bay Packers Football (signed), Item 10582",
    "Tom Landry 1955 Football Card (unsigned), Item 23015",
    "1916 Army-Navy Game, Framed Photo (signed), Item 41807",
    "Protective Card Sheets, Item 10041"
];
//This variable named itemPrice will give each item its separate price 
var itemPrice = [143.93, 89.98, 334.93, 22.67];
//This variable gives each item its own quantity specified to the user
var itemQty = [1, 1, 1, 4];