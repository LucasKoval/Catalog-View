//----------* REQUIRE'S *----------//
const axios = require('axios');
const defaults = require('../api/default');


//----------* VARIABLES *----------//
const userInfo = 'user/me';
const addPoints = 'user/points';
const userHistory = 'user/history';


//----------* USERS CONTROLLER *----------//
const usersController = {
    profile: async (req, res, next) => {
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

        const history = await axios({
            ...defaults,
            method: 'GET',
            url: userHistory
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return console.error('ERROR FETCHING API DATA -', error);
        })

        const totalSpent = history.reduce((acum, current) => {
            return acum += Number(current.cost)
        }, 0);

        res.render('users/profile', { user, history, totalSpent });
    },

    addPoints1000: async (req, res, next) => {
        await axios({
            ...defaults,
            method: 'POST',
            url: addPoints,
            data: {
                amount: 1000,
            }
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            return console.error('ERROR FETCHING API DATA -', error);
        })

        return res.redirect('/user/profile');
    },

    addPoints5000: async (req, res, next) => {
        await axios({
            ...defaults,
            method: 'POST',
            url: addPoints,
            data: {
                amount: 5000,
            }
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            return console.error('ERROR FETCHING API DATA -', error);
        })

        return res.redirect('/user/profile');
    },

    addPoints7500: async (req, res, next) => {
        await axios({
            ...defaults,
            method: 'POST',
            url: addPoints,
            data: {
                amount: 7500,
            }
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            return console.error('ERROR FETCHING API DATA -', error);
        })

        return res.redirect('/user/profile');
    }
}

//----------* EXPORTS CONTROLLER *----------//
module.exports = usersController;