import React from 'react';
import { Image, SafeAreaView, Text, TextInput, View, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { ArrowLeftIcon, ShareIcon } from '_components/icons';

const Gallery1 = require('_assets/images/gallery-list1.png');

const GalleryDetail = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-[#ffffff]">
      <Image source={Gallery1} className="w-full h-full" />

      <LinearGradient
        colors={['#ED6960dd', '#ED696000']}
        locations={[0, 0.4]}
        className="absolute top-0 left-0 right-0 px-9 pt-20 pb-10 flex-row justify-between items-center"
      >
        <Pressable onPress={() => navigation.goBack()}>
          <ArrowLeftIcon color="white" />
        </Pressable>
        <Text className="text-3xl text-[#ffffff] font-gilroy-bold">1/3</Text>
        <ShareIcon />
      </LinearGradient>
      <LinearGradient
        colors={['#ED696000', '#ED6960dd']}
        locations={[0, 0.7]}
        className="absolute bottom-0 left-0 right-0 px-9 pt-20 pb-10"
      >
        <View className="h-24 border border-[#ffffff] py-4 px-6 rounded-3xl">
          <TextInput
            multiline
            placeholder="Comment..."
            placeholderTextColor="white"
            className="text-base text-[#ffffff] font-gilroy"
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default GalleryDetail;
