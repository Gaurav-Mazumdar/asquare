import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionParagraph({ title, slogan, isWhite }) {
  return (
    <Box xs={{variant: 'sectionHeading'}}>
      <Text
        as="p"
        sx={{
          variant: 'sectionHeader.compInfo',
          color: isWhite ? 'white' : 'primary',
          opacity: isWhite ? 0.7 : 1
        }}
        >
          {slogan}
      </Text>
      <Heading
        as="h2"
        sx={{
          variant: 'sectionHeader.compTitle',
          color: isWhite ? 'white' : 'heading',
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}
