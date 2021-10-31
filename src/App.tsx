import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializedApp} from "./redux/app-reducer";
import store, {AppStateType} from "./redux/redux-store";
import Preloader from "./Components/common/Preloader/Preloader";

// import ProfileContainer from "./Components/Profile/ProfileContainer";
// import DialogsContainer from "./Components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));

type AppMapStateAndDispatchPropsType = mapStateToPropsType & MapDispatchToPropsType
type mapStateToPropsType = {
    initialized: boolean,
}
type MapDispatchToPropsType = {
    initializedApp: () => void,
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    initialized: state.app.initialized,
})

class App extends React.Component<AppMapStateAndDispatchPropsType> {
    catchAllUnhandledErrors = (promiseRejectionEvent: any) => {
        alert('Some error')
    }
    componentDidMount() {
        this.props.initializedApp();
        window.addEventListener("unhandledrejection", function (promiseRejectionEvent) {
            // handle error here, for example log
        });
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", function (promiseRejectionEvent) {
            // handle error here, for example log
        });
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>}
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
              <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={'/login'}/>}/>
                        <Route path='/dialogs' render={() => {
                            return <React.Suspense fallback={<Preloader/>}>
                                <DialogsContainer/>
                            </React.Suspense>
                        }}/>
                        <Route path='/profile/:userId?' render={() => {
                            return <React.Suspense fallback={<Preloader/>}>
                                <ProfileContainer/>
                            </React.Suspense>
                        }}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='*' render={() => <div>404</div>}/>
                    </Switch>
                </div>

            </div>
        );
    }
}
let AppContainer = connect(mapStateToProps, {initializedApp})(App);

export const SamuraiJSApp = () => {
    return <HashRouter  >
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

