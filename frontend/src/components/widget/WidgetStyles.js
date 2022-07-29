import styled from "styled-components";

export const WidgetStyles = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding: 10px;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, .47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, .47);
    border-radius: 10px;
    height: 100px;

    & > .left, .right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    & > .left {
        & > .title {
            font-weight: bold;
            font-size: 14px;
            color: rgb(160, 160, 160);
        }

        & > .counter {
            font-size: 28px;
            font-weight: 300;
        }

        & > .link {
            width: max-content;
            font-size: 12px;
            color: rgb(36, 0 , 80);
        }
    }

    & > .right {
        & > .percentage {
            display: flex;
            align-items: center;
            font-size: 14px;

            &.positive {
                color: green;
            }

            &.negative {
                color: red;
            }
        }

        & > .icon {
            width: 26px;
            height: 26px;
            font-size: 18px;
            padding: 5px;
            background: rgb(36, 0, 80);
            color: #fff;
            border-radius: 5px;
            align-self: flex-end;
        }
    }
`;