import React from "react";
export declare type RenderLink = React.FC<{
  href: string;
  target?: "_self" | "_blank";
  preload?: "none" | "prefetch" | "prerender";
  className?: string;
  children?: React.ReactNode;
}>;
export declare type RenderImage = React.FC<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
>;
export declare const DevLinkContext: any;
declare type DevLinkProviderProps = {
  children: React.ReactNode;
};
export declare const DevLinkProvider: React.FC<DevLinkProviderProps>;
export {};
