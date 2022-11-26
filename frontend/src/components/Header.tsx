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
        paddingInline: "7px",
        position: "sticky",
        top: "0",
        height: "50px",
        backgroundColor: "#fff",
        borderBottom: "1px solid black"
    })
)

const Logo = styled('img')(
    ({ theme }) => ({
        width: "24px",
        height: "24px",
        padding: "8px"
    })
)

type Props = {}

type State = {}

export default class Header extends Component<Props, State> {
    state = {}

    render() {
        return (
            <StyledHeader>
                <Logo src='/logo.png' alt='logo' />
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </StyledHeader>
        )
    }
}
