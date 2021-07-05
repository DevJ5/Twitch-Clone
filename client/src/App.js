import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import StreamList from './components/streams/StreamList';
import StreamCreate from './components/streams/StreamCreate';
import StreamEdit from './components/streams/StreamEdit';
import StreamDelete from './components/streams/StreamDelete';
import StreamShow from './components/streams/StreamShow';
import Header from './components/Header';
import history from './history';

function App() {
  return (
    <div className="container">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/streams/new" component={StreamCreate}></Route>
          <Route path="/streams/edit/:id" component={StreamEdit}></Route>
          <Route path="/streams/delete/:id" component={StreamDelete}></Route>
          <Route path="/streams/:id" component={StreamShow}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
