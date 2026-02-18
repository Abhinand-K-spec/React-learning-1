import {useRef} from 'react';
// import {React, useState} from 'react';

function Ref(){
    const inputref = useRef(null);
    // const [inp, setInp] = useState('');

    function handleInputWithRef(){
        console.log('------',inputref.current.value)
    }

    // function handleInputWithState(e){
    //     setInp(e.target.value)
    // }
    return(<>
    <h1>inp</h1>
        <input type="text"  ref={inputref} />
        <button  onClick={handleInputWithRef}>submit</button>
    </>);
}
export default Ref;