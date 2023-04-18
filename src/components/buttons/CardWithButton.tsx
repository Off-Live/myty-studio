import { Box, Card, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import Image from 'src/components/image/Image';

export type CardWithButtonProps = {
  logoPath: string;
  title: string;
  description: string;
  button: JSX.Element;
};

const Title = styled(Typography)``;
const Description = styled(Typography)`
  white-space: pre-line;
`;

const CardWithButton = ({ title, logoPath, description, button }: CardWithButtonProps) => (
  <Card
    sx={{
      width: 1,
      maxWidth: 196,
      bgcolor: 'Background.default',
    }}
  >
    <Stack direction="column" sx={{ alignItems: 'center', p: 2.5 }} spacing={2}>
      <Image src={logoPath} sx={{ mx: 'auto', width: 48, height: 48 }} />
      <Stack direction="column" sx={{ alignItems: 'center' }} spacing={1}>
        <Title variant="h6" sx={{ textAlign: 'center' }}>
          {title}
        </Title>
        <Description variant="body2" sx={{ textAlign: 'center' }}>
          {description}
        </Description>
      </Stack>
      {button}
    </Stack>
  </Card>
);

export default CardWithButton;
