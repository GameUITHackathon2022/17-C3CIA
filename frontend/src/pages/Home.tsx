import CalculateIcon from '@mui/icons-material/Calculate';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Box, Button, Container, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MainNav = styled(Box)(
    ({ theme }) => ({
        display: "none",
        [theme.breakpoints.up("lg")]: {
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "20px",
            height: "300px"
        }
    })
)

const ImgContainer = styled('div')(
    ({ theme }) => ({
        width: "100%",
        height: "30vw",
        [theme.breakpoints.up("sm")]: {
            height: "270px"
        },
        [theme.breakpoints.up("md")]: {
            height: "300px"
        },
        overflow: "hidden",
        marginBottom: "20px"
    })
)

const Img = styled('img')(
    ({ theme }) => ({
        width: "100%",
        height: "600px"
    })
)

const CenterItem = styled('div')(
    ({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    })
)

const ContactContainer = styled('div')(
    ({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        rowGap: "10px",
        alignItems: "center",
        width: "90%",
        [theme.breakpoints.up("lg")]: {
            flexDirection: "row",
            justifyContent: "center",
            gap: "20px",
            width: "80%",
            borderTop: "1px solid black",
            paddingTop: "20px"
        }
    })
)

function App() {
    const navigate = useNavigate()

    return (
        <Container>
            <ImgContainer>
                <Img src='/banner.jpg' alt='banner' />
            </ImgContainer>
            <Typography variant='h3' component="h3" textAlign="center">
                FoodSave
            </Typography>
            <Typography variant='caption' component="div" textAlign="center" fontSize=".8em">
                Chung tay bảo vệ môi trường và tránh lãng phí thức ăn
            </Typography>
            <hr style={{
                width: "80%"
            }} />
            <br />
            <MainNav>
                <Button variant="outlined" size='small' onClick={() => navigate("/calculator")}>
                    <CalculateIcon />
                    <Typography variant='caption'>
                        Calculator
                    </Typography>
                </Button>
                <Button variant="outlined" size='small' onClick={() => navigate("/discover")}>
                    <LibraryBooksIcon />
                    <Typography variant='caption'>
                        Discover
                    </Typography>
                </Button>
            </MainNav>
            <Typography variant='h6' component='h6' textAlign="center">
                Contact us
            </Typography>
            <CenterItem>
                <ContactContainer>
                    <Button href='' variant="outlined" size="small">
                        Facebook
                    </Button>
                    <Button href='' variant="outlined" size="small">
                        Twitter
                    </Button>
                    <Button href='' variant="outlined" size="small">
                        Linkedin
                    </Button>
                </ContactContainer>
            </CenterItem>
        </Container>
    )
}

export default App
