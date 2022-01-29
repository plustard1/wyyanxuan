import React from 'react'
import { Head } from './HeaderComponent.style.js'
import { useHistory } from 'react-router-dom'

const HeadComponent = (props) => {
    const { title } = props;
    const { handleshare } = props;
    const history = useHistory();
    // console.log(history);
    const handleback = () => {
        history.go(-1)
    }
    return (
        <Head>
            <div className="leftimg iconfont" onClick={handleback}>
                &#xe670;
            </div>
            <span>商品详情</span>
            <div className=" share">
                <div className=" iconfont righticon">
                    &#xe600;
                </div>
            </div>
        </Head>
    )
}
export default HeadComponent;