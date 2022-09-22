import styled from "styled-components";

export const Content = styled.main`
    background-color: #fff6d3;
    height: 100vh;
    width: 100vw;
    section {
        cursor: default;
        height: calc(100vh - 270px);
        width: min(100%, 1000px);
        margin: 5px auto;
        padding-top: 40px;
        display: grid;
        grid-template: min(50vh, 500px) 170px 100px / 1.5fr 1fr;
        gap: 15px;

        img {
            max-width: min(100%, 500px);
            max-height: min(100%, 500px);
            margin: 20px;
            grid-area: 1 / 1 / 2 / 2;
        }
        button {
            height: 50px;
            width: 200px;
            margin: 20px auto;
            color: white;
            font-size: 20px;
            border: none;
            border-radius: 10px;
            background: linear-gradient(192deg, #fd7278, #d46065);
            box-shadow: -7px 7px 14px #d9d1b3;
            grid-area: 1 / 2 / 2 / 3;

            &:not(:disabled):hover {
                cursor: pointer;
            }
        }
        div {
            grid-area: 1 / 2 / 2 / 3;
            font-size: 45px;
            align-self: flex-end;
            margin: 0 auto;
        }
        footer {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            grid-area: 3 / 1 / 3 / 4;

            input {
                height: 50px;
                margin: auto 0;
                border-radius: 10px;
                width: 250px;
                font-size: 20px;
                text-align: center;
                &:focus {
                    text-align: center;
                    font-size: 25px;
                }
                &:focus::placeholder {
                    color: transparent;
                }
            }
            button {
                margin: auto 20px;
            }
        }
    }
`;

export const LettersContainer = styled.span`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    grid-area: 2 / 1 / 3 / 3;
    margin-top: 20px;

    button.letters {
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 7px 7px;
        background: linear-gradient(225deg, #ffb47e, #e1976a);
        &:disabled {
            background: linear-gradient(225deg, rgb(213, 213, 213), rgb(179, 179, 179));
        }
        p {
            color: white;
            font-size: 30px;
        }
    }
`;
