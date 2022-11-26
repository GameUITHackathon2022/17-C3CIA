import { Component, ReactNode } from 'react'
import { useNavigate, NavigateFunction } from 'react-router-dom'
import { Box, styled } from '@mui/material'

const StyledBody = styled(Box)(
    ({ theme }) => ({
        height: "calc(100% - 102px)",
        position: "relative",
        overflowY: "scroll"
    })
)

type Props = {
    children: ReactNode
}

type State = {}

export default class Body extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    state = {}

    render() {
        return (
            <StyledBody>
                {this.props.children}
            </StyledBody>
        )
    }
}
