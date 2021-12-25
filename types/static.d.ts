/* Use this file to declare any custom file extensions for importing */
/* Use this folder to also add/extend a package d.ts file, if needed. */

/* CSS MODULES */
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}
declare module '*.module.sass' {
    const classes: { [key: string]: string };
    export default classes;
}
declare module '*.module.less' {
    const classes: { [key: string]: string };
    export default classes;
}
declare module '*.module.styl' {
    const classes: { [key: string]: string };
    export default classes;
}

/* CSS */
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.less';
declare module '*.styl';

/* IMAGES */
declare module '*.svg' {
    const ref: string;
    export default ref;
}
declare module '*.bmp' {
    const ref: string;
    export default ref;
}
declare module '*.gif' {
    const ref: string;
    export default ref;
}
declare module '*.jpg' {
    const ref: string;
    export default ref;
}
declare module '*.jpeg' {
    const ref: string;
    export default ref;
}
declare module '*.png' {
    const ref: string;
    export default ref;
}

/* CUSTOM: ADD YOUR OWN HERE */
declare module 'https://unpkg.com/lit@2.0.2/index.js?module' {
    const {LitElement, html, css}: typeof import ('lit');
    export {LitElement, html, css};
}

declare module 'https://unpkg.com/@lit/reactive-element@1.0.2/decorators.js?module' {
    const {customElement, property}: typeof import('lit/decorators.js');
    export {customElement, property};
}