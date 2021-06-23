import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.min.css';
import ProductLayout from './products/components/ProductsLayout'
import ListProduct from './products/components/producto/ListProduct'
import Usuario from './products/components/usuario/Usuario'
import AddUsuario from './products/components/usuario/Usuario'
import Categoria from './products/components/categoria/Categoria'
import Pedido from './products/components/pedido/Pedido'
import {  BrowserRouter as Router,  Switch,  Route, NavLink, Link} from "react-router-dom";

ReactDOM.render(
  <Router>
    <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <Link to="/" className=" mt-3">
          <a className="is-active button is-normal is-info">
            Inicio
          </a>        
        </Link>
        
      </div>
      <div class="navbar-brand">
      <NavLink to="/producto" className="is-active mt-3">
          <a className=" is-active button is-normal is-info">
             producto
          </a>        
      </NavLink>
      <NavLink to="/agregar/usuario" className="is-active mt-3">
          <a className=" is-active button is-normal is-info">
              Agregar Usuario
          </a>        
      </NavLink>
      <NavLink to="/usuario" className="is-active mt-3">
          <a className=" is-active button is-normal is-info">
             Usuario
          </a>        
      </NavLink>
      
      <NavLink to="/categoria" className="is-active mt-3">
          <a className=" is-active button is-normal is-info">
             Categoría
          </a>        
      </NavLink>
      <NavLink to="/pedido" className="is-active mt-3">
          <a className=" is-active button is-normal is-info">
             Pedido
          </a>        
      </NavLink>
      </div>
    </nav>
    <Switch>
      <Route path="/agregar/usuario" exact><AddUsuario/></Route>
    </Switch>
    <Switch>
      <Route path="/usuario" exact><Usuario/></Route>
    </Switch>
    
    <Switch>
      <Route path="/categoria" exact><Categoria/></Route>
    </Switch>

    <Switch>
      <Route path="/producto" exact><ListProduct/></Route>
    </Switch>
    <Switch>
      <Route path="/pedido" exact><Pedido/></Route>
    </Switch>
    <Switch>
      <Route path="/" exact><ProductLayout/> </Route>
    </Switch>
    
  
  
  </Router>,
    
  document.getElementById('root')
 
);


