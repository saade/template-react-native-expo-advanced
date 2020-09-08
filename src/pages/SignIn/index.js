import React from 'react';
import { Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container } from './styles';

const SignIn = () => {
  const { signedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function doLogin() {
    dispatch(signInRequest({ email: '', password: '' }));
  }

  return (
    <Container>
      <Text>SignIn? {signedIn ? 'true' : 'false'}</Text>
      <Button onPress={() => doLogin()} title="Login">
        Login
      </Button>
    </Container>
  );
};

export default SignIn;
