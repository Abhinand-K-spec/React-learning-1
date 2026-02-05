import Card from './card'
import profilePic from './assets/profilePic.jpeg';
import Counter from './counter'


function App() {
  return(
      <>
        <Counter/>
        <Card profilePic={profilePic} name="abhi" bio="photographer"/>
      </>
  );
}

export default App
