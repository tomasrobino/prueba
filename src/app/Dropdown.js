"use client"

import { InputLabel, MenuItem, Select } from "@mui/material"
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function Dropdown(props) {
    const router = useRouter();
    let type = props.type;

    const items = [];
    items.push(
        <MenuItem
            value={"U000"}
            key={-1}
        >
            {"Ninguna seleccionada"}
        </MenuItem>
    )
    if (props.info !== undefined) {
        for (let i = 0; i < props.info.length; i++) {
            items.push(
                <MenuItem
                    value={props.info[i].codigo}
                    key={i}
                >
                    {props.info[i].nombre}
                </MenuItem>
            )
        }
    }
    
    const [current, setCurrent] = useState("U000");

    function handleChange(e) {
        console.log(e.target.value)
        setCurrent(e.target.value)
        router.push(`?code=${e.target.value}`);
    }

    return (
        <div>
            <InputLabel id={props.type}>{props.type}</InputLabel>
            <Select
                labelId={props.type}
                value={current}
                onChange={handleChange}
            >
                {items}
            </Select>
        </div>
    )
    
}