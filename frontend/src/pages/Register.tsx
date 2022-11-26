import { Button, Container, styled, TextField } from '@mui/material'
import { Component } from 'react'

import { NavigateFunction, useNavigate } from 'react-router-dom'

const StyledForm = styled('form')(
    ({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    })
)

type Props = {
    navigate: NavigateFunction
}

type State = {}

class CRegister extends Component<Props, State> {
    state = {}

    register = () => {
        this.props.navigate("/login")
    }

    render() {
        return (
            <Container>
                <StyledForm onSubmit={() => this.register()}>
                    <TextField
                        required
                        type="email"
                        label="email address"
                    />
                    <hr />
                    <TextField
                        required
                        type="password"
                        label="your password"
                    />
                    <hr />
                    <Button type='submit' variant='outlined' onClick={() => this.register()}>
                        Register
                    </Button>
                </StyledForm>
            </Container>
        )
    }
}


export default function Register(): JSX.Element {
    const navigate = useNavigate()
    return <CRegister navigate={navigate} />
}
