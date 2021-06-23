import React from "react"
import { Form, Container, Section, Label } from "react-bulma-components"

const Formulario = ()=>{
    return(
        
               <div className="section is-fullheight column  is-offset-4">
                   <form>
                        <div class="field">                       
                            <label>
                                Nombre
                            </label>
                            <div class="form-group column is-3">
                                <input class="input form-control"placeholder="Nombre"></input>
                            </div>
                        </div>
                        <div class="field row">
                            <label>
                                Apellido
                            </label>
                            <div class="form-group column  is-3">
                                <input class="input form-control"placeholder="Apellido"></input>
                            </div>
                        </div>
                        <div class="field row">
                            <label>
                                Correo
                            </label>
                            <div class="form-group column  is-3">
                                <input class="input form-control"placeholder="Correo"></input>
                            </div>
                        </div>
                    </form>
                </div>
        
    )
}
export default Formulario