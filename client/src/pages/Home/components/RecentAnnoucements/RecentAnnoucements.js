import React, {PureComponent} from 'react';
import styles from './RecentAnnoucementsStyles';
import ItemCarousel from "../ItemCarousel/ItemCarousel";
import {Typography} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import {AD} from "../../../../constants/RoutePaths";

class RecentAnnoucements extends PureComponent {
  render() {
      var items =  [
          {
              image: 'https://a-static.mlcdn.com.br/618x463/violao-nylon-acustico-valencia-4-4-vc564t/musicalcenter/valenciavc564t/05fb2cb44b32aea20d111fe29c67e21e.jpg',
              title: 'Violão',
              price:  'R$ 600,00',
              description: ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
              publishDate: '06-12-1991',
              address: 'Capelinha',
              id: 1,
          },
          {
              image: 'https://images.tcdn.com.br/img/img_prod/414764/kit_completo_guitarra_stratocaster_phx_strato_power_amplificador_e_acessorios_1733_1_228f9c47daf0d8a58cbb33d0c873a4d1.jpg',
              title: 'Violão',
              price:  'R$ 600,00',
              description: ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
              publishDate: '06-12-1991',
              address: 'Belo Horizonte',
              id: 2,
          },
          {
              image: 'https://images.tcdn.com.br/img/img_prod/414764/kit_completo_guitarra_stratocaster_phx_strato_power_amplificador_e_acessorios_1733_1_228f9c47daf0d8a58cbb33d0c873a4d1.jpg',
              title: 'Violão',
              price:  'R$ 600,00',
              publishDate: '06-12-1991',
              description: ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
              address: 'Belo Horizonte',
              id: 3,
          },
          {
              image: 'https://a-static.mlcdn.com.br/618x463/violao-nylon-acustico-valencia-4-4-vc564t/musicalcenter/valenciavc564t/05fb2cb44b32aea20d111fe29c67e21e.jpg',
              title: 'Violão',
              price:  'R$ 600,00',
              publishDate: '06-12-1991',
              description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
              address: 'Capelinha',
              id: 4,
          },

      ]

    const {history} = this.props;
    return (
      <div style={styles.container}>

         <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',  marginTop: '3%' }}>
             <Typography gutterBottom variant="h2" >
                 Anuncios recentes
             </Typography>
         </div>
         <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',  marginTop: '3%' }}>
          {
           items.map((item) =>  <ItemCarousel onPress={() => history.push(`${AD.adDetail}/${item.id}` )}  {...item}  />)
          }
         </div>

          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3%' }}>
            {
              items.map((item) =>  <ItemCarousel onPress={() => history.push(`${AD.adDetail}/${item.id}` )} {...item} />)
            }
          </div>

      </div>
    );
  }
}

export default RecentAnnoucements;
