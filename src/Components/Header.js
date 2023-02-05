import {Link} from 'react-router-dom';

function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
                <div className="d-flex align-center">
                    <img width={40} height={40} src="/img/logo.svg" alt="nice"></img>
                    <div>
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p>Магазин найкращих кросівок</p>
                    </div>
                </div>
            </Link>
            <ul className="d-flex">
                <li onClick={props.onCLickCart} className="mr-25 cu-p">
                    <img width={18} height={18} src="/img/shop.svg" alt="SHop Bag" ></img>
                    <span>1205 грн.</span>
                </li>
                <li className="mr-25 cu-p">
                    <Link to="/favourite">
                        <img width={18} height={18} src="/img/like.svg" alt="Favourite" ></img>
                    </Link>
                    
                </li>
                <li>
                    <img width={18} height={18} src="/img/account.svg" alt="User"></img>
                </li>
            </ul>
        </header>)
}


export default Header;