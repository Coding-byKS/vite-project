import {useState} from "react";
import ColorBox from "./ColorBox";
import "./ColorGrid.css";

function ColorGrid(props){
    function randomColor(){
        return props.colors[Math.floor(Math.random()*props.colors.length)];
    }    
    
    
    
    return(
        <div><h1>CLICK ON A BOX TO CHANGE IT'S COLOR!</h1>
        <div className="grid">
            <div className="row">
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            </div>
            <div className="row">
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            </div>
            <div className="row">
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            </div>
            <div className="row">
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            </div>
            <div className="row">
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            <ColorBox boxColor = {randomColor()} colors = {props.colors}/>
            </div>

        </div>
        </div>
    )
}

export default ColorGrid;