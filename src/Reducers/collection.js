// const uniq = (value, index, self) => {
//   return self.indexOf(value) === index
// }

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

      // case 'FILTER_BY_APPROVED_PHOTOS':
      //   let filterByApproved = {...state}
      //   const allPhotos1 = filterByApproved.photos
      //   const approvedPhotoIds = []
      //   allPhotos1.map(photo => {
      //     return photo.approvals.length
      //     ? photo.approvals.forEach(approval => {
      //       return approval.approval
      //       ? approvedPhotoIds.push(approval.photo_id)
      //       : null
      //     })
      //     : null
      //   })
      //   const uniquePhotoIds1 = approvedPhotoIds.filter(uniq)
      //   const approvedPhotos = allPhotos1.filter((photo) => uniquePhotoIds1.includes(photo.id))
      //   filterByApproved.photos = approvedPhotos
      //   return filterByApproved

      case 'FILTER_BY_APPROVED_PHOTOS':
        let filterByApproved = action.collection
        const allPhotos1 = filterByApproved.photos
        const approvedPhotos = []
        allPhotos1.map(photo => {
          if (photo.approvalsCount > 0) {
            return photo.disapprovalsCount <= photo.approvalsCount
            ? approvedPhotos.push(photo)
            : null
          }
        })
        approvedPhotos.sort((a, b) => (a.approvalsCount > b.approvalsCount ? -1 : 1))
        filterByApproved.photos = approvedPhotos
        return filterByApproved

      case 'FILTER_BY_DISAPPROVED_PHOTOS':
        let filterByDisapproved = action.collection
        const allPhotos2 = filterByDisapproved.photos
        const disapprovedPhotos = []
        allPhotos2.map(photo => {
          if (photo.disapprovalsCount > 0) {
            return photo.disapprovalsCount >= photo.approvalsCount
            ? disapprovedPhotos.push(photo)
            : null
          }
        })
        disapprovedPhotos.sort((a, b) => (a.disapprovalsCount > b.disapprovalsCount ? -1 : 1))
        filterByDisapproved.photos = disapprovedPhotos
        return filterByDisapproved

      case 'CLEAR_COLLECTION':
        return action.collection

      default:
        return state
    }
  }
  
  
  export default collectionReducer