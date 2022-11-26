import React, { Component } from 'react';
import { Container, styled, Typography, Checkbox, Box, IconButton } from '@mui/material';
import { ListAlt } from '@mui/icons-material';
import Data from '../data/data.json'

interface IType {
    type: string;
    data: IData[];
}

interface IData {
    name: string;
    section: string;
    benefit: string[];
    nutrition: Object;
    price: Object;
    view: number;
}

let _filter = ["Thịt", "Rau củ", "Hoa quả"];

const StyledDiscoverContainer = styled(Container)(
    ({ theme }) => ({
        display: "flex",
        alignItems: "center",
        width: "100%"
    })
);

const MenuFilter = styled(Box)(
    ({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        position: "relative",
        boxShadow: "0 0 .5px .5px black"
    })
)

export default class Discover extends Component {
    state = {
        filter: new Array(_filter.length).fill(true),
        menu: false
    }

    handleChange = (event: any, index: number) => {
        const newFilter = [...this.state.filter];
        newFilter[index] = event.target.checked;
        this.setState({ filter: newFilter });
    }

    render() {
        return (
            <StyledDiscoverContainer>
                <div>
                    <IconButton onClick={() => this.setState({ menu: !this.state.menu })}>
                        <ListAlt />
                    </IconButton>
                </div>
                <div>
                    <MenuFilter
                        left={this.state.menu ? "unset" : "-850px"}
                    >
                        {_filter.map((e, i) => (
                            <Box
                                key={e}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexWrap: "wrap",
                                    margin: "0 5px"
                                }}
                            >
                                <Checkbox
                                    checked={this.state.filter[i]}
                                    onChange={(evt) => this.handleChange(evt, i)}
                                    size="small"
                                    sx={{
                                        p: "3px"
                                    }}
                                />
                                <Typography
                                    variant="body1"
                                    component="p"
                                    sx={{
                                        fontSize: "15px"
                                    }}
                                >
                                    {e}
                                </Typography>
                            </Box>
                        ))}
                    </MenuFilter>
                </div>
                {Data.map((e: IType) => (
                    <div>

                    </div>
                ))}
            </StyledDiscoverContainer>
        )
    }
}
