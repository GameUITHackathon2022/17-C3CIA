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

class CLogin extends Component<Props, State> {
    state = {}

    login = () => {
        window.sessionStorage.setItem("login", "1")
        this.props.navigate("/account")
    }

    register = () => {
        this.props.navigate("/register")
    }

    render() {
        return (
            <Container>
                <StyledForm onSubmit={() => this.login()}>
                    <TextField
                        required
                        type="email"
                        label="email address"
                    />
                    <TextField
                        required
                        type="password"
                        label="your password"
                    />
                    <hr />
                    <Button type='submit' variant='outlined' onClick={() => this.login()}>
                        Login
                    </Button>
                    <hr style={{ width: "80%" }} />
                    <Button variant='outlined' onClick={() => this.register()}>
                        Register
                    </Button>
                </StyledForm>
            </Container>
        )
    }
}


export default function Login(): JSX.Element {
    const navigate = useNavigate()
    return <CLogin navigate={navigate} />
}
