import { Container, styled, Typography } from '@mui/material';
import { Component } from 'react';

const StyledErrorContainer = styled(Container)(
    ({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100%"
    })
);

export default class Error extends Component {
    render() {
        return (
            <StyledErrorContainer>
                <div>
                    <Typography variant='h5' component='h5'>
                        404: NOT FOUND
                    </Typography><br />
                    <Typography variant='body1'>
                        Khu vực bạn đang tìm không tồn tại, có thể khu vực này đã bị xóa.
                    </Typography>
                </div>
            </StyledErrorContainer>
        )
    }
}
