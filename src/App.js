import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Link } from'react-router-dom';
import Posts from'./component/Posts';
import Comments from'./component/Comments';
import Albums from'./component/Albums';
import Photos from'./component/Photos';
import Todos from'./component/Todos';
import Users from'./component/Users';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Link path='/posts' exact component={Posts}/>
      <Link path='/comments' exact component={Comments}/>
      <Link path='/albums' exact component={Albums}/>
      <Link path='/photos' exact component={Photos}/>
      <Link path='/todos' exact component={Todos}/>
      <Link path='/users' exact component={Users}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
