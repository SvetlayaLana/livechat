import { connect } from "react-redux";
import { lifecycle, compose } from "recompose";
import { logout } from "modules/authorization/actions/logout";
import PrivatePage from './PrivatePage';

const mapStateToProps = (state) => ({
  isAuthorized: state.authorization.isAuthorized,
});

const mapDispatchToProps = {
  logout,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
      componentWillUnmount() {
        this.props.logout();
      }
    })
)(PrivatePage);
