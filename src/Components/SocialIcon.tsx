import React from 'react';
import { IconButton } from '@mui/material';
import { styled } from '@mui/system';

// Define Style
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.secondary.main,
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

// Propertys
type SocialMediaButtonProps = {
  icon: React.ReactElement;
  href: string;
};

const SocialIcon: React.FC<SocialMediaButtonProps> = ({ icon, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <StyledIconButton>
        {icon}
      </StyledIconButton>
    </a>
  );
};

export default SocialIcon;