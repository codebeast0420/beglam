import React, { useRef, useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import { useColorScheme } from 'nativewind';

import Header from '_components/Header';

import { PhoneIcon, SendIcon } from '_components/icons';

const AvatarServiceClient = require('_assets/images/avatar-service-client.png');
const Avatar = require('_assets/images/avatar.png');

const Chat = ({ navigation }) => {
  const scrollViewRef = useRef();
  const { colorScheme } = useColorScheme();

  const [messages, setMessages] = useState([
    { isClient: true, time: '13:20', content: 'Lorem ipsum ipsum ipsum dolor sit amet, consectetur adipiscing elit. Cras suspendisse ornare massa eget amet elit velit odio.' },
    { isClient: false, time: '13:20', content: 'Lorem ipsum ipsum ipsum dolor sit amet, consectetur adipiscing elit. Cras suspendisse ornare massa eget amet elit velit odio.' },
    { isClient: false, time: '13:20', content: 'Lorem ipsum ipsum ipsum dolor sit amet, consectetur adipiscing elit. Cras suspendisse ornare massa eget amet elit velit odio.' },
    { isClient: false, time: '13:20', content: 'Lorem ipsum ipsum ipsum dolor sit amet, consectetur adipiscing elit. Cras suspendisse ornare massa eget amet elit velit odio.' },
    { isClient: false, time: '13:20', content: 'Lorem ipsum ipsum ipsum dolor sit amet, consectetur adipiscing elit. Cras suspendisse ornare massa eget amet elit velit odio.' },
    { isClient: false, time: '13:20', content: 'Lorem ipsum ipsum ipsum dolor sit amet, consectetur adipiscing elit. Cras suspendisse ornare massa eget amet elit velit odio.' },
    { isClient: false, time: '13:20', content: 'Lorem ipsum ipsum ipsum dolor sit amet, consectetur adipiscing elit. Cras suspendisse ornare massa eget amet elit velit odio.' },
  ]);
  const [message, setMessage] = useState('');

  const clientMessageClasses = 'bg-primary-100 dark:bg-primary-300 rounded-tr-2xl';
  const myMessageClasses = 'bg-[#ffffff] rounded-tl-2xl ml-auto';

  const handleSend = () => {
    if (message === '') return;

    setMessages(prev => {
      prev.push({ isClient: false, time: '13:20', content: message });

      setMessage('');
      scrollViewRef.current.scrollToEnd({ animated: true });
      return [...prev];
    });
  };

  return (
    <SafeAreaView className="flex-1">
      <Header>
        <View className="flex-1 flex-row items-center ml-7">
          <Pressable
            className="w-12 h-12 rounded-3xl overflow-hidden border-4 border-secondary-200 dark:border-secondary-300"
            onPress={() => navigation.navigate(colorScheme === 'light' ? 'ProfilePro' : 'ProfileClient')}
          >
            <Image source={colorScheme === 'light' ? AvatarServiceClient : Avatar} className="w-12 h-12" />
          </Pressable>
          <Text className="text-xl text-[#ffffff] font-gilroy-bold flex-1 ml-5">
            Esther Howard
          </Text>
          <Pressable className="bg-secondary-200 dark:bg-secondary-300 rounded-2xl p-3">
            <PhoneIcon color="white" size="18" />
          </Pressable>
        </View>
      </Header>
      <View className="flex-1 mt-2">
        <View className="mt-auto">
          <ScrollView ref={scrollViewRef}>
            <View className="px-9">
              {messages.map((msg, i) => (
                <View key={i} className={`mb-10 py-2 pr-3 pl-4 rounded-b-2xl w-4/5
                ${msg.isClient ? clientMessageClasses : myMessageClasses}`}
                >
                  <Text className={`ml-auto text-[10px] font-gilroy ${msg.isClient ? 'text-white' : 'text-primary-100 dark:text-primary-300'}`}>
                    {msg.time}
                  </Text>
                  <Text className={`text-base font-gilroy ${msg.isClient ? 'text-white' : 'text-primary-100 dark:text-primary-300'}`}>
                    {msg.content}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
      <View className="mx-9 mt-3 mb-10 relative">
        <View className="flex-row absolute left-0 right-0 -top-11">
          <Pressable onPress={() => setMessage('I have a doubt')}>
            <Text className="bg-[#D0CEDD] dark:bg-[#D4EDE4] py-2 px-4 mr-2 rounded-3xl text-sm text-black font-gilroy">I have a doubt</Text>
          </Pressable>
          <Pressable onPress={() => setMessage('Ok!')}>
            <Text className="bg-[#D0CEDD] dark:bg-[#D4EDE4] py-2 px-4 mr-2 rounded-3xl text-sm text-black font-gilroy">Ok!</Text>
          </Pressable>
          <Pressable onPress={() => setMessage('Hello')}>
            <Text className="bg-[#D0CEDD] dark:bg-[#D4EDE4] py-2 px-4 rounded-3xl text-sm text-black font-gilroy">Hello</Text>
          </Pressable>
        </View>
        <View className="flex-row items-end bg-[#ffffff] rounded-3xl py-4 px-7">
          <TextInput
            multiline
            placeholder="Type your message..."
            className="text-base text-black font-gilroy flex-1"
            value={message}
            onChangeText={setMessage}
          />
          <Pressable onPress={handleSend}>
            <SendIcon color={colorScheme === 'light' ? '#4D509E' : '#60EAC0'} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
