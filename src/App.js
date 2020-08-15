import React, { useState,useEffect } from 'react';
import dataFake from './dataFake';
import swal from 'sweetalert';
import Routers from './routers';
import apiRequest from './api/productApi';
import apiPost from './api/postApi';
import apiCate from './api/categoryApi';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState([]);
 
  // Danh sách sản phẩm
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();
  }, []);
  // danh sách bài viết
  useEffect(() => {
    const getPosts= async () => {
      try {
        const { data } = await apiPost.getAll();
        setPosts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getPosts();
  }, []);
  // danh mục
  useEffect(() => {
    const getCategory= async () => {
      try {
        const { data } = await apiCate.getAll();
        setCategory(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getCategory();
  }, []);
  
    // Xóa sản phẩm
    const onHandleRemove = async (id) => {
      console.log(onHandleRemove)
      
      try {
        const { data } = await apiRequest.remove(id);
        const newProducts = products.filter(product => product.id !== data.id);
      
           swal({
      title: "Bạn có muốn xóa không?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        setProducts(newProducts);
        swal("Đã xóa thành công!", {
          icon: "success",
        });
      } else {
        swal("Hủy xóa thành công");
      }
    });
      } catch (error) {
        console.log('failed to request API: ', error)
      }
     
    }
    // Xóa bài viết
    const onHandleRemovePost = async (id) => {
      
      try {
        const { data } = await apiPost.remove(id);
        const newPosts = posts.filter(post => post.id !== data.id);
      
           swal({
      title: "Bạn có muốn xóa không?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        setPosts(newPosts);
        swal("Đã xóa thành công!", {
          icon: "success",
        });
      } else {
        swal("Hủy xóa thành công");
      }
    });
      } catch (error) {
        console.log('failed to request API: ', error)
      }
     
    }
//  // Xóa danh mục
 const onHandleRemoveCate = async (id) => {
      
  try {
    const { data } = await apiCate.remove(id);
    const newCategory = category.filter(category => category.id !== data.id);
  
       swal({
  title: "Bạn có muốn xóa không?",
  text: "Once deleted, you will not be able to recover this imaginary file!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    setCategory(newCategory);
    swal("Đã xóa thành công!", {
      icon: "success",
    });
  } else {
    swal("Hủy xóa thành công");
  }
});
  } catch (error) {
    console.log('failed to request API: ', error)
  }
 
}

 

  // Thêm sản phẩm
  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiRequest.create(product);
      setProducts([
        ...products,
        data
      ])
      swal({
      title: " Thêm sản phẩm thành công!",
      text: "You clicked the button!",
      icon: "success",
      button: "Aww yiss!",
    });
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  
  //thêm bài viết
  const onHandleAddPost = async (post) => {
    try {
      const { data } = await apiPost.create(post);
      setPosts([
        ...posts,
        data
      ])
      swal({
      title: " Thêm sản phẩm thành công!",
      text: "You clicked the button!",
      icon: "success",
      button: "Aww yiss!",
    });
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  // Thêm danh mục
  const onHandleAddCate = async (category) => {
    try {
      const { data } = await apiCate.create(category);
      setCategory([
        ...category,
        data
      ])
      swal({
      title: " Thêm sản phẩm thành công!",
      text: "You clicked the button!",
      icon: "success",
      button: "Aww yiss!",
    });
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  // Sửa sản phẩm
  const onHandleUpdate = async (id,data) => {
    try {
      const edit = await apiRequest.update(id,data);
      console.log(id);
      const newProducts = products.map(product => (
            product.id === data.id ? data : product 
          ));
      setProducts(newProducts);
      swal({
      title: " Cập nhật thành công!",
      text: "You clicked the button!",
      icon: "success",
      button: "Aww yiss!",
    });
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  // Sửa bài viết
  const onHandleUpdatePost = async (id,data) => {
    try {
      const edit = await apiPost.update(id,data);
      console.log(id);
      const newPosts = posts.map(post => (
            post.id === data.id ? data : post 
          ));
      setPosts(newPosts);
      swal({
      title: " Cập nhật thành công!",
      text: "You clicked the button!",
      icon: "success",
      button: "Aww yiss!",
    });
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  // sửa danh mục
  const onHandleUpdateCate = async (id,data) => {
    try {
      const edit = await apiCate.update(id,data);
      console.log(id);
      const newCategory = category.map(category => (
        category.id === data.id ? data : category 
          ));
      setProducts(newCategory);
      swal({
      title: " Cập nhật thành công!",
      text: "You clicked the button!",
      icon: "success",
      button: "Aww yiss!",
    });
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  
  return (
    <div className="App">
      <Routers products={products} onRemove={onHandleRemove} onAdd={onHandleAdd} onUpdate={onHandleUpdate} 
       posts={posts} onRemovePost={onHandleRemovePost} onAddPost={onHandleAddPost}  onUpdatePost={onHandleUpdatePost} 
       category={category}  onRemoveCate={onHandleRemoveCate} onAddCate={onHandleAddCate}  onUpdateCate={onHandleUpdateCate} 
      />
    </div>
  )

}
export default App;