/**
 * Created by caihong on 2018/3/8.
 */

/**
 * Created by caihong on 2018/3/1.
 */
import React, {Component} from 'react';

export default class Property extends React.Component {

    constructor() {
        super();
    }

    state = {
        pageCxt: ['减少http请求次数', '减少DNS查询次数', '避免页面跳转', '缓存Ajax',
            '延迟加载', '提前加载', '减少DOM元素数量', '根据域名划分内容', '减少iframe书香',
            '避免404'],
        servers:['使用CDN','添加Expires或Cache-Control报文头','Gzip压缩传输文件','配置ETags',
            '尽早flush输出','使用GET Ajax请求','避免空的图片src'],
        Cookie:['减少Cookie大小','页面内容使用无Cookie域名'] ,
        CSS:['将样式表置顶','避免CSS表达式','用<link>代替@import',''       ]
    }

    componentDidMount() {
    }

    initPropertyCxt = (data)=> {
        return data.map(item=> {
            return <li>{item}</li>
        })
    }

    render() {
        return (
            <div>
                <div className="page-cxt">
                    <h5>网页内容</h5>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>);
    }
}
