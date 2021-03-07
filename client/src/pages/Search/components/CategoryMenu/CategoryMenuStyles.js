import ResponsiveLayout from "../../../../util/ResponsiveLayout";
const defaultLayout = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: '4%',
    maxWidth: '80vw',
    minWidth: '70vw',
  },

  categoryItemContainer: {
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
    width: '5rem',
    flexDirection: 'column',
    marginRight: '.5rem',

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
    padding: '3vh 0 3vh 0',
  },
}

export default (mediaQuery) =>  ResponsiveLayout.getResponsiveLayout(mediaQuery, defaultLayout, mobile);


