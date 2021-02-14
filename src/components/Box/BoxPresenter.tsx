import styled, { css } from "styled-components";
import { BoxProps } from "./BoxContainer";
import { defaultProps } from "@theme";

const StyledBox = styled.div`
  ${({ theme }) => {
    return css`
      width: ${theme.box.width};
      margin: ${theme.box.margin};
      padding: ${theme.box.padding};
      background: ${theme.box.background};
      border-radius: ${theme.box.borderRadius};
      border: ${theme.box.border};
      text-align: ${theme.box.textAlign};
    `;
  }}
`;
StyledBox.defaultProps = defaultProps;

export function BoxPresenter(props: BoxProps): React.ReactElement {
  return <StyledBox {...props} />;
}
