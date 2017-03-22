import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Tool, merged } from '../../Tool';
import * as htmlResAction from '../../actions/htmlRes';
import * as userAction from '../../actions/user';
import List from '../../Components/list/jsRes';
import {PageList} from '../../MTUI/index';
import PageListDom from '../Components/plus/PageListDom'
import conf from '../Conf/Conf'
import Loading from '../Common/loading'

export  class jsRes extends Component {
    constructor(props) {
        super(props);
        this.setCallBack = this.setCallBack.bind(this)
        this.state ={
            count : 0
        };
    }
    componentWillMount() {
/*
        window.scrollTo(0,0)
*/
        const { htmlList } = this.props
    }

    //分页回调
    setCallBack (nowpage,eachPageCount){
        //模拟ajax请求
        var start = (nowpage-1)*eachPageCount
        this.props.actions.getHtmlList(start,9,"jsRes");
        var count = this.props.htmlList.count;
        this.setState({
            count : count
        });

    }
    render() {
        const { htmlList ,actions,loading} = this.props;
            return (
                    <div className="row mtop60" >
                        <div className="col-md-8" >
                            <div className={this.props.loading?"":"none"}>
                                <List  actions={actions} {...htmlList}></List>
                                <PageList jumpShow={false} selectShow={false}  id="pageList1" count={htmlList.count} showPage="7" callback={this.setCallBack}/>
                            </div>
                            <div className={this.props.loading?"none":""}>
                                <Loading></Loading>
                            </div>

                        </div>
                        <div className="col-md-4 right">
                            <img className="advertiseImg" src="img/3.jpg" />
                            <img className="advertiseImg" src="img/3.jpg" />
                            <img className="advertiseImg" src="img/3.jpg" />
                            <img className="advertiseImg" src="img/3.jpg" />
                            <img className="advertiseImg" src="img/3.jpg" />
                        </div>
                    </div>
            );

    }

}




export default  connect((state)=>{
    return {
        htmlList: state.htmlRes.htmlList,
        loading:state.user.loading
    }
}, (dispatch)=>{
    const allAction =Object.assign({},htmlResAction,userAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
})(jsRes)