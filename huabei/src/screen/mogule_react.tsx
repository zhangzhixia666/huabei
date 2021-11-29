import React, { useEffect, useState } from "react";
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

export const MoguleReact =()=>{
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
                    <a target="_blank" href="https://test.fenxuekeji.com/h5/mogul_react/user_login?from=phonelogin">mogule_react</a>
                    项目是从mogule项目升级迁移的一版，目前主开发项目，属于混合开发；技术栈是：react + webpack + less + axios,
                    有自己的登录页面，客户端内访问h5页面时通过sessionStorage存储token认证信息；
                    <a target="_blank" href="https://lanhuapp.com/web/#/item/project/stage?type=share_mark&pid=b7cecf93-1983-4100-8b12-0286f55fa7e2&teamId=182faca9-d4a6-49d2-b4eb-ff8203274865">点我查看滑呗设计图</a>
                </p>
                <dl>
                    <dt>主要涉及内容</dt>
                    <dd>图文，长图文，视频，话题等动态</dd>
                    <dd>雪场详情页面</dd>
                    <dd>行程活动-活动详情</dd>
                    <dd>会员模块</dd>
                    <dd>雪季总结</dd>
                    <dd>挑战赛，大奖赛</dd>
                    <dd>邀请好友</dd>
                    <dd>银联支付</dd>
                    <dd>等等 <a target="_blank" href="./h5.txt">2021.4整理文档可参考</a></dd>
                </dl>
                <dl>
                    <dt>正式环境 <strong>切换至master主分支</strong></dt>
                    <dd>执行：sh deploy_to_prod.sh</dd>
                    <dd>访问地址：https://h5.fenxuekeji.com/h5/mogul_react/user_login</dd>
                </dl>
                <dl>
                    <dt>测试环境</dt>
                    <dd>执行：sh deploy_to_test.sh</dd>
                    <dd>访问地址：https://test.fenxuekeji.com/h5/mogul_react/user_login</dd>
                </dl>
                <dl>
                    <dt>开发环境</dt>
                    <dd>执行：npm run start</dd>
                </dl>
            </div>
            </Panel>
            <Panel header="项目启动" key="2" className="site-collapse-custom-panel">
                <dl>
                    <dt>github地址</dt>
                    <dd>https方式：https://github.com/fenxuekeji/mogul_react.git</dd>
                    <dd>ssh方式：git@github.com:fenxuekeji/mogul_react.git</dd>
                    <dd>github打不开可以配置代理：
                        打开网络偏好设置&gt;wifi&gt;高级&gt;代理&gt;socks代理&gt;192.168.1.63  7000   保存并应用
                    </dd>
                </dl>
                <dl>
                    <dt>安装</dt>
                    <dd>1、git clone git@github.com:fenxuekeji/mogul_react.git</dd>
                    <dd>2、npm install </dd>
                    <dd>3、npm run start</dd>
                </dl>
            </Panel>
            <Panel header="近期跟进" key="3" className="site-collapse-custom-panel">
                <p>会员模块更新</p>
                <p>分销管理</p>
                <p>菲滑不可大奖赛</p>
                <p>阿迪活动</p>
            </Panel>
            <Panel header="注意事项" key="4" className="site-collapse-custom-panel">
                <p>重点：因为项目属于混合开发，所以大多页面都会涉及到分享和返回APP</p>
                <dl>
                    <dt>分享 示例：</dt>
                    <dd>
                        <code>
                            {`let share_params = {`} //传递参数 <br/>
                            &nbsp;&nbsp;{`activity_id: para.activity_id,`} <br/>
                            &nbsp;&nbsp;{`kind: para.activity_type};`} <br/>
                            {`wxshare.wx_share(share_params, "activity");`}  //wxshare.wx_share(参数，类型)<br/>
                        </code>
                    </dd>
                    <dd><a target="_blank" href="./wxShare.txt">分享页面参考代码</a></dd>
                </dl>
                <dl>
                    <dt>返回APP指定页面 示例：</dt>
                    <dd>
                        <code>
                            { `let sendParams{ `}<br/>
                               &nbsp;&nbsp;{`_schame:"huabei://snow_park",`} //协议是和客户端订好的指定页面的协议，客户端提供 <br/>
                               &nbsp;&nbsp;{`_type:"snow_park",`} //客户端提供  <br/>
                               &nbsp;&nbsp;{`_needParams:{`} //回到app时需要传递的参数<br/>
                               &nbsp;&nbsp;&nbsp;{`ski_ranch_id: ski_ranch_id,`}<br/>
                               &nbsp;&nbsp;&nbsp;{`_host_url:window.location.href.split("?")[1]`}<br/>
                               &nbsp;&nbsp;{`}`}<br/>
                                {`}`}<br/>
                                {`common.commonTurnToApp(sendParams)`} // 公共方法<br/>
                        </code>
                    </dd>
                </dl>
            </Panel>
            
           
        </Collapse>
    </div>
}