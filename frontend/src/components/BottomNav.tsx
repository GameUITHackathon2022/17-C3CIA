import React, { Component } from 'react'
import { Box, styled, IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import CalculateIcon from '@mui/icons-material/Calculate';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonIcon from '@mui/icons-material/Person';

const StyledNav = styled(Box)(
    ({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingInline: "20px",
        position: "sticky",
        bottom: "0",
        height: "50px",
        backgroundColor: "#fff",
        borderTop: "1px solid black"
    })
)


type Props = {}

type State = {}

export default class BottomNav extends Component<Props, State> {
    state = {}

    render() {
        return (
            <StyledNav>
                <IconButton size='small'>
                    <HomeIcon />
                </IconButton>
                <IconButton size='small'>
                    <CalculateIcon />
                </IconButton>
                <IconButton size='small'>
                    <LibraryBooksIcon />
                </IconButton>
                <IconButton size='small'>
                    <PersonIcon />
                </IconButton>
            </StyledNav>
        )
    }
}
