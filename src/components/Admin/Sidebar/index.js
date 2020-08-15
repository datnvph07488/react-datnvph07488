import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
const Sidebar = props => {
    return (
        <div>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
{/* Sidebar - Brand */}
<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/admin">
<div className="sidebar-brand-icon rotate-n-15">
  <i className="fas fa-laugh-wink" />
</div>
<div className="sidebar-brand-text mx-3" href="/admin">SB Admin <sup></sup></div>
</a>
{/* Divider */}
<hr className="sidebar-divider my-0" />
{/* Nav Item - Dashboard */}
<li className="nav-item">
<Link className="nav-link" to="/admin">
  <i className="fas fa-fw fa-tachometer-alt" />
  <span>Dashboard</span>
</Link>
</li>


<li className="nav-item">
<Link className="nav-link" to="/admin/products">
  <i className="fas fa-fw fa-chart-area" />
  <span>Danh sách sản phẩm</span>
</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/admin/category">
  <i className="fas fa-fw fa-chart-area" />
  <span>Danh mục sản phẩm</span>
</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/admin/posts">
  <i className="fas fa-fw fa-chart-area" />
  <span>Danh sách bài viết</span>
</Link>
</li>

{/* Nav Item - Tables */}

{/* Divider */}
<hr className="sidebar-divider d-none d-md-block" />
{/* Sidebar Toggler (Sidebar) */}
<div className="text-center d-none d-md-inline">
<button className="rounded-circle border-0" id="sidebarToggle" />
</div>
</ul>
  </div>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
