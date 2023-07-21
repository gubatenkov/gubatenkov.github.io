/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="astro-imagetools" />

declare module 'astro-imagetools/components'
declare module '*.glsl' {
  const value: string
  export default value
}
declare module 'astro-imagetools' {
  export const astroImageTools: {
    hooks: object
    name: string
  }
}

interface ImportMetaEnv {
  readonly ASTRO_SUBSCRIBE_FORM_API: string
  readonly ASTRO_CONTACT_FORM_API: string
  readonly ASTRO_DOWNLOAD_CV_URL: string
  readonly ASTRO_CTA_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
