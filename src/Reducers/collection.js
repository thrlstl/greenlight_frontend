const uniq = (value, index, self) => {
  return self.indexOf(value) === index
}

const collectionReducer = (state={}, action) => {
    switch(action.type) {
      case 'SELECT_COLLECTION':
        return action.collection
      case 'UPDATE_APPROVALS':
        let updatedApprovals = {...state}
        const approvedPhoto = updatedApprovals.photos.find(photo => photo.id === action.approval.photo_id)
        const newApproval = approvedPhoto.approvals.find(approval => approval.id === action.approval.id)
        if (!newApproval) {
          approvedPhoto.approvals.push(action.approval)
        }
        else {
          newApproval.approval = action.approval.approval
        }
        return updatedApprovals
      case 'FILTER_BY_APPROVED_PHOTOS':
        let updatedCollection = {...state}
        const allPhotos = updatedCollection.photos
        const approvedPhotoIds = []
        allPhotos.map(photo => {
          return photo.approvals.length
          ? photo.approvals.forEach(approval => {
            return approval.approval
            ? approvedPhotoIds.push(approval.photo_id)
            : null
          })
          : null
        })
        const uniquePhotoIds = approvedPhotoIds.filter(uniq)
        const approvedPhotos = allPhotos.filter((photo) => uniquePhotoIds.includes(photo.id))
        updatedCollection.photos = approvedPhotos
        return updatedCollection
      case 'CLEAR_COLLECTION':
        return action.collection
      default:
        return state
    }
  }
  
  
  export default collectionReducer