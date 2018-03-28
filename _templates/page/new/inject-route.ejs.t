---
inject: true
to: source/js/constants/routes.js
after: 'DASHBOARD: publicPath,'
skip_if: '<%= h.inflection.underscore(name).toUpperCase() %>: `${publicPath}<%= name %>`,'
---
  <%= h.inflection.underscore(name).toUpperCase() %>: `${publicPath}<%= name %>`,