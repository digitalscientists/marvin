---
to: source/js/models/<%= name %>/actions.js
---

export const GET_<%= name.toUpperCase() %>_START = "GET_<%= name.toUpperCase() %>_START";
export const GET_<%= name.toUpperCase() %>_ERROR = "GET_<%= name.toUpperCase() %>_ERROR";
export const GET_<%= name.toUpperCase() %>_SUCCESS = "GET_<%= name.toUpperCase() %>_SUCCESS";


export const get<%= h.capitalize(name) %> = () => ({
  type: GET_<%= name.toUpperCase() %>_START,
})
