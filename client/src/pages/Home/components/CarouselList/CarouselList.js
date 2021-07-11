import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, Button, Card} from '@material-ui/core'
import ItemCarousel from "../ItemCarousel/ItemCarousel";
import _ from "lodash";
//DEPRECIADO
function CarouselList({ mediaQuery})
{
    var items =  [
        {
            image: 'https://img.olx.com.br/thumbs256x256/83/830196138322724.jpg',
            title: 'Violão',
            price:  'R$ 600,00',
            description: ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            publishDate: '06-12-1991',
            address: 'Capelinha'
        },
        {
            image: 'https://img.olx.com.br/thumbs256x256/92/922115269743729.jpg',
            title: 'Violão',
            price:  'R$ 600,00',
            description: ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            publishDate: '06-12-1991',
            address: 'Belo Horizonte'
        },
        {
            image: 'https://img.olx.com.br/thumbs256x256/92/922115269743729.jpg',
            title: 'Violão',
            price:  'R$ 600,00',
            publishDate: '06-12-1991',
            description: ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            address: 'Belo Horizonte'
        },
        {
            image: 'https://img.olx.com.br/thumbs256x256/83/830196138322724.jpg',
            title: 'Violão',
            price:  'R$ 600,00',
            publishDate: '06-12-1991',
            description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            address: 'Capelinha'
        },

        {
            image: 'https://img.olx.com.br/thumbs256x256/83/830196138322724.jpg',
            title: 'Violão',
            price:  'R$ 600,00',
            publishDate: '06-12-1991',
            description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            address: 'Capelinha'
        },
        {
            image: 'https://img.olx.com.br/thumbs256x256/83/830196138322724.jpg',
            title: 'Violão',
            price:  'R$ 600,00',
            publishDate: '06-12-1991',
            description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            address: 'Capelinha'
        },

        {
            image: 'https://img.olx.com.br/thumbs256x256/83/830196138322724.jpg',
            title: 'Violão',
            price:  'R$ 600,00',
            publishDate: '06-12-1991',
            description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            address: 'Capelinha'
        },
    ]


    let grupos = _.chunk(items, 4);
    if(mediaQuery.isTablet) {
        grupos =  _.chunk(items, 3);
    }

        // return (
        //
        //         <div style={{display: "flex",
        //             flexDirection: 'row',
        //             overflowX: 'scroll',
        //             overflowY: 'hidden',
        //             height: '30vh',
        //         }}>
        //
        //             {
        //                 [1,2,3,4,5,6,7,8,9].map(() => <div style={{
        //                     width: '50%',
        //                     height: '50%',
        //                     margin: 5,
        //                     backgroundColor: 'black'
        //                 }} >
        //                     <img src='https://img.olx.com.br/thumbs256x256/83/830196138322724.jpg'
        //                             style={{
        //                                 objectFit: 'cover',
        //                                 width: '33vw',
        //                             }}
        //                     />
        //                     </div>
        //                     )
        //             }
        //
        //
        //         </div>
        //
        // )

    //     // groupItens
    return (
        <Carousel indicators={false}
                  >

            {grupos.map((items) => <Item items={items} />)}
            {/*<Item items={items} />*/}

        </Carousel>
    )
}

function Item({items})
{
    return (
        <div style={{display: "flex",
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: '4%'
        }}>

            {
                items.map((item) => {
                    return (
                        <ItemCarousel
                            key={item.name}
                            image={item.image}
                            headline={item.name}
                            description={item.description}
                        />)
                })
            }


        </div>
    )
}


export default CarouselList;
