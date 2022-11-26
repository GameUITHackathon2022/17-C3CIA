import React, { Component } from 'react'
import { Box, styled, IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import CalculateIcon from '@mui/icons-material/Calculate';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonIcon from '@mui/icons-material/Person';

import { useNavigate, NavigateFunction } from 'react-router-dom';

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


type Props = {
    navigate: NavigateFunction
}

type State = {}

class CBottomNav extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    state = {}

    render() {
        return (
            <StyledNav>
                <IconButton size='small' onClick={() => this.props.navigate("/home")}>
                    <HomeIcon />
                </IconButton>
                <IconButton size='small' onClick={() => this.props.navigate("/calculator")}>
                    <CalculateIcon />
                </IconButton>
                <IconButton size='small' onClick={() => this.props.navigate("/explore")}>
                    <LibraryBooksIcon />
                </IconButton>
                <IconButton size='small' onClick={() => this.props.navigate("/account")}>
                    <PersonIcon />
                </IconButton>
            </StyledNav>
        )
    }
}

export default function BottomNav(): JSX.Element {
    const navigate = useNavigate()
    return <CBottomNav navigate={navigate} />
}
