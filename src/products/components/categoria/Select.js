import React, { useState, useEffect} from 'react'
import {getProducts} from "../../services"
import {Container, Section, Table} from 'react-bulma-components'

export default function ListProduct() {
    const [categoria, setProducts] = useState([])

    useEffect(() => {
        async function loadProducts(){
            const datos = await getProducts();
            console.log(datos);
            if(datos.status == 200){
                setProducts(datos.data.categoria);
            }
           
        } 
        loadProducts();
    },[])

    return (
        <div>    
                <select class="select is-focused is-link" name="idcategoria">
                    {
                        categoria.map((item)=>(
                                    <option  key= {item.idcategoria}>
                                        {item.nombre}
                                    </option>   
                        ) )
                    }
                </select>
        </div>
            

            

                  
    )
}
