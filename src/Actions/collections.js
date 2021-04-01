export const loadCollections = (collections) => {
  return {
    type: 'LOAD_COLLECTIONS',
    collections: collections
  }
}

export const selectCollection = (collection) => {
    return {
      type: 'SELECT_COLLECTION',
      collection: collection
    }
  }

  export const updateApprovals = (approval) => {
    return {
      type: 'UPDATE_APPROVALS',
      approval: approval
    }
  }

  export const clearCollections = () => {
    return {
      type: 'CLEAR_COLLECTIONS',
      collections: {}
    }
  }

  export const clearCollection = () => {
    return {
      type: 'CLEAR_COLLECTION',
      collection: {}
    }
  }

