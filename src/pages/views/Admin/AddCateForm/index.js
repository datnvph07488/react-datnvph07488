import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const AddCate = ({onAdd}) => {
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
            onAdd(data);
            history.push("/admin/category");
            // }
           
    }
    return (
        <div>
             <h1 className="h3 mb-2 text-gray-800">Thêm danh mục</h1>
            <div className="card shadow mb-4">
            <div className="card-body">
           <form onSubmit={handleSubmit(onHandleSubmit)}>
           <input type="hidden" name="description" defaultValue={text ? text : ""}  ref={register({ required: true })} />
              <div className="form-group">
              <label htmlFor="inputProductName">Tên danh mục</label>
              <input type="text" 
              className="form-control" 
              id="inputProductName" 
              name="name" 
              ref={register({ required: true, minLength: 5 })} />
            <small id="nameHelp" className="form-text text-danger">
            {errors.name && errors.name.type === "required" && <span>Vui lòng nhập tên sản phẩm</span>}
            {errors.name && errors.name.type === "minLength" && <span>Ít nhất 5 ký tự</span> }
            </small>
              </div>
              <div className="form-group">
              <label htmlFor="inputProductName">Ảnh danh mục</label>
              <input type="text" className="form-control" 
              id="inputProductName" 
              name="image" 
              ref={register({ required: true })} />
            <small id="nameHelp" className="form-text text-danger">{errors.image && <span>Vui lòng chọn ảnh sản phẩm</span>}</small>
              </div>
              <div className="form-group">
              <label htmlFor="inputProductName">Mô tả</label>
              {/* <textarea cols="80" rows="10" type="text" className="form-control" 
              id="inputProductName"  
              name="description" 
              ref={register({ required: true })} />
            <small id="nameHelp" className="form-text text-danger">{errors.description && <span>Vui lòng nhập mô tả</span>}</small> */}
                <CKEditor  editor={ClassicEditor} onChange={(event,editor)=>{
                getText(editor.getData());
              }}
             />
              </div>
              {/* <div className="form-group">
              <label htmlFor="inputProductName">Thể loại</label>
              <select name="id_cate">
                <option >--  Chọn --</option>
                {category.map(({id,name,description},index)=>(
                      <option key={index} value={id}>{name}</option>
                ))}
              
              </select>
              </div> */}
            
             <button type="submit" className="btn btn-primary">Submit</button>
             <Link className="btn btn-danger" to={`/admin/category`}>Hủy thêm</Link>
              </form>

            </div>
            </div>
        </div>
    )
}

AddCate.propTypes = {

}

export default AddCate
