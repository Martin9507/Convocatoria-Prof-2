import React from 'react'
import axios from 'axios'

const baseUrl_producto = process.env.REACT_APP_BASE_URL

export async function getProducts() {
    try {
        const response = await axios({

            url:`${baseUrl_producto}/producto/api/list`,
            method:'GET',
            
        });
       
        console.log(response.url);
        return response
    } catch (e) {
        console.log(e);
    }
}


export async function postProducts() {
    try {
        const response = await axios({

            url:`${baseUrl_producto}/producto/api/add`,
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
               
            
        });
        
       alert(response.url);
        console.log(response.url);
        return response
    } catch (e) {
        console.log(e);
    }
}

//Usuario

export async function getUsuario() {
    try {
        const response = await axios({

            url:`${baseUrl_producto}/usuario/api/list`,
            method:'GET',
            
        });
       
        console.log(response.url);
        return response
    } catch (e) {
        console.log(e);
    }
}
//Usuario Agregar
export async function postUsuario() {
    try {
        const response = await axios({

            url:`${baseUrl_producto}/usuario/api/add`,
            method:'POST',
            
        });
       
        console.log(response.url);
        return response
    } catch (e) {
        console.log(e);
    }
}


//return
export async function getCategoria() {
    try {
        const response = await axios({

            url:`${baseUrl_producto}/categoria/api/list`,
            method:'GET',
            
        });
       
        console.log(response.url);
        return response
    } catch (e) {
        console.log(e);
    }
}

export async function getPedido() {
    try {
        const response = await axios({

            url:`${baseUrl_producto}/pedido/api/list`,
            method:'GET',
            
        });
       
        console.log(response.url);
        return response
    } catch (e) {
        console.log(e);
    }
}
//eliminar Pedido
export async function deletePedido(idpedido) {
    try {
        const response = await axios({

            url:`${baseUrl_producto}/pedido/api/delete/:`+idpedido,
            
            method:'DELETE',
            
            
        });
       
        console.log(response.url);
        return response
    } catch (e) {
        console.log(e);
    }
}
