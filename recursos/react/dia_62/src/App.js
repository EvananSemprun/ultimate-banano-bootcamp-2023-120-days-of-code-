import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Navbar from './components/navbar'
import routes from './config/routes';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} component={route.component}/>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
