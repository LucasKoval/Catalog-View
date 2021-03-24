//----------* REQUIRE'S *----------//
const axios = require('axios');
const defaults = require('../api/default');
/* const apiCall = require('../api/apiCall'); */


//----------* VARIABLES *----------//
const productList = 'products';
const redeemProduct = 'redeem';


//----------* PRODUCTS CONTROLLER *----------//
const productsController = {
    getAllProducts: async (req, res, next) => {
        const products = await axios({
            ...defaults,
            method: 'GET',
            url: productList
        })
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            return console.error('ERROR FETCHING API DATA -', error);
        })

        res.render('index', { products });
    },

    redeemProduct: async (req, res, next) => {
        await axios({
            ...defaults,
            method: 'POST',
            url: redeemProduct
        })
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            return console.error('ERROR FETCHING API DATA -', error);
        })

        return res.redirect('/');
    }
}


//----------* EXPORTS CONTROLLER *----------//
module.exports = productsController;