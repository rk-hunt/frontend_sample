const { override, useBabelRc, addLessLoader } = require('customize-cra');

module.exports = override(
    useBabelRc(),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@font-family': "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            '@primary-color': '#007bff',
            '@success-color': '#1dc9b7',
            '@warning-color': '#ffb822',
            '@error-color': '#fd397a',
            '@link-color': '#007bff',
            '@heading-color': '#003366',
            '@text-color': '#6e84a3',
            '@border-color-split': 'hsl(220, 18%, 97%)'
            // '@border-color-base': '#e9f2f9'
            // '@font-family': "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
            // '@pagination-item-bg-active': '#007bff',
            // '@border-color-base': '#a3dcff'
            // '@success-color': '#1ccf8f',
            // '@border-color-base': '#f5f6f8',
            // '@btn-default-bg': '#edf0f5',
        }
    })
);
