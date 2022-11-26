import React, { Component } from 'react'
import { Box, styled, IconButton as MuiIconButton, Typography } from '@mui/material'
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
        borderTop: "1px solid black",
        [theme.breakpoints.up("sm")]: {
            height: "70px"
        },
        [theme.breakpoints.up("lg")]: {
            display: "none"
        }
    })
)

const IconButton = styled(MuiIconButton)(
    ({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
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
                    <Typography variant='caption'>
                        Home
                    </Typography>
                </IconButton>
                <IconButton size='small' onClick={() => this.props.navigate("/calculator")}>
                    <CalculateIcon />
                    <Typography variant='caption'>
                        Calculator
                    </Typography>
                </IconButton>
                <IconButton size='small' onClick={() => this.props.navigate("/discover")}>
                    <LibraryBooksIcon />
                    <Typography variant='caption'>
                        Discover
                    </Typography>
                </IconButton>
                <IconButton size='small' onClick={() => this.props.navigate("/account")}>
                    <PersonIcon />
                    <Typography variant='caption'>
                        Account
                    </Typography>
                </IconButton>
            </StyledNav >
        )
    }
}

export default function BottomNav(): JSX.Element {
    const navigate = useNavigate()
    return <CBottomNav navigate={navigate} />
}
