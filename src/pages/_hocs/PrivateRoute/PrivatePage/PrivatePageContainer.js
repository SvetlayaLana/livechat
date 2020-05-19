import { connect } from "react-redux";
import { lifecycle, compose, withHandlers } from "recompose";
import { logout } from "modules/authorization/actions/logout";
import { persistor } from "store";
import PrivatePage from './PrivatePage';

const mapStateToProps = (state) => ({
  isAuthorized: state.authorization.isAuthorized,
  isRemembered: state.authorization.userInfo.isRemembered,
});

const mapDispatchToProps = {
  logout,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withHandlers({
      onUnloadWindow: ({ isRemembered }) => () => {
        if(!isRemembered)
          persistor.purge();
      }
    }),
    lifecycle({
      componentDidMount() {
        window.addEventListener('unload', this.props.onUnloadWindow)
      },
      componentWillUnmount() {
        window.removeEventListener('unload', this.props.onUnloadWindow)
      }
    })
)(PrivatePage);
