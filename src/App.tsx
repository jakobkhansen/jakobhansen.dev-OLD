import React from 'react';
import FrontPage from 'frontpage/FrontPage'
import "App.css"
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import First from 'paaskejakt/First';


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/påskejakt">
                    <First />
                </Route>
                <Route path="/">
                    <FrontPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
