import { updateApprovals } from "../Actions/collections"

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
      default:
        return state
    }
  }
  
  
  export default collectionReducer