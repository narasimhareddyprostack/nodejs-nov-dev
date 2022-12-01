import express from 'express'
const router = express.Router();
import Product from '../model/Product.js'

/*
    URL:localhost:8000/product/all
    Method:Get
    Fields:Node
*/

router.get("/all", async (request, response) => {
    try {
        let products = await Product.find();
        response.status(200).json(products)
    }
    catch (err) {
        response.status(500).json({ msg: err.message })
    }
});
/*
    URL:localhost:8000/product/create
    Method:POST
    Fields:name, price, qty
*/
router.post("/create", async (request, response) => {
    try {
        //read data from form/post man 
        let new_product = {
            name: request.body.name,
            price: request.body.price,
            qty: request.body.qty
        }
        let product = await Product.findOne({ name: new_product.name })
        if (product) {
            return response.status(401).json({
                msg: "Already existed"
            })
        }
        product = Product(new_product)
        console.log(product)
        product = await product.save()
        response.status(200).json({
            result: "Cretaed Successfulyy",
            product: product
        });
    }
    catch (err) { }
});

//update Product

router.put("/:id", async (req, resp) => {
    let product_Id = req.params.id;
    console.log(product_Id)
    try {
        let updatedProduct = {
            name: req.body.name,
            price: req.body.price,
            qty: req.body.qty
        }
        let product = Product.findById(product_Id)
        if (!product) {
            return resp.status(401).json({ msg: "No Product Found" })
        }
        let productOne = await Product.findByIdAndUpdate(product_Id, { $set: updatedProduct }, { new: true })
        resp.status(200).json({
            result: "Product Updated Successfully",
            product: productOne
        })
    }
    catch (err) { }
});
router.delete("/:id", async (req, res) => {

    try {
        let product_Id = req.params.id
        let product = Product.findById(product_Id)
        if (!product) {
            return resp.status(401).json({
                result: "No Products"
            })
        }
        product = await Product.findByIdAndDelete(product_Id)
        res.status(200).json({
            result: "Product Deleted",
            product: product
        })

    }
    catch (err) {

    }
})

export default router;