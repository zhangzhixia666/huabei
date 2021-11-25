import React, { useEffect, useState } from "react";
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

export const Mini =()=>{
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
                    滑呗小程序有完整的登录系统和支付功能，可以直接通过小程序报名参与活动；由于小程序不在支持打开APP，因此很多分享比较倾向于h5页面。
                    其中有部分页面是嵌入的h5页面地址。
                </p>
            </div>
            </Panel>
            <Panel header="项目下载地址" key="2" className="site-collapse-custom-panel">
                <dl>
                    <dt>github地址</dt>
                    <dd>ssh方式：git@github.com:fenxuekeji/ollie.git</dd>
                    <dd>github打不开可以配置代理：
                        打开网络偏好设置&gt;wifi&gt;高级&gt;代理&gt;socks代理&gt;192.168.1.63  7000   保存并应用
                    </dd>
                </dl>
            </Panel>
            <Panel header="注意事项" key="3" className="site-collapse-custom-panel">
                <p>
                    无
                </p>
            </Panel>
           
        </Collapse>
    </div>
}