function Drawer({ onClose, onRemove, items = [] }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between">Корзина
                    <img onClick={onClose} className="removeBtn  cu-p" src="/img/btn-remove.svg" alt="Remove"></img>
                </h2>
                {
                    items.length > 0 ?
                        <>
                            <div className="items">
                                {items.map((obj) => (
                                    <div className="cart-item d-flex align-center mb-20">
                                        <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cardItemImg"></div>
                                        <div className="mr-20 flex">
                                            <p className="mb-5">{obj.title}</p>
                                            <b>{obj.price} грн</b>
                                        </div>
                                        <div>
                                            <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove"></img>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="cartTotalBlock">
                                <ul>
                                    <li className="d-flex">
                                        <span>Взагалом:</span>
                                        <div></div>
                                        <b>14 532 грн.</b>
                                    </li>
                                    <li className="d-flex">
                                        <span>Податок 5%:</span>
                                        <div></div>
                                        <b>500 грн</b>
                                    </li>
                                </ul>
                                <button className="greenBtn">
                                    Оформити замовлення
                                    <img src="/img/arrow.svg" alt="Arrow"></img>
                                </button>
                            </div>
                        </>
                        : <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                            <img className="mb-20" width={120} height={120} src="/img/empty-box.svg" alt="empty-list"></img>
                            <h2>Корзина порожня</h2>
                            <p className="opacity-6">Додайте хоча б одну пару кросівок щоб зробити замовлення</p>
                            <button className="greenBtn">
                                Повернутися назад
                                {/* <img src="/img/arrow.svg" alt="Arrow"></img> */}
                            </button>
                        </div>
                }
            </div>
        </div>
    )
}

export default Drawer;