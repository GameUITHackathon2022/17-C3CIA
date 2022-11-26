import { Container, styled, Typography, Button, Box } from '@mui/material'

const Img = styled('img')(
    ({ theme }) => ({
        width: "100%",
        height: "200px",
    })
)

const ContactContainer = styled('div')(
    ({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%"
    })
)

function App() {
    return (
        <Container>
            <Img src='/banner.jpg' />
            <Typography variant='h3' component="h3" textAlign="center">
                FoodSave
            </Typography>
            <Typography variant='caption' component="div" textAlign="center">
                Chung tay bảo vệ môi trường và tiết kiệm thức ăn
            </Typography>
            <hr />
            <br />
            <Typography variant='h6' component='h6' textAlign="center">
                Contact us
            </Typography>
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
        </Container>
    )
}

export default App
