
import { Box, Button, Card, CardActions, CardContent, styled, Typography } from '@mui/material';
import React from 'react';


type ProjectEmphProps = {
    title: string,
    subheader?: string,
    children: React.ReactNode,
    image?: string,
    imageAlt?: string
};

const FloatingCardContent = styled(CardContent)({
    boxSizing: 'border-box'
});

const ColumnBox = styled(Box)({
    float: 'left',
    width: '50%',
});

const MainProjectEmph = (props: ProjectEmphProps) => {
    return (
        <Card style={{ marginTop: '20px' }}>
            <FloatingCardContent>
                <ColumnBox style={{backgroundColor: 'black', width: '30px'}}>
                    <img src={props.image} alt={props.imageAlt}/>
                </ColumnBox>
                <ColumnBox>
                    <Box>
                        <Typography variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="secondary">
                            {props.subheader}
                        </Typography>

                        <br></br>

                        {/* Body */}
                        <Typography variant="body2" color="text.secondary" sx={{ width: '80%' }}>
                            {props.children}
                        </Typography>

                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Box>
                </ColumnBox>
            </ FloatingCardContent>
            
        </Card>
    );
};

export default MainProjectEmph;

