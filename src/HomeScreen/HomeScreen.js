import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity,StatusBar, Linking} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Tts from 'react-native-tts';
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';

Tts.setDefaultLanguage('en-GB');
Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
Tts.setDefaultRate(0.5);
Tts.setDefaultPitch(1.2);

const HomeScreen = () => {

  const [Quote, setQuote] = useState('Loading...');
  const [Author, setAuthor] = useState('Loading...');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const randomQuote = () => {
    setIsLoading(true);
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
      // console.log(result.content);
      setQuote(result.content);
      setAuthor(result.author);
      setIsLoading(false);
    })
  }

  useEffect(() => {
    randomQuote();
  }, []);

  const speakNow = () => {
    Tts.stop();
    Tts.speak(Quote + ' by ' + Author);
    Tts.addEventListener('tts-start', (event) => setIsSpeaking(true));
    Tts.addEventListener('tts-finish', (event) => setIsSpeaking(false));
  }

  const copyToClipboard = () => {
    Clipboard.setString(Quote);
    Snackbar.show({
      text: 'Quote copied!',
      duration: Snackbar.LENGTH_SHORT,
    });    
  }

  const tweetNow = () => {
    const url = "https://twitter.com/intent/tweet?text=" + Quote;
    Linking.openURL(url);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#5372F0',
        backgroundColor: '#1F618D',
      }}>
        <StatusBar barStyle="light-content" />
      <View
        style={{
          width: '90%',
          backgroundColor: '#fff',
          backgroundColor: '#154360',
          borderRadius: 20,
          padding: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 26,
            fontWeight: '600',
            color: '#D4AC0D',
            marginBottom: 20,
          }}>
          Quote of the Day
        </Text>
        <FontAwesome5
          name="quote-left"
          style={{fontSize: 20, marginBottom: -12}}
          color="white"
        />
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            lineHeight: 26,
            letterSpacing: 1.1,
            fontWeight: '400',
            textAlign: 'center',
            marginBottom: 10,
            paddingHorizontal: 30,
          }}>
          {Quote}
        </Text>
        <FontAwesome5
          name="quote-right"
          style={{
            fontSize: 20,
            textAlign: 'right',
            marginTop: -20,
            marginBottom: 20,
          }}
          color="white"
        />
        <Text
          style={{
            textAlign: 'right',
            fontWeight: '300',
            fontStyle: 'italic',
            fontSize: 16,
            color: 'white',
          }}>
          —— {Author}
        </Text>
        <TouchableOpacity
          onPress={randomQuote}
          style={{
            backgroundColor: isLoading ? 'rgba(212, 172, 13, 0.7)' : 'rgba(212, 172, 13, 1)',
            padding: 20,
            borderRadius: 30,
            marginVertical: 20,
          }}>
          <Text style={{color: '#fff', fontSize: 18, textAlign: 'center'}}>
            {isLoading ? "Loading..." : "New Quote"}
          </Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row',justifyContent:'space-around'}}>
          <TouchableOpacity
            onPress={speakNow}
            style={{
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 50,
              padding: 15,
              backgroundColor: isSpeaking ? 'rgba(212, 172, 13, 1)' : '#154360'
            }}>
            <FontAwesome name="volume-up" size={22} color={isSpeaking ? '#fff' : "white"} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={copyToClipboard}
            style={{
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 50,
              padding: 15,
            }}>
            <FontAwesome5 name="copy" size={22} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={tweetNow}
            style={{
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 50,
              padding: 15,
            }}>
            <FontAwesome name="twitter" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;