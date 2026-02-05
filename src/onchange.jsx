import React,{useState} from 'react';

function Input(){


    const [name,setName] = useState('Guest');
    const [payment, setPayment] = useState('');
    const [shipping, setShipping] = useState('nothing');

    function updatePayment(event){
        setPayment(event.target.value);
    }

    function updateName(e){
        setName(e.target.value)
    }

    function updateRadio(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <input type="text" value={name} onChange={updateName}/>
            <h1>Name : {name}</h1>

            <select value={payment} onChange={updatePayment} id="">
                <option value="select one">select one</option>
                <option value="UPI">UPI</option>
                <option value="Card">CARD</option>
            </select>
            <h1>payment:{payment}</h1>


            <label htmlFor="">
                <input type='radio' value="pick-up"  checked={shipping==="pick-up"} onChange={updateRadio}/>
                Pick Up</label><br />
            <label htmlFor="">
            <input type='radio' value="dlv"  checked={shipping==="dlv"} onChange={updateRadio}/>
                Delivary</label>

                <h2>Status:{shipping}</h2>
        </div>
    );
}


export default Input;