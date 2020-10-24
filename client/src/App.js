// import React, {Component} from 'react';
// import {Router, Route, Switch} from 'react-router-dom';
// import Home from './pages/Home/Home';
// import browserHistory from './browserHistory';
// import './App.css';
// import './reset.css';
//
// // The below line is here as an example of getting prices
// // connect('APL');
//
// class App extends Component {
//     render() {
//         return (
//             <Router history={browserHistory}>
//                 <Switch>
//                     <Route exact path="/" component={Home}/>
//                 </Switch>
//             </Router>
//         );
//     }
// }
//
// export default App;

// eslint-disable-next-line no-unused-vars
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import browserHistory from './browserHistory';
// const WebSocketContainer = lazy( () => import('./containers/WebSocketContainer') );
import './App.css';
import './reset.css';

// The below line is here as an example of getting prices
// connect('APL');

function App() {
    return (
        <Router history={browserHistory}>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
