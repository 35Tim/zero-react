module.exports = {
  rules: {
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'global-require': 0,
    'react-hooks/exhaustive-deps': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'one-var': 0,
    'no-console': 0,
    'react-hooks/rules-of-hooks': 0,
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          'state', // for vuex state
        ],
      },
    ],
  },
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
};
