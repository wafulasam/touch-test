import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';

const MainRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
);

export default MainRouter;