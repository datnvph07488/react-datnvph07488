import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const ProductsManager = ({ products, onRemove, category }) => {
    const removeHandle = (id) => {
        onRemove(id)
    }

  
    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more
          information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official
            DataTables documentation</a>.</p>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Danh sách sản phẩm</h6>
                   
                </div>
                
                <div className="card-header py-20">
                <Link className="btn btn-success"  to={`/admin/add_products`}>Thêm sản phẩm</Link>
                   
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col" >Description</th>
                                    <th scope="col" >Category</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(({ id, name, image, price,description,id_cate }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{id}</th>
                                        <td>{name}</td>
                                        <td><img src={image} alt="" width="50" /></td>
                                        <td>{price}</td>
                                        <td>
                                        { ReactHtmlParser(description) }
                                        </td>
                                        <td>
                                        {category.map((elment,name, index) => {
                                            if(id_cate == elment.id){
                                                return elment.name;
                                            }
                                        })}
                                        </td>
                                        <td>
                                      <Link to={`/admin/edit_products/${id}`} > <i class="fa fa-edit" ></i></Link>
                                      
                                      </td>
                                        <td>
                                            <button 
                                            className="fa fa-trash" 
                                            onClick={() => removeHandle(id)}   >
                                            
                                            </button>
                                        </td>
                                      
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

ProductsManager.propTypes = {

}

export default ProductsManager
