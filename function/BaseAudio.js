import { Audio } from 'expo-av';
import { Text, View, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import Draggable from 'react-native-draggable';

export class BaseAudio{

    static NumberAutoVoice = 3;
    static RandomAutoVoice = 2;
    static CountAutoVoice = 0;
    static IsAutoVoice = false;
    static ThemeActive = 0;
    static CountRandomAutoVoice = 0;
    static IsAudioPlay = false;
    static IsMusicPlay = false;
    static IntervalAutoVoice = null;
    static ListParameter = [{}];
    static ListButton = ['Top', 'Right', 'Bottom', 'Left', 'Tap','Press', 'Auto'];
    static typeVue = 1;
    static ListPlayer = [];
    static ListMusic = {
        Top :{
            Name: '',
            Type:0,
            Order:0,
            Audio:[]
        },
        Right :{
            Name: '',
            Type:0,
            Order:0,
            Audio:[]
        },
        Bottom :{
            Name: '',
            Type:0,
            Order:0,
            Audio:[]
        },
        Left :{
            Name: '',
            Type:0,
            Order:0,
            Audio:[]
        },
        Tap :{
            Name: '',
            Type:0,
            Order:0,
            Audio:[]
        },
        Press :{
            Name: '',
            Type:0,
            Order:0,
            Audio:[]
        },
        Auto :{
            Name: '',
            Type:0,
            Order:0,
            Audio:[]
        }
    };

    GETisAutoVoice (){
        if(BaseAudio.ListParameter[BaseAudio.ThemeActive].Auto && BaseAudio.ListParameter[BaseAudio.ThemeActive].Auto.Audio.length > 0){
            BaseAudio.IsAutoVoice = true;
        }
        else{
            BaseAudio.IsAutoVoice = false;
        }
        return BaseAudio.IsAutoVoice;
    }
    
    GETisMultiTheme(){
        if(BaseAudio.ListParameter.length > 1){
            return true;
        }
        else{
            return false;
        }
    }

    GETnumberAutoVoice(){
        return BaseAudio.NumberAutoVoice;
    }
    
    GETrandomAutoVoice(){
        return BaseAudio.RandomAutoVoice;
    }

    GETnameButton(Type){
        if(BaseAudio.ListMusic[Type]){
            let Name =  BaseAudio.ListMusic[Type].Name;
            return Name;
        }
        else{
            return ' - ';
        }
    }

    GETthemes(){
        let List = [];

        for (let Index = 0; Index < BaseAudio.ListParameter.length; Index++) {
            if( !BaseAudio.ListParameter[Index].Theme ||  BaseAudio.ListParameter[Index].Theme == ''){
                List = [...List, 'Theme ' + Index];
            }
            else{
                List = [...List, BaseAudio.ListParameter[Index].Theme];
            }
        }
        return List;
    }

    SETthemeActive(Theme){
        if(BaseAudio.ThemeActive != Theme){
            BaseAudio.ThemeActive = Theme;
            this.initLoader();
        }else{
            BaseAudio.ThemeActive = Theme;
        }
    }

    SETnumberAutoVoice(Value){
        BaseAudio.NumberAutoVoice = parseInt(Value);
    }
    
    SETrandomAutoVoice(Value){
        BaseAudio.RandomAutoVoice = parseInt(Value);
    }

    // joue un audio simple (type 1)
    async playAudioSimple(Range){
        
        try {
            if(BaseAudio.ListMusic[Range] === undefined || BaseAudio.ListMusic[Range].Audio.length < 1){
                console.log('type audio non défini : ' + Range);
            }
            
            else{
                BaseAudio.IsAudioPlay = true;
                let AudioToPlay = this.randomPlay(Range);

                if(BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[AudioToPlay]] === undefined){
                    console.log('numero de laudio "'+ Range +'" non défini : ' + AudioToPlay);
                }
                
                else{
                    console.log('play de l audio "'+ Range +'":' + AudioToPlay);
                    if(BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[AudioToPlay]].Played == false){
                        await BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[AudioToPlay]].AudioPlayer.playAsync();
                    }
                    else{
                        await BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[AudioToPlay]].AudioPlayer.replayAsync();
                    }
                    setTimeout(() => {
                        BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[AudioToPlay]].Played = true;
                        BaseAudio.IsAudioPlay = false;
                    }, BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[AudioToPlay]].Duration);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    // joue un audio en boucle (type 2)
    async playAudioBoucle(Range){
        try {
            if(BaseAudio.ListMusic[Range] === undefined || BaseAudio.ListMusic[Range].Audio.length < 1){
                console.log('type audio non défini : ' + Range);
            }

            else{
                console.log('play de laudio boucle "'+ Range +'"');
                    BaseAudio.IsAudioPlay = true;
                if(BaseAudio.ListMusic[Range].Order == 0){

                    BaseAudio.ListMusic[Range].Order = 1;

                    if(BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[0]].Played == false){
                        await BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[0]].AudioPlayer.playAsync();
                    }
                    else{
                        await BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[0]].AudioPlayer.replayAsync();
                    }

                    setTimeout(() => {
                        BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[0]].Played = true;
                        BaseAudio.IsAudioPlay = false;
                    }, BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[0]].Duration);
                }

                else{
                    BaseAudio.ListMusic[Range].Order = 0;

                    if(BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[1]].Played == false){
                        await BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[1]].AudioPlayer.playAsync();
                    }
                    else{
                        await BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[1]].AudioPlayer.replayAsync();
                    }

                    setTimeout(() => {
                        BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[1]].Played = true;
                        BaseAudio.IsAudioPlay = false;
                    }, BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[1]].Duration);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    //joue une musique qui peux être désactivé par une autre action play (type 3)
    async playAudioMusic(Range){
        try {
            if(BaseAudio.ListMusic[Range] === undefined || BaseAudio.ListMusic[Range].Audio.length < 1){
                console.log('type audio non défini : ' + Range);
            }
            else if(BaseAudio.IsMusicPlay == false){
                BaseAudio.IsMusicPlay = true;
                BaseAudio.IsAudioPlay = true;
                let AudioToPlay = this.randomPlay(Range);

                if(BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[AudioToPlay]] === undefined){
                    console.log('numero de laudio "'+ Range +'" non défini : ' + AudioToPlay);
                }
                
                else{
                    console.log('play de l audio "'+ Range +'":' + AudioToPlay);
                    if(BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[AudioToPlay]].Played == false){
                        await BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[AudioToPlay]].AudioPlayer.playAsync();
                    }
                    else{
                        await BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[AudioToPlay]].AudioPlayer.replayAsync();
                    }
                }
            }
            else{
                BaseAudio.IsMusicPlay = false;
                BaseAudio.IsAudioPlay = true;

                for (let IndexAudio = 0; IndexAudio < BaseAudio.ListMusic[Range].Audio.length; IndexAudio++) {
                    if(BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[IndexAudio]] && BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[IndexAudio]].Active == true){
                        BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[IndexAudio]].Played = true;
                        await BaseAudio.ListPlayer[BaseAudio.ListMusic[Range].Audio[IndexAudio]].AudioPlayer.stopAsync();
                    }
                }
            }

            setTimeout(() => {
                BaseAudio.IsAudioPlay = false;
            },1000);

        } catch (error) {
            console.log(error);
        }
    }

    // initialise le theme
    async initLoader(){
        try {
            BaseAudio.IsAudioPlay = true;
            if(BaseAudio.ListParameter[BaseAudio.ThemeActive]){
                console.log('chargement du theme : ' + BaseAudio.ListParameter[BaseAudio.ThemeActive].Theme);

                // définition des noms des boutons
                BaseAudio.ListButton.forEach(button => {
                    this.loaderNames(button);
                });

                // calcul des variables du son aléatoire
                let ThemeActive = BaseAudio.ThemeActive;
                
                BaseAudio.typeVue = BaseAudio.ListParameter[ThemeActive].TypeVue;

                if(BaseAudio.ListParameter[ThemeActive].NumberAutoVoice && typeof BaseAudio.ListParameter[ThemeActive].NumberAutoVoice === 'number' && Number.isInteger(BaseAudio.ListParameter[ThemeActive].NumberAutoVoice)){
                    BaseAudio.NumberAutoVoice = BaseAudio.ListParameter[ThemeActive].NumberAutoVoice;
                }
                else{
                    BaseAudio.NumberAutoVoice = 0;
                }

                if(BaseAudio.ListParameter[ThemeActive].RandomAutoVoice && typeof BaseAudio.ListParameter[ThemeActive].RandomAutoVoice === 'number' && Number.isInteger(BaseAudio.ListParameter[ThemeActive].RandomAutoVoice)){
                    BaseAudio.RandomAutoVoice = BaseAudio.ListParameter[ThemeActive].RandomAutoVoice;
                }
                else{
                    BaseAudio.RandomAutoVoice = 0;
                }

                //vide la variable ListPlayer
                await this.PurgeListPlayer();

                //définition des audios
                for (const button of BaseAudio.ListButton) {
                    await this.loaderRange(button);
                }
                
                //définition des audios du deck
                await this.loaderDeck();
            }
        } 
        catch (error) {
            console.error('Erreur lors du chargement du fichier audio :', error);
        }
        
        setTimeout(() => {
            BaseAudio.IsAudioPlay = false;
        },5000);
        this.loadintervalAudioVoice(); 
    };


    async loaderDeck(){
        //console.log(BaseAudio.ListMusic);
    }

    loaderNames(button){
        let Theme = BaseAudio.ListParameter[BaseAudio.ThemeActive];
        if(Theme.TypeVue == 1 ){
            if(Theme[button] && Theme[button].Name){
                BaseAudio.ListMusic[button].Name = Theme[button].Name
            }else{
                BaseAudio.ListMusic[button].Name = '';
            }
        }
    }

    // charge les gammes du theme actuel
    async loaderRange(Range){

        let indexTheme = BaseAudio.ThemeActive;

        BaseAudio.ListMusic[Range].Audio = [];

        //si le bouton existe
        if(BaseAudio.ListParameter[indexTheme][Range]){
            BaseAudio.ListMusic[Range].Type = BaseAudio.ListParameter[indexTheme][Range].Type;

            //pour chaque audio défini dans le profil
            for (let IndexAudio = 0; IndexAudio < BaseAudio.ListParameter[indexTheme][Range].Audio.length; IndexAudio++) {

                //récupère l'ID du player 
                let idPlayer = this.GetNewPlayer();
                
                //associe l'audio au player
                await this.initPlayer(idPlayer, BaseAudio.ListParameter[indexTheme][Range].Audio[IndexAudio]);
                
                //associe le player au bouton
                BaseAudio.ListMusic[Range].Audio.push(idPlayer);

                //si le bouton est de type 2 (joue en boucle)
                if(BaseAudio.ListMusic[Range].Type == 2){
                    
                    let idPlayer = this.GetNewPlayer();
                    
                    //associe l'audio au player
                    await this.initPlayer(idPlayer, BaseAudio.ListParameter[indexTheme][Range].Audio[IndexAudio]);
                    
                    //associe le player au bouton
                    BaseAudio.ListMusic[Range].Audio.push(idPlayer);
                    
                }
            }
        }
    }
    
    createNewPlayer(){
        BaseAudio.ListPlayer.push( {
            associed: false,
            Played: false,
            Active: false,
            Duration: 0,
            AudioPlayer: new Audio.Sound()
        })
        return BaseAudio.ListPlayer.length -1;
    }

    async PurgeListPlayer(){
        for (let index = 0; index < BaseAudio.ListPlayer.length; index++) {
            const player = BaseAudio.ListPlayer[index];

            player.AudioPlayer.unloadAsync();
            player.duration = 0;
            player.associed = false;
            player.Played = false;
            player.Active = false;
        }
    }

    GetNewPlayer(){
        if(BaseAudio.ListPlayer.length == 0){
            return this.createNewPlayer();
        }
        else{
            for (let index = 0; index < BaseAudio.ListPlayer.length; index++) {
                const player = BaseAudio.ListPlayer[index];
                if(player.associed == false ){
                    return index
                }
            }
            return this.createNewPlayer();
        }
    }

     async initPlayer(idPlayer, audio){

        await BaseAudio.ListPlayer[idPlayer].AudioPlayer.loadAsync(audio.Source);
        BaseAudio.ListPlayer[idPlayer].Duration = audio.Duration;
        BaseAudio.ListPlayer[idPlayer].associed = true;
        BaseAudio.ListPlayer[idPlayer].Active = true;
        return;
    }

    // choisi le bouton du theme actif 
    async lanceAudio(TouchX, TouchY, Action = 0){
        BaseAudio.CountAutoVoice = 0;

        if(TouchY < 300 ){
            this.playAudio('Top');
        }

        else if(TouchX > 250){
            this.playAudio('Right');
        }

        else if(TouchY > 500){
            this.playAudio('Bottom');
        }

        else if(TouchX < 100){
            this.playAudio('Left');
        }

        else if(Action == 1){
            this.playAudio('Tap');
        }

        else if(Action == 2){
            this.playAudio('Press');
        }

    };

    // joue l'audio du bouton choisi selon son type
    playAudio(Action){
        
        if(!BaseAudio.ListMusic[Action] || BaseAudio.ListMusic[Action].Audio.length <= 0){
            console.log('bouton non initialisé : ' + Action);
        }
        else{
            switch (BaseAudio.ListMusic[Action].Type) {
                case 1:
                    if(BaseAudio.IsAudioPlay == false && BaseAudio.IsMusicPlay == false){
                        this.playAudioSimple(Action);
                    }
                    break;

                case 2:
                    if(BaseAudio.IsAudioPlay == false && BaseAudio.IsMusicPlay == false){
                        this.playAudioBoucle(Action);
                    }
                    break;

                case 3:
                    if(BaseAudio.IsAudioPlay == false){
                        this.playAudioMusic(Action);
                    }
                    break;
            }
        }
    }

    //vue modèle balle
    VUEBall(){
		const windowWidth = Dimensions.get('window').width;
		const windowHeight = Dimensions.get('window').height;

        return(
            <View>
                
				<Text style={styles.text_top}>{this.GETnameButton('Top')}</Text>
				<Text style={styles.text_right}>{this.GETnameButton('Right')}</Text>
				<Text style={styles.text_bottom}>{this.GETnameButton('Bottom')}</Text>
				<Text style={styles.text_left}>{this.GETnameButton('Left')}</Text>

				{/* infos inferieur */}
				<View style={styles.bloc_info_down}>
					<Text style={styles.text_supp}>tap : {this.GETnameButton('Tap')}</Text>
					<Text style={styles.text_supp}>pression : {this.GETnameButton('Press')}</Text>
				</View>
				
				{/* rond manipulable */}
				<Draggable x={(windowWidth/2)-75} y={(windowHeight/2)-40} renderSize={150} renderColor='#252525' renderText='' isCircle shouldReverse onLongPress={(evt)=>this.activeAudio(evt.nativeEvent.pageX, evt.nativeEvent.pageY, 2)} onShortPressRelease={(evt)=>this.activeAudio(evt.nativeEvent.pageX, evt.nativeEvent.pageY, 1)} onDrag={(evt)=>this.lanceAudio(evt.nativeEvent.pageX, evt.nativeEvent.pageY)}/> 
    			
            </View>
        )
    }

    //vue modèle carte
    VUECard(){
        return(
            <View>
                <Text > button</Text>
            </View>
        )
    }

    ControlVue(){
        if(BaseAudio.typeVue == 1){
            return this.VUEBall();
        }else{
            return this.VUECard();
        }
    }

    // donne un numero d'audio aléatoire à jouer, différent du précédent (sauf si il y a qu'un seul audio dans le bouton) 
	randomPlay(Action){
        let MaxAudio = BaseAudio.ListMusic[Action].Audio.length;
        

        if(MaxAudio > 1){
            let AudioToPlay = parseInt(Math.floor(Math.random() * MaxAudio));
            
            if(AudioToPlay == BaseAudio.ListMusic[Action].LastPlayed ){
                return this.randomPlay(Action);
            }
            else{
                BaseAudio.ListMusic[Action].LastPlayed = AudioToPlay;
                return AudioToPlay;
            }
        }
        else{
            return 0
        }
	}

    // initialise l'autoVoice
	loadintervalAudioVoice(){
        if(this.GETisAutoVoice()){
            if(BaseAudio.IntervalAutoVoice != null){
                clearInterval(BaseAudio.IntervalAutoVoice);
            }
            this.CalculRandomAutoVoice();
            BaseAudio.IntervalAutoVoice = setInterval(()=>this.AutoVoice(), 5000);
        }
        else{
            return;
        }
	}

    // reflechi à quel moment on lance l'autoVoice
	async AutoVoice(){
		if(BaseAudio.NumberAutoVoice > 0 && BaseAudio.IsAutoVoice == true){
		    BaseAudio.CountAutoVoice ++;
            if( BaseAudio.CountAutoVoice >= (parseInt(BaseAudio.NumberAutoVoice) + BaseAudio.CountRandomAutoVoice) && BaseAudio.IsAudioPlay == false){
                BaseAudio.CountAutoVoice = 0;
                this.PlayAutoVoice();
            }
		}
	}

    // calcul de l'aléatoire de l'autoVoice
    async CalculRandomAutoVoice(){
		BaseAudio.CountRandomAutoVoice = Math.floor(Math.random() * parseInt(BaseAudio.RandomAutoVoice));
    }
    
    // lancement de l'autoVoice
    async PlayAutoVoice(){
        this.playAudioSimple('Auto');
        this.CalculRandomAutoVoice();
    }
};


const styles = StyleSheet.create({
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