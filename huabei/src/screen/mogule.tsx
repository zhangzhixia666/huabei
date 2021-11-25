import React, { useEffect, useState } from "react";
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

export const Mogule =()=>{
    return <div>
        <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            className="site-collapse-custom-collapse"
        >
            <Panel header="项目介绍" key="1" className="site-collapse-custom-panel">
            <div>
                <p>
                    Mogule存放静态资源 项目迁移之前遗留html页面，项目中有页面在使用，例如ulink.html
                </p>
            </div>
            </Panel>
            <Panel header="项目下载地址" key="2" className="site-collapse-custom-panel">
                <dl>
                    <dt>github地址</dt>
                    <dd>ssh方式：git@github.com:fenxuekeji/mogul.git</dd>
                    <dd>github打不开可以配置代理：
                        打开网络偏好设置&gt;wifi&gt;高级&gt;代理&gt;socks代理&gt;192.168.1.63  7000   保存并应用
                    </dd>
                </dl>
            </Panel>
            <Panel header="注意事项" key="3" className="site-collapse-custom-panel">
                <p>可以将图片等静态资源存放到该项目中，然后需要发布到服务器上（找总监），例如double_board.png图片，使用时： https://cdn.fenxuekeji.com/front_new/img/double_board.png</p>
            </Panel>
           
        </Collapse>
    </div>
}