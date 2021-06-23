import React, { useState, useEffect} from 'react'
import {getUsuario} from "../../services"
import AddUsuario from "./AddUsuario"
import {Container, Section, Table} from 'react-bulma-components'

export default function Usuario() {
    const [usuario, setUsuario] = useState([])

    useEffect(() => {
        async function loadUsuario(){
            const datos = await getUsuario();
            console.log(datos);
            if(datos.status == 200){
                setUsuario(datos.data.usuario);
            }
           
        } 
        loadUsuario();
    },[])
    return (
        <div>    
            <AddUsuario/>
            <table className="table  is-bordered  mt-6 ml-6 mr-auto">
                <tbody>
                    <tr>
                        <td className="is-size-3">cedula</td>
                        <td className="is-size-3">Nombre</td>
                        <td className="is-size-3">apellido</td>
                        <td className="is-size-3">celular</td>
                        <td className="is-size-3">direccion</td>
                        <td className="is-size-3">correo</td>
                        <td className="is-size-3">#</td>
                    </tr>
                </tbody>
                {
                    usuario.map((item)=>(
                        <tr key= {item.idusuario}>
                                    <td><h3>{item.cedula}</h3></td>
                                    <td>{item.nombre}</td>
                                    <td>{item.apellido}</td>
                                    <td>{item.celular}</td>
                                    <td>{item.direccion}</td>
                                    <td>{item.correo}</td>
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
