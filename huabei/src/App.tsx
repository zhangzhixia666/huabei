import React, { useState } from 'react';
import './App.css';
import { Layout, Menu } from "antd";
import { Route, Routes} from "react-router";
import { Link } from "react-router-dom";

import { SmileTwoTone,ThunderboltTwoTone,ToolTwoTone,CloudTwoTone,CrownTwoTone,PictureTwoTone,FolderAddTwoTone,SettingTwoTone} from '@ant-design/icons';
import {MoguleReact} from "./screen/mogule_react"
import {Mini} from "./screen/mini"
import {Mogule} from "./screen/mogule"
import {useDocumentTitle} from "./utils/index"
import {DMPFront} from "./screen/dmpFront"
import {Home} from "./screen/home"
import {WhistlerAdminFront} from "./screen/whistler_admin_front"
import {Other} from "./screen/other"
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
  

function App() {
  const [collapsed,setCollapsed]=useState(false)
  useDocumentTitle("滑呗前端项目总结",true)
 const handleClick = (e:any) => {
    console.log('click ', e);
  };
  const onCollapse = (collapsed:any) => {
    console.log("collapsed",collapsed);
    setCollapsed(collapsed);
  };
  const root = "/huabei"
  return (
   <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu
        onClick={handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
       
        

          <Menu.Item key="mogule_react" icon={<SmileTwoTone twoToneColor="#ff0000"/>}>
            <Link to={`${root}/mogule_react`}>mogule_react</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<CloudTwoTone twoToneColor="#ff8100"/>}>
            <Link to={`${root}/dmp_front`}>分销</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<ToolTwoTone twoToneColor="#fff700"/>}>
            <Link to={`${root}/whistler_admin_front`}>三方管理端</Link>
          </Menu.Item>
          <Menu.Item key="mini" icon={<ThunderboltTwoTone  twoToneColor="#27ff00" />}>
            <Link to={`${root}/mini`}>小程序</Link>
          </Menu.Item>
          <Menu.Item key="mogule" icon={<FolderAddTwoTone twoToneColor="#00c4ff" />}>
            <Link to={`${root}/mogule`}>mogule</Link>
          </Menu.Item>
          <Menu.Item key="other" icon={<SettingTwoTone  twoToneColor="#d800ff" />}>
            <Link to={`${root}/other`}>其他</Link>
          </Menu.Item>

      </Menu>
      </Sider>
      <Layout  className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Routes>
              <Route path={`${root}`} element={<Home />}></Route>
              <Route path={`${root}/home`} element={<Home />}></Route>
              <Route path={`${root}/mogule_react`} element={<MoguleReact />}></Route>
              <Route path={`${root}/mini`} element={<Mini/>}></Route>
              <Route path={`${root}/mogule`} element={<Mogule />}></Route>
              <Route path={`${root}/dmp_front`} element={<DMPFront/>}></Route>
              <Route path={`${root}/whistler_admin_front`} element={<WhistlerAdminFront/>}></Route>
              <Route path={`${root}/other`} element={<Other/>}></Route>
            </Routes>
        </div>
        </Content>
      </Layout>
    </Layout>
  
   </div>
    );
}

export default App;
