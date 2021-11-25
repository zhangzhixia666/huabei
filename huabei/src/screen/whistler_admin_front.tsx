import React, { useEffect, useState } from "react";
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

export const WhistlerAdminFront =()=>{
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
                    <a target="_blank" href="https://testhuabei.fenxuekeji.com/teachInstitutions/teachManagerApply">滑呗三方后台</a>，技术栈 react + webpack ；
                    滑呗三方后台是给第三方管理使用的，例如雪场，机构，摄影师，主播等，不同身份有权限控制；
                </p>
                <p><strong>权限管理</strong>是在登录后，接口返回有权限访问的模块名称（和后端商定）,前端根据返回内容做权限控制;</p>
                <dl>
                    <dt>三方后台功能</dt>
                    <dd>创建活动，对活动进行增删改查，推广等操作；</dd>
                    <dd>发布图文：目前只有APP模板录入形式，可查看已发表图文（可编辑），已删除图文（可编辑）和图文草稿箱</dd>
                    <dd>发布TV：创建TV和TV查询</dd>
                    <dd>摄影师：上传照片，下载照片统计和提现记录</dd>
                    <dd>照片墙管理</dd>
                    <dd>权益管理</dd>
                    <dd>雪场管理</dd>
                    <dd>教学机构管理端：指导员管理，指导员认证申请和约教订单</dd>
                    <dd>主播管理，提供iframe窗口，内容是灵思开发提供</dd>
                </dl>
                <p>
                    备注：没有文档
                </p>
            </div>
            </Panel>
            <Panel header="项目下载地址" key="2" className="site-collapse-custom-panel">
                <dl>
                    <dt>github地址</dt>
                    <dd>ssh方式：git@github.com:fenxuekeji/whistler_admin_front.git</dd>
                </dl>
            </Panel>
           
        </Collapse>
    </div>
}