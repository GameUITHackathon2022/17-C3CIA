import '../App.css'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'
import Body from '../components/Body'

import { Box, styled } from '@mui/material'

const Banner = styled(Box)(
    ({ theme }) => ({
        width: "90%",
    })
)

function App() {
    return (
        <div className="App">
            <Header />
            <Body>

            </Body>
            <BottomNav />
        </div>
    )
}

export default App
