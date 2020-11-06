const collectionsReducer = (state={}, action) => {
    switch(action.type) {
      case 'SELECT_COLLECTION':
        return action.collection
      default:
        return state
    }
  }
  
  
  export default collectionsReducer