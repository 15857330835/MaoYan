import React, { Component } from 'react'
import Tab from '../components/tab';
import TabBar from '../components/tabBar';
import { Route,Switch,Redirect } from 'react-router-dom'
import Home from '../pages/home'
import Cinema from '../pages/cinema'
import Mine from '../pages/mine'

export default class LayOut extends Component {
    render() {
        return (
            <div className= 'layout'>
                <Tab></Tab>
                <Switch>
                    <Redirect from= '/' to= '/home' exact></Redirect>
                    <Route path= '/home' component= { Home }></Route>
                    <Route path= '/cinema' component= { Cinema }></Route>
                    <Route path= '/mine' component= { Mine }></Route>
                </Switch>
                <TabBar></TabBar>
            </div>
        )
    }
}
