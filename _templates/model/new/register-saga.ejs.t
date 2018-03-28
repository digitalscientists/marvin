---
inject: true
to: <% if(components.includes('saga')){ %>source/js/models/sagas-index.js<% } else { null } %>
after: "yield all\\(\\["
skip_if: "...<%= name %>Sagas,"
---
    ...<%= name %>Sagas,