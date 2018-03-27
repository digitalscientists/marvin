---
inject: true
to: source/js/views/App.jsx
after: 'import Dashboard from "views/Dashboard";'
skip_if: 'import <%= h.capitalize(name) %> from "views/<%= h.capitalize(name) %>";'
---
import <%= h.capitalize(name) %> from "views/<%= h.capitalize(name) %>";