---
inject: true
to: source/js/models/sagas-index.js
after: "yield all\\(\\["
skip_if: "...<%= name %>Sagas,"
---
    ...<%= name %>Sagas,