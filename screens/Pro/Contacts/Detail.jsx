import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';

import Header from '_components/Header';
import Button from '_components/Button';
import { MapMarkerAreaIcon, PhoneIcon } from '_components/icons';

const AvatarClient = require('_assets/images/avatar-action-center.png');

const Detail = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-[#ffffff]">
      <ScrollView>
        <Header>
          <View className="flex-1 flex-row justify-center items-center gap-x-6 pr-7">
            <View className="w-16 h-16 rounded-3xl overflow-hidden border-4 border-secondary-300">
              <Image source={AvatarClient} className="w-16 h-16" />
            </View>
            <Text className="text-xl text-[#ffffff] font-gilroy-bold">
              Esther Howard
            </Text>
          </View>
        </Header>
        <View className="px-9 pt-16">
          <View className="flex-row items-start mb-5">
            <MapMarkerAreaIcon color="#60EAC0" />
            <View className="flex-1 ml-4">
              <Text className="text-base text-secondary-300 font-gilroy-bold">Adress:</Text>
              <Text className="text-base text-primary-300 font-gilroy">Ranchview Dr. Richardson, California</Text>
            </View>
            <Button
              title="Show"
              variant="outline"
              type="pro-secondary"
              textClassName="text-base"
              containerClassName="w-20 py-3"
              onPress={() => { }}
            />
          </View>
          <View className="flex-row items-start mb-5">
            <PhoneIcon color="#60EAC0" />
            <View className="flex-1 ml-4">
              <Text className="text-base text-secondary-300 font-gilroy-bold">Phone</Text>
              <Text className="text-base text-primary-300 font-gilroy">1:+380 50 840 48 68</Text>
            </View>
            <Button
              title="Call"
              variant="outline"
              type="pro-secondary"
              textClassName="text-base"
              containerClassName="w-20 py-3"
              onPress={() => { }}
            />
          </View>
          <View className="flex-row items-start mb-24">
            <PhoneIcon color="#60EAC0" />
            <View className="flex-1 ml-4">
              <Text className="text-base text-secondary-300 font-gilroy-bold">Phone</Text>
              <Text className="text-base text-primary-300 font-gilroy">1:+380 50 840 48 68</Text>
            </View>
            <Button
              title="Call"
              variant="outline"
              type="pro-secondary"
              textClassName="text-base"
              containerClassName="w-20 py-3"
              onPress={() => { }}
            />
          </View>
          <Button
            title="Profile"
            type="pro-secondary"
            textClassName="text-base"
            onPress={() => navigation.navigate('ProfileClient')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
