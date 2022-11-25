const express = require("express")
const cors = require("cors");

const db = require("./Database");
const controllers = require("./Controllers");

const app = express();

app.use(cors());
app.use(express.json());

//GET 
app.get("/products", controllers.getProducts);
app.get("/products-cart", controllers.getProductsCart);

//POST 
app.post("/products-cart", controllers.addProductCart);


app.put("/products-cart/:productId", controllers.putProduct);

// DELETE 
app.delete("/products-cart/:productId", controllers.deleteProduct);

app.listen((process.env.PORT||4000), () => {
    console.log("Server funcionando uwu")
    db();
});

module.exports = app;