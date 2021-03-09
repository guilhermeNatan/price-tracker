import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import _ from "lodash";

// {
//     image: 'https://img.olx.com.br/thumbs256x256/83/830196138322724.jpg',
//         title: 'Violão',
//     price:  'R$ 600,00',
//     publishDate: '06-12-1991',
//     address: 'Rua ubá 135 casa 3 - Belo Horizonte'
// }


const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
    media: {
        height: 140,
    },
});

const CardResult = ({anuncio, isMobile}) => {
    const  {image, title, price, publishDate, address, description} = anuncio;
    const classes = useStyles();

    return (
        <Card style={{
            padding: '2%',
            height: '30vh',
        }}>
            <CardActionArea>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flex:3
                }}>

                    <div style={{
                        display: "flex",
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1%'
                    }}>

                        <img  src={image}
                              style={{
                                  width: 'auto',
                                  objectFit: 'cover',
                                  maxHeight: '18vh'
                              }}
                        />
                    </div>

                    <div style={{display: "flex", flex: 2}}>
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="h2" >
                                {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p"  style={{ margin: '4% 0 4% 0'}}>
                                {isMobile ? _.truncate(description, {
                                    length: 120,
                                    omission: '...'
                                }) : description}
                            </Typography>
                            <Typography variant="h3" color="textPrimary" style={{fontWeight: 600, margin: '2% 0 2% 0'}}>
                                {price}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {address}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {publishDate}
                            </Typography>
                        </CardContent>
                    </div>
                </div>
            </CardActionArea>
        </Card>
    );
};


export default CardResult;
