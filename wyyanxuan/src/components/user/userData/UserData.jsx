import React from "react"
import { ContentData } from './UserData.style.js'

export const UserData = () => {
    return (
        <ContentData>
            <div className="userData-card">
                <div className="userData-num">6</div>
                <div className="userData-name">礼品卡</div>
            </div>
            <div className="userData-card">
                <div className="userData-num">¥999</div>
                <div className="userData-name">余额</div>
            </div>
            <div className="userData-card">
                <div className="userData-num">100</div>
                <div className="userData-name">红包</div>
            </div>
            <div className="userData-card">
                <div className="userData-num">10</div>
                <div className="userData-name">优惠券</div>
            </div>
            <div className="userData-card">
                <div className="userData-num">¥0</div>
                <div className="userData-name">津贴</div>
            </div>
        </ContentData>
    )
}
