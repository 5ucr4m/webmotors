import styled from 'styled-components';
import ReactLoading from 'react-loading';


export const Container = styled.div`
    display: flex;
    position: relative;
    border: 1px solid #999;
    width: 100%;
    height: 40px;
    border-radius: 2px;
    grid-column: span ${props => props.span};
    padding: 0 5px 0 10px;
    font-size: 13px;
    align-items: center;

    span {
        font-weight: 500;
        color: #999;
    }

    strong {
        margin-left: 5px;
        color: #666
    }

    select {
        width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    svg {
        margin-left: auto;
    }
`;

export const ListOptions = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    border: 1px solid #aaa;
    width: 100%;
    min-height: 50px;
    top: 40px;
    right: 0;
    background: #fff;
    z-index: 2;
`;

export const Loading = styled(ReactLoading)`
    margin-left: auto;
`;

export const Item = styled.div`
    color: #333;
    line-height: 20px;
    padding: 0px 10px;


    &:hover {
        background-color: #c63333;
        color: #fff;
    }
`;
