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

import { selectCollection } from '../Actions/collections';

import { AssetsSelector } from 'expo-images-picker';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import SplashScreen from './SplashScreen';

const directUploadsUrl = 'https://greenlite-api.herokuapp.com/rails/active_storage/direct_uploads';


class PhotoUpload extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            splashScreen: false,
            numberofPhotosSelected: 0,
            numberofPhotosLoaded: 0
        }
    }
    
      completeSplashScreen = () => {
        this.setState({
          splashScreen: false
        })
      }

    createPhotos = (photoData) => {
        const uri = photoData.uri
        const fileName = photoData.filename.toLowerCase()
        const fileType = fileName.split('.')[1].toLowerCase()
      
        let formData = new FormData();
        formData.append('collection_id', this.props.collection.id);
        formData.append('photo', {
            uri,
            name: `${fileName}`,
            type: `image/${fileType}`,
        });
              
        fetch(`https://greenlite-api.herokuapp.com/photos`, {
            method: 'POST',
            body: formData,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
              },
        })
        .then((response) => response.json())
        .then(data => {
            this.setState({
                numberofPhotosLoaded: this.state.numberofPhotosLoaded + 1
            })
            setTimeout(this.fetchNewCollection, 2400)
        })
    }

    fetchNewCollection = () => {
        if (this.state.numberofPhotosSelected === this.state.numberofPhotosLoaded) {
            fetch(`https://greenlite-api.herokuapp.com/collections/${this.props.collection.id}`)
                .then(resp => resp.json())
                .then(data => {
                    this.props.selectCollection(data)
                    this.props.navigation.navigate('View Collection')
                    this.setState({
                        splashScreen: false
                    })
                })
            this.setState({
                numberofPhotosSelected: 0,
                numberofPhotosLoaded: 0
            })
        }
    }

    goBack = () => {
        this.props.navigation.goBack()
    }

    onDone = (data) => {
        const numberofPhotos = data.length
        this.setState({
            splashScreen: true,
            numberofPhotosSelected: data.length
        })
        data.map(photoData => {
            this.createPhotos(photoData)
        })
    } 

  render(){
    return (
        this.state.splashScreen ? <SplashScreen /> :
        <SafeAreaView style={styles.container}>
            <AssetsSelector
                options={{
                base64: true,
                assetsType: ['photo'],
                noAssetsText: 'No media found.',
                // maxSelections: 10,
                margin: 2,
                portraitCols: 3,
                landscapeCols: 5,
                widgetWidth: 100,
                widgetBgColor: 'black',
                selectedBgColor: 'black',
                videoIcon: {
                    Component: Ionicons,
                    iconName: 'ios-videocam',
                    color: 'white',
                    size: 20,
                },
                selectedIcon: {
                    Component: Ionicons,
                    iconName: 'ios-checkmark-circle-outline',
                    color: 'black',
                    // bg: styles.selectedBgColor2,
                    size: 20,
                },
                defaultTopNavigator: {
                    continueText: 'Upload',
                    goBackText: 'Back',
                    buttonBgColor: 'white',
                    buttonTextColor: 'black',
                    midTextColor: 'black',
                    backFunction: this.goBack,
                    doneFunction: data => this.onDone(data),
                },
                // noAssets:{
                //     Component:CustomNoAssetsComponent
                // },
            }}
        />
        </SafeAreaView>
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
  selectCollection
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUpload)

const greenliteColor = 'rgba(169,255,218,1)'

const styles = StyleSheet.create({
    container: {
    width: '100%',
    height: '100%',
    },
    selectedBgColor2: {
        backgroundColor: greenliteColor,
        opacity: 0.6
    }
  });



