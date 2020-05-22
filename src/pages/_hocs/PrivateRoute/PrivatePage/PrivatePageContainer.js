import { connect } from "react-redux";
import { lifecycle, compose, withHandlers } from "recompose";

import { persistor } from "store";
import { startObservingMessages, stopObservingMessages } from "modules/chat/actions/chatUpdates";

import PrivatePage from './PrivatePage';

const mapStateToProps = (state) => ({
  isAuthorized: state.authorization.isAuthorized,
  isRemembered: state.authorization.userInfo.isRemembered,
});

const mapDispatchToProps = {
  startObservingMessages,
  stopObservingMessages,
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
        window.addEventListener('unload', this.props.onUnloadWindow);
        console.log('mounted...');
        this.props.startObservingMessages();
      },
      componentWillUnmount() {
        window.removeEventListener('unload', this.props.onUnloadWindow);

        this.props.stopObservingMessages();
      }
    })
)(PrivatePage);
