import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import apiCate from '../../../../api/categoryApi';

const EditCate = ({ category, onUpdateCate }) => {
    let { id } = useParams();
    let history = useHistory();
    const { register, handleSubmit, errors } = useForm(); 
    const [currentCate, setCurrentCate] = useState(category);
    useEffect(() => {
        const getCate = async () => {
            const { data } = await apiCate.get(id);
            setCurrentCate(data);
        }
        getCate();
      }, []);

    // // const product = products.find(product=>product.id===id)
    // const product = products.filter(products => products.id == id);
    // setCurrentProduct(product);
    // console.log(currentProduct)

    const onHandleSubmit = () => {
        // e.preventDefault();
        onUpdateCate(id,currentCate);
        history.push('/admin/category');
    }
    const onHandleChange = e => {
        const { name, value } = e.target;
        setCurrentCate({
            ...currentCate,
            [name]: value
        })
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-50">
                <div className="form-group">
                    <label htmlFor="productName">Tên danh mục</label>
                    <input type="text" name="name" value={currentCate.name} onChange={onHandleChange} className="form-control"
                    ref={register({ required: true})}
                    />
                    <small id="nameHelp" className="form-text text-danger">
                  {errors.name && errors.name.type === "required" && <span>Vui lòng nhập tên sản phẩm</span>}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Ảnh sản phẩm</label>
                    <input type="text" name="image" value={currentCate.image} onChange={onHandleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Mô tả</label>
                    <textarea cols="80" rows="10" type="text" name="description" value={currentCate.description} onChange={onHandleChange} className="form-control" />
                </div>
                <button className="btn btn-primary">Cập nhật</button>
                <Link className="btn btn-danger" to={`/admin/category`}>Hủy cập nhật</Link>
            </form>
        </div>
    )
}

EditCate.propTypes = {

}

export default EditCate
