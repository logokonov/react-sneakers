import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Header from './Components/Header';
import Drawer from './Components/Drawer';
import Home from './pages/Home';
import Favourites from './pages/Favourites';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCardItems] = React.useState([]);
  const [favouritesItems, setFavouriteItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://63d673b2e60d57436978d7dc.mockapi.io/items')
      .then(res => {
        setItems(res.data);
      });
    axios.get('https://63d673b2e60d57436978d7dc.mockapi.io/cart')
      .then(res => {
        setCardItems(res.data);
      });
    axios.get('https://63dd4268df83d549ce9e531d.mockapi.io/favourite')
      .then(res => {
        setFavouriteItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://63d673b2e60d57436978d7dc.mockapi.io/cart', obj)
    setCardItems((prev) => [...prev, obj]);
  }

  const onAddToFavourite = async (obj) => {
    try {
      if (favouritesItems.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://63dd4268df83d549ce9e531d.mockapi.io/favourite/${obj.id}`)
        setFavouriteItems((prev) => prev.filter(item => item.id !== obj.id));
      } else {
        const { data } = await axios.post('https://63dd4268df83d549ce9e531d.mockapi.io/favourite', obj);
        setFavouriteItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не вдалось добавити в улюблене');
    }
    
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://63d673b2e60d57436978d7dc.mockapi.io/cart/${id}`);
    setCardItems((prev) => prev.filter(item => item.id !== id));
  }

  const onSearchChangeInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className='wrapper clear'>
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onCLickCart={() => setCartOpened(true)} />

      <Route path="/" exact>
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onSearchChangeInput={onSearchChangeInput}
          onAddToFavourite={onAddToFavourite}
          onAddToCart={onAddToCart} />
      </Route>
      <Route path="/favourite">
        <Favourites
          items={favouritesItems}
          onAddToFavourite={onAddToFavourite}
          onAddToCart={onAddToCart} />
      </Route>
    </div>)
}

export default App;
