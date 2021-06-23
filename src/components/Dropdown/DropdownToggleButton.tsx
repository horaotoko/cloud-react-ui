import styled from "styled-components";
import { Icon } from "../../components";
import { MouseEventHandler, forwardRef } from "react";
import { values, color, defaultProps } from "../../theme";

export type DropdownToggleButtonProps = {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  ariaExpanded: boolean;
  onClick: MouseEventHandler;
};

const StyledToggleButton = styled.button.attrs<DropdownToggleButtonProps>(
  ({ ariaExpanded }) => ({
    "aria-expanded": ariaExpanded,
    "aria-haspopup": true,
  })
)`
  font-size: ${values.text.size.middle};
  color: ${values.text.color.default};
  background-color: ${color.white};
  border: none;

  svg {
    margin-left: 6px;
  }
`;
StyledToggleButton.defaultProps = defaultProps;

const DropdownToggleButton = forwardRef<
  HTMLButtonElement,
  DropdownToggleButtonProps
>(({ children, ariaExpanded, onClick, ...rest }, ref) => (
  <StyledToggleButton
    onClick={onClick}
    aria-expanded={ariaExpanded}
    ref={ref}
    {...rest}
  >
    {children}
    <Icon icon="caretUp" rotation={ariaExpanded ? undefined : 180} />
  </StyledToggleButton>
));

DropdownToggleButton.displayName = "Dropdown.ToggleButton";

export { DropdownToggleButton };
