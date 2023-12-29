import { Audio } from 'expo-av';

export class BaseAudio{

    static NumberAutoVoice = 3;
    static RandomAutoVoice = 2;
    static CountAutoVoice = 0;
    static IsAutoVoice = false;
    static ThemeActive = 0;
    static CountRandomAutoVoice = 0;
    static IsAudioPlay = false;
    static IntervalAutoVoice = null;
    static ListParameter = [{}];
    static ListMusic = {
        Top :{
            Name: '',
            Type:0,
            Audio:[]
        },
        Right :{
            Name: '',
            Type:0,
            Audio:[]
        },
        Bottom :{
            Name: '',
            Type:0,
            Audio:[]
        },
        
        Left :{
            Name: '',
            Type:0,
            Audio:[]
        },
        Tap :{
            Name: '',
            Type:0,
            Audio:[]
        },
        Press :{
            Name: '',
            Type:0,
            Audio:[]
        },
        Auto :{
            Name: '',
            Type:0,
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
                if(BaseAudio.ListMusic[Range].Audio[AudioToPlay] === undefined){
                    console.log('numero de laudio "'+ Range +'"non défini : ' + AudioToPlay);
                }
                
                else{
                    console.log('play de l audio "'+ Range +'":' + AudioToPlay);
                    if(BaseAudio.ListMusic[Range].Audio[AudioToPlay].Played == false){
                        await BaseAudio.ListMusic[Range].Audio[AudioToPlay].AudioPlayer.playAsync();
                    }
                    else{
                        await BaseAudio.ListMusic[Range].Audio[AudioToPlay].AudioPlayer.replayAsync();
                    }
                    setTimeout(() => {
                        BaseAudio.ListMusic[Range].Audio[AudioToPlay].Played = true;
                        BaseAudio.IsAudioPlay = false;
                    }, BaseAudio.ListMusic[Range].Audio[AudioToPlay].Duration);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    // joue un audio en boucle (type 2)
    async playAudioBoucle(Range){
        try {
            if(BaseAudio.ListMusic[Range].Audio[0].AudioPlayer === undefined || BaseAudio.ListMusic[Range].Audio[0].AudioPlayer2 === undefined){
                console.log('gamme audio boucle non défini :' + Range);
            }

            else{
                console.log('play de laudio boucle "'+ Range +'"');
                BaseAudio.IsAudioPlay = true;
                    
                if(BaseAudio.ListMusic[Range].Audio[0].Order == 1){
                    BaseAudio.ListMusic[Range].Audio[0].Order = 2;
                    
                    if(BaseAudio.ListMusic[Range].Audio[0].Played == false){
                        await BaseAudio.ListMusic[Range].Audio[0].AudioPlayer.playAsync();
                    }else{
                        await BaseAudio.ListMusic[Range].Audio[0].AudioPlayer.replayAsync();
                    }
                    setTimeout(() => {
                        BaseAudio.ListMusic[Range].Audio[0].Played = true;
                        BaseAudio.IsAudioPlay = false;
                    }, BaseAudio.ListMusic[Range].Audio[0].Duration);
                }

                else{
                    BaseAudio.ListMusic[Range].Audio[0].Order = 1;
                    
                    if(BaseAudio.ListMusic[Range].Audio[0].Played2 == false){
                        await BaseAudio.ListMusic[Range].Audio[0].AudioPlayer2.playAsync();
                    }
                    else{
                        await BaseAudio.ListMusic[Range].Audio[0].AudioPlayer2.replayAsync();
                    }
                    setTimeout(() => {
                        BaseAudio.ListMusic[Range].Audio[0].Played2 = true;
                        BaseAudio.IsAudioPlay = false;
                    }, BaseAudio.ListMusic[Range].Audio[0].Duration);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    // initialise le theme
    initLoader(){
        try {
            BaseAudio.IsAudioPlay = true;
            if(BaseAudio.ListParameter[BaseAudio.ThemeActive]){
                console.log('chargement du theme : ' + BaseAudio.ListParameter[BaseAudio.ThemeActive].Theme);
                

                let ThemeActive = BaseAudio.ThemeActive;

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

                this.loaderRange(ThemeActive, 'Top');
                this.loaderRange(ThemeActive, 'Right');
                this.loaderRange(ThemeActive, 'Bottom');
                this.loaderRange(ThemeActive, 'Left');
                this.loaderRange(ThemeActive, 'Tap');
                this.loaderRange(ThemeActive, 'Press');
                this.loaderRange(ThemeActive, 'Auto');
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

    // charge les gammes du theme actuel
    async loaderRange(indexTheme, Range){
        BaseAudio.ListMusic[Range].Name = '';
        BaseAudio.ListMusic[Range].Type = '';
        for (let IndexAudio = 0; IndexAudio <  BaseAudio.ListMusic[Range].Audio.length; IndexAudio++) {
            BaseAudio.ListMusic[Range].Audio[IndexAudio].Active = false;
        }

        if(BaseAudio.ListParameter[indexTheme][Range]){
            BaseAudio.ListMusic[Range].Name = BaseAudio.ListParameter[indexTheme][Range].Name;
            BaseAudio.ListMusic[Range].Type = BaseAudio.ListParameter[indexTheme][Range].Type;

            for (let IndexAudio = 0; IndexAudio < BaseAudio.ListParameter[indexTheme][Range].Audio.length; IndexAudio++) {
                // console.log(BaseAudio.ListParameter[indexTheme][Range].Audio[IndexAudio]);
                if(!BaseAudio.ListMusic[Range].Audio[IndexAudio]){
                    BaseAudio.ListMusic[Range].Audio[IndexAudio] = {
                        Played: false,
                        Duration: 0,
                        AudioPlayer: new Audio.Sound()
                    }
                }
                else{
                    await BaseAudio.ListMusic[Range].Audio[IndexAudio].AudioPlayer.unloadAsync()
                }
                
                await BaseAudio.ListMusic[Range].Audio[IndexAudio].AudioPlayer.loadAsync(BaseAudio.ListParameter[indexTheme][Range].Audio[IndexAudio].Source);
                BaseAudio.ListMusic[Range].Audio[IndexAudio].Duration = BaseAudio.ListParameter[indexTheme][Range].Audio[IndexAudio].Duration;
                BaseAudio.ListMusic[Range].Audio[IndexAudio].Active = true;

                if(BaseAudio.ListMusic[Range].Type == 2){
                    BaseAudio.ListMusic[Range].Audio[IndexAudio].Order = null;
                    BaseAudio.ListMusic[Range].Audio[IndexAudio].Played2 = false;
                    if(!BaseAudio.ListMusic[Range].Audio[IndexAudio].AudioPlayer2 || BaseAudio.ListMusic[Range].Audio[IndexAudio].AudioPlayer2 == undefined){
                        BaseAudio.ListMusic[Range].Audio[IndexAudio].AudioPlayer2 = new Audio.Sound();
                    }
                    else{
                        await BaseAudio.ListMusic[Range].Audio[IndexAudio].AudioPlayer2.unloadAsync()
                    }
                    await BaseAudio.ListMusic[Range].Audio[IndexAudio].AudioPlayer2.loadAsync(BaseAudio.ListParameter[indexTheme][Range].Audio[IndexAudio].Source);
                }
            }
        }
        // BaseAudio.ListMusic.Top.Audio[0].AudioPlayer.playAsync();
    }

    // choisi le bouton du theme actif 
    async lanceAudio(TouchX, TouchY, Action = 0){
        BaseAudio.CountAutoVoice = 0;

        if(TouchY < 300 && BaseAudio.IsAudioPlay == false){
            this.playAudio('Top');
        }

        else if(TouchX > 250 && BaseAudio.IsAudioPlay == false){
            this.playAudio('Right');
        }

        else if(TouchY > 500 && BaseAudio.IsAudioPlay == false){
            this.playAudio('Bottom');
        }

        else if(TouchX < 100 && BaseAudio.IsAudioPlay == false){
            this.playAudio('Left');
        }

        else if(Action == 1 && BaseAudio.IsAudioPlay == false){
            this.playAudio('Tap');
        }

        else if(Action == 2){
            this.playAudio('Press');
        }

    };

    // joue l'audio du bouton choisi selon son type
    playAudio(Action){
        if(!BaseAudio.ListMusic[Action] || !BaseAudio.ListMusic[Action].Audio[0]){
            console.log('bouton non initialisé : ' + Action);
        }
        else{
            switch (BaseAudio.ListMusic[Action].Type) {
                case 1:
                    this.playAudioSimple(Action);
                    break;

                case 2:
                    this.playAudioBoucle(Action);
                    break;
            }
        }
    }

    // donne un numero d'audio aléatoire à jouer, différent du précédent (sauf si il y a qu'un seul audio dans le bouton) 
	randomPlay(Action){
        let MaxAudio = 0;
        for (let IndexAudio = 0; IndexAudio < BaseAudio.ListMusic[Action].Audio.length; IndexAudio++) {
            if(BaseAudio.ListMusic[Action].Audio[IndexAudio] && BaseAudio.ListMusic[Action].Audio[IndexAudio].Active == true){
                MaxAudio ++;
            }
        }

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