import React, { useState, useEffect} from 'react'
import {getProducts} from "../../services"
import {Container, Section, Table} from 'react-bulma-components'

export default function ListProduct() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function loadProducts(){
            const datos = await getProducts();
            console.log(datos);
            if(datos.status == 200){
                setProducts(datos.data.producto);
            }
           
        } 
        loadProducts();
    },[])

    return (
        <div>    
            <table className="table  is-bordered  mt-6 ml-6 mr-auto">
                <tbody>
                    <tr>
                        <td className="is-size-3">Nombre</td>
                        <td className="is-size-3">Categoria</td>
                        <td className="is-size-3">#</td>
                    </tr>
                </tbody>
                {
                    products.map((item)=>(
                                <tr key= {item.idproducto}>
                                    <td>{item.nombre}</td>
                                    <td><h3>{item.categoria}</h3></td>
                                    <td><button className="fas fa-edit button is-link" >
                                                <i class="fas fa-edit">editar</i>
                                        </button>
                                        <button className="fas fa-edit button is-danger" >
                                           
                                                <i class="fas fa-edit">eliminar</i>
                                        </button> 
                                    </td>
                                </tr>   
                    ) )
                }
                </table>
        </div>
            

            

                  
    )
}
