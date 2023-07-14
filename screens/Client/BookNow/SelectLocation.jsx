import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { MapMarkerAreaIcon, StarIcon, StarOutlineIcon } from '_components/icons';

const SelectLocation = () => {
  const [focused, setFocused] = useState(false);
  const [selected, setSelected] = useState(false);
  const [selectedSecond, setSelectedSecond] = useState(false);

  return (
    <>
      <Text className="text-[32px] text-secondary-200 font-gilroy mb-8">Where it will be</Text>
      <Pressable
        className="flex-row items-center mb-8 border border-primary-100 rounded-2xl py-3 px-6"
        onPress={() => setFocused(true)}
      >
        <MapMarkerAreaIcon color="#4D509E" width="24" height="24" />
        <View className="ml-4">
          <Text className="text-base text-secondary-200 font-gilroy">My Current location</Text>
          <Text className="text-xs text-[#C4C4C4] font-gilroy">The Svit myasa Turgenev str. 123...</Text>
        </View>
      </Pressable>
      {focused &&
        <View className="px-6">
          <ScrollView>
            <Pressable className="mb-6" onPress={() => setFocused(false)}>
              <Text className="mb-1 text-xs text-primary-100 font-gilroy">My Current location</Text>
              <Text className="text-xs text-[#C4C4C4] font-gilroy">The Svit myasa Turgenev str. 123...</Text>
            </Pressable>
            <Pressable className="mb-7" onPress={() => setFocused(false)}>
              <Text className="mb-1 text-xs text-primary-100 font-gilroy">Professional Location</Text>
              <Text className="text-xs text-[#C4C4C4] font-gilroy">The Svit myasa Turgenev str. 123...</Text>
            </Pressable>
            <View className="mb-7 flex-row justify-between items-center">
              <Text className="text-xs text-primary-100 font-gilroy">Ash Dr. San Jose, South Dakota 83</Text>
              <Pressable onPress={() => setSelected(prev => !prev)}>
                {selected ? <StarIcon /> : <StarOutlineIcon />}
              </Pressable>
            </View>
            <View className="mb-7 flex-row justify-between items-center">
              <Text className="text-xs text-primary-100 font-gilroy">Ash Dr. San Jose, South Dakota 83</Text>
              <Pressable onPress={() => setSelectedSecond(prev => !prev)}>
                {selectedSecond ? <StarIcon /> : <StarOutlineIcon />}
              </Pressable>
            </View>
          </ScrollView>
        </View>
      }
    </>
  );
};

export default SelectLocation;
