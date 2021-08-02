import FrontPage from "frontpage/FrontPage";
import "App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "globals/NavBar";
import "semantic-ui-css/semantic.min.css";
import ProjectsPage from "projects/ProjectsPage";
import { Component } from "react";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/projects">
                        <ProjectsPage />
                    </Route>
                    <Route path="/">
                        <FrontPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
