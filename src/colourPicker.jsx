
import React, {useState} from 'react';
function ColorPicker(){

    const [color, setColor] = useState('#FFFFFF');

    function updateColor(e){
        setColor(e.target.value);
    }
    return(
        <div>
            <h1>Color picker</h1>
            <div className='color-displau' style={{backgroundColor: color, color:'black'}}>
                selected : {color}
            </div>
            <label htmlFor="">Select a color</label>
            <input type="color" value={color} onChange={updateColor}/>
        </div>
    );
}


export default ColorPicker;