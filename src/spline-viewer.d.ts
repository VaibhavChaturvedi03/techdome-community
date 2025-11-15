declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': {
      url?: string;
      className?: string;
      'data-spline-url'?: string;
      children?: React.ReactNode;
      [key: string]: any;
    };
  }
}
