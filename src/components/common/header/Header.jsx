import React from "react";
import { Body } from "../../common";



function Header () {  

    return (
        <div>
            <nav>

            <div className="navbar-top">
                <div>
                    <button id="menuButton"><i className="fas fa-bars"></i></button>

                    
                    
                    
                </div>
                <div>

                    <div className="account">

                        <button className="account-btn">
                            <i className="fas fa-user-alt"></i><span className="account-text">My account</span>
                        </button>



                    </div>

                    <div className="shopping-cart">
                        <div className="sum-prices">

                            <i className="fas fa-shopping-cart shoppingCartButton"></i>

                            <h6 id="sum-prices"></h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbar" id="navbar">
                <div className="links">
                    <ul>
                        <li className="nav-links">
                            <a href="#pcs" className="link">PC</a>
                        </li>
                        <li className="nav-links">
                            <a href="#mobile" className="link">Mobile</a>
                        </li>

                        <li className="nav-links">
                            <a href="#" className="link">About</a>
                        </li>
                    </ul>
                </div>


            </div>
            <div className="producstOnCart hide">
                <div className="overlay"></div>
                <div className="top">
                    <button id="closeButton">
                        <i className="fas fa-times-circle"></i>
                    </button>
                    <h3>Cart</h3>
                </div>
                <ul id="buyItems">
                    <h4 className="empty">Your shopping cart is empty</h4>

                </ul>
                <button className="btn checkout hidden">Check out</button>
            </div>
        </nav>
            <div>
                <Body />
            </div>
            
            
               
            
            
            
        </div>
    )  
}
export default Header;