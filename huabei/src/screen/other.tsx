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
            <Panel header="其他" key="1" className="site-collapse-custom-panel">
            <dl>
                <dt>常用工具</dt>
                <dd>vscode</dd>
                <dd>git</dd>
                <dd>sourcetree</dd>
                <dd>charles</dd>
            </dl>
            </Panel>
            
        </Collapse>
    </div>
}