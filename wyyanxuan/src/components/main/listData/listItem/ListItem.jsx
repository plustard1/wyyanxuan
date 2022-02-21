import React from 'react'
import { List, TextContent } from './ListItem.style.js'
import LazyLoad from 'react-lazyload'
import loading from '@/assets/loading.gif'
import { useHistory } from 'react-router-dom'

const ListItem = (props) => {
    const { item } = props;
    const history = useHistory()
    const gotoDetail = (id) => {
        history.push(`/detail/${id}`)
    }
    return (
        <List >
            <div onClick={() => gotoDetail(item.id)} className="ListItem">
                <div className="ListItem-img">
                    <div className="ListItem-content__img">
                        <LazyLoad style={{ 'height': '160px', 'width': '160px' }} placeholder={
                            <img width="100%" height="100%" src={loading} alt=""
                            />
                        }>
                            <img style={{ 'borderRadius': '9px' }} src={item.imgsrc} alt="" />
                        </LazyLoad>
                    </div>
                </div>
                <TextContent>
                    <div className="ListItem-title">
                        {item.title}
                    </div>
                    <div className="ListItem-price">
                        <div className="dollar">
                        <svg t="1642142684754" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2130" width="18" height="18"><path d="M783.6119140625001 167.56542968750006L575.0254882812499 463.25761718749993H739.4169921875v65.36689453125H547.9103515625v90.02460937500001H739.4169921875v66.18427734375001H547.9103515625v131.08710937499998H449.38144531250003V684.8333984374999H250.86464843749997v-66.18427734375001h198.516796875V528.6245117187499H250.86464843749997v-65.36689453125h169.3740234375L213.64560546874998 167.56542968750006h111.08935546875c96.53642578125 146.85029296874998 155.141015625 240.00644531250003 175.921875 279.39638671875h1.9924804687499997c7.046191406249999-16.225488281249998 26.33115234375-48.89091796875 57.786328125000004-97.9962890625L678.5711914062499 167.56542968750006h105.04072265625001z" p-id="2131" fill="#d81e06" data-spm-anchor-id="a313x.7781069.0.i0"></path></svg>
                        </div>
                        <div className="ListItem-price__num">
                            {item.price}
                        </div>
                    </div>
                </TextContent>
                <p className="spanblack"></p>
            </div>
        </List>
    )
}

export default ListItem