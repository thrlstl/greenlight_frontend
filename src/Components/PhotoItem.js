import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from "react-native";
import Swipeable from 'react-native-swipeable';
import DoubleClick from 'react-native-double-click';
import { useDispatch, useSelector } from 'react-redux';
import { updateApprovals } from '../Actions/collections';
import Disapprovals from './Disapprovals'
import Approvals from './Approvals'

import API from './API'
const apiURL = API()

const rightContent = <View 
style={{backgroundColor: '#ffa1a1', width: '100%', height: '100%'}}></View>;

function PhotoItem(props) {

    const dispatch = useDispatch()
    const responses = props.item.approvals
    const fileLocation = props.item.photo
    const source = {uri: `${apiURL}${fileLocation}`}
    const photoId = props.item.id
    const userId = useSelector(state => state.user.id)
    const [userApproved, setUserApproved] = useState(null)
    const [userResponse, setUserResponse] = useState(false)
    const [approvals, setApprovals] = useState(0)
    const [disapprovals, setDisapprovals] = useState(0)
    const [backgroundColor, setBackgroundColor] = useState('white')

    const approvalObj = {
        photo_id: photoId,
        user_id: userId,
        approval: userApproved
    }

    useEffect(() => {
      responses.map(item => {
        return item.approval
        ? setApprovals(p => p += 1)
        : setDisapprovals(p => p += 1)
      })
    }, [])

    useEffect(() => {
      responses.map(item => {
          return item.user_id === userId && item.approval
          ? setUserApproved(true) : ( item.user_id === userId && !item.approval
          ? setUserApproved(false)
          : null )
      })
    }, [])

    useEffect(() => {
      setBackgroundColor(() => {
        switch(userApproved) {
          case true:
              return '#e1fff2'
          case false:
              return '#fad1d1'
          case null:
              return 'white'
      }
      })
    }, [userApproved])

    useEffect(() => {
      if(userResponse){
        userApproval()
        setUserResponse(false)
      }
    },[userResponse])
  
  const handleResponse = (type) => {
    return type
    ? ( handleApprove(), setUserResponse(true) ) 
    : ( handleDisapprove(), setUserResponse(true) )
  }

  const handleApprove = () => {
    if (userApproved === null) {
        setApprovals(p => p += 1)
        setUserApproved(true)
    }
    else if (userApproved === false) {
        setApprovals(p => p += 1)
        setDisapprovals(p => p - 1)
        setUserApproved(true)
    }
    else if (userApproved === true) {
        null
    }
  }

  const handleDisapprove = () => {
    if (userApproved === null) {
        setDisapprovals(p => p += 1)
        setUserApproved(false)
    }
    else if (userApproved === true) {
        setDisapprovals(p => p += 1)
        setApprovals(p => p - 1)
        setUserApproved(false)
    }
    else if (userApproved === false) {
        null
    }
  }

  const userApproval = () => {
      const reqObj = {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/json'
          },
          body: JSON.stringify(approvalObj)
      }
      fetch(`${apiURL}approvals/`, reqObj)
      .then(resp => resp.json())
      .then(approval => {
        dispatch(updateApprovals(approval))
      })
  }

  const renderApprovals = () => {
      if (approvals > 0) {
          return <Approvals approvals={approvals}></Approvals>
      }
  }

  const renderDisapprovals = () => {
    if (disapprovals > 0) {
          return <Disapprovals disapprovals={disapprovals}></Disapprovals>
    }
  }

  const renderResponses = () => {
      return <View style={styles.responsesContainer}>
                <View style={styles.disapprovalsContainer}>
                  {renderDisapprovals()}
                </View>
                <View style={styles.appprovalsContainer}>
                  {renderApprovals()}
                </View>
            </View>
  }

  return (
      <Swipeable
      rightContent={rightContent}
      onRightActionComplete={() => handleResponse(false)}>
        <DoubleClick 
        onClick={() => handleResponse(true)}  
        key={props.index}>
          <Image
            key={photoId} 
            style={styles.image} 
            source={source}/>
              <View 
               style={{backgroundColor: backgroundColor,
               width: '100%',
               height: 77,}}>
                {renderResponses()}
              </View>
        </DoubleClick>
      </Swipeable>
  );
}

export default PhotoItem;

// STYLES
// Designed with BuilderX by Matthew Steele.

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 700,
      bottom: 0,
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

///////////////////////////////////////////