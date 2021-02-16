import React from "react";
import "./styles.scss";

const Navbar = () => {

  return (
    <nav className='admin-nav-container'>
      <ul>
        <li>
          <a href="/admin/products" className='admin-nav-item active'>Meus Produtos</a>
        </li>
        <li>
          <a href="/admin/categories" className='admin-nav-item'>Minhas Categorias</a>
        </li>
        <li>
          <a href="/admin/users" className='admin-nav-item'>Meus Usuários</a>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;