module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',

  ],
  rules: {
    'no-var': "error", // var 금지
    'no-multiple-empty-lines': "error", // 여러 줄 공백 금지
    'no-console': ["error", { allow: ["warn", "error", "info"] }], // console.log() 금지
    eqeqeq: "error", // 일치 연산자 사용 필수
    'dot-notation': "error", // 가능하다면 dot notation 사용
    'no-unused-vars': "error", // 사용하지 않는 변수 금지
    'linebreak-style': 0, // CRLF 에러
    'react/function-component-definition':0, //함수형 컴포넌트 화살표함수사용 가능
    'comma-dangle': 0,
    'arrow-body-style': 0
  }
};