import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PaginaCadastro from './PaginaCadastro';
import PaginaLogin from './PaginaLogin';

function App() {
  return React.createElement(
    'div',
    { className: 'container-fluid' },
    React.createElement(
      'div',
      { className: 'row' },
      React.createElement(
        'div',
        { className: 'col justify-content-center' },
        React.createElement(
          Router,
          null,
          React.createElement(
            'ul',
            null,
            React.createElement(
              'li',
              null,
              React.createElement(
                Link,
                { to: 'cadastro' },
                'Cadastrar'
              )
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                Link,
                { to: 'login' },
                'Login'
              )
            )
          ),
          React.createElement(
            Switch,
            null,
            React.createElement(
              Route,
              { exact: true, path: '/cadastro' },
              React.createElement(PaginaCadastro, null)
            ),
            React.createElement(
              Route,
              { exact: true, path: '/login' },
              React.createElement(PaginaLogin, null)
            )
          )
        )
      )
    )
  );
}

export default App;