import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Link from './MLink';
import { getColorChipStatus } from '../../constants/PedidoStatus';

const styles = theme => ({
  card: {
    maxWidth: 350,
    margin: 10,
  },
  media: {
    height: 140,
  },
  link: {
    textDecoration: 'none',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

function CardPedido({ classes, pedido }) {
  return (
    <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { pedido.nome }
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            { `Nº ${pedido.numero}` }
          </Typography>
          <Chip
            label={`${pedido.status.descricao}`}
            style={{ backgroundColor: getColorChipStatus(pedido), color: '#fff' }}
            className={classes.chip}
          />
          <Typography component="p">
            { `Entregar em : ${pedido.endereco}` }
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary" disabled />
        <Link to={`/pedido/${pedido.id}`}>
          <Button size="small" color="primary">
            { 'Visualizar Itens Pedido' }
          </Button>
        </Link>

      </CardActions>
    </Card>
  );
}

CardPedido.propTypes = {
  pedido: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardPedido);
