const PALETTE = {
  primary: {
    100: "#CCFFF9",
    200: "#00E5C9",
    300: "#00C7AE",
  },
  subColor: "#EBF1F4",
  fontColor: "#FFFFFF",
  error: "#FF0000",
  white: "#FFFFFF",
  black: "#000000",
  gray: {
    100: "#E9E9E9",
    200: "#D9D9D9",
    300: "#656565",
  },
};

const FONT_SIZE = {
  small: "14px",
  medium: "18px",
  large: "20px",
};

const FONT_WEIGHT = {
  thin: "100",
  regular: "400",
  bold: "800",
};

// 전역관리를 위해 묶어두는 것이 편하다.
// 매개변수 mode  같은걸로 받아서 사용도 가능하다.
/*예시
const theme = (mode) => {
    return {
        mode ? WHITE_PALETTE : DARK_PALLETE,
    }
};
*/

const theme = {
  PALETTE,
  FONT_SIZE,
  FONT_WEIGHT,
};

export default theme;
