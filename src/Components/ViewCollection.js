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
  TouchableHighlight
} from "react-native";

import Swipeable from 'react-native-swipeable';
import GridList from 'react-native-grid-list';
import DoubleClick from 'react-native-double-click';

import TopNavigation from './TopNavigation'
import BottomNavigation from './Navigation';
import { connect } from 'react-redux';
import PhotoItem from './PhotoItem'

const rightContent = <View 
style={{backgroundColor: '#ff7c7c', width: '100%', height: '100%'}}></View>;

class ViewCollection extends React.Component {
    constructor(props){
        super(props)
    }

    // handleApprove = () => {
    //   console.log('approved')
    // }

    // handleDisapprove = () => {
    //   console.log('disapproved')
    // }

    // renderUserApprovals = (item) => {
    //   const loggedInUserId = this.props.user.id
    //   return item.approvals.map(approvalItem => {
    //       if (approvalItem.user_id === loggedInUserId && approvalItem.approval) {
    //         return <Text>Approved by Logged In User</Text>
    //       }
    //       else if (approvalItem.user_id === loggedInUserId && !approvalItem.approval) {
    //         return <Text>Not Approved by Logged In User</Text>
    //       }
    //     })
    // }
    
    // renderUserDisapprovals = (item) => {
    //   console.log('disapprovals')
    // }

    // // REFACTORING IN PROGRESS
    // // renderApproveOrDisapprove = (item) => {
    // //   const approvals = []
    // //   const disapprovals = []
    // //   item.approvals.map(approvalItem => {
    // //     approvalItem.approval ? 
    // //     approvals.push(approvalItem) :
    // //     disapprovals.push(approvalItem)
    // //   })
    // //   approvals.length ? <Text>{approvals.length} Approve</Text> : null
    // //   disapprovals.length ? <Text>{disapprovals.length} Disapprove</Text> : null
    // // }

    // renderApprovals = (item) => {
    //   const approvals = []
    //   item.approvals.map(approvalItem => {
    //     if (approvalItem.approval === true) {
    //       approvals.push(approvalItem)
    //     }
    //   })
    //     if (approvals.length) {
    //       return <Text>{approvals.length} Approve</Text>
    //     }
    // }

    // renderDisapprovals = (item) => {
    //   const disapprovals = []
    //   item.approvals.map(approvalItem => {
    //     if (approvalItem.approval === false) {
    //       disapprovals.push(approvalItem)
    //     }
    //   })
    //   if (disapprovals.length) {
    //     return <Text>{disapprovals.length} Disapprove</Text>
    //   }
    // }

    // renderResponses = (item) => {
    //   if (item.approvals.length) {
    //     return <View>
    //           {this.renderApprovals(item)}
    //           {this.renderDisapprovals(item)}
    //           {this.renderUserApprovals(item)}
    //           {/* {this.renderApproveOrDisapprove(item) */}
    //           </View>
    //   }
    // }

    renderItem = ({ item, index }) => (
      <PhotoItem item={item} index={index} />
      // <Swipeable 
      // // leftContent={leftContent}
      // // onLeftActionRelease={this.handleApprove}
      // rightContent={rightContent}
      // onRightActionComplete={this.handleDisapprove}
      // >
      //       <DoubleClick  key={index}>
      //         <Image key={item.id} style={styles.image} source={{uri: `http://localhost:3001${item.photo}`}} />
      //           <View style={styles.rect}>
      //             <Text>{item.caption}</Text>
      //             <View>{this.renderResponses(item)}</View>
      //           </View>
      //       </DoubleClick>
      // </Swipeable>
      );

  render(){
    return (
            <View style={styles.container}>
                    <TopNavigation />
                    <GridList
                    showSeparator
                    data={this.props.collection.photos}
                    numColumns={1}
                    renderItem={this.renderItem}
                    itemStyle={styles.photoContainer}
                    />
                <BottomNavigation {...this.props} />
            </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        collection: state.collection
    }
}

// const mapDispatchToProps = {
//   loginSuccess
// }

export default connect(mapStateToProps, null)(ViewCollection)

const styles = StyleSheet.create({
    container: {
    width: '100%',
    height: 700,
   bottom: 0,
    //   flex: 1,
      backgroundColor: 'black'
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
      }
  });
