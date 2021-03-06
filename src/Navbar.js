import React,{useState} from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; 
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Snackbar from '@material-ui/core/Snackbar'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from "@material-ui/core/IconButton";

function Navbar(props) {
    const {level,handleSlide,showing}=props;
    const [format,setFormat]=useState('hex');
    const [open,setOpen]=useState(false);

    const handleChange=(evt)=>{
        setFormat(evt.target.value); 
        setOpen(true);
        props.handleChange(evt.target.value);
    }
    const  closeSnackbar=() =>{
        setOpen(false);
    }
    return (
        <header className="Navbar">
            <div className="logo">
                <Link to='/'>reactcolorpicker</Link>
            </div>
            {showing && 
            <div className="slider-container">
                <span>Level: {level}</span>
                <div className="slider">
                    <Slider defaultValue={level} 
                            min={100} 
                            max={900} 
                            step={100} 
                            onAfterChange={handleSlide}
                    />

                </div>
            </div>
            }          
            <div className="select-container" >
                <Select value={format} onChange={handleChange}>
                    <MenuItem value='hex'> HEX- #ffffff </MenuItem>
                    <MenuItem value='rgb'> RGB- rgb(255,255,255) </MenuItem>
                    <MenuItem value='rgba'> RGBA- rgba(255,255,255,1.0) </MenuItem>
                </Select>
            
            </div>

            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={open}
                autoHideDuration={3000}
                message={
                    <span id='message-id'>
                    Format Changed To {format.toUpperCase()}
                    </span>
                }
                ContentProps={{
                    "aria-describedby": "message-id"
                }}
                onClose={closeSnackbar}
                action={[
                    <IconButton
                    onClick={closeSnackbar}
                    color='inherit'
                    key='close'
                    aria-label='close'
                    >
                    <CloseIcon />
                    </IconButton>
                ]}
            />

        </header>
    )
}

export default Navbar
