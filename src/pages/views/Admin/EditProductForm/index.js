import React, { useState,useEffect } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';

import apiRequest from '../../../../api/productApi';

const EditProduct = ({ products, onUpdate,category }) => {
    let { id } = useParams();
    let history = useHistory();
    const { register, handleSubmit, errors } = useForm(); 
    const [currentProduct, setCurrentProduct] = useState(products);


    useEffect(() => {
        const getProducts = async () => {
            const { data } = await apiRequest.get(id);
            setCurrentProduct(data);
        }
        getProducts();
      }, []);

    // // const product = products.find(product=>product.id===id)
    // const product = products.filter(products => products.id == id);
    // setCurrentProduct(product);
    // console.log(currentProduct)

    const onHandleSubmit = () => {
        // e.preventDefault();
        onUpdate(id,currentProduct);
        history.push('/admin/products');
    }
    const onHandleChange = e => {
        const { name, value } = e.target;
        setCurrentProduct({
            ...currentProduct,
            [name]: value
        })
    }
   
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-50">
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input type="text" name="name" value={currentProduct.name} onChange={onHandleChange} className="form-control" 
                    ref={register({ required: true})} />
                   <small id="nameHelp" className="form-text text-danger">
                  {errors.name && errors.name.type === "required" && <span>Vui lòng nhập tên sản phẩm</span>}
            
            </small>
                   
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Ảnh sản phẩm</label>
                    <input type="text" name="image" value={currentProduct.image} onChange={onHandleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Giá sản phẩm</label>
                    <input type="text" name="price" value={currentProduct.price} onChange={onHandleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Mô tả</label>
                    <textarea cols="80" rows="10" type="text" name="description" value={currentProduct.description} onChange={onHandleChange} className="form-control" />
                </div>
               
                <div className="form-group">
              <label htmlFor="inputProductName">Thể loại</label>
              <select name="id_cate" value={currentProduct.id_cate} onChange={onHandleChange}>
                <option >-- Chọn --</option>
                {category.map(({id,name}, index) => (
                <option key={index} value={id}>{name}</option>
                ))} 
              
              </select> 
              </div>
                <button className="btn btn-primary">Cập nhật</button>
                <Link className="btn btn-danger" to={`/admin/products`}>Hủy cập nhật</Link>
            </form>
        </div>
    )
}

EditProduct.propTypes = {
    products: PropTypes.array
}

export default EditProduct;