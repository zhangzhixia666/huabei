import React, { useEffect, useState } from "react";
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

export const DMPFront =()=>{
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
                    <a target="_blank" href="https://test.fenxuekeji.com/dmp/drpmanage/_t_HkpZT2Y7jiqRVzxgLG5xRQ/">分销管理模块</a>，技术栈 react + webpack + less + fetch ;是管理端中独立出来的分销模块，
                        <a href="http://test.fenxuekeji.com/admin_users/sign_in" target="_blank">滑呗后台管理系统</a>后端开发的，从管理端的分销模块链接到h5的分销模块。
                    其中登录信息是从后端跳转时将token信息拼接到地址上，接口是java语言开发。
                    </p>
                    <p>分销管理有分销事件，分销订单和分销者管理模块组成</p>
                    <ul>
                        <li>
                            <strong>分销事件</strong>指在某特定范围内(特定时间范围, 针对特定sku范围, 面向特定分销者范围) 的一批分销行为."分销事件" 的创建, 需要配置 "时间范围", "sku范围", 圈定 "分销者" 范围, 并配置分成比例等.
                        </li>
                        <li>
                            <strong>分销订单</strong>是基于现有的 "订单" 逻辑的扩展
                        </li>
                        <li>
                            <strong>分销者</strong>分销者 是 特殊的 "推荐者", 区别是其 "被纳入到分销事件中" 
                            被纳入 "分销事件" 的用户, 在其 sku页面(例如: 会员卡页面) 会看到 "特殊设计"的分享按钮
                            分享转发推荐的sku被购买支付 (支付时 创建分销订单), 即成为 "分销者"
                            分销订单归于与 "唯一的分销者", 并在起 "分销成果" 页面中可查 
                        </li>
                        
                    </ul>

                    <ul>
                        <li>
                            <a target="_blank" href="https://qealwkdf0e.feishu.cn/docs/doccnBo2F5RHtGCmluj8jro9JKe">分销模块需求文档</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://test.fenxuekeji.com/gateway/doc.html#/ruoyi-threeManagement/SKU%E7%AE%A1%E7%90%86%E6%8E%A5%E5%8F%A3/skuListUsingGET">分销模块接口文档</a>
                        </li>
                    </ul>
                
            </div>
            </Panel>
            <Panel header="项目下载地址" key="2" className="site-collapse-custom-panel">
                <dl>
                    <dt>github地址</dt>
                    <dd>ssh方式：git@github.com:fenxuekeji/DMPFront.git</dd>
                </dl>
            </Panel>
           
        </Collapse>
    </div>
}