import './App.css';
import Profile from './Profile/Profile';

function App() {
  const handleName  = name => alert(name);
  return (
    <div style={{background:"grey"}}>
   <Profile fullName ="hamakhfifi" bio="student at gomycode with med salah" profession="developer" alerteInput={handleName}>
    /asset/hamakhfifi.png
    </Profile>
    </div> 
  );
}

export default App;
