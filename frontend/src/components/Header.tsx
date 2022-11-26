import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, styled } from '@mui/material';
import { Component } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

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
        borderBottom: "1px solid black",
        [theme.breakpoints.up("sm")]: {
            height: "70px"
        }
    })
)

const Logo = styled('img')(
    ({ theme }) => ({
        width: "24px",
        height: "24px",
        padding: "8px"
    })
)

type Props = {
    navigate: NavigateFunction
}

type State = {}

class CHeader extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    state = {}

    render() {
        return (
            <StyledHeader>
                <IconButton onClick={() => this.props.navigate('/home')}>
                    <Logo src='/logo.png' alt='logo' />
                </IconButton>
                <div>

                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton
                        sx={(theme) => ({
                            display: "none",
                            [theme.breakpoints.up("lg")]: {
                                display: "inline-block"
                            }
                        })}
                        onClick={() => this.props.navigate('/account')}
                    >
                        <PersonIcon />
                    </IconButton>
                </div>
            </StyledHeader>
        )
    }
}


export default function Header(): JSX.Element {
    const navigate = useNavigate()
    return <CHeader navigate={navigate} />
}
