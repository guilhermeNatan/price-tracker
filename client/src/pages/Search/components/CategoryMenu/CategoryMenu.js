import React, {PureComponent} from 'react';
import categoryMenuStyles from './CategoryMenuStyles';
import Typography from "@material-ui/core/Typography";

import {
    basketBallIcon,
    bedIcon,
    bussinessIcon,
    carIcon,
    dressIcon,
    guitarIcon,
    homeIcon,
    mobileFone,
    toolsIcon
} from './categoryIcons';

class CategoryMenu extends PureComponent {

    renderCategory = (category) => {
        const {mediaQuery} = this.props;
        const styles = categoryMenuStyles(mediaQuery);

        return (
            <div style={styles.categoryItemContainer}
                 key={category.name}>
                <div style={styles.categoryItemIcon}>
                    <img
                        style={{width: "32px", height: "32px"}}
                        alt={category.name}
                        src={category.icon}
                    />
                </div>
                <Typography color={'textSecondary'}
                            variant={'h5'}
                            style={{
                                color: 'white',
                                fontSize: 'calc(10px + .3012vw)',
                                marginTop: '15%',
                                fontWeight: 400
                            }}
                            align={'center'}>

                    {category.name}
                </Typography>
            </div>
        )
    }

    getCategories = () => {
        return ([
            {
                name: 'Imóveis',
                icon: homeIcon,
            },
            {
                name: 'Auto e peças',
                icon: carIcon,
            },
            {
                name: 'Para a sua casa',
                icon: bedIcon,
            },
            {
                name: 'Para sua casa',
                icon: homeIcon,
            },
            {
                name: 'Eletrônicos e celulares',
                icon: mobileFone,
            },
            {
                name: 'Vagas de emprego',
                icon: bussinessIcon,
            },
            {
                name: 'Serviços',
                icon: toolsIcon,
            },
            {
                name: 'Música e hobbies',
                icon: guitarIcon,
            },
            {
                name: 'Esportes e lazer',
                icon: basketBallIcon,
            },
            {
                name: 'Moda e lazer',
                icon: dressIcon,
            },
        ])
    }



  render() {
      const {mediaQuery} = this.props;
      const styles = categoryMenuStyles(mediaQuery);


    return (
      <div style={styles.container}>
          {
              this.getCategories().map((category) => this.renderCategory(category))
          }
      </div>
    );
  }
}

export default CategoryMenu;
