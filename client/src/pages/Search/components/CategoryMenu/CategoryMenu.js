import React, {PureComponent} from 'react';
import categoryMenuStyles from './CategoryMenuStyles';
import Avatar from '@material-ui/core/Avatar';
import icone from './categoryIcons/user-interface.svg'
import Typography from "@material-ui/core/Typography";
class CategoryMenu extends PureComponent {

  renderCategory = () => {

    return(
        <div style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: "center",
            flexDirection: 'column',
        }}>
          <Avatar
                alt={"Telefones"}
                src={icone}
          />
          <Typography color={'textSecondary'} variant={'h5'}>
              Celulares e Eletrônicos
          </Typography>
        </div>
    )
  }
  render() {
      const {mediaQuery} = this.props;
      const styles = categoryMenuStyles(mediaQuery);
    return (
      <div style={styles.container}>
          {
              mediaQuery.isMobile && (
                  <>
                      <div style={styles.rowCategory}>
                          {
                              [1,2,3,4,5].map((i) => this.renderCategory())
                          }
                      </div>
                      <div style={styles.rowCategory}>
                          {
                              [1,2,3,4,5].map((i) => this.renderCategory())
                          }
                      </div>
                  </>
              )
          }

          {
              !mediaQuery.isMobile && (
                  [1,2,3,4,5,6,7,8,9,0].map((i) => this.renderCategory())
              )
          }
      </div>
    );
  }
}

export default CategoryMenu;
