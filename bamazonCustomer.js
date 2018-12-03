var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon"
});

var productList = "";

//open a connection to the database and start the main method after the connection is open
connection.connect(function (err) {
  if (err) throw err;
  startMain();
});

//the main method first needs to get a list of products for sale from the db
function startMain() {
  var response = getProducts();
}

//this method does the actual query of the db
function getProducts() {
  var query = "SELECT * FROM products";
  connection.query(query, function (err, res) {
    // console.log(res);
    createList(res);
  });
}

//this method takes the response from the db query and generates a list of products to print to the screen.
function createList(res) {
  // console.log(res);
  productList = "";
  for (var i = 0; i < res.length; i++) {
    productList += (res[i].item_id + "  " + res[i].product_name + "  $" + res[i].price + " qty:" + res[i].stock_quantity + "\n");
  }
  console.log(productList);
  //now that profuct list is created, start the sale
  runSale();
}

function runSale() {
  inquirer
    .prompt([
      {
        name: "requestedId",
        type: "input",
        message: "What is the id of the item you wish to purchase?"
      },
      {
        name: "requestedQty",
        type: "input",
        message: "How many would you like to purchase?"
      }
    ])
    .then(function (answers) {
      if (answers.requestedId == 0 && answers.requestedQty == 0) {
        console.log("Quiting program.");
        process.exit();
      }
      // console.log("You want to buy " + answers.requestedQty + " of product " + answers.requestedId);
      buyProduct(answers.requestedId, answers.requestedQty);
    });
};

function buyProduct(id, qty) {
  //check database to make sure there is sufficient qty
  var query = "SELECT * FROM products WHERE item_id=?";
  connection.query(query, id, function (err, res) {
    if(err){
      console.log("there was an error talking to the db.");
    }
    else {
      // console.log(res);
      if (res.length<1) {
        console.log("You need to enter a valid id.");
        runSale();
      }
      else if (isNaN(qty)) {
        console.log("You need to enter a valid number for the quantity.");
        runSale();
      }
      else if (res[0].stock_quantity < qty) {
        console.log("Sorry, there is insufficient stock for you to buy " + qty + " of these.");
        runSale();
      }
      else {
        console.log("Congrats, we're gonna buy.");
        updateDb(id, res[0].stock_quantity - qty, res[0].price * qty);
      }
      // console.log(res[0].stock_quantity);
    }
  });
}

function updateDb(id, newQty, billAmt) {
  var query = "UPDATE products SET stock_quantity=? WHERE item_id=?";
  connection.query(query, [newQty, id], function(err, res){
    if(err) {
      console.log(err);
    }
    else {
      console.log("Database updated. You bill is: $" + billAmt);
      runSale();
    }
  })
}

