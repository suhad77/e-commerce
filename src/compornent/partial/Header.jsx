import React from 'react'
import logo from '../../images/logo/logo.png'
import menus from "../../temp/menus.json";

const Header = () => {
  return (
    <>
        <header id="header" class="htc-header header--3 bg__white">
            <div id="sticky-header-with-topbar" class="mainmenu__area sticky__header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-2 col-lg-2 col-sm-3 col-xs-3">
                            <div class="logo">
                                <a href="index.html">
                                    <img src={logo} alt="logo" />
                                </a>
                            </div>
                        </div>
                        <div class="col-md-8 col-lg-8 col-sm-6 col-xs-6">
                            <nav class="mainmenu__nav hidden-xs hidden-sm">
                                <ul class="main__menu">
                                    {menus.menus.length>0 && menus.menus.map(menu=>(
                                        <li className={menu.class} key={menu.id}>
                                                <a href={menu.link}>{menu.text}</a>
                                            <ul class="dropdown">
                                                {menu.dropdown.length>0 && menu.dropdown.map(dropdownitem=>(
                                                    <li className={dropdownitem.class} key={dropdownitem.id}>
                                                    <a href={dropdownitem.link}>{dropdownitem.text}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div class="col-md-2 col-sm-4 col-xs-3">  
                            <ul class="menu-extra">
                                <li class="search search__open hidden-xs"><span class="ti-search"></span></li>
                                <li><a href="login-register.html"><span class="ti-user"></span></a></li>
                                <li class="cart__menu"><span class="ti-shopping-cart"></span></li>
                                <li class="toggle__menu hidden-xs hidden-sm"><span class="ti-menu"></span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="mobile-menu-area"></div>
                </div>
            </div>
            {/* <!-- End Mainmenu Area --> */}
        </header>
    </>
  )
}

export default Header