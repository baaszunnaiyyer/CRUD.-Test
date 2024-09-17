const Product = require("../Models/product.model.js")

const getProduct = async (req,res)=>{
    
    const {id} = req.params;
    const product = await Product.findById(id)
    res.status(200).json(product)

}

const getProducts = async (req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
        
    
    }
}

const updateProduct = async (req,res) => {

    const {id} = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body)

    if(!product){
        return res.status(404).send('Not Found')
    }

    res.status(200).json(await Product.findById(id));
}

const postProduct = async (req,res) =>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
}

const deleteProduct = async (req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)

        if(!product){
            return res.status(404).json({message: error.message})
        }

        res.status(200).json(await Product.find({}))
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getProducts,
    getProduct,
    updateProduct,
    postProduct,
    deleteProduct
}