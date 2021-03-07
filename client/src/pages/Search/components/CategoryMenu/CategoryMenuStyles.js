import ResponsiveLayout from "../../../../util/ResponsiveLayout";




const defaultLayout = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: '4%',
    maxWidth: '80vw',
    minWidth: '70vw'
  },

  categoryItemContainer: {
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
    width: '5rem',
    flexDirection: 'column',
    marginRight: '.5rem'

  },
  categoryItemIcon: {
    backgroundColor: "#fff",
    borderRadius: "100%",
    width: "4rem",
    height: "4rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 1px 1px 0 rgb(0 0 0 / 10%)",
    transition: "box-shadow .3s"
  }
};

const mobile = {
  ...defaultLayout,
  container: {
    ...defaultLayout.container,
    overflowX: 'scroll',
    maxWidth: '95vw',

  },
  rowCategory: {
    display: 'flex',
    flexDirection: 'row',
  }
}
const desktop = {
  ...defaultLayout,
  container: {
    ...defaultLayout.container,
    backgroundColor: 'black'

  }

}

const tablet = {
  ...defaultLayout,
  container: {
    ...defaultLayout.container,
    backgroundColor: 'red'

  }

}
// export  default (mediaQuery) =>  getResponsiveLayout(mediaQuery, defaultLayout, mobile, desktop, tablet)
//
export default (mediaQuery) => {
  return ResponsiveLayout.getResponsiveLayout(mediaQuery, defaultLayout, mobile);
  // switch (true) {
  //   case mediaQuery.isMobile:
  //     return mobile;
  //   case mediaQuery.isDesktop:
  //     return desktop;
  //   case mediaQuery.isTablet:
  //     return tablet;
  //   default:
  //     return defaultLayout
  // }

}
