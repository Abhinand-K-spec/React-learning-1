

import React,{useState} from 'react';

function Car(){

    const [car, setCar] = useState([]);
    const [carYear,setYear] = useState(new Date().getFullYear())
    const [carCompany,setCompany] = useState('');
    const [carModel,setModel] = useState('');

    function addCar(){
        const newCar = {year:carYear,company:carCompany,model:carModel}
        setCar(c=>[...c,newCar]);
        setYear(new Date().getFullYear());
        setCompany('');
        setModel('');
    }

    function updateYear(event){
        setYear(event.target.value);
    }

    function updateCompany(event){
        setCompany(event.target.value);
    }
    function updateModel(event){
        setModel(event.target.value)
    }
    return(<div>
        <h1>List of cars</h1>
        <ul>
            {car.map((car)=> <li>{car.year} {car.company} {car.model}</li>)}
        </ul>

        <input type="number" value={carYear} onChange={(e)=>updateYear(e)}/>
        <input type="text" value={carCompany} placeholder='Company' onChange={(e)=>updateCompany(e)}/>
        <input type="text" value={carModel} placeholder='Model' onChange={(e)=>updateModel(e)}/>
        <button onClick={addCar}>Add Car</button>
    </div>);
}

export default Car;