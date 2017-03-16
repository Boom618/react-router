import './style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

export  class htmlRes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            htmlList:[]
        }
    }
    componentDidMount() {

    }
    render() {
        const { List ,actions} = this.props;
        var items =  this.props.list.map((item, index) => {
            return <ListItem  actions={actions} key={item.id} index={index} {...item} />
        })

        return (
                    <ul className="index-list" >
                        {items}
                    </ul>
        );
    }

}
//bounceIn animated
class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {style:{}};
    }


    render() {
        let item = this.props;
        return (
            <Link to={`/htmlResDetail/${item.id}`} >
                <div  className="testItem row my_class" style={{animation: "myfirst 0.5s linear "+this.props.index*0.2+"s",animationFillMode:"forwards"  }}>
                    <div className="item">
                        <div className="row">
                            <div className="col-md-5 list1_left currImg">
                                <div>
                                    <img  src ={item.content.titleImg} />
                                </div>
                            </div>
                            <div className="col-md-7 list1_right">
                                <p className="title">{item.content.title}</p>
                                <p className="content">{item.content.breif}</p>
                                <div className="bottom_left">
                                    阅读量:{item.readyNum}
                                </div>
                                <div className="bottom_right">
                                    2017-2-17
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}

export default  htmlRes;








