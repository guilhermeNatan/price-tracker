import React, {PureComponent} from 'react';
import categoryMenuStyles from './CategoryMenuStyles';
import Typography from "@material-ui/core/Typography";
import categories from './categorias';
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
import {SEARCH} from "../../../../constants/RoutePaths";
import PropTypes from "prop-types";

class CategoryMenu extends PureComponent {

    renderCategory = (category) => {
        const {mediaQuery, history} = this.props;
        const styles = categoryMenuStyles(mediaQuery);
        return (
            <button style={{
                border: "none", background: "none",
                color: "inherit",
                padding: 0,
                font: "inherit",
                cursor: "pointer",
                outline: "inherit",

            }}
            onClick={() => history.push({
                pathname: SEARCH.search,
                search: `cat=${category.id}`
            })}
            >
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
            </button>
        )
    }

  render() {
      const {mediaQuery} = this.props;
      const styles = categoryMenuStyles(mediaQuery);


    return (
      <div style={styles.container}>
          {
              categories.map((category) => this.renderCategory(category))
          }
      </div>
    );
  }
}

CategoryMenu.propTypes = {
    mediaQuery: PropTypes.object,
    history: PropTypes.object.isRequired,
};



export default CategoryMenu;
