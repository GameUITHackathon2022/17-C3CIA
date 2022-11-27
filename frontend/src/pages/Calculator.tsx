import { useState, useEffect } from "react";
import { Paper, Typography, Button, TextField } from "@mui/material";

import dish from "../data/dish.json";

function PersonElement(props: {
    selfRemove: (() => void),
    eUpdate: (k: number, v: any) => void,
}) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);

    return (
        <Paper style={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            gap: "1rem"
        }}>
            <TextField
                label="Tên"
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                    props.eUpdate(1, e.target.value)
                }}
                fullWidth
            />
            <div style={{ display: "flex", justifyContent: "space-around", gap: "1rem" }}>
                <TextField
                    label="Tuổi"
                    value={age}
                    onChange={(e) => {
                        setAge(parseInt(e.target.value || "0"))
                        props.eUpdate(2, parseInt(e.target.value || "0"))
                    }}
                    style={{ flex: 1 }}
                />
                <TextField
                    label="Chiều cao (cm)"
                    value={height}
                    onChange={(e) => {
                        setHeight(parseFloat(e.target.value || "0"))
                        props.eUpdate(3, parseFloat(e.target.value || "0"))
                    }}
                    style={{ flex: 1 }}
                />
                <TextField
                    label="Cân nặng (kg)"
                    value={weight}
                    onChange={(e) => {
                        setWeight(parseFloat(e.target.value || "0"))
                        props.eUpdate(4, parseFloat(e.target.value || "0")) 
                    }}
                    style={{ flex: 1 }}
                />
                <Button onClick={() => props.selfRemove()}>Xóa</Button>
            </div>
        </Paper>
    )
}

let people: [JSX.Element, string, number, number, number][] = [];
export default function Calculator() {
    let [render, setRender] = useState(0);
    let [dishes, setDishes] = useState<any[]>([]);

    function selfRemove(key: string) {
        if (!(people.length - 1)) return;
        people = people.filter((e) => e[0].key !== key);
        setRender(render + 1);
    }

    function calculate() {
        console.log(people);

        // Calculate calories rtequired and find best dishes
        let calories = 0;
        let caloriesSupply = 0;

        people.forEach((e) => {
            let _calories = 0;
            _calories += 10 * e[2];
            _calories += 6.25 * e[3];
            _calories += 5 * e[4];
            _calories += e[2] > 10 ? -161 : 5;
            calories += _calories;
        });

        let bestDishes: any[] = [];

        // Find best dishes
        for (; caloriesSupply <= calories;) {
            let o = caloriesSupply;
            dish.sort((a, b) => parseInt(b["nutrition"]["Calo (kcal)"]) - parseInt(a["nutrition"]["Calo (kcal)"])).forEach((e) => {
                if (parseInt(e["nutrition"]["Calo (kcal)"]) + caloriesSupply < calories) {
                    bestDishes.push(e);
                    caloriesSupply += parseInt(e["nutrition"]["Calo (kcal)"]);
                }
            });
            if (o === caloriesSupply) break;
        }

        setDishes(bestDishes);
        console.log(bestDishes);
    }

    return (
        <Paper style={{
            padding: "1rem",
            margin: "1rem"
        }}>
            <Typography variant="h4">Công cụ tính khẩu phần</Typography><br />
            <Typography variant="h6">Thông tin người ăn</Typography><br />
            <div style={{
                display: "flex",
                justifyContent: "flex-end"
            }}>
                <Button variant="contained" color="primary" onClick={() => {
                    // random key
                    let k = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                    let d = [<PersonElement key={k} selfRemove={() => {
                        selfRemove(k);
                    }} eUpdate={(k, v) => d[k] = v} />, "", 0, 0, 0];
                    //@ts-ignore
                    people.push(d);
                    setRender(render + 1);
                }}>Thêm người ăn</Button>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem"
            }}>
                {people.map((e) => e[0])}
            </div>
            <br />
            <div style={{
                display: "flex",
                justifyContent: "flex-end"
            }} onClick={() => calculate()}>
                <Button variant="contained" color="primary">Tính</Button>
            </div>

            {/* Result */}
            <br />
            {dishes.length ? (
                <>
                    <Typography variant="h6">Kết quả (trùng: làm nhiều lần)</Typography><br />
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem"
                    }}>
                        {dishes.map((e) => (
                            <Paper style={{
                                display: "flex",
                                flexDirection: "column",
                                padding: "1rem",
                                gap: "1rem"
                            }}>
                                <Typography variant="h6">{e["name"]}</Typography>
                                <Typography variant="body1">{e["description"]}</Typography>
                                <Typography variant="body1">Calo: {e["nutrition"]["Calo (kcal)"]}</Typography>
                                {/* ingredients */}
                                <Typography variant="h6">Nguyên liệu</Typography>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                    marginLeft: "1rem"
                                }}>
                                    {e["ingredient"].map((e: any) => (
                                        <Typography variant="body1">{e}</Typography>
                                    ))}
                                </div>
                            </Paper>
                        ))}
                    </div>
                </>
            ) : null}
        </Paper>
    )
}