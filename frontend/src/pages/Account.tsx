import { trpc } from '../trpc';

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

export default function Account(props: Props) {
    let [loggedIn, setLoggedIn] = React.useState(!!globalThis.sessionStorage.getItem("loggedIn"));

    // Input
    let [username, setUsername] = React.useState("");
    let [password, setPassword] = React.useState("");

    // Output
    let [error, setError] = React.useState("");

    let login = async () => {
        let res = await trpc.login.query({ username, password });
        if (res) {
            if (res.success) {
                globalThis.localStorage.setItem("token", res.token!);
                globalThis.sessionStorage.setItem("loggedIn", "1");
                setLoggedIn(true);
            } else {
                setError(res.error!);
            }
        } else {
            setError("Lỗi không xác định");
        }
    }

    let logout = () => {
        sessionStorage.setItem("loggedIn", "");
    }

    return loggedIn ?
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
                    <Button variant='outlined' onClick={() => logout()}>
                        Logout
                    </Button>
                </CenterItem>
            </Container>
        ) : (
            <Container>
                <StyledForm onSubmit={() => login()}>
                    <TextField
                        required
                        type="text"
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        required
                        type="password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <hr />
                    <Button type='submit' variant='outlined' onClick={() => login()}>
                        Login
                    </Button>
                </StyledForm>
            </Container>
        )
}
