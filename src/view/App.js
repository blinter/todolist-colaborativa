import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PaginaCadastro from './PaginaCadastro';
import PaginaLogin from './PaginaLogin';

function App() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col justify-content-center'>
          <Router>

            <ul>
              <li><Link to='cadastro' >Cadastrar</Link></li>
              <li><Link to='login' >Login</Link></li>
            </ul>           

            <Switch>
              <Route exact path="/cadastro">
                <PaginaCadastro />
              </Route>
              <Route exact path="/login">
                <PaginaLogin />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
