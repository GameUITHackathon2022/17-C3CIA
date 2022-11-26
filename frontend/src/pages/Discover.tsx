import React, { Component } from 'react';
import { Container, styled, Typography } from '@mui/material';

const StyledDiscoverContainer = styled(Container)(
    ({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100%"
    })
);

export default class Discover extends Component {
    render() {
        return (
            <StyledDiscoverContainer>
                <div>
                    <Typography variant='h5' component='h5'>
                        404: NOT FOUND
                    </Typography><br />
                    <Typography variant='body1'>
                        Khu vực bạn đang tìm không tồn tại, có thể khu vực này đã bị xóa.
                    </Typography>
                </div>
            </StyledDiscoverContainer>
        )
    }
}
