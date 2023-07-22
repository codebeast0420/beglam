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
              renderArrow={direction => direction === 'left' ? <ArrowLeftIcon /> : <ArrowLeftIcon className="rotate-180" />}
              markedDates={{
                '2023-02-16': { selected: true, marked: true, dotColor: '#2EC89A', },
                '2023-02-18': { selected: true },
              }}
              theme={{
                arrowColor: '#EEA4A7',
                dayTextColor: '#000000',
                monthTextColor: '#4D509E',
                textSectionTitleColor: '#000000',
                textMonthFontFamily: 'Gilroy-Regular',
                textDayHeaderFontFamily: 'Gilroy-Regular',
                textDayFontFamily: 'Gilroy-Regular',
                textMonthFontSize: 24,
                textDayFontSize: 18,
                textDayHeaderFontSize: 24,
                'stylesheet.day.basic': {
                  selected: {
                    backgroundColor: '#4D509E',
                    borderRadius: 12
                  }
                }
              }}
            />
          </View>
          {!search &&
            <View className="bg-[#ffffff] rounded-2xl py-8 px-12">
              <Text className="text-base text-center text-primary-100 font-gilroy mb-3">You haven't booked any services yet.</Text>
              <Text className="text-base text-center text-primary-100 font-gilroy-bold mb-7">Schedule with a professional</Text>

              <Button
                title="Search for professionals"
                type="client-secondary"
                textClassName="text-base"
                onPress={() => setSearch(true)}
              />
            </View>
          }
          {search &&
            <View className="bg-[#ffffff] rounded-2xl p-5 mb-6">
              <View className="flex-row justify-between mb-4">
                <Text className="text-xl text-primary-200 font-gilroy">Esther Howard</Text>
                <Text className="text-xl text-[#B6BA9D] font-gilroy">8:02</Text>
              </View>
              <Text className="text-base text-primary-200 font-gilroy mb-3">Lisbon City, Hesus str. 43</Text>
              <View className="flex-row justify-between">
                <Text className="text-base text-primary-200 font-gilroy">Type of service: $80</Text>
                <Text className="text-2xl text-secondary-200 font-gilroy-bold">$80</Text>
              </View>
            </View>
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Schedule;
