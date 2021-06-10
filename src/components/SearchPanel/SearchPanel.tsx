import { useState } from "react";
import styled, { css } from "styled-components";
import { color } from "../../theme";
import { SearchPanelToggle } from "./SearchPanelToggle";

type SearchPanelBodyProps = {
  children?: React.ReactNode;
  width?: string;
  ariaHidden: boolean;
  placement?: "left" | "right";
};

const SearchPanelBody = styled.div.attrs<SearchPanelBodyProps>(
  ({ ariaHidden }) => ({
    "aria-hidden": ariaHidden,
  })
)<SearchPanelBodyProps>`
  width: 100%;
  padding-top: 15px;
  overflow-y: auto;

  &[aria-hidden="true"] {
    visibility: hidden;
    opacity: 0;
    max-height: 0;
    padding: 0;
  }
`;

SearchPanelBody.displayName = "SearchPanel.Body";

const SearchPanelActions = styled.div`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: 1px solid ${color.linkWater};
  display: flex;
  justify-content: center;
  column-gap: 8px;
`;

SearchPanelActions.displayName = "SearchPanel.Actions";

const SearchPanelFilters = styled.div``;

SearchPanelFilters.displayName = "SearchPanel.Filters";

const StyledSearchPanel = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fff;
  position: relative;
`;

export type SearchPanelProps = {
  children?: React.ReactNode;
};

export const SearchPanelBase = ({
  children,
}: SearchPanelProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledSearchPanel>
      <SearchPanelBody ariaHidden={!isOpen}>{children}</SearchPanelBody>

      <SearchPanelToggle onClick={handleClick} ariaExpanded={isOpen}>
        絞り込み条件
      </SearchPanelToggle>
    </StyledSearchPanel>
  );
};

export const SearchPanel = Object.assign(SearchPanelBase, {
  Filters: SearchPanelFilters,
  Actions: SearchPanelActions,
});
