import React, { Component } from 'react'
import { Container, styled, Box, Grid, Typography, Button, TextField } from '@mui/material'

const Img = styled('img')(
    ({ theme }) => ({
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        [theme.breakpoints.up("md")]: {
            width: "120px",
            height: "120px",
        }
    })
)

const CenterItem = styled('div')(
    ({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    })
)

const StyledForm = styled('form')(
    ({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    })
)

const InLineInfo = styled('div')(
    ({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    })
)

const InfoTitle = styled(Typography)(
    ({ theme }) => ({
        cursor: "context-menu"
    })
)

const Editable = styled(Typography)(
    ({ theme }) => ({
        "&:hover": {
            borderBottom: "1px solid gray"
        }
    })
)

type Props = {}

type State = {
    loggedIn: boolean
}

export default class Account extends Component<Props, State> {
    state = {
        loggedIn: Boolean(window.sessionStorage.getItem('login'))
    }

    login = () => {
        sessionStorage.setItem("login", "1")
        this.setState({ loggedIn: true })
    }

    logout = () => {
        sessionStorage.setItem("login", "")
        this.setState({ loggedIn: false })
    }

    render() {
        return this.state.loggedIn ?
            (
                <Container>
                    <Grid container rowGap="20px">
                        <Grid item xs={12} md={3}>
                            <CenterItem>
                                <Img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='profile' />
                            </CenterItem>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Typography variant='h6' component='h6' fontWeight="bold">
                                nguyenvana1990@gmail.com
                            </Typography>
                            <Typography variant='caption'>
                                nguyenvana1990
                            </Typography>
                        </Grid>
                    </Grid>
                    <hr />
                    <br />
                    <Box minHeight="40vh">
                        <InLineInfo>
                            <InfoTitle variant='body1' fontWeight="bold">
                                Về bản thân:
                            </InfoTitle>
                            <Editable variant='body1'>
                                Tôi họ Nguyễn tên là A
                            </Editable>
                        </InLineInfo>
                        <InLineInfo>
                            <InfoTitle variant='body1' fontWeight="bold">
                                Tên:
                            </InfoTitle>
                            <Editable variant='body1'>
                                Nguyễn Văn A
                            </Editable>
                        </InLineInfo>
                        <InLineInfo>
                            <InfoTitle variant='body1' fontWeight="bold">
                                Tuổi:
                            </InfoTitle>
                            <Editable variant='body1'>
                                22
                            </Editable>
                        </InLineInfo>
                    </Box>
                    <hr />
                    <CenterItem>
                        <Button variant='outlined' onClick={() => this.logout()}>
                            Logout
                        </Button>
                    </CenterItem>
                </Container>
            ) : (
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
                    </StyledForm>
                </Container>
            )
    }
}
