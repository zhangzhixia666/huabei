import React, { useEffect, useState } from "react";
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

export const Other =()=>{
    return <div>
        <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            className="site-collapse-custom-collapse"
        >
            
            <Panel header="测试账号密码" key="1" className="site-collapse-custom-panel">
                
                <dl>
                    <dt>Java接口文档</dt>
                    <dd>访问地址：<a href="https://test.fenxuekeji.com/gateway/doc.htm" target="_blank">https://test.fenxuekeji.com/gateway/doc.htm</a></dd>
                    <dd>账号：test  密码：test</dd>
                </dl>
                <dl>
                    <dt>飞书-需求文档</dt>
                    <dd>访问地址：<a href="https://qealwkdf0e.feishu.cn/drive/home/" target="_blank">https://qealwkdf0e.feishu.cn/drive/home/</a></dd>
                    <dd>需要开账户和开权限</dd>
                </dl>
                <dl>
                    <dt>蓝湖-设计图</dt>
                    <dd>访问地址：<a href="https://lanhuapp.com/web/#/user/login" target="_blank">https://lanhuapp.com/web/#/user/login</a></dd>
                    <dd>需要开账户和开权限</dd>
                </dl>
                <dl>
                    <dt>滑呗app</dt>
                    <dd>账号：15718806560  密码：12345678</dd>
                </dl>
                <dl>
                    <dt>滑呗后台管理系统</dt>
                    <dd>访问地址：<a href="http://test.fenxuekeji.com/admin_users/sign_in" target="_blank">http://test.fenxuekeji.com/admin_users/sign_in</a></dd>
                    <dd>账号：admin@fenxuekeji.com  密码：hb12345678</dd>
                </dl>
                <dl>
                    <dt>三方后台</dt>
                    <dd>访问地址：<a href="https://testhuabei.fenxuekeji.com/user/login" target="_blank">https://testhuabei.fenxuekeji.com/user/login</a></dd>
                    <dd>自己注册</dd>
                </dl>
            </Panel>
            <Panel header="常用工具" key="2" className="site-collapse-custom-panel">
                <ul>
                    <li>vscode</li>
                    <li>git</li>
                    <li>sourcetree</li>
                    <li>charles</li>
                </ul>
            </Panel>
            
        </Collapse>
    </div>
}