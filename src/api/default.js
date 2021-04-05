//----------* VARIABLES *----------//
const baseApi = 'https://coding-challenge-api.aerolab.co/';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUwZmQ2MzdlNzE4NzAwMjBlMzhmOTMiLCJpYXQiOjE2MTU5MjA0ODN9.LIFRAwdLaN53U4cxLGqp2Nr174nes0yBR548R7pCIOU';


//----------* DEFAULTS *----------//
const defaults = {
    baseURL: baseApi,
    timeout: 5000,
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'       
    }
};

//----------* EXPORTS DEFAULTS *----------//
module.exports = defaults;