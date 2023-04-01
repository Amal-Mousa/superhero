const path = require('path')
const fetch = require('node-fetch')

const handleHomePage = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
};

const searchHero = (req, res) => {
    // const param = req.params.value; -1 normal way
    const { value } = req.params; //-2 destructuring
    // console.log(value); the value that in the url after search world /search/value
    const access_Token = 745852523926732; //transfer to env
    const url = `https://superheroapi.com/api/${access_Token}/search/${value}`;
    fetch(url)
        .then(resp => resp.json())
        .then(data => res.send(data.results.filter(hero => hero.name.toLowerCase().includes(value.toLowerCase()))))
        .catch(err => { throw new Error(err) })
}

module.exports = { handleHomePage, searchHero }