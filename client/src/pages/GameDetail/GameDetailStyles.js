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

  }
};

export default styles;
