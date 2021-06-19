import React, { useEffect, useMemo } from 'react';
import Flex from '../Flex';
import Text from '../Text';
import { useLocation, useNavigate, useMatch, useResolvedPath } from 'react-router-dom';
import boxShadow from '../../style-helpers/boxShadow';

const SecondaryNavbarLink = ({ label, icon: Icon, to, children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const resolvedLocation = useResolvedPath(to);
  const match = useMatch(resolvedLocation.pathname);

  const handleClick = event => {
    event.preventDefault();
    navigate(`${to}${location.search}`);
  };

  const styles = useMemo(
    () => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      cursor: 'pointer',
      color: match ? 'green.40' : 'gray.40',
      px: 4,
      minWidth: '7rem',
      boxShadow: match && boxShadow('inset 0px -4px 0px -2px', 'green.40'),
      '&:focus': {
        outlineWidth: '2px',
        outlineStyle: 'solid',
        outlineColor: 'green.30',
        outlineOffset: '-2px',
      },
      '&:hover': {
        backgroundColor: 'gray.10',
        transition: 'background-color 0.1s',
      },
      '&:active': {
        backgroundColor: 'gray.15',
      },
    }),
    [match]
  );

  return (
    <Flex as='a' href={to} onClick={handleClick} sx={styles}>
      <Icon width={20} height={20} />
      <Text
        sx={{
          paddingX: 2,
          lineHeight: 'default',
        }}
      >
        {label || children}
      </Text>
    </Flex>
  );
};

export default SecondaryNavbarLink;
