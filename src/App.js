import Header from './components/Header';
import Products from './components/Products';
import Basket from './components/Basket';
import data from './data';
import './App.css';
import { useState , useEffect } from 'react';

const App=()=> {

const [itemsBasket, setItemBasket] = useState(() => { /* a la base qnd on ft refresh on a initialise avec un maarah vide ms on si on rajoute des pdt dns notre panier on veut pas que ca se supprime */
  const localData = localStorage.getItem('itemsBasket');  /* on creer callback func qui verifie si ya deja de la data dans le local storage , si oui , qnd on refresh au lieu davoir le maarah vide on a cette data qu'on a parser pour l'utiliser en js.*/ 
  return localData ? JSON.parse(localData) : [];
});
// itemsBasket ce sont les elements qui se trouvent dans le panier.
useEffect( () => {
  localStorage.setItem('itemsBasket', JSON.stringify(itemsBasket))
}, [itemsBasket]); /* le 2eme parametre c'est notre hook , des qu'il est modifié alors on lance le useEffect*/

const onAdd = (product)=>{
  const exist = itemsBasket.find((x)=> x.id === product.id);
  if(exist)
  {
    setItemBasket(itemsBasket.map((x)=> x.id === product.id ? { ...exist , qty: exist.qty +1 } : x ));
  }
  else
  {
    setItemBasket([...itemsBasket , {...product, qty:1}]);
  }
};

const onRemove = (product)=>{
  const exist = itemsBasket.find((x)=> x.id === product.id);
  if( exist.qty ===1)
  {
    setItemBasket(itemsBasket.filter((x)=> x.id!== product.id));
  }
  else {
    setItemBasket(itemsBasket.map((x)=> x.id === product.id ? { ...exist , qty: exist.qty -1 } : x ));
  }
};

  return (
    <div className="App">
     <Header/>
     <div className = "left">
       <Products  products={data.products} onAdd={onAdd} onRemove={onRemove}/>
       <Basket  itemsBasket= {itemsBasket} onAdd={onAdd} onRemove={onRemove}/>
    </div>
    </div>
  );
}

export default App;
