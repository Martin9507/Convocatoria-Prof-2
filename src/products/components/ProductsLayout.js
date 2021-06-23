import React from 'react'
import Header from './Header'
import AddButton from './AddButton'
import Form from './Formulario'
import Cantidad from './Cantidad'
import AddtProduct from './producto/AddtProduct'

const ProductsLayout = () =>{
    
    return(
        <>
            <Header title="LA GRANJA BURGUER"/>
            <Cantidad />
            <AddtProduct />
       </>
    )
}

export default ProductsLayout