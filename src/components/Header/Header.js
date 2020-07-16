// Framework and third-party non-ui
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// App components
import User from 'components/User';
import TrailSearch from 'components/TrailSearch';
import { UserContext } from 'contexts/UserContext';
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
  const { ready, userInfo } = useContext(UserContext);

  return (
    <StyledHeader data-testid="Header">
      <SearchWrapper>
        <TrailSearch />
      </SearchWrapper>
      <StyledCalciteH1>
        <Breakpoint name="desktop">
          <Link to="/home">Discover Colorado</Link>
        </Breakpoint>
      </StyledCalciteH1>
      <UserWrapper>
        <Breakpoint name="phone">
          <LayerBasemapIcon size={32} />
        </Breakpoint>
        {ready ? <User userInfo={userInfo} /> : null}
      </UserWrapper>
    </StyledHeader>
  );
};

export default Header;
