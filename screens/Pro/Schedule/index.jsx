import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import {
  Calendar,
  LocaleConfig,
} from 'react-native-calendars';

import Header from '_components/Header';
import Button from '_components/Button';
import { ArrowLeftIcon } from '_components/icons';

LocaleConfig.locales[''] = {
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};
LocaleConfig.defaultLocale = '';

const Schedule = ({ navigation }) => {
  const [search, setSearch] = useState(false);
  const services = [
    { name: 'Stella Stewart' },
    { name: 'Stella Stewart', canceled: true, },
    { name: 'Stella Stewart' },
    { name: 'Stella Stewart' },
  ];

  const goBack = () => {
    if (search) {
      return setSearch(false);
    }
    navigation.goBack();
  };

  return (
    <SafeAreaView className="flex-1">
      <Header title="Schedule" goBack={goBack} />

      <ScrollView>
        <View className="px-9 pt-6 pb-10">
          <View className="bg-[#ffffff] rounded-2xl p-5 mb-6">
            <Calendar
              monthFormat={'MMMM'}
              dayFormat={'D'}
              enableSwipeMonths={true}
              renderArrow={direction => direction === 'left' ? <ArrowLeftIcon color="#60EAC0" /> : <ArrowLeftIcon color="#60EAC0" className="rotate-180" />}
              markedDates={{
                '2023-02-16': { selected: true, marked: true, dotColor: '#2EC89A', },
                '2023-02-18': { selected: true },
              }}
              theme={{
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
          {!search &&
            <View className="bg-[#ffffff] rounded-2xl py-8 px-6 items-center">
              <Text className="text-base text-center text-primary-300 font-gilroy mb-5">To provide services to customers, we need to know what you can do.</Text>
              <Text className="text-base text-center text-primary-300 font-gilroy-bold mb-7">Please made your first service!</Text>

              <Button
                title="My Services"
                type="pro-secondary"
                textClassName="text-base"
                containerClassName="w-[188px]"
                onPress={() => {
                  setSearch(true);
                  navigation.navigate('ProMyService');
                }}
              />
            </View>
          }
          {search &&
            <View className="space-y-4">
              {services.map((service, i) => (
                <View key={i} className="bg-[#ffffff] rounded-2xl p-5 mb-6">
                  <View className="flex-row justify-between mb-4">
                    <Text className="text-xl text-primary-300 font-gilroy">Stella Stewart</Text>
                    <Text className="text-xl text-primary-400 font-gilroy">8:02</Text>
                  </View>
                  <Text className="text-base text-primary-300 font-gilroy mb-3">Lisbon City, Hesus str. 43</Text>
                  <View className="flex-row justify-between">
                    <Text className="text-base text-primary-300 font-gilroy">Type of service: $80</Text>
                    <Text className={`text-2xl font-gilroy-bold ${service?.canceled ? 'text-[#C4C4C4]' : 'text-secondary-300'}`}>$80</Text>
                  </View>
                  <Text className={`mt-2 text-xl font-gilroy-bold ${service?.canceled ? 'text-secondary-100' : 'text-secondary-300'}`}>Done</Text>
                </View>
              ))}
            </View>
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Schedule;
