import { useState } from "react";
import { Paper, Typography, Button, TextField } from "@mui/material";

function PersonElement(props: {
    selfRemove: (() => void)
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
                onChange={(e) => setName(e.target.value)}
                fullWidth
            />
            <div style={{ display: "flex", justifyContent: "space-around", gap: "1rem" }}>
                <TextField
                    label="Tuổi"
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value))}
                    style={{ flex: 1 }}
                />
                <TextField
                    label="Chiều cao (cm)"
                    value={height}
                    onChange={(e) => setHeight(parseFloat(e.target.value))}
                    style={{ flex: 1 }}
                />
                <TextField
                    label="Cân nặng (kg)"
                    value={weight}
                    onChange={(e) => setWeight(parseFloat(e.target.value))}
                    style={{ flex: 1 }}
                />
                <Button onClick={() => props.selfRemove()}>Xóa</Button>
            </div>
        </Paper>
    )
}

let people: JSX.Element[] = [];
export default function Calculator() {
    let [render, setRender] = useState(0);

    function selfRemove(key: string) {
        people = people.filter((e) => e.key !== key);
        setRender(render + 1);
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
                    people.push(<PersonElement key={k} selfRemove={() => {
                        selfRemove(k);
                    }} />);
                    setRender(render + 1);
                }}>Thêm người ăn</Button>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem"
            }}>
                {people}
            </div>
        </Paper>
    )
}