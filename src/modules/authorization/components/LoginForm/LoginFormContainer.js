import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import { authorize } from "../../actions/login";
import LoginForm from './LoginForm';

export default compose(
    connect(
      null, {
      authorize,
    }),
    withHandlers({
      onSubmit: ({ authorize }) => () => {
        authorize();
      },
    }),
)(LoginForm);

