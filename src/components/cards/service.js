/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import Logo from '../../components/logo';

const Service = ({ service }) => {
  return (
    <Box sx={styles.service}>
      <Logo src={service.logo} />
      <Text as="p">{service.title}</Text>
      <Text as="p">{service.desc}</Text>
      <Text as="span">₹{service.price}</Text>
    </Box>
  );
};

export default Service;

const styles = {
  service: {
    border: (theme) => `1px solid ${theme.colors.borderColor}`,
    borderRadius: 5,
    padding:'10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    boxShadow: '0px 11px 30px rgba(51, 83, 145, 0.07)',
    borderColor: 'transparent',
    minHeight: [107, null, null, 110],
    textAlign: 'center',
    transition: 'all 0.3s ease-in-out 0s',
    p: {
      fontWeight: 500,
      fontSize: [1, null, null, '17px'],
      lineHeight: 1.77,
      color: 'heading',
    },
    span: {
      color: 'primary',
      fontWeight: 700,
      fontSize: [1, null, null, '40px'],
      lineHeight: 2,
    },
  },
};
