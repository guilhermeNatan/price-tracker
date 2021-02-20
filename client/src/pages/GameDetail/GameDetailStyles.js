import Verify from '../../util/Verify'
const styles = {
  container: {
    flex: 1,
  },
  imgContainer: {
    width: '100%',
    height: '50%',
    overflow: 'hidden',
    top: 0,
    left: 0,
    position: Verify.isMobile ? "fixed": "absolute",
    zIndex: -1,

  },
  title: {
    minHeight: Verify.isMobile ? '32vh' : '46vh',
    width: '100%',
    display: "flex",
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginBottom: '5%'
  },

  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }

};

export default styles;
