import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

let root=[
  {
    name:'首页',
    path:'/admin/home',
    key:'admin/home'
  },
  {
    name:'用户管理',
    path:'/admin/user',
    key:'admin/user',
    children:[
      {name:'权限管理',path:'/admin/user/root',key:'/admin/user/root'},
      {name:'信息管理',path:'/admin/user/info',key:'/admin/user/info'}
    ]
  },
  {
    name:'设置',
    path:'/admin/setting',
    key:'admin/setting'
  }
]

class Sidebar extends Component {
  jump(path){
    this.props.history.push(path);
  };
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    };
  };
  routerItem(data){
    return data.map((item,index)=>{
      if(item.children){
        return(
          <SubMenu title={item.name}>
            {this.routerItem(item.children)}
          </SubMenu>
        )
      }else{
        return(
          <Menu.Item key={item.key} onClick={this.jump.bind(this,item.path)}>{item.name}</Menu.Item>
        )
      }
    })
  }
  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: '100%' }}
        theme='dark'
      >
      {this.routerItem(root)}
      </Menu>
    )
  }
}
export default withRouter(Sidebar);