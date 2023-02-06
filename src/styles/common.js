import { css } from 'styled-components';

export const ModalBackground = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
`;

export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const flexAlignCenter = css`
    display: flex;
    align-items: center;
`;

export const title = css`
    font-size: 48px;
    line-height: 16px;
    font-weight: bold;
`;

// 객체화 시켜서 내보내는것도 가능 const style = { flexcenter, flexAlignCenter, title ...}
// export default 하면 하나만 가능해서 안됨.
