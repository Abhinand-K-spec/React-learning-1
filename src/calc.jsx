import {useState} from 'react';

function Calc(){

    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);
    const [sum, setSum] = useState(0);
    const [error,setError] = useState('');

    function handleNum1(e){
        setNum1(e.target.value);
    }
    function handleNum2(e){
        setNum2(e.target.value);
    }


    function add(){
        if(Number(num1)===Number(num2)){
             setError('Equal values;')
             return;
            }
        setSum(Number(num1)+Number(num2));
    }

    return(<>
    
    <label htmlFor="num1">Num1</label>
    <input type="number" onChange={handleNum1}/>

    <label htmlFor="num2">Num2</label>
    <input type="number" onChange={handleNum2}/>

    <button onClick={add}>Add</button>

    <h1>result : {sum}</h1>
    <h1>{error}</h1>
    
    </>)
}

export default Calc;