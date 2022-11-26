import React, { Component } from 'react'
import { Box, styled, IconButton } from '@mui/material'
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import SearchIcon from '@mui/icons-material/Search';

const StyledHeader = styled(Box)(
    ({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingInline: "15px",
        position: "sticky",
        top: "0",
        height: "50px",
        backgroundColor: "#fff",
        borderBottom: "1px solid black"
    })
)

type Props = {}

type State = {}

export default class Header extends Component<Props, State> {
    state = {}

    render() {
        return (
            <StyledHeader>
                <RiceBowlIcon />
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </StyledHeader>
        )
    }
}
