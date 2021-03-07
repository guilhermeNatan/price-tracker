import ResponsiveLayout from "../../../../util/ResponsiveLayout";


const defaultLayout = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: '4%',
  },
};

const mobile = {
  ...defaultLayout,
  container: {
    ...defaultLayout.container,
    overflowX: 'scroll',
    flexDirection: 'column',
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
