import cucumber from './images/cucumber.jpg' ;
import lemon from './images/lemon.jpg' ;
import tomatoe from './images/tomatoe.jpg' ;

const data ={
    products: [
        {
            id: '1',
            name:'Tomatoes',
            price:3.90,
            image: tomatoe ,
        },

        {
            id: '2',
            name:'Cucumbers',
            price:2.90,
            image: cucumber,
        },

        {
            id: '3',
            name:'Lemon',
            price:6.90,
            image: lemon,
        },

    ],
};

export default data;