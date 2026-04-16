export const SELECTORS = {
    AUTH: {
        EMAIL: 'input[type="email"], input[type="text"]',
        PASSWORD: 'input[type="password"]',
        SUBMIT: 'button[type="submit"]',
    },

    UPLOAD: {
        FILE_INPUT: 'input[type="file"]',
    },

    MAP: {
        CONTAINER: '.leaflet-container',
        MARKERS: '.map-marker'
    },

    TEXT: {
        PROPERTY: (name: string) => `text=${name}`,
    },

    PROPERTIES: {
        SORT_BUTTON: 'button:has-text("Sort")'
    },
    EXPORT: {
        BUTTON: 'button:has-text("Export")'
    },




};