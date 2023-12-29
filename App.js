import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Draggable from 'react-native-draggable';
import {Dimensions} from 'react-native';
import {GestionAudio} from './parameters';
import { Picker } from '@react-native-picker/picker';

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state={
			IsAutoVoice:false,
			IsMultiTheme:false,
			NumberAutoVoice:0, 
			RandomAutoVoice:0,
			Name_Top: '-',
			Name_Right: '-',
			Name_Bottom: '-',
			Name_Left: '-',
			Name_Tap: '-',
			Name_Press: '-',
			Theme_List: [],
			Theme_Active : null,
		};
		this.Init = false;
		this.GestionAudio = null;
	}

	componentDidMount(){
		this.SETtheme();
		this.setState({ NumberAutoVoice: this.GestionAudio.GETnumberAutoVoice() });
		this.setState({ RandomAutoVoice: this.GestionAudio.GETrandomAutoVoice() });
	}

	SETnumberAutoVoice(type){
		if(type == '+'){
			this.GestionAudio.SETnumberAutoVoice(this.GestionAudio.GETnumberAutoVoice()+1);
		}
		else if(this.GestionAudio.GETnumberAutoVoice() > 0){
			this.GestionAudio.SETnumberAutoVoice(this.GestionAudio.GETnumberAutoVoice()-1);
		}

		this.setState({ NumberAutoVoice: this.GestionAudio.GETnumberAutoVoice() });
	}

	SETrandomAutoVoice(type){
		if(type == '+'){
			this.GestionAudio.SETrandomAutoVoice(this.GestionAudio.GETrandomAutoVoice()+1);
		}
		else if(this.GestionAudio.GETrandomAutoVoice() > 0){
			this.GestionAudio.SETrandomAutoVoice(this.GestionAudio.GETrandomAutoVoice()-1);
		}

		this.setState({ RandomAutoVoice: this.GestionAudio.GETrandomAutoVoice() });
	}

	SETthemeActive(theme) {
		this.setState({ Theme_Active: theme });
		this.GestionAudio.SETthemeActive(theme);
		this.SETtheme();
	}
	  
	async SETtheme(){
		this.setState({ NumberAutoVoice: this.GestionAudio.GETnumberAutoVoice() });
		this.setState({ RandomAutoVoice: this.GestionAudio.GETrandomAutoVoice() });
		this.setState({ IsAutoVoice: this.GestionAudio.GETisAutoVoice() });
		this.setState({ IsMultiTheme: this.GestionAudio.GETisMultiTheme() });
		this.setState({ Theme_List: this.GestionAudio.GETthemes() });
		this.setState({ Name_Top: this.GestionAudio.GETnameButton('Top') });
		this.setState({ Name_Right: this.GestionAudio.GETnameButton('Right') });
		this.setState({ Name_Bottom: this.GestionAudio.GETnameButton('Bottom') });
		this.setState({ Name_Left: this.GestionAudio.GETnameButton('Left') });
		this.setState({ Name_Tap: this.GestionAudio.GETnameButton('Tap') });
		this.setState({ Name_Press: this.GestionAudio.GETnameButton('Press') });
	}

	async activeAudio(touchX, touchY, action = 0){
		this.GestionAudio.lanceAudio(touchX, touchY, action);
	}

	render() {
		const windowWidth = Dimensions.get('window').width;
		const windowHeight = Dimensions.get('window').height;

		if(this.Init == false){
			this.GestionAudio = new GestionAudio();
			this.Init = true;
		}

		return (
			<View style={styles.container}>

				{/* infos supérieur */}
				<View style={styles.bloc_info_top}>
						
					{/* bouton de gestion de l'audio automatique */}
					{this.state.IsAutoVoice ? (
						<View style={styles.bloc_random}>
							<Text style={styles.text}>random de base</Text>
							<View style={styles.bloc_random_button}>
								<TouchableOpacity style={styles.input_round} onPress={() =>this.SETnumberAutoVoice('-')}><Text style={styles.Text_input}>-</Text></TouchableOpacity>
								<Text style={styles.input_number}>{this.state.NumberAutoVoice}</Text>
								<TouchableOpacity style={styles.input_round} onPress={() =>this.SETnumberAutoVoice('+')}><Text style={styles.Text_input}>+</Text></TouchableOpacity>
							</View>
						</View>
					): null}

					{this.state.IsAutoVoice ? (
						<View style={styles.bloc_random}>
							<Text style={styles.text}>aléatoire</Text>
							<View style={styles.bloc_random_button}>
								<TouchableOpacity style={styles.input_round} onPress={() =>this.SETrandomAutoVoice('-')}><Text style={styles.Text_input}>-</Text></TouchableOpacity>
								<Text style={styles.input_number}>{this.state.RandomAutoVoice}</Text>
								<TouchableOpacity style={styles.input_round} onPress={() =>this.SETrandomAutoVoice('+')}><Text style={styles.Text_input}>+</Text></TouchableOpacity>
							</View>
						</View>
					): null}
					
					{/* bouton de gestion des themes */}
					{this.state.IsMultiTheme ? (
						<Picker style={styles.bloc_theme} onValueChange={(theme) => this.SETthemeActive(theme)} selectedValue={this.state.Theme_Active}>
						
							{this.state.Theme_List.map((theme, index) => (
								<Picker.Item key={index} label={theme} value={index} />
							))}

						</Picker>
					): null}
				</View>

				<Text style={styles.text_top}>{this.state.Name_Top}</Text>
				<Text style={styles.text_right}>{this.state.Name_Right}</Text>
				<Text style={styles.text_bottom}>{this.state.Name_Bottom}</Text>
				<Text style={styles.text_left}>{this.state.Name_Left}</Text>

				{/* infos inferieur */}
				<View style={styles.bloc_info_down}>
					<Text style={styles.text_supp}>tap : {this.state.Name_Tap}</Text>
					<Text style={styles.text_supp}>pression : {this.state.Name_Press}</Text>
				</View>
				
				{/* rond manipulable */}
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

	bloc_info_top:{
		position: 'absolute',
		flex:1,
		backgroundColor:'#252525',
		top:0,
		paddingTop:25,
		flexDirection: 'row',
		flexWrap:'wrap',
    	justifyContent: 'space-around',
		width:'100%',
	},

	bloc_random:{
		width : '45%',
		maxWidth:'45%',
		height: 'auto',
		marginBottom: 5,
	},

	text:{
		color: 'white',
		textAlign: 'center',
		textAlignVertical:'center',
		width:'100%',
	},

	bloc_random_button:{
		flex:1,
		flexDirection:'row',
		alignItems:'center',
    	justifyContent: 'space-around',
	},
	input_round:{
		borderColor:'#101010',
		borderStyle : 'solid',
		borderWidth:3, 
		backgroundColor:'#252525',
		color: 'white',
		fontWeight: 'bold',
		borderRadius: 50,
		height: 35,
		width: 35,
	},
	Text_input:{
		color: 'white',
		textAlign: 'center',
		textAlignVertical:'center',
		width:'100%',
		height:'100%',
		fontWeight: 'bold',
	},
	input_number: {
		fontWeight: 'bold',
		borderWidth: 1,
		width: 50,
		fontSize: 15,
		textAlign:'center',
		backgroundColor:'white',
		padding:2,
	},

	bloc_theme:{
		width : '90%',
		marginBottom: 5,
		backgroundColor:'white',
	},

	text_top: {
		color: 'white',
		fontWeight: 'bold',
		position: 'absolute',
		textAlign:'center',
		top:175,
		width:'100%',
		fontSize: 15,
	},
	text_right: {
		color: 'white',
		fontWeight: 'bold',
		position: 'absolute',
		top:364,
		right: 10,
		fontSize: 15,
	},
	text_bottom: {
		color: 'white',
		fontWeight: 'bold',
		position: 'absolute',
		textAlign:'center',
		top:600,
		width:'100%',
		fontSize: 15,
	},
	text_left: {
		color: 'white',
		fontWeight: 'bold',
		position: 'absolute',
		top:364,
		left:10,
		fontSize: 15,
	},

	bloc_info_down:{
		position: 'absolute',
		flex:1,
		backgroundColor:'#252525',
		bottom:0,
		paddingBottom:15,
		flexDirection: 'row',
    	justifyContent: 'space-around',
		width:'100%',
		minHeight:50,
	},
	text_supp : {
		color: 'white',
		marginTop:5,
		fontWeight: 'bold',
		textAlign: 'center',
		maxWidth:'45%'
	},

  });