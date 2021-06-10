import styled from "styled-components";
import { color } from "../../theme";

export const SearchPanelActions = styled.div`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: 1px solid ${color.linkWater};
  display: flex;
  justify-content: center;
  column-gap: 8px;
`;

SearchPanelActions.displayName = "SearchPanel.Actions";
