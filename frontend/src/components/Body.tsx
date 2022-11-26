import React, { Component } from 'react'
import { Box, styled } from '@mui/material'

const StyledBody = styled(Box)(
    ({ theme }) => ({
        height: "calc(100% - 102px)",
        position: "relative",
        overflowY: "scroll"
    })
)

type Props = {}

type State = {}

export default class Body extends Component<Props, State> {
    state = {}

    render() {
        return (
            <StyledBody />
        )
    }
}
