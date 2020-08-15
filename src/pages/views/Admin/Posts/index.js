import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
const PostsManager = ({posts,onRemovePost}) => {
    const removeHandle = (id) => {
        onRemovePost(id)
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
                    <h6 className="m-0 font-weight-bold text-primary">Danh sách bài viết</h6>
                   
                </div>
                
                <div className="card-header py-20">
                <Link className="btn btn-success"  to={`/admin/add_posts`}>Thêm bài viết</Link>
                   
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Content</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map(({ id, title, image,description, content }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{id}</th>
                                        <td>{title}</td>
                                        <td><img src={image} alt="" width="50" /></td>
                                        <td> {description}</td>
                                        <td> {ReactHtmlParser(content) }</td>
                                        <td>
                                      <Link to={`/admin/edit_posts/${id}`} > <i class="fa fa-edit" ></i></Link>
                                      
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

PostsManager.propTypes = {

}

export default PostsManager
