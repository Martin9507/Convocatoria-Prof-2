import React, { useState, useEffect, Component} from 'react'
import {getCategoria, postProducts} from "../../services"
import {Container, Section, Table} from 'react-bulma-components'
import { render } from 'react-dom'
import Categoria from '../categoria/Categoria'
import Select from '../categoria/Select'
import axios from 'axios'




export default class CreateUser extends Component {

    constructor(props) {
        super(props)

        this.onChangeUserCedula = this.onChangeUserCedula.bind(this);
        this.onChangeUserNombre = this.onChangeUserNombre.bind(this);
        this.onChangeUserApellido = this.onChangeUserApellido.bind(this);
        this.onChangeUserCelular = this.onChangeUserCelular.bind(this);
        this.onChangeUserDireccion = this.onChangeUserDireccion.bind(this);
        this.onChangeUserCorreo = this.onChangeUserCorreo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Cedula: '',
            Nombre: '',
            Apellido: '',
            Celular:'',
            Direccion:'',
            Correo:'',
        }
        
    }
    
    onChangeUserCedula(e) {
        this.setState({ cedula: e.target.value })
    }
    onChangeUserNombre(e) {
        this.setState({ nombre: e.target.value })
    }

    onChangeUserApellido(e) {
        this.setState({ apellido: e.target.value })
    }
    onChangeUserCelular(e) {
        this.setState({ celular: e.target.value })
        
    }
    onChangeUserDireccion(e) {
        this.setState({ direccion: e.target.value })
        
    }
    onChangeUserCorreo(e) {
        this.setState({ correo: e.target.value })
        
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            cedula: this.state.cedula,
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            celular: this.state.celular,
            direccion: this.state.direccion,
            correo: this.state.correo,
        };

        axios.post('http://localhost:4000/usuario/api/add', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({cedula: '', nombre: '', apellido: '', celular:'',  direccion:'', correo:'' })
    }
    


    render() {
        return (
            <div className="section is-fullheight is-3 column  is-offset-4">
                <div class="card">
                <header class="card-header">
                        <form onSubmit={this.onSubmit}>
                            <div class="field" >
                                <label class="has-text-black is-size-4"> Cédula</label>
                                <div class="form-group column ">
                                    <input class="input is-normal is-link is-rounded "placeholder="Cédula" id="cedula" type="text" value={this.state.cedula} onChange={this.onChangeUserCedula} />
                                </div>
                            </div>
                            <div class="field" >
                                <label class="has-text-black is-size-4"> Nombre</label>
                                <div class="form-group column ">
                                    <input class="input is-normal is-link is-rounded "placeholder="Nombre" id="nombre" type="text" value={this.state.nombre} onChange={this.onChangeUserNombre} />
                                </div>
                            </div>
                            <div class="field">
                            <label class="has-text-black is-size-4">Apellido</label>
                                <div class="form-group column ">
                                 <input class="input is-normal is-link is-rounded "placeholder="Apellido" id="apellido" type="text" value={this.state.apellido} onChange={this.onChangeUserApellido} />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="has-text-black is-size-4">Celular</label>
                                <div class="form-group column ">
                                    <input class="input is-normal is-link is-rounded" type="text" value={this.state.celular} onChange={this.onChangeUserCelular} />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="has-text-black is-size-4">Dirección</label>
                                <div class="form-group column ">
                                    <input class="input is-normal is-link is-rounded" type="text" value={this.state.direccion} onChange={this.onChangeUserDireccion} />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="has-text-black is-size-4">Correo</label>
                                <div class="form-group column ">
                                    <input class="input is-normal is-link is-rounded" type="text" value={this.state.correo} onChange={this.onChangeUserCorreo} />
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