import Card from './card'
import profilePic from './assets/profilePic.jpeg';
import Counter from './counter';
import Input from './onchange';


function App() {
  return(
      <>
        <Input/>
        <Counter/>
        <Card profilePic={profilePic} name="abhi" bio="photographer"/>
      </>
  );
}

export default App
