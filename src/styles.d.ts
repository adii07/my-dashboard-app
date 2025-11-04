// src/custom.d.ts
declare module "*.css";
declare module "*.scss";
declare module "*.sass";

// For CSS Modules (optional, keeps default fallback)
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
