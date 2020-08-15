import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainAdmin from '../pages/layouts/layoutAdmin';
import Main from '../pages/layouts/layoutMain';

//Admin
import Dashboard from '../pages/views/Admin/Dashboard';
import ProductsManager from '../pages/views/Admin/Products';
import PostsManager from '../pages/views/Admin/Posts';
import EditProduct from '../pages/views/Admin/EditProductForm';
import AddProduct from '../pages/views/Admin/AddProductForm';
import AddPost from '../pages/views/Admin/AddPostForm';
import EditCate from '../pages/views/Admin/EditCateForm';
import EditPost from '../pages/views/Admin/EditPostForm';
import Cate from '../pages/views/Admin/Cate';
import AddCate from '../pages/views/Admin/AddCateForm';

//Views
import About from '../pages/views/Main/About';
import Home from '../pages/views/Main/Home';    
import Contact from '../pages/views/Main/Contact';
import Product from '../pages/views/Main/Product';
import Detail from '../pages/views/Main/Detail';
import Cart from '../pages/views/Main/Cart';
import Blog from '../pages/views/Main/Blog';
import BlogDetail from '../pages/views/Main/BlogDetail';









const Routers = ({ products, onRemove,onAdd, onUpdate,posts,onAddPost,onUpdatePost,category,onAddCate,onUpdateCate,onRemoveCate,onRemovePost }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandleRemoveCate = (id) => {
        onRemoveCate(id)
    }
    const onHandleRemovePost = (id) => {
        onRemovePost(id)
    }
    const onHandleAdd = (id) => {
        onAdd(id)
    }
    const onHandleAddPost = (id) => {
        onAddPost(id)
    }
    const onHandleAddCate = (id) => {
        onAddCate(id)
    }
    const onHandleUpdate = (id, data) => {
        onUpdate(id, data)
    }
    const onHandleUpdatePost = (id, data) => {
        onUpdatePost(id, data)
    }
    const onHandleUpdateCate = (id, data) => {
        onUpdateCate(id, data)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <MainAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard products={products} posts={posts}/>
                            </Route>
                            <Route path='/admin/products'>
                                <ProductsManager products={products} onRemove={onHandleRemove} category={category}/>
                            </Route>
                            {/* <Route path='/admin/add_products'>
                                <AddProduct onAdd={onHandleAdd} category={category} />
                            </Route> */}
                            <Route path='/admin/add_products'
                                render={(props) =>
                                    <AddProduct {...props} onAdd={onAdd} category={category}/>}></Route>
                            <Route path='/admin/edit_products/:id'
                                render={(props) =>
                                    <EditProduct {...props} products={products} onUpdate={onHandleUpdate} category={category} />
                                }
                            >
                            </Route>
                            <Route path="/admin/posts">
                                <PostsManager  posts={posts} onRemovePost={onHandleRemovePost} />
                            </Route>
                            <Route path="/admin/add_posts">
                            <AddPost onAddPost={onHandleAddPost}/>
                            </Route>
                            <Route path="/admin/edit_posts/:id"
                             render={(props) =>
                               <EditPost  {...props} posts={posts} onUpdatePost={onHandleUpdatePost} />
                            }
                            >
                            </Route>
                            <Route path="/admin/category">
                                <Cate category={category} onRemoveCate={onHandleRemoveCate}/>
                            </Route>
                            <Route path="/admin/add_category">
                                <AddCate onAdd={onHandleAddCate} />
                            </Route>
                            <Route path="/admin/edit_category/:id"
                             render={(props) =>
                               <EditCate  {...props} category={category} onUpdateCate={onHandleUpdateCate} />
                            }
                            >
                            </Route>
                        </Switch>
                    </MainAdmin>
                </Route>
                <Route>
                    <Main>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products} category={category}/>
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                           <Route path="/product">
                               <Product products={products} category={category}/>
                           </Route>
                           <Route path="/contact">
                               <Contact />
                           </Route>
                           <Route path="/blog">
                               <Blog posts={posts} />
                           </Route>
                            <Route path="/cart" >
                              <Cart />
                            </Route>
                         <Route path="/detailProduct/:id">
                            <Detail  products={products}/>
                         </Route>
                          <Route path="/deatailBlog/:id">
                              <BlogDetail posts={posts} />
                          </Route>
                        </Switch>
                    </Main>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
