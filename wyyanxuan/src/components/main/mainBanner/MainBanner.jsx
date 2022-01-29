import React from "react"
import styled from 'styled-components'
import mainBanner from '@/assets/wyyx.png'
import classNames from "classnames"

const BannerImg = styled.div`
    width: 100%;
    height: 53px;
    background-color: #ef5f38;
    .mainBanner1 {
        .mainBanner--active {
            color: red;
        }
    }
`

const MainBanner = (props) => {
    const { searchDisplay } = props;
    const active = searchDisplay;
    return (
        <BannerImg>
            <div className={classNames('mainBanner1', active && 'mainBanner--active')}>
            <img src={mainBanner} alt=""/>
            </div>
        </BannerImg>
    )
}

export default MainBanner