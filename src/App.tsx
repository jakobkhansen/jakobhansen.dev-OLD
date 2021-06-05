import FrontPage from 'frontpage/FrontPage'
import "App.css"
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <FrontPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
