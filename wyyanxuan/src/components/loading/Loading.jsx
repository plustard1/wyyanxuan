import React from "react"
import loading from "@/assets/loading.gif"
import './Loading.css'

const Loading = () => {
    return (
        <div className="loading">
            <img src={loading} className="loading__img"/>
        </div>
    )
}

export default Loading