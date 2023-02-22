import "twin.macro";

declare global {
  interface ReactUnityCustomAttributes {
    css?: CSSProp;
    as?: string | Element;
    tw?: string;
  }
}
