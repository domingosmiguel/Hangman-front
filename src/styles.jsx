import styled from "styled-components";

export const Content = styled.div`
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
        background: linear-gradient(192deg, rgb(43, 150, 43), rgb(51, 200, 51));
        box-shadow: -8px 8px 16px #696969;
        grid-area: 1 / 2 / 2 / 3;

        &:hover {
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
            &::placeholder {
                font-size: 20px;
                text-align: center;
            }
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
`;

export const LettersContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    grid-area: 2 / 1 / 3 / 3;
    margin-top: 20px;

    li {
        width: 60px;
        height: 60px;
        border-radius: 10px;
        background: linear-gradient(225deg, #d5d5d5, #b3b3b3);
        box-shadow: -7px 7px 14px #b1b1b1;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 7px 7px;

        &:hover {
            cursor: pointer;
        }

        p {
            color: white;
            font-size: 30px;
        }
    }
`;
