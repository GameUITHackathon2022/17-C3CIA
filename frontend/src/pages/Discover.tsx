import React, { Component } from 'react';
import { Container, styled, Typography, Checkbox, Box, IconButton } from '@mui/material';
import { ConstructionOutlined, ListAlt } from '@mui/icons-material';
import Data from '../data/ingredient.json'

interface IType {
    type: string;
    data: IData[];
}

interface IData {
    name: string;
    section: string;
    image: string;
    benefit: string[];
    nutrition: Object;
    price: Object;
    view: number;
}

let _filter = ["Thịt", "Rau củ", "Hoa quả"];

const StyledDiscoverContainer = styled(Container)(
    ({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        width: "100%"
    })
);

const MenuFilter = styled(Box)(
    ({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        position: "relative"
    })
)

const Card = styled("div")(
    ({ theme }) => ({
        display: "flex",
        gap: "20px",
        width: "auto",
        margin: "8px 0",
        boxShadow: "0 .5px 0 .5px black",
        padding: "10px"
    })
)

const CardInfo = styled("div")(
    ({ theme }) => ({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    })
)

export default class Discover extends Component {
    state = {
        filter: new Array(_filter.length).fill(true),
        menu: false,
        sortFilter: []
    }

    sortArray = (filter?: boolean[]) => {
        let _Arr: any[] = [];
        filter?.map((e, i) => {
            if (e) Data[i].data.forEach(e => _Arr.push(e))
        })
        _Arr = _Arr.sort((a, b) => b.view - a.view);
        this.setState({ sortFilter: _Arr.slice(0, 10) })
    }

    componentDidMount(): void {
        this.sortArray(this.state.filter);
    }

    handleChange = (event: any, index: number) => {
        const newFilter = [...this.state.filter];
        newFilter[index] = event.target.checked;
        this.setState({ filter: newFilter });
        this.sortArray(newFilter);
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
                                    onClick={(evt) => this.handleChange(evt, i)}
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
                {this.state.sortFilter.map((e: IData) => (
                    <Card key={e.name}>
                        <img
                            src={e.image}
                            width="100px"
                            height="100px"
                            alt={e.name}
                        />
                        <CardInfo>
                            <Typography variant="h5" component="h5">
                                {e.name}
                            </Typography>
                            <Typography variant="body1">
                                {e.section}
                            </Typography>
                        </CardInfo>
                    </Card>
                ))}
            </StyledDiscoverContainer>
        )
    }
}

