import React from 'react';
import { Flex, Box, IconButton } from 'theme-ui';
import { NavLink } from 'components/link';

export default function List({ items = [], parentStyle, childStyle }) {
  return (
    <Box
      as="ul"
      className="list__box"
      sx={{
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        ...parentStyle,
      }}
    >
      {items.map(({ icon, text, location }, i) => (
        <Flex as="li" sx={{ ...childStyle }} key={i}>
          <IconButton className="list__icon" aria-label="list icon">
            {icon}
          </IconButton>
          <NavLink path={location} label={text} href={location} onClick={location} sx={{textDecoration: 'none'}}/>
        </Flex>
      ))}
    </Box>
  );
}
