import React, { Component } from 'react'
import { Container, styled, Box, Grid } from '@mui/material'

const Img = styled('img')(
    ({ theme }) => ({
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        [theme.breakpoints.up("md")]: {
            width: "100%",
            height: "100%",
        }
    })
)

const CenterItem = styled('div')(
    ({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    })
)

type Props = {}

type State = {}

export default class Account extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Container>
                <Grid container>
                    <Grid item xs={12} md={3}>
                        <CenterItem>
                            <Img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='profile' />
                        </CenterItem>
                    </Grid>
                    <Grid item xs={12} md={9}>

                    </Grid>
                </Grid>
            </Container>
        )
    }
}
