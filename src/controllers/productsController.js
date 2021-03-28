//----------* REQUIRE'S *----------//
const axios = require('axios');
const defaults = require('../api/default');
/* const apiCall = require('../api/apiCall'); */


//----------* VARIABLES *----------//
const userInfo = 'user/me';
const productList = 'products';
const redeemProduct = 'redeem';


//----------* PRODUCTS CONTROLLER *----------//
const productsController = {
    index: async (req, res, next) => {
        const user = await axios({
            ...defaults,
            method: 'GET',
            url: userInfo
        })
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            return console.error('ERROR FETCHING API DATA -', error);
        })

        const page = Number(req.query.page) || 1;
        const limit = 16;
        
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

        const count = products.length;
        const totalPages = Math.ceil(count / limit);
        const previousPage = page > 1 ? `http://localhost:3000/?page=${page - 1}` : null;
        const currentPage = `http://localhost:3000/?page=${page}`;
        const nextPage = page < totalPages ? `http://localhost:3000/?page=${page + 1}` : null;

        res.render('index', { products, user });
    },

    search: (req, res, next) => {
        res.redirect('/');
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