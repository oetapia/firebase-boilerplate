import 'bootstrap/dist/css/bootstrap.css';
import './css/project.css';

// Router sets the component based on the URL 
import { BrowserRouter as Router} from "react-router-dom";

import Directory from './Core/Directory';


function App() {
  return (
    <div className="App">

        <Router>            
            <Directory/>            
        </Router>

    </div>
  );
}

export default App;
