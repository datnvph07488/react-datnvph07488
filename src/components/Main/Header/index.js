import React,{useState,useParams} from 'react'
import PropTypes from 'prop-types'

const Header = ({category}) => {
  // let { id } = useParams();
  // const cate = category.find(cate => cate.id == id);
  // console.log(category)
  

  
    return (
        <div>
<header>
  {/* Header Start */}
  <div className="header-area">
    <div className="main-header header-sticky">
      <div className="container-fluid">
        <div className="menu-wrapper">
          {/* Logo */}
          <div className="logo">
            <a href="index.html"><img src="assets/img/logo/logo.png" alt /></a>
          </div>
          {/* Main-menu */}
          <div className="main-menu d-none d-lg-block">
            <nav>                                                
              <ul id="navigation">  
                <li><a href="/">Home</a></li>
            
                <li><a href="/product">shop</a></li>
            
            
                <li><a href="/about">about</a></li>
                <li className="hot"><a href="#">Latest</a>
                  <ul className="submenu">
                    <li><a href="shop.html"> Product list</a></li>
                    <li><a href="product_details.html"> Product Details</a></li>
                  </ul>
                </li>
                <li><a href="/blog">Blog</a>
                
                </li>
                <li><a href="#">Pages</a>
                  <ul className="submenu">
                    <li><a href="login.html">Login</a></li>
                    <li><a href="/cart">Cart</a></li>
                    <li><a href="elements.html">Element</a></li>
                    <li><a href="confirmation.html">Confirmation</a></li>
                    <li><a href="checkout.html">Product Checkout</a></li>
                  </ul>
                </li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
          {/* Header Right */}
          <div className="header-right">
            <ul>
             
              <li>
                <div className="nav-search search-switch">
                  <span className="flaticon-search" />
                  
                   
                        
                         
                </div>
              </li>
         
              <li> <a href="login.html"><span className="flaticon-user" /></a></li>
              <li><a href="/cart"><span className="flaticon-shopping-cart" /></a> </li>
            </ul>
          </div>
          
        
        </div>
        {/* Mobile Menu */}
        <div className="col-12">
          <div className="mobile_menu d-block d-lg-none" />
        </div>
      </div>
    </div>
  </div>
  {/* Header End */}
</header>


        </div>
    )
}

Header.propTypes = {

}

export default Header
