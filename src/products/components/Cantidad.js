import React,{useState} from 'react'

export default function Cantidad(){

    const [cuenta, setCuenta]=  useState(0)

    return(
        <div>
            La cuenta es: {cuenta}
            <button
            onClick = {()=> setCuenta(cuenta+1)}
            />
        </div>
    )
}