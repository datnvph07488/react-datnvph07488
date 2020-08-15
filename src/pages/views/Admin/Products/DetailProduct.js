import React from 'react'
import PropTypes from 'prop-types'
import {useParams} from 'react-router-dom';

const DetailProduct = ({products}) => {
    let {id} = useParams();
    const product = products.find(product=>product.id===id)
    console.log(product)
    
    return (
        <div>
         <li>Tên sản phẩm:{product.name}</li>
         <li>Ảnh: {product.image} </li>
         <li>Giá: {product.price}  </li>
        </div>
    )
}

DetailProduct.propTypes = {

}

export default DetailProduct
// import React, { useState } from 'react'
// import PropTypes from 'prop-types';
// import { Link, useParams } from 'react-router-dom'
// import Swal from 'sweetalert2'
// import { Input } from 'antd'
// import http from '../../../../api/axiosHttp'

// const ProductsManager = ({ products, onRemove, categories }) => {
//     const removeHandle = (id) => {
//         Swal.fire({
//             title: 'Bạn có chắc chắn muốn xóa?',
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!'
//         }).then((result) => {
//             if (result.value) {
//                 onRemove(id)
//                 Swal.fire(
//                     'Deleted!',
//                     'Your file has been deleted.',
//                     'success'
//                 )
//             }
//         })
//         console.log(id)
//     }
//     // const [keyword, setKeyword] = useState('');
//     // function handleInputChange(e) {
//     //     setKeyword(e.target.value)
//     // }
//     // async function handleSearch() {
//     //     const { data } = await axios.get(/admin/products?q=${keyword})
//     //     console.log(data)
//     // }
//     const [filter, setFilter] = useState("")
//     const filprices = products;
//     function checkPrice(filprice) {
//         return filprice
//     }
//     return (
//         <div>

//             <div className="card shadow mb-4">
//                 <div className="card-header py-3">
//                     <form className="d-none d-sm-inline-block form-inline mr-auto md-3 my-8 my-md-0 mw-100 navbar-search">
//                         <div className="input-group">
//                             <input value={filter} onChange={(e) => setFilter(e.target.value)}
//                                 type="text"
//                                 className="form-control bg-light border-0 small"
//                                 placeholder="Search for products"
//                                 aria-label="Search"
//                                 aria-describedby="basic-addon2" />
//                             <div className="input-group-append">
//                                 <button className="btn btn-primary" type="button">
//                                     <i className="fas fa-search fa-sm" />
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="dropdown">
//                             <button className="btn btn-secondary dropdown-toggle mr-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                 Lọc
//   </button>
//                             <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                                 <a className="dropdown-item" href="#">Action</a>
//                                 <a className="dropdown-item" href="#">Another action</a>
//                                 <a className="dropdown-item" href="#">Something else here</a>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//                 <div className="card-body">
//                     <div className="table-responsive">
//                         <table className="table">
//                             <thead>
//                                 <tr>
//                                     <th scope="col">#</th>
//                                     <th scope="col">Name</th>
//                                     <th scope="col">Image</th>
//                                     <th scope="col">Price</th>
//                                     <th scope="col">Category</th>
//                                     <th scope="col">Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {products.map((product, index) => {
//                                     if (filter.length !== 0) {
//                                         if ((product.name).startsWith(filter)) {
//                                             return (<tr key={index}>
//                                                 <th scope="row">{index + 1}</th>
//                                                 <td><Link to={`/admin/detail-product/${product.id}`}>{product.name}</Link></td>
//                                                 <td><img src={product.image} alt="" width="50" /></td>
//                                                 <td>{product.price}</td>
//                                                 <td>{categories.map((cate) => cate.id == product.cateId && <p>{cate.name_category}</p>)}</td>
//                                                 <td>
//                                                     <button className="btn btn-danger" onClick={() => removeHandle(product.id)}>Xóa</button>
//                                                     <Link className='btn btn-primary ml-2' to={`/admin/edit-product/${product.id}`}>Sửa</Link>
//                                                 </td>
//                                             </tr>)
//                                         } else {
//                                             return null
//                                         }
//                                     }
//                                     return (<tr key={index}>
//                                         <th scope="row">{index + 1}</th>
//                                         <td><Link to={`/admin/detail-product/${product.id}`}>{product.name}</Link></td>
//                                         <td><img src={product.image} alt="" width="50" /></td>
//                                         <td>{product.price}</td>
//                                         <td>{categories.map((cate) => cate.id == product.cateId && <p>{cate.name_category}</p>)}</td>
//                                         <td>
//                                             <button className="btn btn-danger" onClick={() => removeHandle(product.id)}>Xóa</button>
//                                             <Link className='btn btn-primary ml-2' to={`/admin/edit-product/${product.id}`}>Sửa</Link>
//                                         </td>
//                                     </tr>)
//                                 })}
//                             </tbody>
//                         </table>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// ProductsManager.propTypes = {

// }

// export default ProductsManager