import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddPost = ({onAddPost}) => {
    const { register, handleSubmit, errors } = useForm(); 
    const [text, getText] = useState();
    let history = useHistory();
    // const [valueInput, setValueInput] = useState({});
    // const onHandleChange = (e) =>{
    //     const {name, value} = e.target ;
    //     setValueInput ({
    //         ...valueInput,
    //         [name]: e.target.value
    //     });
    // }
    const onHandleSubmit = (data) =>{
            // e.preventDefault();
            // if(valueInput.lengh >0){
                onAddPost(data);
            console.log(data)
            history.push("/admin/posts");
            // }
           
    }
    return (
        <div>
              <h1 className="h3 mb-2 text-gray-800">Thêm bài viết</h1>
            <div className="card shadow mb-4">
            <div className="card-body">
           <form onSubmit={handleSubmit(onHandleSubmit)}>
              <div className="form-group">
              <label htmlFor="inputProductName">Tiêu đề bài viết</label>
              <input type="text" 
              className="form-control" 
              id="inputProductName" 
              name="title" 
              ref={register({ required: true, minLength: 5 })} />
            <small id="nameHelp" className="form-text text-danger">
            {errors.title && errors.title.type === "required" && <span>Vui lòng nhập tiêu đề bài viết</span>}
            {errors.title && errors.title.type === "minLength" && <span>Ít nhất 5 ký tự</span> }
            </small>
              </div>
              <div className="form-group">
              <label htmlFor="inputProductName">Ảnh bài viết</label>
              <input type="text" className="form-control" 
              id="inputProductName" 
              name="image" 
              ref={register({ required: true })} />
            <small id="nameHelp" className="form-text text-danger">{errors.image && <span>Vui lòng chọn ảnh bài viết</span>}</small>
              </div>
              <div className="form-group">
              {/* <input type="hidden" name="description" defaultValue={text ? text : ""}  ref={register({ required: true })} /> */}
              <label htmlFor="inputProductName">Mô tả ngắn</label>
              <textarea cols="80" rows="10" type="text" className="form-control" 
              id="inputProductName"  
              name="description" 
              ref={register({ required: true })} />
            <small id="nameHelp" className="form-text text-danger">{errors.description && <span>Vui lòng nhập mô tả</span>}</small>
                {/* <CKEditor  editor={ClassicEditor} onChange={(event,editor)=>{
                getText(editor.getData());
              }}
             /> */}
              </div>
              <div className="form-group">
              <label htmlFor="inputProductName">Nội dung bài viết</label>
              <input type="hidden" name="content" defaultValue={text ? text : ""}  ref={register({ required: true })} />
              {/* <textarea cols="80" rows="10" type="text" className="form-control" 
              id="inputProductName"  
              name="content" 
              ref={register({ required: true })} />
            <small id="nameHelp" className="form-text text-danger">{errors.content && <span>Vui lòng nhập nội dung</span>}</small> */}
              <CKEditor  editor={ClassicEditor} onChange={(event,editor)=>{
                getText(editor.getData());
              }}
             />
              </div>
             <button type="submit" className="btn btn-primary">Submit</button>
             <Link className="btn btn-danger" to={`/admin/posts`}>Hủy thêm</Link>
              </form>

            </div>
            </div>

        </div>
    )
}

AddPost.propTypes = {

}

export default AddPost;
