import { reduxForm } from "redux-form";
import { compose, withProps} from "recompose";

import LoginForm from './LoginForm';

export default compose(
    reduxForm({form: 'login'}),
    withProps({
      handleSubmit: values => console.log('hello'),
    })
)(LoginForm);

