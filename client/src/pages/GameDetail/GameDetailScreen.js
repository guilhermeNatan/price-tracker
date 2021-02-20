import React, {Component} from 'react';
import styles from './GameDetailStyles';
import { withRouter } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import {PriceChart} from "./components/PriceChart";
import Button from "@material-ui/core/Button";

class GameDetailScreen extends Component {
  render() {
    return (
      <div style={styles.container}>

          <div style={styles.imgContainer}>

                  <img
                      src={'https://image.api.playstation.com/vulcan/ap/rnd/202009/0300/JTghsjX2IS4g0VlPcFXfDhTv.jpg'}
                      style={{width: '100%' }}
                  />

              </div>


          <div style={styles.title}>


              <Typography variant="h1"  align={'right'}>
                  { 'Prince of Persia: The Sands of Time Remake'}
              </Typography>

          </div>
          <div style={styles.buttonRow}>
              <Button

                  variant="contained" color="secondary"
                       onClick={() => console.log('notificar')}
              >
                  Receber alerta
              </Button>
          </div>
          <div style={{marginTop: '3vh'}}>
              <Typography variant="h3" align={'right'} >
                  { 'Prince History'}
              </Typography>

          </div>
          <PriceChart />

      </div>
    );
  }
}

export default withRouter(GameDetailScreen)
