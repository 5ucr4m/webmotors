import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    width: 120px;
`;

export const Check = styled.div`
    display: flex;
    width: 20px;
    height: 20px;
    border: 1px solid #999;
    border-radius: 2px;
    cursor: pointer;
    justify-content: center;
    align-items: center;

    svg {
        stroke: #c63333;
        stroke-width: 3.5px;
    }
`;

export const Title = styled.div`
    font-size: 14px;
    margin-left: 10px;
    color: #666;

    &::selection {
        background: transparent;
    }
`;

