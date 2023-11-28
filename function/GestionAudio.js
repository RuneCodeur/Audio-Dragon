import { Audio } from 'expo-av';

export class GestionAudio{

    static numberAutoVoice = 0;
    static randomAutoVoice = 0
    static CountAutoVoice = 0;
    static IsAutoVoice = false;
    static CountRandomAutoVoice = 0;
    static isAudioPlay = false;
    static lastBlabla = null;
    static lastGraou = null;
    static intervalAutoVoice = null;
    static musicList = {
        blabla:[
            {
                duration:2000,
                audioplayer:null,
                played: false
            },
            {
                duration:1400,
                audioplayer:null,
                played: false
            },
            {
                duration:1200,
                audioplayer:null,
                played: false
            },
            {
                duration:1300,
                audioplayer:null,
                played: false
            },
            {
                duration:1300,
                audioplayer:null,
                played: false
            },
            {
                duration:3000,
                audioplayer:null,
                played: false
            },
            {
                duration:2200,
                audioplayer:null,
                played: false
            },
            {
                duration:2300,
                audioplayer:null,
                played: false
            }
        ],
        graou:[
            {
                duration:1500,
                audioplayer:null,
                played: false
            },
            {
                duration:2000,
                audioplayer:null,
                played: false
            },
            {
                duration:1500,
                audioplayer:null,
                played: false
            }
        ],
        greu:[
            {
                duration:5000,
                audioplayer:null,
                played: false
            }
        ],
        ronron:{
            duration:1200,
            ordre:1,
            audioplayer:null,
            audioplayer2:null,
            played: false,
            played2: false
        },
        bigGraou: [
            {
                duration:5000,
                audioplayer:null,
                played: false
            }
        ]
    };

    constructor(){
		GestionAudio.musicList.blabla[0].audioplayer = new Audio.Sound();
		GestionAudio.musicList.blabla[0].audioplayer.loadAsync(require('./../audio/blabla1.wav'));
		
		GestionAudio.musicList.blabla[1].audioplayer = new Audio.Sound();
		GestionAudio.musicList.blabla[1].audioplayer.loadAsync(require('../audio/blabla2.wav'));
		
		GestionAudio.musicList.blabla[2].audioplayer = new Audio.Sound();
		GestionAudio.musicList.blabla[2].audioplayer.loadAsync(require('../audio/blabla3.wav'));
		
		GestionAudio.musicList.blabla[3].audioplayer = new Audio.Sound();
		GestionAudio.musicList.blabla[3].audioplayer.loadAsync(require('../audio/blabla4.wav'));
		
		GestionAudio.musicList.blabla[4].audioplayer = new Audio.Sound();
		GestionAudio.musicList.blabla[4].audioplayer.loadAsync(require('../audio/blabla5.wav'));
		
		GestionAudio.musicList.blabla[5].audioplayer = new Audio.Sound();
		GestionAudio.musicList.blabla[5].audioplayer.loadAsync(require('../audio/blabla6.wav'));
		
		GestionAudio.musicList.blabla[6].audioplayer = new Audio.Sound();
		GestionAudio.musicList.blabla[6].audioplayer.loadAsync(require('../audio/blabla7.wav'));
		
		GestionAudio.musicList.blabla[7].audioplayer = new Audio.Sound();
		GestionAudio.musicList.blabla[7].audioplayer.loadAsync(require('../audio/blabla8.wav'));

		
		GestionAudio.musicList.graou[0].audioplayer = new Audio.Sound();
		GestionAudio.musicList.graou[0].audioplayer.loadAsync(require('../audio/graou1.wav'));

		GestionAudio.musicList.graou[1].audioplayer = new Audio.Sound();
		GestionAudio.musicList.graou[1].audioplayer.loadAsync(require('../audio/graou2.wav'));

		GestionAudio.musicList.graou[2].audioplayer = new Audio.Sound();
		GestionAudio.musicList.graou[2].audioplayer.loadAsync(require('../audio/graou3.wav'));
		

		GestionAudio.musicList.greu[0].audioplayer = new Audio.Sound();
		GestionAudio.musicList.greu[0].audioplayer.loadAsync(require('../audio/greu.wav'));

		GestionAudio.musicList.ronron.audioplayer = new Audio.Sound();
		GestionAudio.musicList.ronron.audioplayer.loadAsync(require('../audio/ronron.wav'));
		GestionAudio.musicList.ronron.audioplayer2 = new Audio.Sound();
		GestionAudio.musicList.ronron.audioplayer2.loadAsync(require('../audio/ronron.wav'));

		GestionAudio.musicList.bigGraou[0].audioplayer = new Audio.Sound();
		GestionAudio.musicList.bigGraou[0].audioplayer.loadAsync(require('../audio/big-graou.wav'));

        GestionAudio.numberAutoVoice = 3;
        GestionAudio.randomAutoVoice = 2;
        GestionAudio.IsAutoVoice = true;
        this.loadintervalAudioVoice();
    }

    GETisAutoVoice (){
        return GestionAudio.IsAutoVoice;
    }
    
    GETnumberAutoVoice(){
        return GestionAudio.numberAutoVoice;
    }
    
    GETrandomAutoVoice(){
        return GestionAudio.randomAutoVoice;
    }

    SETnumberAutoVoice(value){
        GestionAudio.numberAutoVoice = parseInt(value);
    }
    
    SETrandomAutoVoice(value){
        GestionAudio.randomAutoVoice = parseInt(value);
    }

    async playAudioSimple(type){
        try {

            if(GestionAudio.musicList[type] === undefined){
                console.log('type audio non défini :' + type);
            }
            
            else{
                GestionAudio.isAudioPlay = true;
                let audioToPlay = this.randomPlay(type);

                if(GestionAudio.musicList[type][audioToPlay] === undefined){
                    console.log('numero de laudio "'+ type +'"non défini :' + audioToPlay);
                }
                
                else{
                    console.log('play de laudio "'+ type +'":' + audioToPlay);
                    if(GestionAudio.musicList[type][audioToPlay].played == false){
                        await GestionAudio.musicList[type][audioToPlay].audioplayer.playAsync();
                    }else{
                        await GestionAudio.musicList[type][audioToPlay].audioplayer.replayAsync();
                    }
                    setTimeout(() => {
                        GestionAudio.musicList[type][audioToPlay].played = true;
                        GestionAudio.isAudioPlay = false;
                    }, GestionAudio.musicList[type][audioToPlay].duration);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    
    async playAudioBoucle(type){
        try {

            if(GestionAudio.musicList[type].audioplayer === undefined || GestionAudio.musicList[type].audioplayer2 === undefined){
                console.log('type audio boucle non défini :' + type);
            }

            else{
                console.log('play de laudio boucle "'+ type +'"');
                GestionAudio.isAudioPlay = true;
                    
                if(GestionAudio.musicList[type].ordre == 1){
                    GestionAudio.musicList[type].ordre = 2;
                    
                    if(GestionAudio.musicList[type].played == false){
                        await GestionAudio.musicList[type].audioplayer.playAsync();
                    }else{
                        await GestionAudio.musicList[type].audioplayer.replayAsync();
                    }
                    setTimeout(() => {
                        GestionAudio.musicList[type].played = true;
                        GestionAudio.isAudioPlay = false;
                    }, GestionAudio.musicList[type].duration);
        
                }else{
                    GestionAudio.musicList[type].ordre = 1;
                    
                    if(GestionAudio.musicList[type].played2 == false){
                        await GestionAudio.musicList[type].audioplayer2.playAsync();
                    }else{
                        await GestionAudio.musicList[type].audioplayer2.replayAsync();
                    }
                    setTimeout(() => {
                        GestionAudio.musicList[type].played2 = true;
                        GestionAudio.isAudioPlay = false;
                    }, GestionAudio.musicList[type].duration);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    async lanceAudio(touchX, touchY, action = 0){
        
        GestionAudio.CountAutoVoice = 0;

        //long press
        if(action == 2){
            this.playAudioSimple('music');
        }

        //simple click 
        if(action == 1 && GestionAudio.isAudioPlay == false){
            this.playAudioSimple('bigGraou');
        }
        
        //capteur du haut (blabla) -ok
        else if(touchY < 300 && GestionAudio.isAudioPlay == false){
            this.playAudioSimple('blabla');
        }
        
        //capteur du bas (greu) -ok
        else if(touchY > 500 && GestionAudio.isAudioPlay == false){
            this.playAudioSimple('greu');
        }
        
        //capteur de gauche (ronron)
        else if(touchX < 100 && GestionAudio.isAudioPlay == false){
            this.playAudioBoucle('ronron');
        }

        //capteur de droite (graou) -ok
        else if(touchX > 250 && GestionAudio.isAudioPlay == false){
            this.playAudioSimple('graou');
        }
    };

    
	randomPlay(type){
		let audioToPlay = parseInt(Math.floor(Math.random() * GestionAudio.musicList[type].length));

		switch (type) {
			case 'blabla':
				if(audioToPlay == GestionAudio.lastBlabla){
					return this.randomPlay(type);
				}else{
					GestionAudio.lastBlabla = audioToPlay;
					return audioToPlay;
				}
				break;

			case 'graou':
				if(audioToPlay == GestionAudio.lastGraou){
					return this.randomPlay(type);
				}else{
					GestionAudio.lastGraou = audioToPlay;
					return audioToPlay;
				}
				break;
		
			default:
				return 0;
				break;
		}
	}

    //initialise l'autoVoice
	loadintervalAudioVoice(){
        if(this.GETisAutoVoice()){
            if(GestionAudio.intervalAutoVoice != null){
                clearInterval(GestionAudio.intervalAutoVoice);
            }
            this.CalculRandomAutoVoice();
            GestionAudio.intervalAutoVoice = setInterval(()=>this.AutoVoice(), 5000);
        }
        else{
            return;
        }
	}

    //reflechi à quel moment on lance l'autoVoice
	async AutoVoice(){
		if(GestionAudio.numberAutoVoice > 0){
		    GestionAudio.CountAutoVoice ++;
            if( GestionAudio.CountAutoVoice >= (parseInt(GestionAudio.numberAutoVoice) + GestionAudio.CountRandomAutoVoice) && GestionAudio.isAudioPlay == false){
                GestionAudio.CountAutoVoice = 0;
                this.PlayAutoVoice();
            }
		}
	}

    //calcul de l'aléatoire de l'autoVoice
    async CalculRandomAutoVoice(){
		GestionAudio.CountRandomAutoVoice = Math.floor(Math.random() * parseInt(GestionAudio.randomAutoVoice));
    }
    
    //lancement de l'autoVoice
    async PlayAutoVoice(){
        this.playAudioSimple('blabla');
        this.CalculRandomAutoVoice();
    }
};