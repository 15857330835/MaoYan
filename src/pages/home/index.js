import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMovies,getMove } from '../../actions'
import Content from './Content';
import './index.scss'
import BScroll from 'better-scroll'
import _ from 'lodash'
import { Toast } from 'antd-mobile'

class Home extends Component {

    constructor(props){
        super(props)
        this.state={
            state:0
        }
    }


    componentDidMount(){
        this.props.getMovies()
        let count = 0
        const bs = new BScroll('.page',{
            pullUpLoad: {
                threshold: 50
            }
        })
        
        bs.on('pullingUp',() => {
            const { movies } = this.props
            const movieIds = movies.movieIds.slice(12)
            const ids = _.chunk( movieIds,10 )
            if( count === ids.length ){
                Toast.offline('没有更多电影了 !!!', 1);
                bs.finishPullUp()
                return;
            }

            if( count < ids.length ){
                Toast.loading('Loading...', 30, () => {
                    console.log('Load complete !!!');
                });
                    
                setTimeout(() => {
                    Toast.hide();
                }, 2000);
                this.props.getMove( ids[count].join(',') )
                this.setState({
                    state: 0
                })
            }

            bs.finishPullUp()
            count ++
        })
    }

    render() {
        const { movies } = this.props
        return (
            <div className= 'container'>
                <div className="tab-content">
                    <div className="page n-hot active home" data-hot=".n-hot" data-cid="c_dmLad">
                        <div className="list-wrap">
                            <Content movies= { movies }></Content>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => state.homeReducer,
    dispatch => bindActionCreators( { getMovies,getMove },dispatch )
)( Home )