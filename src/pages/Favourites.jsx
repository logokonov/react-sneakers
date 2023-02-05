import Card from '../Components/Card'


function Favourites({ items = [], onAddToFavourite, onAddToCart }) {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Мої закладки</h1>
            </div>
            <div className="d-flex flex-wrap">
                {items.map((item, index) => (
                    <Card
                        key={index}
                        onFavourite={(obj) => onAddToFavourite(obj)}
                        onPlus={(obj) => onAddToCart(obj)}
                        favorited = {true}
                        {...item}
                     />
                ))}
            </div>
        </div>

    );
}

export default Favourites;