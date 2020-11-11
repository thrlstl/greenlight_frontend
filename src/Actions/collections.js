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