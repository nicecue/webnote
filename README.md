# 웹 메모장 (네이버 면접 사전과제)

typescript 를 사용해서 react, mobx 기반으로 작성된 웹 메모장
번들링은 webpack 3 사용.

[라이브 데모](https://nicecue.github.io/webnote/)

## 개발 스펙

- 언어 : [Typescript](https://www.typescriptlang.org/) 2.5
- 프레임워크 
  - [React](https://facebook.github.io/react/) 16
  - [React Router](https://github.com/ReactTraining/react-router) 4.2
- 상태관리자
  - [Mobx](https://github.com/mobxjs/mobx)
  - [Mobx React](https://github.com/mobxjs/mobx-react)
  - [Mobx React Router](https://github.com/alisd23/mobx-react-router/)

## 번들링

- [Webpack](https://webpack.github.io) 3.8
  - 로더
    - [Awesome Typescript Loader](https://github.com/s-panferov/awesome-typescript-loader)
    - [PostCSS Loader](https://github.com/postcss/postcss-loader)
      - [CSS next](https://github.com/MoOx/postcss-cssnext)
      - [CSS modules](https://github.com/css-modules/css-modules)
    - [React Hot Loader](https://github.com/gaearon/react-hot-loader)
  - 옵션
    - [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
    - [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
  - 플러그인
    - [ExtractText Plugin](https://github.com/webpack/extract-text-webpack-plugin)
    - [HTML Webpack Plugin](https://github.com/ampedandwired/html-webpack-plugin)
    - [Copy Webpack Plugin](https://github.com/webpack-contrib/copy-webpack-plugin)

## 스타일
- [AdminLTE](https://adminlte.io/themes/AdminLTE/index2.html) 적용

## 린팅(Linting)
- [Airbnb TSLint Config](https://www.npmjs.com/package/tslint-config-airbnb) 적용

## 개발 및 배포 관련 branch 룰
- [Git Flow](https://github.com/petervanderdoes/gitflow-avh/wiki/Installation) 사용

## 설치

```
$ npm install
```

## 실행

```
$ npm start
```

## 빌드

```
$ npm run build
```

## 배포
- Github Pages 에 배포 (gh-phages 브랜치 사용)
```
$ npm run deploy
```

# 라이센스(license)

MIT
