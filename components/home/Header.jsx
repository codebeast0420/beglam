import React from 'react';
import { Image, View } from 'react-native';
import { useColorScheme } from 'nativewind';

import Sidebar from './Sidebar';
import ProfileSidebar from './ProfileSidebar';

const SmallLogo = require('_assets/images/logo-small.png');
const SmallLogoPro = require('_assets/images/logo-small-pro.png');

const Header = () => {
  const { colorScheme } = useColorScheme();

  return (
    <View className="flex-row justify-between items-center">
      <Sidebar />
      <Image source={colorScheme === 'dark' ? SmallLogoPro : SmallLogo} />
      <ProfileSidebar />
    </View>
  );
};

export default Header;
