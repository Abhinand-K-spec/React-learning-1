// import Card from './card'
// import profilePic from './assets/profilePic.jpeg';
// import Counter from './counterReducer';
// import Input from './onchange';
// import Ref from './ref'
// import Communication from './childToParent';
// import Calc from './calc';
// import CounterReducer from './counterRed.jsx';
// import Calculator from './calculatorWithReducer.jsx';
// import List from './addToList.jsx';
// import Timer from './timer';

import Todo from './week2-repeat/todo';
import { CounterProvider } from './week2-repeat/contextCounter/counterContext';

import Counter from './week2-repeat/contextCounter/counter';
import CalculatorReducer from './week2-repeat/CalculatorReducer';
import { ThemeContextProvider } from './week2-repeat/contextCounter/ThemeContext';
import UseMemo from './week2-repeat/UseMemo';


function App() {


  return(
      <>
      {/* <Products/> */}
      {/* <Communication/> */}
        {/* <Input/> */}
        {/* <Ref/> */}
        <UseMemo/>
        {/* <Todo/> */}
        {/* <Card profilePic={profilePic} name="abhi" bio="photographer"/> */}
      </>
  );
}

export default App
