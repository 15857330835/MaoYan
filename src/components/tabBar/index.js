import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
export default class TabBar extends Component {

    constructor(props){
        super(props)
        this.state={
            tabbars: [
                {
                    id: 1,
                    icon: 'fas fa-film',
                    text: '电影',
                    path: '/home'
                },
                {
                    id: 2,
                    icon: 'fas fa-archway',
                    text: '影院',
                    path: '/cinema'
                },
                {
                    id: 3,
                    icon: 'fas fa-user',
                    text: '我的',
                    path: '/mine'
                },
            ]
        }
    }

    renderList = () => {
        return this.state.tabbars.map( item => <li key= { item.id }>
            <NavLink
                to= { item.path }
            >
                <i className= { item.icon }></i>
                <span> { item.text } </span>
            </NavLink>
        </li> )
    }

    render() {
        return (
            <footer>
                <ul>
                    { this.renderList() }
                </ul>
            </footer>
        )
    }
}
