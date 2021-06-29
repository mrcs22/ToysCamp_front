import { BrowserRouter, Route, Switch } from "react-router-dom"
import HomePage from "./components/home/HomePage"
import SignUpPage from "./components/signUp/SignUpPage"
import GlobalStyle from "./styles/GlobalStyles"


export default function App(){
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Switch>
                <Route path="/sign-up" exact component={SignUpPage}/>
                <Route path="/home" exact component={HomePage}/>
            </Switch>
        </BrowserRouter>
    )
}