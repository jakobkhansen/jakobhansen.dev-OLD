import React from 'react';
import FrontPage from 'frontpage/FrontPage'
import "App.css"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import First from 'paaskejakt/First';
import Second from 'paaskejakt/Second';
import Third from 'paaskejakt/Third'


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/påskejakt">
                    <First />
                </Route>
                <Route path="/duersøt">
                    <Second />
                </Route>
                <Route path="/sistenå">
                    <Third />
                </Route>
                <Route path="/">
                    <FrontPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
