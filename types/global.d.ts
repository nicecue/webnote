// 전역 정의

// style 로더용
declare module '*.css' {
  const styles: any;
  export = styles;
}