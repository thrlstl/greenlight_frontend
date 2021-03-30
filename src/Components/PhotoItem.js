import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Button,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Svg,
  Ellipse
} from "react-native";

import Swipeable from 'react-native-swipeable';
import GridList from 'react-native-grid-list';
import DoubleClick from 'react-native-double-click';

import TopNavigation from './TopNavigation'
import BottomNavigation from './Navigation';
import { connect } from 'react-redux';
import { updateApprovals } from '../Actions/collections';
import Disapprovals from './Disapprovals'
import Approvals from './Approvals'
import App from '../../App';

const rightContent = <View 
style={{backgroundColor: '#ffa1a1', width: '100%', height: '100%'}}></View>;

class PhotoItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            approvals: 0,
            disapprovals: 0,
            photo_id: null,
            user_id: null,
            approval: null
        }
    }

    componentDidMount() {
        this.props.item.approvals.map(approvalItem => {
                if (approvalItem.approval === true) {
                  this.setState({
                     approvals: this.state.approvals += 1 
                  })
                }
                else {
                    this.setState({
                        disapprovals: this.state.disapprovals += 1
                    })
                }
              })
        this.setState({
            photo_id: this.props.item.id,
            user_id: this.props.user.id
        })
        this.props.item.approvals.map(approvalItem => {
            if (approvalItem.user_id === this.props.user.id && approvalItem.approval) {
                this.setState({
                    approval: true
                })
            }
            else if (approvalItem.user_id === this.props.user.id && !approvalItem.approval) {
                this.setState({
                    approval: false
                })
            }
        })
    }
    // this.setState({ approval: true, approvals: this.state.approvals =+ 1, disapprovals: this.state.disapprovals - 1 }, this.userApproval)

    handleApprove = () => {
        if (this.state.approval === null) {
            this.setState({ approval: true, approvals: this.state.approvals += 1 }, this.userApproval)
        }
        else if (this.state.approval === false) {
            this.setState({ approval: true, approvals: this.state.approvals += 1, disapprovals: this.state.disapprovals - 1 }, this.userApproval)
        }
        else if (this.state.approval) {
            null
        }    
    }

    handleDisapprove = () => {
        if (this.state.approval === null) {
            this.setState({ approval: false, disapprovals: this.state.disapprovals += 1 }, this.userApproval)
        }
        else if (this.state.approval === true) {
            this.setState({ approval: false, disapprovals: this.state.disapprovals += 1, approvals: this.state.approvals -1 }, this.userApproval)
        }
        else if (this.state.approval === false) {
            null
        }
    }

    userApproval = () => {
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        fetch('http://localhost:3001/approvals/', reqObj)
        .then(resp => resp.json())
        .then(approval => {
            console.log(approval)
            this.props.updateApprovals(approval)
        })
    }

    renderUserApprovals = (item) => {
        if (this.state.approval === null) {
            null
        }
        else if (this.state.approval) {
            return <Text>Approved by Logged In User</Text>
        }
        else if (!this.state.approval) {
            return <Text>Not Approved by Logged In User</Text>
        }
    }

    renderApprovals = () => {
        if (this.state.approvals > 0) {
            return <Approvals approvals={this.state.approvals}></Approvals>
        }
    }

    renderDisapprovals = () => {
      if (this.state.disapprovals > 0) {
            return <Disapprovals disapprovals={this.state.disapprovals}></Disapprovals>
      }
    }

    renderResponses = () => {
        return <View style={styles.responsesContainer}>
                <View style={styles.disapprovalsContainer}>
                {this.renderDisapprovals()}
                </View>
                <View style={styles.appprovalsContainer}>
                {this.renderApprovals()}
                </View>
      {/* <View><Text>{item.id}</Text></View> */}
              </View>
    }

    responsesBackground = function(options) {
        if (this.state.approval === true) {
            return {
                backgroundColor: '#e1fff2',
                width: '100%',
                height: 77,
            }
        }
        else if (this.state.approval === false) {
            return {
                backgroundColor: '#fad1d1',
                width: '100%',
                height: 77,
            }
        }
        else if (this.state.approval === null) {
            return {
                backgroundColor: 'white',
                width: '100%',
                height: 77,
            }
        }
      }

  render(){
    return (
        <Swipeable 
        // leftContent={leftContent}
        // onLeftActionRelease={this.handleApprove}
        rightContent={rightContent}
        onRightActionComplete={() => this.handleDisapprove()}
        >
              <DoubleClick onClick={() => this.handleApprove()}  key={this.props.index}>
                <Image key={this.props.item.id} style={styles.image} source={{uri: `http://localhost:3001${this.props.item.photo}`}} />
                  <View style={this.responsesBackground()}>
                    {/* <Text>{this.props.item.caption}</Text> */}
                    <>{this.renderResponses()}</>
                  </View>
              </DoubleClick>
        </Swipeable>
        
    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        collection: state.collection
    }
}

const mapDispatchToProps = {
  updateApprovals
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoItem)

const styles = StyleSheet.create({
    container: {
    width: '100%',
    height: 700,
   bottom: 0,
    //   flex: 1,
      backgroundColor: 'black'
    },
    disapprovalsContainer: {
        width: 150,
        height: 62
      },
    appprovalsContainer: {
        width: 150,
        height: 62
    },
    photoContainer: {
      marginRight: 0,
      marginLeft: 0,
      marginBottom: 55,
      marginTop: 0
    },
    image: {
      borderRightWidth: 2,
      height: 350,
      borderRadius: 0,

    },
    rect: {
        backgroundColor: 'white',
        width: '100%',
        height: 77,
        // flexDirection: "row"
      },
      responsesContainer: {
        width: '100%',
        height: 62,
        flexDirection: "row"
      },
      button: {
        borderTopColor: 'white',
        width: '50%',
        height: '100%',
        backgroundColor: "rgba(255,225,225,1)"
      },
      button1: {
        width: '50%',
        height: '100%',
        backgroundColor: "rgba(225,255,230,1)"
      },
      caption: {
        justifyContent: 'center',
        width: '100%'
      },
      buttonRow: {
        height: 62,
        width: '100%',
        flexDirection: "row",
        flex: 1
      },
      approval: {
        backgroundColor: 'white'
      },
      disapprovalsContainer: {
        width: 12,
        height: 12
      },
      disapprovalButtonImage: {
        top: 0,
        left: 0,
        width: 46,
        height: 45,
        position: "absolute"
      },
      disapprovalCountContainer: {
        top: 16,
        left: 38,
        width: 12,
        height: 12,
        position: "absolute"
      },
      disapprovalCount: {
        top: 19,
        left: 38,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 6,
        right: 0,
        textAlign: "center"
      },
      disapprovalButtonImageStack: {
        height: 45,
        marginTop: -16,
        marginLeft: -38
      }
  });


///////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Image
// } from "react-native";
// import Swipeable from 'react-native-swipeable';
// import DoubleClick from 'react-native-double-click';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateApprovals } from '../Actions/collections';
// import Disapprovals from './Disapprovals'
// import Approvals from './Approvals'

// import API from './API'
// const apiURL = API()

// const rightContent = <View 
// style={{backgroundColor: '#ffa1a1', width: '100%', height: '100%'}}></View>;

// function PhotoItem(props) {

//     const dispatch = useDispatch()
//     const approvalsData = props.approvals
//     const fileLocation = props.photo
//     const photoId = props.id
//     const userId = useSelector(state => state.user.id)
//     const collection = useSelector(state => state.collection)
//     const [approvals, setApprovals] = useState(0)
//     const [disapprovals, setDisapprovals] = useState(0)
//     const [userApproved, setUserApproved] = useState(null)
//     const [backgroundColor, setBackgroundColor] = useState('white')

//     useEffect(() => {
//       setResponses()
//     }, [collection])

//     useEffect(() => {
//       setBackgroundColor(() => {
//         switch(userApproved) {
//           case true:
//               return '#e1fff2'
//           case false:
//               return '#fad1d1'
//           case null:
//               return 'white'
//       }
//       })
//     }, [userApproved])

//     const setResponses = () => {
//       approvalsData.map(item => {
//         return item.approval
//         ? setApprovals(p => p += 1)
//         : setDisapprovals(p => p += 1),
//           setUserApproved(() => {
//             return item.user_id === userId && item.approval
//             ? true : ( item.user_id === userId && !item.approval
//             ? false
//             : null )
//           })
//       })
//     }

//   const handleGesture = (response) => {
//     return response
//     ? handleApprove()
//     : handleDisapprove()
//   }

//   const handleApprove = () => {
//       if (userApproved === null) {
//           setUserApproved(true),
//           setApprovals(p => p += 1)
//           userApproval()
//       }
//       else if (userApproved === false) {
//           setUserApproved(!userApproved)
//           setApprovals(p => p += 1)
//           setDisapprovals(p => p - 1)
//           userApproval()
//       }
//       else if (userApproved === true) {
//           null
//       }    
//   }

//   const handleDisapprove = () => {
//     if (userApproved === null) {
//         setUserApproved(false),
//         setDisapprovals(p => p += 1)
//         userApproval()
//     }
//     else if (userApproved === true) {
//         setUserApproved(!userApproved)
//         setDisapprovals(p => p += 1)
//         setApprovals(p => p - 1)
//         userApproval()
//     }
//     else if (userApproved === false) {
//         null
//     }    
// }

//   const userApproval = () => {

//       const approvalData = {
//         approvals: approvals, // TOTAL APPROVALS
//         disapprovals: disapprovals, // TOTAL DISAPPROVALS
//         photo_id: photoId,
//         user_id: userId,
//         approval: userApproved // USER RESPONSE
//       }

//       const reqObj = {
//           method: 'POST',
//           headers: {
//               'Content-Type' : 'application/json'
//           },
//           body: JSON.stringify(approvalData)
//       }
//       fetch(`${apiURL}approvals/`, reqObj)
//       .then(resp => resp.json())
//       .then(approval => {
//         // console.log(approval)
//         dispatch(updateApprovals(approval))
//       })
//   }

//   const renderApprovals = () => {
//       if (approvals > 0) {
//           return <Approvals approvals={approvals}></Approvals>
//       }
//   }

//   const renderDisapprovals = () => {
//     if (disapprovals > 0) {
//           return <Disapprovals disapprovals={disapprovals}></Disapprovals>
//     }
//   }

//   const renderResponses = () => {
//       return <View style={styles.responsesContainer}>
//               <View style={styles.disapprovalsContainer}>
//               {renderDisapprovals()}
//               </View>
//               <View style={styles.appprovalsContainer}>
//               {renderApprovals()}
//               </View>
//             </View>
//   }

//   const source = {uri: `${apiURL}${fileLocation}`}

//   return (
//       <Swipeable
//       rightContent={rightContent}
//       onRightActionComplete={() => handleGesture(false)}>
//         <DoubleClick 
//         onClick={() => handleGesture(true)}  
//         key={props.index}>
//           <Image
//             key={photoId} 
//             style={styles.image} 
//             source={source}/>
//               <View 
//                style={{backgroundColor: backgroundColor,
//                width: '100%',
//                height: 77,}}>
//                 {renderResponses()}
//               </View>
//         </DoubleClick>
//       </Swipeable>
//   );
// }

// // export default connect(mapStateToProps, mapDispatchToProps)(PhotoItem)
// export default PhotoItem;


// const styles = StyleSheet.create({
//     container: {
//     width: '100%',
//     height: 700,
//     bottom: 0,
//     backgroundColor: 'black'
//     },
//     disapprovalsContainer: {
//         width: 150,
//         height: 62
//       },
//     appprovalsContainer: {
//         width: 150,
//         height: 62
//     },
//     photoContainer: {
//       marginRight: 0,
//       marginLeft: 0,
//       marginBottom: 55,
//       marginTop: 0
//     },
//     image: {
//       borderRightWidth: 2,
//       height: 350,
//       borderRadius: 0,

//     },
//     rect: {
//         backgroundColor: 'white',
//         width: '100%',
//         height: 77,
//       },
//       responsesContainer: {
//         width: '100%',
//         height: 62,
//         flexDirection: "row"
//       },
//       button: {
//         borderTopColor: 'white',
//         width: '50%',
//         height: '100%',
//         backgroundColor: "rgba(255,225,225,1)"
//       },
//       button1: {
//         width: '50%',
//         height: '100%',
//         backgroundColor: "rgba(225,255,230,1)"
//       },
//       caption: {
//         justifyContent: 'center',
//         width: '100%'
//       },
//       buttonRow: {
//         height: 62,
//         width: '100%',
//         flexDirection: "row",
//         flex: 1
//       },
//       approval: {
//         backgroundColor: 'white'
//       },
//       disapprovalsContainer: {
//         width: 12,
//         height: 12
//       },
//       disapprovalButtonImage: {
//         top: 0,
//         left: 0,
//         width: 46,
//         height: 45,
//         position: "absolute"
//       },
//       disapprovalCountContainer: {
//         top: 16,
//         left: 38,
//         width: 12,
//         height: 12,
//         position: "absolute"
//       },
//       disapprovalCount: {
//         top: 19,
//         left: 38,
//         position: "absolute",
//         fontFamily: "roboto-regular",
//         color: "#121212",
//         fontSize: 6,
//         right: 0,
//         textAlign: "center"
//       },
//       disapprovalButtonImageStack: {
//         height: 45,
//         marginTop: -16,
//         marginLeft: -38
//       }
//   });

/////////////////////////////////////////////