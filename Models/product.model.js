const { default: mongoose, model } = require("mongoose");

const ProductSchema  = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'Please enter product name']
        },

        quantity:{
            type:Number,
            required: true,
            default : 0
        },

        price:{
            type: Number,
            required: true,
        },

        image: {
            type: String,
            required: false
        },
    },
    {
        timestamps:true
    }
);

const product = mongoose.model("Products", ProdectSchema);

module.exports = 