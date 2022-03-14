import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png'
import menus from "../../temp/menus.json";

const Header = () => {
  return (
    <>
        <header id="header" className="htc-header header--3 bg__white">
            <div id="sticky-header-with-topbar" className="mainmenu__area sticky__header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-lg-2 col-sm-3 col-xs-3">
                            <div className="logo">
                                <Link to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-8 col-sm-6 col-xs-6">
                            <nav className="mainmenu__nav hidden-xs hidden-sm">
                                <ul className="main__menu">
                                    {menus.menus.length>0 && menus.menus.map(menu=>(
                                        <li className={menu.class} key={menu.id}>
                                                <Link to={menu.link}>{menu.text}</Link>
                                            <ul className="dropdown">
                                                {menu.dropdown.length>0 && menu.dropdown.map(dropdownitem=>(
                                                    <li className={dropdownitem.class} key={dropdownitem.id}>
                                                    <Link to={dropdownitem.link}>{dropdownitem.text}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-3">  
                            <ul className="menu-extra">
                                <li className="search search__open hidden-xs"><span className="ti-search"></span></li>
                                <li><Link to="login-register"><span className="ti-user"></span></Link></li>
                                <li className="cart__menu"><span className="ti-shopping-cart"></span></li>
                                <li className="toggle__menu hidden-xs hidden-sm"><span className="ti-menu"></span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mobile-menu-area"></div>
                </div>
            </div>
            {/* <!-- End Mainmenu Area --> */}
        </header>
    </>
  )
}

export default Header