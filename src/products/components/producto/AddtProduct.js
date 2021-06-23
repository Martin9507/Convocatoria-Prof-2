import React, { useState, useEffect, Component} from 'react'
import {getCategoria, postProducts} from "../../services"
import {Container, Section, Table} from 'react-bulma-components'
import { render } from 'react-dom'
import Categoria from '../categoria/Categoria'
import Select from '../categoria/Select'
import axios from 'axios'

// export default function AddProduct() {
    
//     const [products, setProducts] = useState({
        
//     })
    
//     useEffect(() => {
//         async function loadProducts(){
//             const datos = await postProducts();
//             const categoria = await getCategoria();
//             console.log(datos);
//              console.log(loadProducts());
//             if(datos.status == 200){
//                 setProducts(datos.data.producto);
//             }
          
//         } 
//         loadProducts();
        
//     }, [])
   

//     return (
        
//         <div className="section is-fullheight column  is-offset-4">
//                 <h1>Agregar Categoria</h1>
//                    <form id="formValues"  onSubmit={products}>
//                         <div class="field">                       
//                             <label>
//                                 Nombre
//                             </label>
//                             <div class="form-group column is-3">
//                                 <input name="nombre" class="input form-control"placeholder="Nombre" id="nombre"></input>
//                             </div>
//                         </div>
//                         <div class="field row">
//                             <label>
//                                 Categoria
//                             </label>
//                                 {/* { products.map((item)=>(
//                                 <select name="idcategoria"key={item.idcategoria}>{}</select>
//                                  ))
//                                 }     */}
//                                 <Select  id="idcategoria" name="idcategoria"/>
//                                 {/* <select name="idcategoria">
//                                     <option value="1">Bebida</option>
//                                     <option value="2">Comida</option>
//                                 </select> */}
//                         </div>
//                         <label>
//                                 Precio
//                             </label>
//                             <div class="form-group column is-3">
//                                 <input name="precio" class="input form-control"placeholder="Precio" id="precio"></input>
//                             </div>
//                        <button type="submit" className="button is-success">Agregar</button>
//                     </form>
                    
//                 </div>
//     //    <div>    
//     //             <label>Nobre Producto</label>
//     //             <input className="" name="nombre"></input>
//     //             <label>Categoria</label>
//     //             <input className="" name="idcategoria"></input>
//     //             <button>Agregar</button>
//                 // {
                   
                    
//                 // }
//     //     </div>
            

            

                  
//     )
// }

const options = [
    {
        nombre: "Bebida",
      idcategoria: "1",
    },
    {
      nombre: "Comida",
      idcategoria: "2",
    },
    {
        nombre: "Acompañantes",
        idcategoria: "3",
      },
  ];

export default class CreateUser extends Component {

    constructor(props) {
        super(props)

        this.onChangeUserNombre = this.onChangeUserNombre.bind(this);
        this.onChangeUserPrecio = this.onChangeUserPrecio.bind(this);
        this.onChangeUserIdcategoria = this.onChangeUserIdcategoria.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Nombre: '',
            Precio: '',
            Idcategoria:'',
        }
        
    }
    
    onChangeUserNombre(e) {
        this.setState({ nombre: e.target.value })
    }

    onChangeUserPrecio(e) {
        this.setState({ precio: e.target.value })
    }
    onChangeUserIdcategoria(e) {
        this.setState({ idcategoria: e.target.value })
        
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            nombre: this.state.nombre,
            precio: this.state.precio,
            idcategoria: this.state.idcategoria
        };

        axios.post('http://localhost:4000/producto/api/add', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ nombre: '', precio: '', idcategoria:'' })
    }
    


    render() {
        return (
            <div className="section is-fullheight is-3 column  is-offset-4">
                <div class="card">
                <header class="card-header">
                        <form onSubmit={this.onSubmit}>
                            <div class="field" >
                                <label class="has-text-black is-size-4"> Nombre Producto</label>
                                <div class="form-group column ">
                                    <input class="input is-normal is-link is-rounded "placeholder="Nombre" id="nombre" type="text" value={this.state.nombre} onChange={this.onChangeUserNombre} />
                                </div>
                            </div>
                            <div class="field">
                            <label class="has-text-black is-size-4">Categoria</label>
                                <div class="form-group column ">
                                    <div class="select ">
                                        <select class="" id="idcategoria" onChange={this.onChangeUserIdcategoria} name="idcategoria">
                                            {options.map((option) => (
                                            <option value={option.idcategoria}>{option.nombre}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="has-text-black is-size-4">Precio</label>
                                <div class="form-group column ">
                                    <input class="input is-normal is-link is-rounded" type="text" value={this.state.precio} onChange={this.onChangeUserPrecio} />
                                </div>
                            </div>
                            <div class="is-offset-6">
                                <input type="submit" value="Create User" class=" button is-info" />
                            </div>
                        </form>
                    </header>
                </div>
            </div>
        )
    }
}