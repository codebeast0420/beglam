import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';

import Header from '_components/Header';

import { StarIcon, StarOutlineIcon, MakeoverIcon } from '_components/icons';

const AvatarServiceClient = require('_assets/images/avatar-service-client.png');
const Gallery1 = require('_assets/images/gallery1.png');
const Gallery2 = require('_assets/images/gallery2.png');
const Gallery3 = require('_assets/images/gallery3.png');
const Review = require('_assets/images/review.png');

const Detail = () => {
  const reviews = ['review1', 'review1', 'review1', 'review1', 'review1'];

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
        <View className="mt-9 px-9">
          <View className="flex-row items-center">
            <View className="flex-row items-center flex-1">
              <MakeoverIcon />
              <Text className="ml-2 text-base text-primary-100 font-gilroy-bold">
                Make over
              </Text>
            </View>
            <Text className="text-base text-secondary-200 font-gilroy-bold mr-6">
              $1.5 - 6.5
            </Text>
          </View>
          <View className="flex-row gap-x-1 my-14">
            <Image source={Gallery1} className="rounded-3xl" />
            <Image source={Gallery2} className="rounded-3xl" />
            <Image source={Gallery3} className="rounded-3xl" />
          </View>
          <View className="flex-row justify-between items-center mb-5">
            <Text className="text-base text-secondary-200 font-gilroy-bold">Reviews (321)</Text>
            <View className="flex-row">
              <StarOutlineIcon />
              <Text className="ml-1 text-xl text-secondary-200 font-gilroy">4.8</Text>
            </View>
          </View>
          {reviews.map((review, i) => (
            <View key={i} className="mb-6">
              <View className="flex-row mb-5">
                <Image source={Review} className="rounded-2xl w-10 h-10 mr-4" />
                <View>
                  <Text className="text-sm text-primary-100 font-gilroy-bold mb-1">Jane Cooper</Text>
                  <View className="flex-row">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarOutlineIcon />
                    <StarOutlineIcon />
                  </View>
                </View>
              </View>
              <View className="relative pb-2">
                <Text className="text-sm font-gilroy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tellus aliquam at.</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
