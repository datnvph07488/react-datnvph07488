import React from 'react';
import PropTypes from 'prop-types';
import {useParams, Link} from 'react-router-dom';

const Detail = ({products}) => {
  let { id } = useParams();
  const product = products.find(product => product.id == id);
  console.log(product)
  
    return (
        <div>
       <main>
  {/* Hero Area Start*/}
  <div className="slider-area ">
    <div className="single-slider slider-height2 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="hero-cap text-center">
              <h2>Watch Shop</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Hero Area End*/}
  {/*================Single Product Area =================*/}
  <div className="product_image_area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="product_img_slide owl-carousel">
            <div className="single_product_img">
           <img src={product.image}/>

            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="single_product_text text-center">
    <h3>{product.name}</h3>
            <p>
              {product.description}
            </p>
            <div className="card_area">
              <div className="product_count_area">
                <p>Quantity</p>
                <div className="product_count d-inline-block">
                  <span className="product_count_item inumber-decrement"> <i className="ti-minus" /></span>
                  <input className="product_count_item input-number" type="text" defaultValue={1} min={0} max={10} />
                  <span className="product_count_item number-increment"> <i className="ti-plus" /></span>
                </div>
                <p>{product.price}</p>
              </div>
              <div className="add_to_cart">
                <a href="#" className="btn_3">add to cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*================End Single Product Area =================*/}
  {/* subscribe part here */}
  <section className="subscribe_part section_padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="subscribe_part_content">
            <h2>Get promotions &amp; updates!</h2>
            <p>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources credibly innovate granular internal .</p>
            <div className="subscribe_form">
              <input type="email" placeholder="Enter your mail" />
              <a href="#" className="btn_1">Subscribe</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* subscribe part end */}
</main>

        </div>
    )
}

Detail.propTypes = {

}

export default Detail
