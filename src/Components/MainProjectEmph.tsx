
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
    // display: 'flex',
    // float: 'left',
    // flexFlow: 'row nowrap',
    // height: '100%',
    // border: '1px solid red'
});

const MainProjectEmph = (props: ProjectEmphProps) => {


    const imageWidth = '80px'

    const paddingFromCard = '18px'


    const imageX = (props.imageX) ? props.imageX : 0;
    const imageY = (props.imageY) ? props.imageY : 0;

    const imageLineStyle: CSSProperties = {

        position:'absolute',
        gridArea: '1 / 1 / 2 / 2',
        // backgroundColor: 'black', 
        width: imageWidth, 
        height: `calc(100% + 4*${paddingFromCard})`, 
        transform: `translateX(-${paddingFromCard}) translateY(-${paddingFromCard})`,

        overflow: 'hidden', 
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',

        backgroundPosition: `${imageX}% ${imageY}%`,
        // WebkitBackgroundSize: '100%'
        // border: '1px solid red'
        
    }

    return (
        <Card style={{ marginTop: '20px', width: '60%', minWidth: '300px'}}>

            
            <CardContent style={{position: 'relative', display: 'grid'}}>
                <ColumnBox style={imageLineStyle}>
                    {/* <img src={props.image} alt={props.imageAlt} style={{objectFit: 'fill'}}/> */}
                </ColumnBox>

                <ColumnBox style={{marginLeft: imageWidth}}>
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
                {/* Hello. */}
                </ColumnBox>

            </ CardContent>
            
        </Card>
    );
};

export default MainProjectEmph;

