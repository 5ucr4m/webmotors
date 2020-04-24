import styled, { css } from 'styled-components';
import { darken } from 'polished'

export const Container = styled.div`
    width: 100%;
    margin-top: 30px;

    section {
        display: flex;
        flex: 1;
        height: 60px;
        align-items: center;

        button.sellCar {
            margin-left: auto;
            padding: 8px 20px;
            background-color: transparent;
            border: 2px solid orange;
            color: orange;
            font-weight: bold;
            font-size: 14px;
            border-radius: 3px;
            transition: color 0.2s;
            transition: background-color 0.7s;

            &:hover {
                background-color: orange;
                color: #fff;
            }

        }
    }
`;

export const VehicleSelect = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 60px;
    border-bottom: 2px solid #ddd;
    cursor: pointer;
    transition: border-bottom 0.5s;

    span {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 500;
        font-size: 14px;
        transition: color 0.5s;
    }

    p {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 500;
        font-size: 24px;
        transition: color 0.5s;
    }

    ${props => !!props.active && css`
        border-bottom: 2px solid #c63333;
        span, p {
            color: #c63333;
        }
    `}

`

export const FormFields = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 15px;

    @media (max-width: 481px) {
        grid-template-columns: 1fr;
    }
    
    @media (min-width: 481px) and (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
    }

    section {
        display: flex;
        align-items: center;
        grid-column: span 2;

        @media (max-width: 500px) {
            display: grid;
            grid-template-columns: 1fr;
            grid-row-gap: 20px;

            &.controlForm {
                margin-bottom: 30px;
            }
        }

        p {
            font-weight: bold;
            color: #c63333;
            cursor: pointer;
        }

        svg {
            margin-right: 10px;
            stroke-width: 4px;
        }

        span {
            font-size: 14px;
            font-weight: normal;
            color: #999;
            width: 150px;
            cursor: pointer;

            &:hover {
                color: ${darken(0.05, '#999')}
            }
        }

        button {
            background-color: #c63333;
            height: 50px;
            border: none;
            width: 100%;
            border-radius: 3px;
            font-weight: bold;
            text-transform: uppercase;
            color: #fff;
            cursor: pointer;

            &:hover {
                background-color: ${darken(0.05, '#c63333')}
            }
        }
    }
`;


export const Form = styled.div`
    width: 100%;
    min-height: 312px;
    background-color: #fff;
    box-shadow: 0 0 3px #ddd;
    padding: 30px 50px;
`;
