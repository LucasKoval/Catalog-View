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
            console.table(response.data);
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
            /* console.log(response.data); */
            return response.data;
        })
        .catch(error => {
            return console.error('ERROR FETCHING API DATA -', error);
        })
        
        let i = 0;
        const firstProducts = products.filter((product) => {
            i++;
            return product.name != ''  && i <= 16;
        });
        i = 0;
        const lastProducts = products.filter((product) => {
            i++;
            return product.name != ''  && i > 16;
        });

        /*
        let employees = [
            {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
            {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
            {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
        ];

        employees.sort(function (x, y) {
            return x.salary - y.salary;
        });
        
        console.table(employees);

        const array = [1,2,3,4,5];
        const revArray = array.reverse();
        */

        /* 
        // Paginatiom
        const page = Number(req.query.page) || 1;
        const limit = 16;
        const count = products.length;
        const totalPages = Math.ceil(count / limit);
        const previousPage = page > 1 ? `http://localhost:3000/?page=${page - 1}` : null;
        const currentPage = `http://localhost:3000/?page=${page}`;
        const nextPage = page < totalPages ? `http://localhost:3000/?page=${page + 1}` : null;
        */

        res.render('index', { user, products, firstProducts, lastProducts });
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