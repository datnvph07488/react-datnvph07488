import React, { useState,useEffect } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import apiPost from '../../../../api/postApi';


const EditPost = ({ posts, onUpdatePost }) => {
    let { id } = useParams();
    let history = useHistory();
    const { register, handleSubmit, errors } = useForm(); 
    const [currentPost, setCurrentPost] = useState(posts);


    useEffect(() => {
        const getPosts = async () => {
            const { data } = await apiPost.get(id);
            setCurrentPost(data);
        }
        getPosts();
      }, []);

    // // const product = products.find(product=>product.id===id)
    // const product = products.filter(products => products.id == id);
    // setCurrentProduct(product);
    // console.log(currentProduct)

    const onHandleSubmit = () => {
        // e.preventDefault();
        onUpdatePost(id,currentPost);
        history.push('/admin/posts');
    }
    const onHandleChange = e => {
        const { name, value } = e.target;
        setCurrentPost({
            ...currentPost,
            [name]: value
        })
    }
    return (
        <div>
             <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-50">
                <div className="form-group">
                    <label htmlFor="productName">Tiêu đề bài viết</label>
                    <input type="text" name="title" value={currentPost.title} onChange={onHandleChange} className="form-control"
                     ref={register({ required: true})}
                    />
                    <small id="nameHelp" className="form-text text-danger">
                  {errors.name && errors.title.type === "required" && <span>Vui lòng nhập  tiêu đề</span>}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Ảnh bài viết</label>
                    <input type="text" name="image" value={currentPost.image} onChange={onHandleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Mô tả ngắn</label>
                    <textarea cols="80" rows="10" type="text" name="description" value={currentPost.description} onChange={onHandleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Nội dung bài viết</label>
                    <textarea cols="80" rows="10" type="text" name="content" value={currentPost.content} onChange={onHandleChange} className="form-control" />
                </div>
                <button className="btn btn-primary">Cập nhật</button>
                <Link className="btn btn-danger" to={`/admin/posts`}>Hủy cập nhật</Link>
            </form>
        </div>
    )
}

EditPost.propTypes = {
    posts: PropTypes.array
}

export default EditPost
