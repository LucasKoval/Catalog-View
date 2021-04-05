//----------* REQUIRE'S *----------//
const axios = require('axios');
const defaults = require('../api/default');


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
            return response.data;
        })
        .catch(error => {
            return console.error('ERROR FETCHING API DATA -', error);
        })

        const products = await axios({
            ...defaults,
            method: 'GET',
            url: productList,
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return console.error('ERROR FETCHING API DATA -', error);
        })

        res.render('index', { user, products });
    },

    filterLowest: async (req, res, next) => {
        const user = await axios({
            ...defaults,
            method: 'GET',
            url: userInfo
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return console.error('ERROR FETCHING API DATA -', error);
        })

        const products = await axios({
            ...defaults,
            method: 'GET',
            url: productList,
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return console.error('ERROR FETCHING API DATA -', error);
        })
        
        const lowestCost = products.sort((x, y) => { return x.cost - y.cost });

        res.render('index', { user, products, lowestCost });
    },

    filterHighest: async (req, res, next) => {
        const user = await axios({
            ...defaults,
            method: 'GET',
            url: userInfo
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return console.error('ERROR FETCHING API DATA -', error);
        })

        const products = await axios({
            ...defaults,
            method: 'GET',
            url: productList,
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return console.error('ERROR FETCHING API DATA -', error);
        })
        
        const lowestCost = products.sort((x, y) => { return x.cost - y.cost });

        const highestCost = lowestCost.reverse();

        res.render('index', { user, products, lowestCost, highestCost });
    },

    redeemProduct: async (req, res, next) => {
        const products = await axios({
            ...defaults,
            method: 'GET',
            url: productList,
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return console.error('ERROR FETCHING API DATA -', error);
        })

        const product = products.find(element => element._id == req.params.id);

        await axios({
            ...defaults,
            method: 'POST',
            url: redeemProduct,
            data: {
                productId: product._id
            }
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            return console.error('ERROR FETCHING API DATA -', error);
        })

        return res.redirect('/');
    }
}

//----------* EXPORTS CONTROLLER *----------//
module.exports = productsController;