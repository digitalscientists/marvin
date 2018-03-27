---
inject: true
to: source/js/models/sagas-index.js
after: import { all } from "redux-saga/effects";
skip_if: import <%= name %>Sagas from "./<%= name %>/sagas";
---
import <%= name %>Sagas from "./<%= name %>/sagas";