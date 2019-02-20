import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Artist from './components/Artist';
import Album from './components/Album';

ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route path="/album/:id" component={Album} />
                <Route path="/artist/:id" component={Artist} />
                <Route path="/" component={App} />
            </Switch>
        </BrowserRouter>
    , document.querySelector('#root'));