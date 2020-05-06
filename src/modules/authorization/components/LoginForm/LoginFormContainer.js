import { compose, withProps } from "recompose";

import LoginForm from './LoginForm';

export default compose(
    withProps({
      onSubmit: (e) => e.preventDefault(),
    }),
)(LoginForm);

