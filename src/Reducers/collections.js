const collectionsReducer = (state={}, action) => {
    switch(action.type) {
      case 'LOAD_COLLECTIONS':
        const collections = [...action.collections]
        collections.sort(function(a,b){
            if (a.created_at < b.created_at) {
              return 1
            }
            if (a.created_at > b.created_at) {
              return -1
            }
            return 0
          })
        return collections
      default:
        return state
    }
  }

  export default collectionsReducer