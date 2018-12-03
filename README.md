# bamazon
A CLI based store. This app talks to a mySQL database to get a list of items and prices for sale.
A Command line prompt (using inquirer) askes the user for the id of the item to purchase and then for a quantity. 
If the id and quantity amounts are valid, the command program updates the db to note the reduction in quantity,
then it prints a message to the screen, telling the user the total amount owed for the purchase. 
The amount owed does always display out to two decimals or the total number of cents in the price. 
This would be a nice improvement to add.
The user can exit the program by entering "0" for the id and qty amount or just by hitting "Return" twice on the prompts.
![Image of the program in action](../bamazon.jpg)

