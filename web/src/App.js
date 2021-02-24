import './App.css';
// import Singup from './components/singup/singup';
// import Login from './components/login/login';
// import Dashbord from './components/dashbord/dashbord';
import Nav from './components/navigation/navigation'

import { GlobalStateProvider } from "./context/context.jsx"


function App() {
    return (
        < GlobalStateProvider >
            <Nav />
        </GlobalStateProvider>);
}

export default App;