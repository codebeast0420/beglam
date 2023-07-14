import React from 'react';
import { Image, SafeAreaView, ScrollView, View, Pressable } from 'react-native';

import Header from '_components/Header';
import Button from '_components/Button';

const Gallery1 = require('_assets/images/gallery-list1.png');
const Gallery2 = require('_assets/images/gallery-list2.png');

const Portfolio = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-[#ffffff]">
      <ScrollView>
        <Header title="Portfólio" />

        <View className="mt-10 px-9 pb-9">
          <View className="flex-row justify-between items-center mb-5">
            <Button
              title="Galery"
              type="pro-primary"
              containerClassName="w-[48%]"
              textClassName="text-base"
              onPress={() => { }}
            />
            <Button
              title="Favorite"
              variant="outline"
              type="pro-primary"
              containerClassName="w-[48%]"
              textClassName="text-base"
              onPress={() => { }}
            />
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
    </SafeAreaView >
  );
};

export default Portfolio;
