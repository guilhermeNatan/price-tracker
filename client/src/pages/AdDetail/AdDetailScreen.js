import React, {Component} from 'react';
import styles from './AdDetailStyles';
import ImageGallery from 'react-image-gallery';
import Typography from "@material-ui/core/Typography";
import colors from "../../theme/colors";
import Button from "@material-ui/core/Button";

const ad =  {
  title: 'Kindle Amazon PaperWhite 8gb Tela de 6 Polegadas',
  publishAt: "06/12/1991 15:00:00",
  price: 449.4,
  isAProfessionalAnounce: true,
  advertiser: {
    name: 'Léo Celulares',
    contact: '(31) 99261-4263',
    registeredSince: '06/12/1991',
  },
  details: {
    category: 'Celulares e telefonia',
    type: 'Outras marcas',
    isNew: false
  },
  localization: {
    cep: 30160040,
    municipio: 'Belo Horizonte',
    bairro: 'centro'
  },
  images: [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    }
  ]
}
function  AdDetailScreen() {

    return (
        <div style={styles.container}>
          <div style={styles.page}>
            <Typography variant="h1" color={colors.primaryTextColor}>
              {ad.title}
            </Typography>
            <Typography variant="h5" color={colors.primaryTextColor} style={{marginBottom: '3vh'}}>
              Publicado em {ad.publishAt}
            </Typography>
            <ImageGallery items={ad.images}
                          thumbnailPosition={'right'}
                          showPlayButton={false}/>;
            <Typography variant="h3" color={colors.primaryTextColor} style={{marginTop: '3vh'}}>
              R$ {ad.price}
            </Typography>

            <div style={{display: 'flex', flexDirection: 'row', marginTop: '3vh'}}>
              <Button variant="contained" color="primary"
                      onClick={() => console.log('adicionar favoritos')}
                      style={{marginRight: '1vw'}}
              >
                Favoritar
              </Button>

              <Button variant="contained" color="primary"
                      onClick={() => console.log('adicionar favoritos')}
                      style={{marginRight: '1vw'}}

              >
                Compartilhar
              </Button>

              <Button variant="contained" color="primary"
                      onClick={() => console.log('adicionar favoritos')}
                      style={{marginRight: '1vw'}}

              >
                Denunciar
              </Button>
            </div>

            <Typography variant="h2" color={colors.primaryTextColor} style={{marginTop: '3vh'}}>
              Detalhes
            </Typography>

            <div style={{display: 'flex', flexDirection: 'row'}}>
              <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
                <Typography variant="h6" color={colors.primaryTextColor} style={{marginTop: '2vh'}}>
                  Categoria
                </Typography>
                <Typography variant="h5" color={colors.primaryTextColor}>
                  {ad.details.category}
                </Typography>
              </div>
            </div>
            <Typography variant="h2" color={colors.primaryTextColor} style={{marginTop: '3vh'}}>
              Localização
            </Typography>
          </div>
        </div>
    );
  }

export default AdDetailScreen;
