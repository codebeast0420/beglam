import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Switch from 'react-native-switch-toggles';
import { useColorScheme } from 'nativewind';

import Header from '_components/Header';

const SwitchList = ({ title, options }) => {
  const { colorScheme } = useColorScheme();

  return (
    <SafeAreaView className="flex-1">
      <Header title={title} />

      <ScrollView>
        <View className="px-9 pt-5 pb-12 gap-y-2">
          {options.map((option, i) => (
            <View
              key={i}
              className="rounded-2xl bg-[#ffffff] flex-row justify-between items-center py-3 px-6"
            >
              <Text className="text-2xl font-gilroy text-primary-200 dark:text-primary-300">{option.title}</Text>
              <Switch
                size={23}
                activeTrackColor={colorScheme === 'light' ? '#ED6960' : '#60EAC0'}
                onChange={(value) => { }}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SwitchList;
