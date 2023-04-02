const path = require('path')
const fetch = require('node-fetch')
const dotenv = require('dotenv')

// env
dotenv.config();
const { ACCESS_TOKEN } = process.env;


const handleHomePage = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
};

const searchHero = (req, res) => {
    // const param = req.params.value; -1 normal way
    const { value } = req.params; //-2 destructuring
    // console.log(value); the value that in the url after search world /search/value
    // const access_Token = 745852523926732; //transfer to env
    const url = `https://superheroapi.com/api/${ACCESS_TOKEN}/search/${value}`;
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            // Your code
            // res.send(data.results.filter(hero => hero.name.toLowerCase().includes(value.toLowerCase())))
            
            // Comments
            /* 
                The error (Cannot read properties of undefined (reading 'filter'))
                is because the data is undefined, so we need to check if the data is undefined
                if it is undefined we will send an empty array
            */
            // Using optional chaining: object?.property?.property ...etc
            // res.send(data?.results?.filter(hero => hero.name.toLowerCase().includes(value.toLowerCase())) || []);
            
            // destructuring the data
            const { results } = data;
            // check if the results is not undefined
            if (results) {
                res.send(results.filter(hero => hero.name.toLowerCase().includes(value.toLowerCase())))
            }
            // should send a message if there is no results or to send an empty array
            else {
                res.json({
                    message: 'No results found'
                })
                // or to throw an error (I prefer to throw an error)
                // throw new Error('No results found'); // the string will be the error message (err.message)
            }
        })
        .catch(err => {
            // throw new Error(err);

            // Here we can handle the error and send a message to the client
            res.json({
                message: err.message // any error accured it will be in the message property
            })
        })
}

module.exports = { handleHomePage, searchHero }