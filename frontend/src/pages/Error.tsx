import React, { Component } from 'react'
import { Container, styled, Typography } from '@mui/material'

import Header from '../components/Header'
import BottomNav from '../components/BottomNav'

const StyledErrorContainer = styled(Container)(
    ({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100% - 102px)"
    })
)

type Props = {}

type State = {}

export default class Error extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className="App">
                <Header />
                <StyledErrorContainer>
                    <Typography variant='h5'>
                        ERROR NOT FOUND
                    </Typography>
                </StyledErrorContainer>
                <BottomNav />
            </div>
        )
    }
}
