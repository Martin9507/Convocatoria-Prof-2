import React, { useState, useEffect} from 'react'
import {getPedido, deletePedido} from "../../services"
import {Container, Section, Table} from 'react-bulma-components'

export default function Pedido() {
    const [pedido, setPedido] = useState([])

    useEffect(() => {
        async function loadPedido(){
            const datos = await getPedido();
            // console.log(getPedido());
            console.log(datos);
            if(datos.status == 200){
                setPedido(datos.data.pedido);
            };
        async function eliminarPedido(){
            const eliminar = await deletePedido();
            console.log(deletePedido());
            if(eliminar.status == 200){
                setPedido(eliminar.data.pedido);
            }
        
        } 
        eliminarPedido();
       
        } 
        loadPedido();
    },[])

    
    
    

      

    return (
        <div>    
            <table className="table  is-bordered  mt-6 ml-6 mr-auto">
                <tbody>
                    <tr>
                        <td className="is-size-3">Usuario</td>
                        <td className="is-size-3">Producto</td>
                        <td className="is-size-3">Cantidad</td>
                        <td className="is-size-3">Valor Unitario</td>
                        <td className="is-size-3">Valor Total</td>
                        <td className="is-size-3">Estado</td>
                        <td className="is-size-3">#</td>
                    </tr>
                </tbody>
                {
                    pedido.map((item)=>(
                        <tr key= {item.idpedido}>
                                    <td><h3>{item.nombre}</h3></td>
                                    <td>{item.producto}</td>
                                    <td>{item.cantidad}</td>
                                    <td>{item.valor_unitario}</td>
                                    <td>{item.valor_total}</td>
                                    <td>{item.estado}</td>
                                    <td><button className="fas fa-edit button is-link" >
                                                <i class="fas fa-edit">editar</i>
                                        </button>
                                        <button className="fas fa-edit button is-danger" onClick={()=> this.eliminaddd(item)} >Eliminar
                                        {/* <i class="fas fa-edit" href="/delete/item.idpedido">eliminar</i> */}
                                        </button> 
                                    </td>
                                </tr>   
                    ) )
                }
                </table>
        </div>
            

            

                  
    )
}
