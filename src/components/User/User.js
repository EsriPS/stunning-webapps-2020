// Framework and third-party non-ui
import React, { useState } from 'react';

// App components
import Login from 'components/Login';
import { signOut } from 'data/oauth';

// JSON & Styles
import { StyledUser } from './User-styled';

// Third-party components (buttons, icons, etc.)
import Avatar from 'calcite-react/Avatar';
import Popover from 'calcite-react/Popover';
import List, { ListItem } from 'calcite-react/List';
import SignOutIcon from 'calcite-ui-icons-react/SignOutIcon';
import UserIcon from 'calcite-ui-icons-react/UserIcon';

const User = ({ userInfo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const getThumbnail = ({ credential, user }) => {
    return `${credential.server}/sharing/rest/community/users/${credential.userId}/info/${user.thumbnail}?token=${credential.token}`;
  };

  const getAvatar = ({ userInfo, size, ...rest }) => {
    const { user } = userInfo;
    if (user.thumbnail) {
      return <Avatar src={getThumbnail(userInfo)} size={size} {...rest} />;
    } else if (user.firstName && user.lastName) {
      let initials = user.firstName[0] + user.lastName[0];
      initials = initials.toUpperCase();
      return (
        <Avatar size={size} fontSize={size * 0.5} {...rest}>
          {initials}
        </Avatar>
      );
    } else {
      return (
        <Avatar size={size} {...rest}>
          test
          <UserIcon size={size * 0.7} />
        </Avatar>
      );
    }
  };

  const getUser = () => {
    // Display Login if user isn't logged in yet
    if (!userInfo) {
      return <Login />;
    }

    return (
      <Popover
        appendToBody
        open={menuOpen}
        onRequestClose={() => setMenuOpen(false)}
        targetEl={getAvatar({
          userInfo,
          size: 36,
          onClick: () => setMenuOpen(true),
          style: {
            cursor: 'pointer',
            backgroundColor: '#675CAB',
          },
        })}
      >
        <List style={{ maxWidth: '280px' }}>
          <ListItem onClick={signOut} leftNode={<SignOutIcon />}>
            Logout
          </ListItem>
        </List>
      </Popover>
    );
  };

  return <StyledUser data-testid="User">{getUser()}</StyledUser>;
};

export default User;
