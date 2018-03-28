---
inject: true
to: <% if(components.includes('saga')){ %>source/js/models/sagas-index.js<% } else { null } %>
after: import { all } from "redux-saga/effects";
skip_if: import <%= name %>Sagas from "./<%= name %>/sagas";
---
import <%= name %>Sagas from "./<%= name %>/sagas";