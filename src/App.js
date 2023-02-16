import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import Catolog from './Catolog/Catolog';
import Listfood from './Listfood/Listfood';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <Catolog />
      <Listfood />
    </div>
  );
}

export default App;
