import { Box, Card, Stack, Typography, styled } from '@mui/material';
import Image from 'src/components/image/Image';
import Label from 'src/components/label/Label';
import Link from 'next/link';
import React, { useCallback } from 'react';

// -----------------------------------
export type RegistrationCardProps = {
  pathImage: string;
  title: string;
  tag: string[];
  disabled?: boolean;
  link?: string;
};

// -----------------------------------

const LinkWrapper = styled(Link)`
  text-decoration: none;
`;

// -----------------------------------

const RegistrationCard = ({
  pathImage,
  title,
  tag,
  link = '',
  disabled = false,
}: RegistrationCardProps) => {
  const isLink = useCallback(
    (children: React.ReactNode): JSX.Element => {
      if (link !== undefined && !disabled)
        return (
          <LinkWrapper href={link} target="_self">
            {children}
          </LinkWrapper>
        );
      return <>{children}</>;
    },
    [link, disabled]
  );

  return isLink(
    <Card>
      <Box>
        <Stack sx={{ width: 344, height: 464, p: 1 }}>
          <Image
            src={pathImage}
            sx={{ width: 328, height: 328, borderRadius: 1.5, opacity: disabled ? 0.5 : 1 }}
          />
          <Stack sx={{ gap: 2.5, p: 3, color: disabled ? 'text.secondary' : 'text.primary' }}>
            <Typography variant="h6" sx={{ color: 'inherit' }}>
              {title}
            </Typography>
            <Stack sx={{ flexDirection: 'row', gap: 1 }}>
              {tag.map((item) => (
                <Label variant="filled" sx={{ width: 'fit-content', color: 'inherit' }}>
                  {item}
                </Label>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
};

export default RegistrationCard;
