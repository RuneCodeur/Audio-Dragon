import {BaseAudio} from '../function/BaseAudio';

export class ProfilAudio extends BaseAudio{

    constructor(){
        super();

        console.log('profil de Une');
		
		BaseAudio.ListParameter = [{
			Theme:'volume defaut',
			NumberAutoVoice:3,
			RandomAutoVoice:2,
			Top :{
				Name: 'parler',
				Type:1,
				Audio:[
					{
						Source : require('./audio/Une/DEFAUT_blabla1.wav'),
						Duration : 2000
					},
					{
						Source : require('./audio/Une/DEFAUT_blabla2.wav'),
						Duration : 1400
					},
					{
						Source : require('./audio/Une/DEFAUT_blabla3.wav'),
						Duration : 1200
					},
					{
						Source : require('./audio/Une/DEFAUT_blabla4.wav'),
						Duration : 1300
					},
					{
						Source : require('./audio/Une/DEFAUT_blabla5.wav'),
						Duration : 1300
					},
					{
						Source : require('./audio/Une/DEFAUT_blabla6.wav'),
						Duration : 3000
					},
					{
						Source : require('./audio/Une/DEFAUT_blabla7.wav'),
						Duration : 2200
					},
					{
						Source : require('./audio/Une/DEFAUT_blabla8.wav'),
						Duration : 2300
					}
				]
			},
			Right :{
				Name: 'hurler',
				Type:1,
				Audio:[
					{
						Source : require('./audio/Une/DEFAUT_graou1.wav'),
						Duration : 1500
					},
					{
						Source : require('./audio/Une/DEFAUT_graou2.wav'),
						Duration : 2000
					},
					{
						Source : require('./audio/Une/DEFAUT_graou3.wav'),
						Duration : 1500
					}
				]
			},
			Bottom :{
				Name: 'grogner',
				Type:1,
				Audio:[
					{
						Source : require('./audio/Une/DEFAUT_greu.wav'),
						Duration : 5000
					}
				]
			},
			Left :{
				Name: 'ronroner',
				Type:2,
				Audio:[
					{
						Source : require('./audio/Une/DEFAUT_ronron.wav'),
						Duration : 1200
					}
				]
			},
			Tap :{
				Name: 'gros hurlement',
				Type:1,
				Audio:[
					{
						Source : require('./audio/Une/DEFAUT_big-graou.wav'),
						Duration : 5000
					}
				]
			},
			Auto :{
				Type:1,
				Audio:[
					{
						Source : require('./audio/Une/DEFAUT_blabla1.wav'),
						Duration : 2000
					},
					{
						Source : require('./audio/Une/DEFAUT_blabla2.wav'),
						Duration : 1400
					},
					{
						Source : require('./audio/Une/DEFAUT_blabla3.wav'),
						Duration : 1200
					},
					{
						Source : require('./audio/Une/DEFAUT_blabla4.wav'),
						Duration : 1300
					},
					{
						Source : require('./audio/Une/DEFAUT_blabla5.wav'),
						Duration : 1300
					},
					{
						Source : require('./audio/Une/DEFAUT_blabla6.wav'),
						Duration : 3000
					},
					{
						Source : require('./audio/Une/DEFAUT_blabla7.wav'),
						Duration : 2200
					},
					{
						Source : require('./audio/Une/DEFAUT_blabla8.wav'),
						Duration : 2300
					}
				]
			},
		},
		{
			Theme:'volume fort',
			NumberAutoVoice:1,
			RandomAutoVoice:0,
			Top :{
				Name: 'parler',
				Type:1,
				Audio:[
					{
						Source : require('./audio/Une/FORT_blabla1.wav'),
						Duration : 2000
					},
					{
						Source : require('./audio/Une/FORT_blabla2.wav'),
						Duration : 1400
					},
					{
						Source : require('./audio/Une/FORT_blabla3.wav'),
						Duration : 1200
					},
					{
						Source : require('./audio/Une/FORT_blabla4.wav'),
						Duration : 1300
					},
					{
						Source : require('./audio/Une/FORT_blabla5.wav'),
						Duration : 1300
					},
					{
						Source : require('./audio/Une/FORT_blabla6.wav'),
						Duration : 3000
					},
					{
						Source : require('./audio/Une/FORT_blabla7.wav'),
						Duration : 2200
					},
					{
						Source : require('./audio/Une/FORT_blabla8.wav'),
						Duration : 2300
					}
				]
			},
			Right :{
				Name: 'hurler',
				Type:1,
				Audio:[
					{
						Source : require('./audio/Une/FORT_graou1.wav'),
						Duration : 1500
					},
					{
						Source : require('./audio/Une/FORT_graou2.wav'),
						Duration : 2000
					},
					{
						Source : require('./audio/Une/FORT_graou3.wav'),
						Duration : 1500
					}
				]
			},
			Bottom :{
				Name: 'grogner',
				Type:1,
				Audio:[
					{
						Source : require('./audio/Une/FORT_greu.wav'),
						Duration : 5000
					}
				]
			},
			Left :{
				Name: 'ronroner',
				Type:2,
				Audio:[
					{
						Source : require('./audio/Une/FORT_ronron.wav'),
						Duration : 1200
					}
				]
			},
			Tap :{
				Name: 'gros hurlement',
				Type:1,
				Audio:[
					{
						Source : require('./audio/Une/FORT_big-graou.wav'),
						Duration : 5000
					}
				]
			},
			Auto :{
				Type:1,
				Audio:[
					{
						Source : require('./audio/Une/FORT_blabla1.wav'),
						Duration : 2000
					},
					{
						Source : require('./audio/Une/FORT_blabla2.wav'),
						Duration : 1400
					},
					{
						Source : require('./audio/Une/FORT_blabla3.wav'),
						Duration : 1200
					},
					{
						Source : require('./audio/Une/FORT_blabla4.wav'),
						Duration : 1300
					},
					{
						Source : require('./audio/Une/FORT_blabla5.wav'),
						Duration : 1300
					},
					{
						Source : require('./audio/Une/FORT_blabla6.wav'),
						Duration : 3000
					},
					{
						Source : require('./audio/Une/FORT_blabla7.wav'),
						Duration : 2200
					},
					{
						Source : require('./audio/Une/FORT_blabla8.wav'),
						Duration : 2300
					}
				]
			}
		},
		
		{
			Theme:'troll',
			NumberAutoVoice:0,
			RandomAutoVoice:0,
			Top :{
				Name: 'parler',
				Type:1,
				Audio:[
					{
						Source : require('./audio/Une/FORT_blabla1.wav'),
						Duration : 2000
					}
				]
			},
			Right :{
				Name: 'hurler',
				Type:1,
				Audio:[
					{
						Source : require('./audio/Une/FORT_graou1.wav'),
						Duration : 1500
					}
				]
			},
			Bottom :{
				Name: 'grogner',
				Type:1,
				Audio:[
					{
						Source : require('./audio/Une/FORT_greu.wav'),
						Duration : 5000
					}
				]
			},
			Left :{
				Name: 'ronroner',
				Type:1,
				Audio:[
					{
						Source : require('./audio/Une/FORT_ronron.wav'),
						Duration : 1200
					}
				]
			}
		}]

    }
}
