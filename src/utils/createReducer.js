export default (defaultState, handlers) =>
    (state = defaultState, action) => {
      if(handlers[action.type]){
        return handlers[action.type](state,action);
      }
      return state;
    }
