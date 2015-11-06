export const ADD_<%= capsName %> = 'ADD_<%= capsName %>';
export const REMOVE_<%= capsName %> = 'REMOVE_<%= capsName %>';
export const UPDATE_<%= capsName %> = 'UPDATE_<%= capsName %>';

export function add<%= camelName %>(<%= name.toLowerCase() %>) {
  return {
    type: 'ADD_<%= capsName %>',
    payload: '<%= name.toLowerCase() %>'
  };
}
export function remove<%= camelName %>(<%= name.toLowerCase() %>) {
  return {
    type: 'REMOVE_<%= capsName %>',
    payload: '<%= name.toLowerCase() %>'
  };
}
export function update<%= camelName %>(<%= name.toLowerCase() %>) {
  return {
    type: 'UPDATE_<%= capsName %>',
    payload: '<%= name.toLowerCase() %>'
  };
}
