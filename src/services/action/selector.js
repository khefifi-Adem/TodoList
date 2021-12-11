import { VISIBILITY_FILTER } from "../Filters";

export const getTodosByVisibilityFilter = (store, visibilityFiler) => {
  switch(visibilityFiler) {
    case VISIBILITY_FILTER.ISDONE:
      return store.todos.filter(todo => todo.isDone);
    case VISIBILITY_FILTER.NOTDONE:
      return store.todos.filter(todo => !todo.isDone);
    default:
      return store.todos;
  }
}