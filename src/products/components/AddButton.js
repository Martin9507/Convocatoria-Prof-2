import React from 'react'
import {Container, Section, Button} from 'react-bulma-components'

const AddButton = ()=>{
    return(
        <Section>
            <Container>
                <Button className="button is-success mb-3">Agregar</Button>
            </Container>
        </Section>
    )
}

export default AddButton