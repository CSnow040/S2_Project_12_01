"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Caleb Snow
   Date:   2/27/19
   
   Filename: tc_cart.js
	
*/

//This sets the intial amount of the variable to 0
var orderTotal = 0;
//This sets up the HTML to create a table 
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr>";
//Creates a for loop to use i to take out the array that we use throughout the code
for (var i = 0; i <= 3; i++) {
    //Sets up the item array to pull out the index to be used in each image
    cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt='item'/></td>";
    //Creates 3 cells that will contain the item description, price, and quantity while following HTML guidelines 
    cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";
    //This adds up the irtem price of everything
    var itemCost = itemPrice[i] + itemQty[i];
    //Creates table data where the item cost will be put in for each item individually
    cartHTML += "<td>$" + itemCost + "</td></tr>";
    //The order total is the sum of the item total plus the order total
    orderTotal = orderTotal + itemCost;
}
//This makes the parameters for the cart to be sized perfectly so that all the cart items can actually fit
cartHTML += "<tr> <td colspan = '4'> Subtotal </td> <td>$" + orderTotal + "</td> </tr> </table>";
//This plants the HTML for the cart to be put inside of the index by using all of the Script written above 
document.getElementById("cart").innerHTML = cartHTML;