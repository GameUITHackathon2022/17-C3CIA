import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { Box, Button, Container, Grid, styled, Typography } from '@mui/material';
import { Component } from 'react';

import { NavigateFunction, useNavigate } from 'react-router-dom';

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

const DropdownTitle = styled(Box)(
    ({ theme }) => ({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "auto",
        height: "50px",
        border: ".5px solid black",
        paddingInline: "10px",
        marginBottom: "10px",
        cursor: "pointer"
    })
)

const DropdownInfo = styled(Box)(
    ({ theme }) => ({
        marginInline: "20px",
        overflow: "scroll",
        transition: "height .3s"
    })
)

const DropdownEachCard = styled(Box)(
    ({ theme }) => ({
        paddingInline: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    })
)

type Props = {
    navigate: NavigateFunction
}

type State = {
    loggedIn: boolean
    familyDropdown: boolean
    historyDropdown: boolean
}

class CAccount extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    state = {
        loggedIn: Boolean(window.sessionStorage.getItem('login')),
        familyDropdown: false,
        historyDropdown: false
    }

    componentDidMount(): void {
        if (!this.state.loggedIn) {
            this.props.navigate('/login')
        }
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if (!this.state.loggedIn) {
            this.props.navigate('/login')
        }
    }

    logout = () => {
        sessionStorage.setItem("login", "")
        this.setState({ loggedIn: false })
    }

    render() {
        return this.state.loggedIn ?
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
                    <Box minHeight="100px">
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
                    </Box>
                    <DropdownTitle onClick={() => this.setState({ familyDropdown: !this.state.familyDropdown })}>
                        <Typography variant='body1' fontFamily="bold">
                            Thông tin gia đình
                        </Typography>
                        <ArrowDropDownCircleIcon
                            style={{
                                transform: this.state.familyDropdown ? "rotate(0)" : "rotate(-90deg)",
                                transition: "all .3s"
                            }}
                        />
                    </DropdownTitle>
                    <DropdownInfo
                        height={this.state.familyDropdown ? "200px" : "0px"}
                    >
                        <DropdownEachCard>
                            <Typography variant='h6' component="h6">
                                Bản thân
                            </Typography>
                            <Typography variant='caption'>
                                Tuổi: 22, Chiều Cao: 167 cm, Cân Nặng: 55 kg
                            </Typography>
                        </DropdownEachCard>
                        <DropdownEachCard>
                            <Typography variant='h6' component="h6">
                                Nguyễn Văn B
                            </Typography>
                            <Typography variant='caption'>
                                Tuổi: 23, Chiều Cao: 167 cm, Cân Nặng: 55 kg
                            </Typography>
                        </DropdownEachCard>
                    </DropdownInfo>
                    <DropdownTitle onClick={() => this.setState({ historyDropdown: !this.state.historyDropdown })}>
                        <Typography variant='body1' fontFamily="bold">
                            Lịch sử
                        </Typography>
                        <ArrowDropDownCircleIcon
                            style={{
                                transform: this.state.historyDropdown ? "rotate(0)" : "rotate(-90deg)",
                                transition: "all .3s"
                            }}
                        />
                    </DropdownTitle>
                    <DropdownInfo
                        height={this.state.historyDropdown ? "200px" : "0px"}
                    >
                        <DropdownEachCard>
                            <Typography variant='h6' component="h6">
                                22/10/2022
                            </Typography>
                            <Typography variant='caption'>
                                Thực đơn: gà nướng muối ớt
                            </Typography>
                        </DropdownEachCard>
                    </DropdownInfo>
                    <hr />
                    <CenterItem>
                        <Button variant='outlined' onClick={() => this.logout()}>
                            Logout
                        </Button>
                    </CenterItem>
                </Container>
            ) : null
    }
}


export default function Account(): JSX.Element {
    const navigate = useNavigate()
    return <CAccount navigate={navigate} />
}
