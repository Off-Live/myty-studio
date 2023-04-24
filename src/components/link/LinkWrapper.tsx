import { styled } from '@mui/material';
import Link from 'next/link';

const LinkWrapper = styled(Link)`
  text-decoration: none;
  :visited {
    color: inherit;
  }
`;

export default LinkWrapper;
