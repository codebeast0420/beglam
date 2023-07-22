import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '_components/Header';
import Button from '_components/Button';

import { MakeoverIcon } from '_components/icons';

const AvatarServiceClient = require('_assets/images/avatar-service-client.png');
const Gallery1 = require('_assets/images/gallery-list1.png');
const Gallery2 = require('_assets/images/gallery-list2.png');

const Gallery = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-[#ffffff]">
      <ScrollView>
        <Header>
          <View className="flex-1 flex-row justify-center items-center gap-x-6 pr-7">
            <View className="w-16 h-16 rounded-3xl overflow-hidden border-4 border-secondary-200">
              <Image source={AvatarServiceClient} className="w-16 h-16" />
            </View>
            <Text className="text-xl text-[#ffffff] font-gilroy-bold mb-3">
              Esther Howard
            </Text>
          </View>
        </Header>
        <View className="mt-10 px-9 pb-40">
          <View className="flex-row items-center mb-5">
            <MakeoverIcon />
            <Text className="ml-2 text-base text-primary-100 font-gilroy-bold">Make over</Text>
          </View>
          <View className="flex-row flex-wrap justify-between gap-2">
            <Pressable
              className="rounded-[40px] w-[47%] max-h-40 aspect-square overflow-hidden"
              onPress={() => navigation.navigate('ProfileProGalleryDetail')}
            >
              <Image source={Gallery1} className="w-full h-full" />
            </Pressable>
            <Pressable
              className="rounded-[40px] w-[47%] max-h-40 aspect-square overflow-hidden"
              onPress={() => navigation.navigate('ProfileProGalleryDetail')}
            >
              <Image source={Gallery2} className="w-full h-full" />
            </Pressable>
            <Pressable
              className="rounded-[40px] w-full max-h-40 aspect-square overflow-hidden"
              onPress={() => navigation.navigate('ProfileProGalleryDetail')}
            >
              <Image source={Gallery1} className="w-full h-full" />
            </Pressable>
            <View className="w-[47%]">
              <Pressable
                className="rounded-[40px] overflow-hidden mb-2"
                onPress={() => navigation.navigate('ProfileProGalleryDetail')}
              >
                <Image source={Gallery2} className="w-full" />
              </Pressable>
              <Pressable
                className="rounded-[40px] overflow-hidden"
                onPress={() => navigation.navigate('ProfileProGalleryDetail')}
              >
                <Image source={Gallery2} className="w-full" />
              </Pressable>
            </View>
            <Pressable
              className="rounded-[40px] w-[47%] max-h-[338px] overflow-hidden"
              onPress={() => navigation.navigate('ProfileProGalleryDetail')}
            >
              <Image source={Gallery1} className="w-full h-full" />
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <LinearGradient
        colors={['#ffffff00', '#ffffff']}
        locations={[0, 0.4]}
        className="absolute bottom-0 left-0 right-0 px-9 pt-20 pb-10"
      >
        <Button
          title="BOOK NOW"
          type="client-secondary"
          textClassName="text-base"
          onPress={() => { }}
        />
      </LinearGradient>
    </SafeAreaView >
  );
};

export default Gallery;
