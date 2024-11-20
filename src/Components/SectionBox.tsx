
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Collapse, IconButton, IconButtonProps, Link, styled, Typography, useTheme } from '@mui/material';
import React, { CSSProperties } from 'react';
import FaceIcon from '@mui/icons-material/Face';

type ProjectEmphProps = {
    title: string,
    titlehref: string
    subheader?: string,
    desc?: string,
    children: React.ReactNode,
};

const CustomLink = styled(Link)(({ theme }) => ({
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
        color: theme.palette.primary.main,
    },
}));

const SectionBox = (props: ProjectEmphProps) => {

    return (
        <Card variant='outlined' className='sectionCard'>

            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {/* <div class="container">
                        <div class="left-div">Left</div>
                        <div class="right-div">Right</div>
                    </div> */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                            Left
                        </Box>
                        <Box>
                            Right
                        </Box>
                    </Box>
                </Typography>
                
                <Box sx={{ display: 'flex'}}>
                    <Box>
                        Image/Icon Here
                    </Box>

                    <Box>
                        <Typography variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body1" component="div">
                            {props.subheader}
                        </Typography>
                    </Box>
                </Box>

                <br />

                <Typography variant="body2" component="div">
                    {props.desc}
                </Typography>

                <br />

                <Chip variant='outlined' size="small" color="primary" label="Chip Filled" />
                <Chip variant='outlined' size="small" color="primary" icon={<FaceIcon />} label="With Icon" />

            </CardContent>

        </Card>
    );
};

export default SectionBox;


