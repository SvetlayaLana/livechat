import { connect } from "react-redux";
import { logout } from "modules/authorization/actions/logout";

import PageLayout from './PageLayout';

const mapStateToProps = (state) => ({
  isAuthorized: state.authorization.isAuthorized,
  userName: state.authorization.userInfo.userName,
});

export default connect(mapStateToProps, { logout })(PageLayout);
