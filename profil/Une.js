import {BaseAudio} from '../function/BaseAudio';

export class ProfilAudio extends BaseAudio{

    constructor(){
        super();

        console.log('profil de Une');
		
		BaseAudio.ListParameter = [{
			Theme:'volume defaut',
			NumberAutoVoice:2,
			RandomAutoVoice:3,
			TypeVue: 1,
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
			NumberAutoVoice:2,
			RandomAutoVoice:3,
			TypeVue: 1,
			Top :{
				Name: 'parler',
				Type:1,
				Audio:[
					{
						Source : require('./audio/Une/FORT_blabla1.wav'),
						Duration : 1400
					},
					{
						Source : require('./audio/Une/FORT_blabla2.wav'),
						Duration : 3000
					},
					{
						Source : require('./audio/Une/FORT_blabla3.wav'),
						Duration : 2200
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
						Duration : 1400
					},
					{
						Source : require('./audio/Une/FORT_blabla2.wav'),
						Duration : 3000
					},
					{
						Source : require('./audio/Une/FORT_blabla3.wav'),
						Duration : 2200
					},
					{
						Source : require('./audio/Une/FORT_graou1.wav'),
						Duration : 1400
					},
					{
						Source : require('./audio/Une/FORT_graou2.wav'),
						Duration : 1400
					}
				]
			}
		},
		
		{
			Theme:'troll',
			NumberAutoVoice:0,
			RandomAutoVoice:0,
			TypeVue: 1,
			Top :{
				Name: 'augh',
				Type:1,
				Audio:[
					{
						Source : require('./audio/Une/TROLL_augh1.wav'),
						Duration : 1500
					},
					{
						Source : require('./audio/Une/TROLL_augh2.wav'),
						Duration : 1500
					},
					{
						Source : require('./audio/Une/TROLL_augh3.wav'),
						Duration : 1500
					},
					{
						Source : require('./audio/Une/TROLL_augh4.wav'),
						Duration : 1500
					}
				]
			},
			Bottom :{
				Name: 'Agressive',
				Type:3,
				Audio:[
					{
						Source : require('./audio/Une/TROLL_ultra.wav'),
						Duration : 68000
					},
					{
						Source : require('./audio/Une/TROLL_darksouls.wav'),
						Duration : 68000
					},
				]
			},
			
			Right :{
				Name: 'AUGH', 
				Type:1,
				Audio:[
					{
						Source : require('./audio/Une/TROLL_bigaugh.wav'),
						Duration : 3000
					},
				]
			},
			
			Left :{
				Name: 'Kaamelott',
				Type:1,
				Audio:[
					{
						Source : require('./audio/Une/TROLL_kaamelott1.wav'),
						Duration : 2200
					},
					{
						Source : require('./audio/Une/TROLL_kaamelott2.wav'),
						Duration : 3700
					},
					{
						Source : require('./audio/Une/TROLL_kaamelott3.wav'),
						Duration : 3100
					},
					{
						Source : require('./audio/Une/TROLL_kaamelott4.wav'),
						Duration : 4900
					},
					{
						Source : require('./audio/Une/TROLL_kaamelott5.wav'),
						Duration : 1400
					},
					{
						Source : require('./audio/Une/TROLL_kaamelott6.wav'),
						Duration : 1900
					}
				]
			}
		},
		{
			Theme:'Music',
			NumberAutoVoice:0,
			RandomAutoVoice:0,
			TypeVue: 1,
			Top :{
				Name: 'Krokmou/Yoshi',
				Type:3,
				Audio:[
					{
						Source : require('./audio/Une/TROLL_dance1.wav'),
						Duration : 211000
					},
					{
						Source : require('./audio/Une/TROLL_dance2.wav'),
						Duration : 171000
					}
				]
			},
			Right :{
				Name: 'LOTR',
				Type:3,
				Audio:[
					{
						Source : require('./audio/Une/LOTR.wav'),
						Duration : 171000
					}
				]
			},
			Left :{
				Name: 'Bardix',
				Type:3,
				Audio:[
					{
						Source : require('./audio/Une/MUSIC_bardix1.wav'),
						Duration : 138000
					},
					{
						Source : require('./audio/Une/MUSIC_bardix2.wav'),
						Duration : 141000
					},
					{
						Source : require('./audio/Une/MUSIC_bardix3.wav'),
						Duration : 106000
					},
					{
						Source : require('./audio/Une/MUSIC_bardix4.wav'),
						Duration : 160000
					},
					{
						Source : require('./audio/Une/MUSIC_bardix5.wav'),
						Duration : 169000
					},
					{
						Source : require('./audio/Une/MUSIC_bardix6.wav'),
						Duration :196000
					},
				]
			},
			Bottom :{
				Name: 'rift',
				Type:1,
				Audio:[
					{
						Source : require('./audio/Une/TROLL_metal1.wav'),
						Duration : 7000
					},
					{
						Source : require('./audio/Une/TROLL_metal2.wav'),
						Duration : 5000
					},
					{
						Source : require('./audio/Une/TROLL_metal3.wav'),
						Duration : 6000
					},
					{
						Source : require('./audio/Une/TROLL_metal4.wav'),
						Duration : 6000
					},
					{
						Source : require('./audio/Une/TROLL_metal5.wav'),
						Duration : 8000
					},
					{
						Source : require('./audio/Une/TROLL_metal6.wav'),
						Duration : 10000
					},
					{
						Source : require('./audio/Une/TROLL_metal7.wav'),
						Duration : 7000
					},
					{
						Source : require('./audio/Une/TROLL_metal8.wav'),
						Duration : 8000
					},
				]
			}
		}
	
	]}
}
