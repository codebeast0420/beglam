import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import {
  Calendar,
  LocaleConfig,
} from 'react-native-calendars';

import Button from '_components/Button';
import CheckBox from '_components/CheckBox';

import { ArrowLeftIcon, CalendarIcon, TimesIcon, ClockIcon } from '_components/icons';

LocaleConfig.locales[''] = {
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};
LocaleConfig.defaultLocale = '';

const SelectTime = ({ onNext }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleNext = () => {
    onNext && onNext();
    setOpenModal(false);
  };

  return (
    <>
      <Text className="text-[32px] text-secondary-200 font-gilroy mb-8">When?</Text>
      <Pressable
        className="flex-row items-center mb-12 border border-primary-100 rounded-2xl py-4 px-6"
        onPress={() => setOpenModal(true)}
      >
        <CalendarIcon />
        <Text className="ml-4 text-base text-primary-100 font-gilroy">Select date and time</Text>
      </Pressable>
      <Modal isVisible={openModal}>
        <View className="p-5 bg-[#ffffff] rounded-3xl">
          <View className="items-end">
            <Pressable onPress={() => setOpenModal(false)}>
              <TimesIcon />
            </Pressable>
          </View>
          <View className="px-3 sm:px-7 pb-3">
            <Calendar
              monthFormat={'MMMM'}
              dayFormat={'D'}
              enableSwipeMonths={true}
              renderArrow={direction => direction === 'left' ? <ArrowLeftIcon /> : <ArrowLeftIcon className="rotate-180" />}
              markedDates={{
                '2023-07-14': { marked: true, dotColor: '#ED6960', },
                '2023-07-15': { marked: true, dotColor: '#ED6960', },
                '2023-07-16': { marked: true, dotColor: '#ED6960', },
                '2023-07-17': { marked: true, dotColor: '#ED6960', },
                '2023-07-18': { marked: true, dotColor: '#ED6960', },
                '2023-07-19': { selected: true },
              }}
              theme={{
                arrowColor: '#EEA4A7',
                dayTextColor: '#000000',
                monthTextColor: '#2EC89A',
                textSectionTitleColor: '#000000',
                textMonthFontFamily: 'Gilroy-Regular',
                textDayHeaderFontFamily: 'Gilroy-Regular',
                textDayFontFamily: 'Gilroy-Regular',
                textMonthFontSize: 24,
                textDayFontSize: 18,
                textDayHeaderFontSize: 24,
                'stylesheet.day.basic': {
                  selected: {
                    backgroundColor: '#2EC89A',
                    borderRadius: 12
                  },
                  today: {
                    borderColor: '#ffe6e6', 
                    backgroundColor: '#ffe6e6',
                    borderWidth: 2,
                    borderRadius: 12, 
                  },
                }
              }}
            />
            <View className="flex-row items-center mt-8 mb-3">
              <ClockIcon />
              <Text className="ml-3 text-sm text-black font-gilroy">Available times</Text>
            </View>
            <View className="flex-row flex-wrap gap-y-2">
              <View className="flex-row w-1/2">
                <CheckBox />
                <Text className="ml-3 text-base text-primary-100 font-gilroy">08:00</Text>
              </View>
              <View className="flex-row w-1/2">
                <CheckBox />
                <Text className="ml-3 text-base text-primary-100 font-gilroy">16:00</Text>
              </View>
              <View className="flex-row w-1/2">
                <CheckBox />
                <Text className="ml-3 text-base text-primary-100 font-gilroy">09:00</Text>
              </View>
              <View className="flex-row w-1/2">
                <CheckBox />
                <Text className="ml-3 text-base text-primary-100 font-gilroy">18:00</Text>
              </View>
            </View>
            <Text className="mt-8 mb-6 text-xl text-secondary-200 font-gilroy">January 6, 2022 at 08:00 am</Text>
            <Button
              title="Next"
              type="client-secondary"
              textClassName="text-base"
              containerClassName="py-3 sm:py-4"
              onPress={handleNext}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SelectTime;
