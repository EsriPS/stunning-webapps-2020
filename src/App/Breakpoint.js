// Framework and third-party non-ui
import React from 'react';

// Redux operations and local helpers/utils/modules

// Component specific modules (Component-styled, etc.)

// App components

// Third-party components (buttons, icons, etc.)
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';

// JSON

// CSS

const breakpoints = {
  desktop: `(min-width: 993px)`,
  notDesktop: `(max-width: 992px)`,
  tablet: `(min-width: 576px) and (max-width: 992px)`,
  notPhone: `(min-width: 577px)`,
  phone: `(max-width: 576px)`
};

const Breakpoint = ({ children, name, ...other }) => {
  const breakpoint = breakpoints[name] || breakpoints.desktop;
  return (
    <MediaQuery {...other} query={breakpoint}>
      {children}
    </MediaQuery>
  );
};

Breakpoint.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  breakpoints: PropTypes.oneOf(Object.keys(breakpoints))
};

Breakpoint.defaultProps = {
  name: breakpoints.desktop
};

Breakpoint.breakpoints = breakpoints;

export default Breakpoint;
