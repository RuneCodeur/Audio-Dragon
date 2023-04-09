import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Draggable from 'react-native-draggable';
import {Dimensions} from 'react-native';
import { Audio } from 'expo-av';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.isAudioPlay = false;
		this.ismusicPlay = false;
		this.isGreuPlay = false;
		this.musicPlayer = null;
		this.audioPlayer = null;
		this.musicList = {
			blabla:[
				{
					player:require('./audio/blabla1.wav'),
					duration:2000
				},
				{
					player:require('./audio/blabla2.wav'),
					duration:1400
				},
				{
					player:require('./audio/blabla3.wav'),
					duration:1200
				},
				{
					player:require('./audio/blabla4.wav'),
					duration:1300
				},
				{
					player:require('./audio/blabla5.wav'),
					duration:1300
				},
				{
					player:require('./audio/blabla6.wav'),
					duration:3000
				},
				{
					player:require('./audio/blabla7.wav'),
					duration:2200
				},
				{
					player:require('./audio/blabla8.wav'),
					duration:2300
				}
			],
			graou:[
				{
					player:require('./audio/graou1.wav'),
					duration:1500
				},
				{
					player:require('./audio/graou2.wav'),
					duration:2000
				},
				{
					player:require('./audio/graou3.wav'),
					duration:1500
				}
			],
			greu:{
				player:require('./audio/greu.wav'),
				duration:5000
			},
			ronron:{
				player:require('./audio/ronron.wav'),
				duration:2000
			},
			bigGraou: {
				player:require('./audio/big-graou.wav'),
				duration:5000
			},
			archangel:{
				player:require('./audio/archangel.wav'),
				duration:5000
			}
		};

	}

	async activeAudio(touchX, touchY, action = 0){
		//console.log('position Y : ' + touchY);
		//console.log('position X : ' + touchX);


		//long press // ok
		if(action == 2){
			if(this.ismusicPlay == false){
				this.isAudioPlay = true;
				this.ismusicPlay = true;
				this.musicPlayer = new Audio.Sound();
				await this.musicPlayer.loadAsync(this.musicList.archangel.player);
				await this.musicPlayer.playAsync();
			}
			else{
				await this.musicPlayer.unloadAsync();
				this.ismusicPlay = false;
				this.isAudioPlay = false;
			}
		}

		//simple click // ok
		else if(action == 1 && this.isAudioPlay == false){
			console.log('simple click');
			this.isAudioPlay = true;

			let audioPlayer = new Audio.Sound();
			await audioPlayer.loadAsync(this.musicList.bigGraou.player);
			await audioPlayer.playAsync();
			setTimeout(() => {
				audioPlayer = null;
				this.isAudioPlay = false;
			}, this.musicList.bigGraou.duration);
		}

		//capteur du haut (blabla) // ok
		else if(touchY < 250 && this.isAudioPlay == false){
			console.log('blabla');
			this.isAudioPlay = true;

			let audioPlayer = new Audio.Sound();
			let audioToPlay = Math.floor(Math.random() * this.musicList.blabla.length);
			await audioPlayer.loadAsync(this.musicList.blabla[audioToPlay].player);
			await audioPlayer.playAsync();
			setTimeout(() => {
				audioPlayer = null;
				this.isAudioPlay = false;
			}, this.musicList.blabla[audioToPlay].duration);
		}
		
		//capteur du bas (greu)
		else if(touchY > 550 && this.isAudioPlay == false){
			console.log('greu');
			this.isAudioPlay = true;
			
			let audioPlayer = new Audio.Sound();
			await audioPlayer.loadAsync(this.musicList.greu.player);
			await audioPlayer.playAsync();
			setTimeout(() => {
				audioPlayer = null;
				this.isAudioPlay = false;
			}, this.musicList.greu.duration);
		}
		
		//capteur de gauche (ronron)
		else if(touchX < 50 && this.isAudioPlay == false){

			console.log('ronron');
			this.isAudioPlay = true;
			
			let audioPlayer = new Audio.Sound();
			await audioPlayer.loadAsync(this.musicList.ronron.player);
			await audioPlayer.playAsync();
			setTimeout(() => {
				audioPlayer = null;
				this.isAudioPlay = false;
			}, this.musicList.ronron.duration);
		}

		//capteur de droite (graou) // ok
		else if(touchX > 300 && this.isAudioPlay == false){
			console.log('graou');
			this.isAudioPlay = true;

			let audioPlayer = new Audio.Sound();
			let audioToPlay = Math.floor(Math.random() * this.musicList.graou.length);
			await audioPlayer.loadAsync(this.musicList.graou[audioToPlay].player);
			await audioPlayer.playAsync();
			setTimeout(() => {
				audioPlayer = null;
				this.isAudioPlay = false;
			}, this.musicList.graou[audioToPlay].duration);
		}
	}

	render() {
		const windowWidth = Dimensions.get('window').width;
		const windowHeight = Dimensions.get('window').height;
		
		return (
			<View style={styles.container}>
				<Text style={styles.text_haut}>parler</Text>
				<Text style={styles.text_bas}>grogner</Text>
				<Text style={styles.text_droite}>hurler</Text>
				<Text style={styles.text_gauche}>ronroner</Text>
				<Draggable x={(windowWidth/2)-75} y={(windowHeight/2)-40} renderSize={150} renderColor='#252525' renderText='' isCircle shouldReverse onLongPress={(evt)=>this.activeAudio(evt.nativeEvent.pageX, evt.nativeEvent.pageY, 2)} onShortPressRelease={(evt)=>this.activeAudio(evt.nativeEvent.pageX, evt.nativeEvent.pageY, 1)} onDrag={(evt)=>this.activeAudio(evt.nativeEvent.pageX, evt.nativeEvent.pageY)}/> 
    			
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		backgroundColor:'#101010',
		height:'100%',
		width:'100%',
	},
	text_haut: {
	  color: 'white',
	  fontWeight: 'bold',
	  position: 'absolute',
	  top:175,
	  left: 160,
	  fontSize: 15,
	},
	text_droite: {
	  color: 'white',
	  fontWeight: 'bold',
	  position: 'absolute',
	  top:364,
	  right: 10,
	  fontSize: 15,
	},
	text_bas: {
	  color: 'white',
	  fontWeight: 'bold',
	  position: 'absolute',
	  top:600,
	  left: 150,
	  fontSize: 15,
	},
	text_gauche: {
	  color: 'white',
	  fontWeight: 'bold',
	  position: 'absolute',
	  top:364,
	  left:10,
	  fontSize: 15,
	},
  });