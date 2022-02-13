import React from 'react'
import { Image } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native'


const OnboardingScreen= () => {
    const navigation = useNavigation();

    return (
        <Onboarding
        onSkip={()=> navigation.replace('HomeScreen')}
        onDone={()=> navigation.navigate('HomeScreen')}
        pages={[
            {
            backgroundColor: 'white',
            image: <Image source={require('../../assets/images/Board3.jpg')} />,
            title: 'Motivation increases your productivity',
            subtitle: 'If you want to be more productive, think about your motivations. Do you have any?',
            },
            {
            backgroundColor: 'white',
            image: <Image source={require('../../assets/images/Board2.jpg')} />,
            title: 'Motivation helps build new skills',
            subtitle: 'Developing a new skill depends on two things: motivation and habit.',
            },
            {
            backgroundColor: 'white',
            image: <Image source={require('../../assets/images/Board1.jpg')} />,
            title: 'Motivation gets you through hard times',
            subtitle: 'When things are going well, it’s not too difficult to stay motivated. When things get harder, however, it’s easier to lose sight of the finish line.',
            },
            
        ]}
        />
    )
}

export default OnboardingScreen