const initialState = {
  signedIn: false,
  loadingSignInRequest: false,
  token: null,
  error: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return {
        ...state,
        loadingSignInRequest: true,
      };
    case '@auth/SIGN_IN_SUCCESS':
      return {
        ...state,
        loadingSignInRequest: false,
        signedIn: true,
        token: action.payload.token,
      };
    case '@auth/SIGN_IN_FAILURE':
      return {
        ...state,
        loadingSignInRequest: false,
        signedIn: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
