import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import {
  Calendar,
  LocaleConfig,
} from 'react-native-calendars';
import Switch from 'react-native-switch-toggles';

import Header from '_components/Header';
import { ArrowLeftIcon } from '_components/icons';

LocaleConfig.locales[''] = {
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};
LocaleConfig.defaultLocale = '';

const WorkTime = ({ navigation }) => {
  const days = [
    { title: 'Monday - 12', bgColor: 'bg-primary-300' },
    { title: 'Tuesday - 13', bgColor: 'bg-secondary-100' },
    { title: 'Wednesday - 14', bgColor: 'bg-primary-400' },
    { title: 'Thursday - 15', bgColor: 'bg-primary-300' },
  ];
  return (
    <SafeAreaView className="flex-1">
      <Header title="Work Time" />

      <ScrollView>
        <View className="px-9 pt-6 pb-10">
          <View className="bg-[#ffffff] rounded-2xl p-5 mb-6">
            <Calendar
              monthFormat={'MMMM'}
              dayFormat={'D'}
              enableSwipeMonths={true}
              renderArrow={direction => direction === 'left' ? <ArrowLeftIcon color="#60EAC0" /> : <ArrowLeftIcon className="rotate-180" color="#60EAC0" />}
              markedDates={{
                '2023-02-16': { selected: true },
                '2023-02-18': { marked: true, dotColor: '#ED6960', },
                '2023-02-07': { marked: true, dotColor: '#ED6960', },
                '2023-02-08': { marked: true, dotColor: '#ED6960', },
              }}
              theme={{
                arrowColor: '#60EAC0',
                dayTextColor: '#000000',
                monthTextColor: '#4E819B',
                textSectionTitleColor: '#000000',
                textMonthFontFamily: 'Gilroy-Regular',
                textDayHeaderFontFamily: 'Gilroy-Regular',
                textDayFontFamily: 'Gilroy-Regular',
                textMonthFontSize: 24,
                textDayFontSize: 18,
                textDayHeaderFontSize: 24,
                'stylesheet.day.basic': {
                  selected: {
                    backgroundColor: '#4E819B',
                    borderRadius: 12
                  }
                }
              }}
            />
          </View>
          <View className="flex-row items-center justify-between bg-[#ffffff] rounded-2xl p-5 sm:p-8">
            <View className="flex-row items-center">
              <Text className="text-xl sm:text-xl text-[#C4C4C4] font-gilroy mr-5">Desable</Text>
              <Switch
                activeTrackColor="#60EAC0"
                onChange={(value) => { }}
              />
            </View>
            <View>
              <Text className="text-base text-[#C4C4C4] font-gilroy">Week</Text>
              <View className="flex-row">
                <Text className="text-xl sm:text-2xl text-primary-300 font-gilroy mr-1">Total:</Text>
                <Text className="text-xl sm:text-2xl text-secondary-300 font-gilroy-bold">30h</Text>
              </View>
            </View>
          </View>
          <View className="space-y-4 mt-6">
            {days.map((day, i) => (
              <View key={i} className={`${day.bgColor} rounded-3xl`}>
                <View className="flex-row justify-between py-3 px-8">
                  <Text className="text-xl text-[#ffffff] font-gilroy">{day.title}</Text>
                  <Switch
                    activeTrackColor="#60EAC0"
                    onChange={(value) => { }}
                  />
                </View>
                <View className="bg-[#ffffff] rounded-3xl pt-8 pl-8 pr-6 pb-9">
                  <View className="flex-row justify-between">
                    <View>
                      <View className="flex-row items-center">
                        <Text className="text-base text-primary-400 font-gilroy-bold">Start</Text>
                        <View className="h-[1px] w-5 mx-2 bg-secondary-300"></View>
                        <Text className="text-base text-primary-400 font-gilroy-bold">End</Text>
                      </View>
                      <View className="flex-row">
                        <Text className="text-xl text-primary-400 font-gilroy mr-4">00:00</Text>
                        <Text className="text-xl text-primary-400 font-gilroy">13:00</Text>
                      </View>
                    </View>
                    <View>
                      <View className="flex-row items-center">
                        <Text className="text-base text-primary-400 font-gilroy-bold">Start</Text>
                        <View className="h-[1px] w-5 mx-2 bg-secondary-300"></View>
                        <Text className="text-base text-primary-400 font-gilroy-bold">End</Text>
                      </View>
                      <View className="flex-row">
                        <Text className="text-xl text-primary-400 font-gilroy mr-4">14:00</Text>
                        <Text className="text-xl text-primary-400 font-gilroy">18:00</Text>
                      </View>
                    </View>
                  </View>
                  <View className="flex-row justify-between mt-4">
                    <Text className="text-base text-primary-300 font-gilroy">Break: 1h</Text>
                    <Text className="text-base text-primary-300 font-gilroy">Tax: 0%</Text>
                    <Text className="text-base text-primary-300 font-gilroy">Total:
                      <Text className="text-secondary-300 font-gilroy-bold"> 8h</Text>
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WorkTime;
