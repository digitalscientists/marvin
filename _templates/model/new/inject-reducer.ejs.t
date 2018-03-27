---
inject: true
to: source/js/models/reducers-index.js
after: 'import { combineReducers } from "redux";'
skip_if: 'import <%= name %> from "./<%= name %>/reducers";'
---
import <%= name %> from "./<%= name %>/reducers";