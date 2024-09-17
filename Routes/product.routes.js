const express = require("express")
const router = express.Router();
const productController = require("../Controller/product.controller")


// router for getting all the prduct 
router.get("/", productController.getProducts)


//router for getting a single product 
router.get("/:id", productController.getProduct)

//router for Updating a Product
router.put("/:id", productController.updateProduct)

//Deleting Product
router.delete("/:id", productController.deleteProduct)

//Posting Product
router.post("/", productController.postProduct)

module.exports = router;