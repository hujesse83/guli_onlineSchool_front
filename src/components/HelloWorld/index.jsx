import React, { Component } from 'react'
import {connect} from 'react-redux';
import {
    getUserList,
    getUserValue,
} from '../../selectors/userSelector';
import * as actions from '../../action/userAction';

 class HelloWorld extends Component {
    // 定义 data
    render() {
        const {userValue,userList} = this.props;
        return (
            <div>
                <h1>{userValue}</h1>
                <h1>{userList}</h1>
                <button onClick={this.showValue}>展示value</button>
                <button onClick={this.showList}>展示value</button>
            </div>
        )
    }
    showValue= ()=>{
        this.props.getUserValue();
    }
    showList = ()=>{
        this.props.getUserList();
    }
}
const mapStatesToProps = (state) =>{
    return{
        userValue: getUserValue(state),
        userList: getUserList(state),
    };
}
export default connect(mapStatesToProps, actions)(HelloWorld);
