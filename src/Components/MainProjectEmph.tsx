
import { Box, Button, Card, CardActions, CardContent, styled, Typography } from '@mui/material';
import React, { CSSProperties } from 'react';


type ProjectEmphProps = {
    title: string,
    subheader?: string,
    desc?: string,
    children: React.ReactNode,
    image?: string,
    imageAlt?: string,
    
    imageX?: number,
    imageY?: number
};

const ColumnBox = styled(Box)({
    display: 'flex',
    float: 'left',
    flexFlow: 'row nowrap',
    height: '100%',
    // border: '1px solid red'
});

const MainProjectEmph = (props: ProjectEmphProps) => {


    const imageWidth = '80px'
    const imageGap = '20px'

    const imageX = (props.imageX) ? props.imageX : 0;
    const imageY = (props.imageY) ? props.imageY : 0;

    const imageLineStyle: CSSProperties = {
        position:'absolute',

        // backgroundColor: 'black', 
        width: imageWidth, 
        height: '230px', 
        
        overflow: 'hidden', 
        top: '0', 
        left: '0',

        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',

        backgroundPosition: `${imageX}% ${imageY}%`,
        // WebkitBackgroundSize: '100%'
        
    }

    return (
        <Card style={{ marginTop: '20px', width: '100%'}}>
            <CardContent style={{position: 'relative', paddingLeft: `calc(${imageWidth} + ${imageGap})`}}>
                <ColumnBox style={imageLineStyle}>
                    {/* <img src={props.image} alt={props.imageAlt} style={{objectFit: 'fill'}}/> */}
                </ColumnBox>

                <ColumnBox style={{width: '90%'}}>
                    <Box>
                        <Typography variant="h5" fontWeight='bold' component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="secondary">
                            {props.subheader}
                        </Typography>

                        <br></br>

                        {/* Body */}
                        <Typography variant="body2" color="text.secondary" sx={{ width: '100%' }}>
                            {props.desc}
                        </Typography>

                        <CardActions>
                            {props.children}
                        </CardActions>
                    </Box>
                </ColumnBox>

                <ColumnBox>
                Hello.
                </ColumnBox>

            </ CardContent>
            
        </Card>
    );
};

export default MainProjectEmph;

