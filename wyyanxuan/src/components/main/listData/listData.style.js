import styled from 'styled-components';

export const Top = styled.div `
    background: white;
    width: 26rem;
    height: 30px;
    align-items: center;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    display:flex;
    overflow: hidden;
    .personal-info-card {
        height: 30px;
        white-space: nowrap;
        flex-wrap: nowrap;
        align-items: center;
        display: flex;
        .personal-info-num {
            font-size: 16px;
            width: 70px;
            padding: 0 0.8rem 0 0.18rem;
            color: #333333;
        }
        .personal-info-num--active {
            font-size: 20px;
            font-weight: bold;
            color: #111111;
        }
    }
`

export const List = styled.div `
    display: flex;
    flex-flow: wrap;
    justify-content: center;
`