import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Draggable from 'react-native-draggable';
import {Dimensions} from 'react-native';
import {GestionAudio} from './function/GestionAudio';

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state={
			numberAutoVoice:0, 
			randomAutoVoice:0
		}
		this.init = false;
		this.GestionAudio = null;
	}

	componentDidMount(){
		this.setState({ numberAutoVoice: this.GestionAudio.GETnumberAutoVoice() });
		this.setState({ randomAutoVoice: this.GestionAudio.GETrandomAutoVoice() });
	}

	SETnumberAutoVoice(type){
		if(type == '+'){
			this.GestionAudio.SETnumberAutoVoice(this.GestionAudio.GETnumberAutoVoice()+1);
		}else{
			this.GestionAudio.SETnumberAutoVoice(this.GestionAudio.GETnumberAutoVoice()-1);
		}
		this.setState({ numberAutoVoice: this.GestionAudio.GETnumberAutoVoice() });
	}

	SETrandomAutoVoice(type){
		if(type == '+'){
			this.GestionAudio.SETrandomAutoVoice(this.GestionAudio.GETrandomAutoVoice()+1);
		}else{
			this.GestionAudio.SETrandomAutoVoice(this.GestionAudio.GETrandomAutoVoice()-1);
		}
		this.setState({ randomAutoVoice: this.GestionAudio.GETrandomAutoVoice() });
	}

	async activeAudio(touchX, touchY, action = 0){
		this.GestionAudio.lanceAudio(touchX, touchY, action);
	}

	render() {
		const windowWidth = Dimensions.get('window').width;
		const windowHeight = Dimensions.get('window').height;
		
		if(this.init == false){
			this.GestionAudio = new GestionAudio();
			this.init = true;
		}

		return (
			<View style={styles.container}>

				{/* bouton de gestion de l'audio automatique  */}
				{this.GestionAudio.GETisAutoVoice() ? (
					<View>
						<Text style={styles.text_inputbase}>random de base</Text>
						<TouchableOpacity style={styles.inputbasemoins} onPress={() =>this.SETnumberAutoVoice('-')}><Text style={styles.inputtext}>-   </Text></TouchableOpacity>
						<Text style={styles.inputbase}>{this.state.numberAutoVoice}</Text>
						<TouchableOpacity style={styles.inputbaseplus} onPress={() =>this.SETnumberAutoVoice('+')}><Text style={styles.inputtext}>+  </Text></TouchableOpacity>
						
						<Text style={styles.text_inputrandom}>aléatoire</Text>
						<TouchableOpacity style={styles.inputrandommoins} onPress={() =>this.SETrandomAutoVoice('-')}><Text style={styles.inputtext}>-   </Text></TouchableOpacity>
						<Text style={styles.inputrandom}>{this.state.randomAutoVoice}</Text>
						<TouchableOpacity style={styles.inputrandomplus} onPress={() =>this.SETrandomAutoVoice('+')}><Text style={styles.inputtext}>+  </Text></TouchableOpacity>
					</View>
				): null}

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
	inputbase: {
	  fontWeight: 'bold',
	  color: 'white',
	  position: 'absolute',
	  borderWidth: 1,
	  top:75,
	  left: 50,
	  width: 50,
	  paddingLeft:10,
	  fontSize: 15,
	},
	inputtext:{
		color: 'white',
		textAlign: 'center',
		textAlignVertical:'center',
		width:'100%',
		height:'100%',
	},
	inputbaseplus:{
		backgroundColor:'#252525',
		color: 'white',
		fontWeight: 'bold',
		position: 'absolute',
		borderRadius:50,
		top:70,
		left: 100,
		height:35,
		width:35,
		paddingLeft:10,
		fontSize: 15,
	},
	inputbasemoins:{
		backgroundColor:'#252525',
		color: 'white',
		fontWeight: 'bold',
		position: 'absolute',
		borderRadius: 50,
		top: 70,
		left: 10,
		height: 35,
		width: 35,
		paddingLeft: 10,
		fontSize: 15,
	},
	text_inputbase: {
		color: 'white',
		fontWeight: 'bold',
		position: 'absolute',
		top:50,
		left: 20,
		fontSize: 15,
	},
	inputrandom: {
		fontWeight: 'bold',
		color: 'white',
		position: 'absolute',
		borderWidth: 1,
		top:75,
		left: 215,
		width: 50,
		paddingLeft:10,
		fontSize: 15,
	},
	text_inputrandom: {
		color: 'white',
		fontWeight: 'bold',
		position: 'absolute',
		top:50,
		left: 210,
		fontSize: 15,
	},
	inputrandomplus:{
		backgroundColor:'#252525',
		color: 'white',
		fontWeight: 'bold',
		position: 'absolute',
		borderRadius: 50,
		top: 70,
		left: 270,
		height: 35,
		width: 35,
		paddingLeft: 10,
		fontSize: 15,

	},
	inputrandommoins:{
		backgroundColor:'#252525',
		color: 'white',
		fontWeight: 'bold',
		position: 'absolute',
		borderRadius: 50,
		top: 70,
		left: 170,
		height: 35,
		width: 35,
		paddingLeft: 10,
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