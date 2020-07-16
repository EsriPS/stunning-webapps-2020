// Framework and third-party non-ui
import React from 'react';
import { Link } from 'react-router-dom';

// Hooks, context, and constants
import Routes from 'constants/routes';

// App components
import User from 'components/User';
import Breakpoint from 'App/Breakpoint';

// JSON & Styles
import {
  StyledHeader,
  StyledCalciteH1,
  SearchWrapper,
  UserWrapper,
} from './Header-styled';

// Third-party components (buttons, icons, etc.)
import LayerBasemapIcon from 'calcite-ui-icons-react/LayerBasemapIcon';

const Header = () => {
  return (
    <StyledHeader data-testid="Header">
      <SearchWrapper>Trail Search Placeholder</SearchWrapper>
      <StyledCalciteH1>
        <Breakpoint name="desktop">
          <Link to={Routes.Home}>Discover Colorado</Link>
        </Breakpoint>
      </StyledCalciteH1>
      <UserWrapper>
        <Breakpoint name="phone">
          <LayerBasemapIcon size={32} />
        </Breakpoint>
        <User />
      </UserWrapper>
    </StyledHeader>
  );
};

export default Header;
