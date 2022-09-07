let houses = require('./db.json');
let globalID = 4;

module.exports = {
    getHouses: (req,res) => {
        res.status(200).send(houses)
    },
    deleteHouses: (req,res) => {
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouses: (req,res) => {
        const {title, price, imageURL} = req.body;
        let newHouse = {
            title,
            price: +price,
            imageURL,
            id: globalID
        }
        houses.push(newHouse)
        globalID++
        res.status(200).send(houses)
    },
    updateHouses: (req, res) => {
        // console.log(req.params.id)
        // console.log(req.body.type)
        const {type} = req.body;
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        if(type === 'minus' && houses[index].price){
            houses[index].price -= 10000;
            res.status(200).send(houses)
        } else if(type === 'plus' && houses[index].price){
            houses[index].price += 10000;
            res.status(200).send(houses)
        } else {
            res.status(400).send('invalid star rating')
        }
    }
}