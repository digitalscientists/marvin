---
inject: true
to: source/js/views/App.jsx
after: '<Route exact path={routeCodes.DASHBOARD} component={Dashboard} />'
skip_if: '<Route exact path={routeCodes.<%= h.inflection.underscore(name).toUpperCase() %>} component={<%= h.capitalize(name) %>} />'
---
            <Route exact path={routeCodes.<%= h.inflection.underscore(name).toUpperCase() %>} component={<%= h.capitalize(name) %>} />