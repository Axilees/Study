import React from "react";
import colette from "../../assets/WY-M3E-Colette_Art.jpg";
import georgyAndOlaf from "../../assets/WY-M3E-GeorgyOlaf_Art.jpg"
import gokudo from "../../assets/WY-M3E-Gokudo_Art.jpg";
import hans from "../../assets/WY-M3E-Hans_Art.jpg";
import misaki from "../../assets/WY-M3E-Misaki_Art.jpg";
import mortimer from "../../assets/WY-M3E-Mortimer_Art.jpg";
import {Paper} from "@material-ui/core";

const pictures = [
    {value: 0, pic: colette},
    {value: 20, pic: georgyAndOlaf},
    {value: 40, pic: gokudo},
    {value: 60, pic: hans},
    {value: 80, pic: misaki},
    {value: 100, pic: mortimer}
];

function getPicture(value) {
    const index = pictures.findIndex(picture => picture.value === value);
    return pictures[index].pic;
}

function Picture(props) {
    return (<Paper style={{marginTop: 20, marginLeft: '20%', width: 600}}>
        <img src={getPicture(props.value)} style={{width: 600}}/>
    </Paper>);
}

export default Picture;
