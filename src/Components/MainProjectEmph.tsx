
import { Box, Button, Card, CardActions, CardContent, CardMedia, Collapse, IconButton, IconButtonProps, Link, styled, Typography, useTheme } from '@mui/material';
import React, { CSSProperties } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type ProjectEmphProps = {
    title: string,
    titlehref: string
    subheader?: string,
    desc?: string,
    children: React.ReactNode,
    image?: string,
    imageAlt?: string,

    imageX?: number,
    imageY?: number
};

const CustomLink = styled(Link)(({ theme }) => ({
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
        color: theme.palette.primary.main,
    },
}));


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const MainProjectEmph = (props: ProjectEmphProps) => {

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const imageWidth = '80px';

    return (
        <Card sx={{ marginTop: '5px', width: '60%', minWidth: '300px' }}>
            
            <Box sx={{display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: imageWidth }}
                    image={props.image}
                    alt="Live from space album cover"
                />

                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', paddingRight: '5px' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant="h5" fontWeight='bold' component="div">
                            <CustomLink href={props.titlehref} target='_blank' rel="noreferrer">
                                {props.title}
                            </CustomLink>
                        </Typography>
                        <Typography variant="body2" color="secondary">
                            {props.subheader}
                        </Typography>

                        <br></br>
                        {props.desc}

                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, width: '100%' }}>
                        {/* <IconButton aria-label="previous">
                            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                            </IconButton>
                            <IconButton aria-label="play/pause">
                            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                            </IconButton>
                            <IconButton aria-label="next">
                            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                            </IconButton> */}
                        {props.children}

                        {/* <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore> */}
                    </Box>
                </Box>
            </Box>
        </Card>

        // <Card 
        // style={{ marginTop: '20px', width: '60%', minWidth: '300px'}}>

        //     <CardContent style={{position: 'relative', display: 'grid', paddingBottom: '0'}}>
        //         <ColumnBox style={imageLineStyle}>
        //             {/* <img src={props.image} alt={props.imageAlt} style={{objectFit: 'fill'}}/> */}
        //         </ColumnBox>

        //         <ColumnBox style={{marginLeft: imageWidth}}>
        //             <Box>
        //                 <Typography variant="h5" fontWeight='bold' component="div">
        //                     <CustomLink href={props.titlehref} target='_blank' rel="noreferrer">
        //                         {props.title}
        //                     </CustomLink>
        //                 </Typography>
        //                 <Typography variant="body2" color="secondary">
        //                     {props.subheader}
        //                 </Typography>

        //                 <br></br>

        //                 {/* Body */}
        //                 <Typography variant="body2" color="text.secondary" sx={{ width: '100%' }}>
        //                     {props.desc}
        //                 </Typography>

        //                 <CardActions>
        //                     {props.children}
        //                 </CardActions>
        //             </Box>
        //         </ColumnBox>

        //         <ColumnBox>
        //         {/* Hello. */}
        //         </ColumnBox>

        //     </ CardContent>

        // </Card>
    );
};

export default MainProjectEmph;


