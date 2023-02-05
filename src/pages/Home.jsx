import Card from '../Components/Card'


function Home({items,
    searchValue,
    setSearchValue,
    onSearchChangeInput,
    onAddToFavourite,
    onAddToCart}) {
        
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>{searchValue ? `Пошук по: "${searchValue}"` : 'Всі кросівки'}</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt="nice"></img>
                    {searchValue && (
                        <img
                            onClick={() => setSearchValue('')}
                            className="clear  cu-p"
                            src="/img/btn-remove.svg"
                            alt="Clear"></img>)}
                    <input onChange={onSearchChangeInput} value={searchValue} placeholder="Пошук..."></input>
                </div>
            </div>
            <div className="d-flex flex-wrap">
                {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((item, index) => (
                        <Card
                            key={index}
                            onFavourite={(obj) => onAddToFavourite(obj)}
                            onPlus={(obj) => onAddToCart(obj)} 
                            {...item}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Home;