import React, {PureComponent} from 'react';
import styles from './RecentAnnoucementsStyles';
import ItemCarousel from "../ItemCarousel/ItemCarousel";
import {Typography} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

class RecentAnnoucements extends PureComponent {
  render() {
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

      ]

    return (
      <div style={styles.container}>

         <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',  marginTop: '3%' }}>
             <Typography gutterBottom variant="h2" >
                 Anuncios recentes
             </Typography>
         </div>
         <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',  marginTop: '3%' }}>
          {
           items.map((item) =>  <ItemCarousel  {...item} />)
          }
         </div>

          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3%' }}>
            {
              items.map((item) =>  <ItemCarousel {...item} />)
            }
          </div>

      </div>
    );
  }
}

export default RecentAnnoucements;
