/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CALENDLY_URL: string
    readonly VITE_LEAD101_WIDGET_CODE: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
