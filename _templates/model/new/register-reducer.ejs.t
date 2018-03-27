---
inject: true
to: source/js/models/reducers-index.js
after: "export default combineReducers\\(\\{"
skip_if: "<%= name %>,"
---
  <%= name %>,