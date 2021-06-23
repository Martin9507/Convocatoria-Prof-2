import React, { useState, useEffect} from 'react'
import {getCategoria} from "../../services"
import {Container, Section, Table} from 'react-bulma-components'

export default function Categoria() {
    const [categoria, setCategoria] = useState([])

    useEffect(() => {
        async function loadCategoria(){
            const datos = await getCategoria();
            console.log(datos);
            if(datos.status == 200){
                setCategoria(datos.data.categoria);
            }
           
        } 
        loadCategoria();
    },[])

    return (
        <div>    
            <table className="table  is-bordered  mt-6 ml-6 mr-auto">
                <tbody>
                    <tr>
                        <td className="is-size-3">Nombre</td>
                        <td className="is-size-3">#</td>
                    </tr>
                </tbody>
                {
                    categoria.map((item)=>(
                        <tr key= {item.idcategoria}>
                                    <td>{item.nombre}</td>
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
