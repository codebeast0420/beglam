import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Auth
import AuthScreen from '_screens/Auth';
import LoginScreen from '_screens/Auth/Login';
import SelectAccountTypeScreen from '_screens/Auth/Register/SelectAccountType';
import RegisterScreen from '_screens/Auth/Register';
import RegisterProScreen from '_screens/Auth/Register/RegisterPro';
import ConfirmAccountScreen from '_screens/Auth/Register/ConfirmAccount';

// Client
import ClientHomeScreen from '_screens/Client/Home';
import ClientMyHistoryScreen from '_screens/Client/MyHistory';
import ClientMyHistoryMonthScreen from '_screens/Client/MyHistory/Month';
import ClientMyHistoryDetailScreen from '_screens/Client/MyHistory/Detail';
import ClientSettingsScreen from '_screens/Client/Settings';
import ClientSettingsPermissionsScreen from '_screens/Client/Settings/Permissions';
import ClientSettingsNotificationsScreen from '_screens/Client/Settings/Notifications';
import ClientSettingsLanguageScreen from '_screens/Client/Settings/Language';
import ClientSettingsSecurityScreen from '_screens/Client/Settings/Security';

import ProfileProScreen from '_screens/Client/Profile/ProfilePro';
import ProfileProDetailScreen from '_screens/Client/Profile/ProfilePro/Detail';
import ProfileProGalleryScreen from '_screens/Client/Profile/ProfilePro/Gallery';
import ProfileProGalleryDetailScreen from '_screens/Client/Profile/ProfilePro/GalleryDetail';

import ProfileClientScreen from '_screens/Client/Profile/ProfileClient';
import ProfileClientEditScreen from '_screens/Client/Profile/ProfileClient/Edit';
import ProfileClientCreateScreen from '_screens/Client/Profile/ProfileClient/Create';
import ProfileClientEditPaymentScreen from '_screens/Client/Profile/ProfileClient/Payment';

import ClientContactsScreen from '_screens/Client/Contacts';
import ClientContactsDetailScreen from '_screens/Client/Contacts/Detail';

import ClientFavoritesScreen from '_screens/Client/Favorites';
import ClientScheduleScreen from '_screens/Client/Schedule';

import BookNowScreen from '_screens/Client/BookNow';
import ClientReviewScreen from '_screens/Client/Review';

// Professional
import ProHomeScreen from '_screens/Pro/Home';

import ProSettingsScreen from '_screens/Pro/Settings';
import ProSettingsPermissionsScreen from '_screens/Pro/Settings/Permissions';
import ProSettingsNotificationsScreen from '_screens/Pro/Settings/Notifications';
import ProSettingsLanguageScreen from '_screens/Pro/Settings/Language';
import ProSettingsSecurityScreen from '_screens/Pro/Settings/Security';
import ProSettingsWatermarksScreen from '_screens/Pro/Settings/Watermarks';
import ProSettingsExtraScreen from '_screens/Pro/Settings/Extra';
import ProSettingsPaymentsScreen from '_screens/Pro/Settings/Payments';
import ProSettingsPaymentsDetailScreen from '_screens/Pro/Settings/PaymentsDetail';

import ProActionCenterScreen from '_screens/Pro/ActionCenter';

import ProContactsScreen from '_screens/Pro/Contacts';
import ProContactsDetailScreen from '_screens/Pro/Contacts/Detail';

import ProMyHistoryScreen from '_screens/Pro/MyHistory';
import ProMyHistoryMonthScreen from '_screens/Pro/MyHistory/Month';
import ProMyHistoryDetailScreen from '_screens/Pro/MyHistory/Detail';

import ProFinancesScreen from '_screens/Pro/Finances';
import ProFinancesMonthScreen from '_screens/Pro/Finances/Month';
import ProFinancesDetailScreen from '_screens/Pro/Finances/Detail';

import ProWorkTimeScreen from '_screens/Pro/WorkTime';
import ProScheduleScreen from '_screens/Pro/Schedule';

import ProfileProEditScreen from '_screens/Pro/Profile/Edit';
import ProPortfolioScreen from '_screens/Pro/Profile/Portfolio';

import ProMyServiceScreen from '_screens/Pro/MyService';
import ProMyServiceHomeScreen from '_screens/Pro/MyService/Home';
import ProMyServiceNewScreen from '_screens/Pro/MyService/NewService';
import ProMyServiceFormScreen from '_screens/Pro/MyService/Form';

import ProCreditScreen from '_screens/Pro/Credit';
import ProCreditSimulatorScreen from '_screens/Pro/Credit/Simulator';
import ProCreditPersonalDataScreen from '_screens/Pro/Credit/PersonalData';
import ProCreditBankAccountScreen from '_screens/Pro/Credit/BankAccount';
import ProCreditAboutCreditScreen from '_screens/Pro/Credit/AboutCredit';
import ProCreditOrderSummaryScreen from '_screens/Pro/Credit/OrderSummary';

import ChatScreen from '_screens/Chat';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Auth"
      >
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SelectAccountType" component={SelectAccountTypeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="RegisterPro" component={RegisterProScreen} />
        <Stack.Screen name="ConfirmAccount" component={ConfirmAccountScreen} />

        <Stack.Screen name="Chat" component={ChatScreen} />

        <Stack.Screen name="ClientHome" component={ClientHomeScreen} />

        <Stack.Screen name="ClientMyHistory" component={ClientMyHistoryScreen} />
        <Stack.Screen name="ClientMyHistoryMonth" component={ClientMyHistoryMonthScreen} />
        <Stack.Screen name="ClientMyHistoryDetail" component={ClientMyHistoryDetailScreen} />

        <Stack.Screen name="ClientSettings" component={ClientSettingsScreen} />
        <Stack.Screen name="ClientSettingsPermissions" component={ClientSettingsPermissionsScreen} />
        <Stack.Screen name="ClientSettingsNotifications" component={ClientSettingsNotificationsScreen} />
        <Stack.Screen name="ClientSettingsLanguage" component={ClientSettingsLanguageScreen} />
        <Stack.Screen name="ClientSettingsSecurity" component={ClientSettingsSecurityScreen} />

        <Stack.Screen name="ProfilePro" component={ProfileProScreen} />
        <Stack.Screen name="ProfileProDetail" component={ProfileProDetailScreen} />
        <Stack.Screen name="ProfileProGallery" component={ProfileProGalleryScreen} />
        <Stack.Screen name="ProfileProGalleryDetail" component={ProfileProGalleryDetailScreen} />

        <Stack.Screen name="ProfileClient" component={ProfileClientScreen} />
        <Stack.Screen name="ProfileClientEdit" component={ProfileClientEditScreen} />
        <Stack.Screen name="ProfileClientCreate" component={ProfileClientCreateScreen} />
        <Stack.Screen name="ProfileClientEditPayment" component={ProfileClientEditPaymentScreen} />

        <Stack.Screen name="ClientContacts" component={ClientContactsScreen} />
        <Stack.Screen name="ClientContactsDetail" component={ClientContactsDetailScreen} />

        <Stack.Screen name="ClientFavorites" component={ClientFavoritesScreen} />
        <Stack.Screen name="ClientSchedule" component={ClientScheduleScreen} />

        <Stack.Screen name="BookNow" component={BookNowScreen} />
        <Stack.Screen name="ClientReview" component={ClientReviewScreen} />

        {/* Professional */}
        <Stack.Screen name="ProHome" component={ProHomeScreen} />

        <Stack.Screen name="ProSettings" component={ProSettingsScreen} />
        <Stack.Screen name="ProSettingsPermissions" component={ProSettingsPermissionsScreen} />
        <Stack.Screen name="ProSettingsNotifications" component={ProSettingsNotificationsScreen} />
        <Stack.Screen name="ProSettingsLanguage" component={ProSettingsLanguageScreen} />
        <Stack.Screen name="ProSettingsSecurity" component={ProSettingsSecurityScreen} />
        <Stack.Screen name="ProSettingsWatermarks" component={ProSettingsWatermarksScreen} />
        <Stack.Screen name="ProSettingsExtra" component={ProSettingsExtraScreen} />
        <Stack.Screen name="ProSettingsPayments" component={ProSettingsPaymentsScreen} />
        <Stack.Screen name="ProSettingsPaymentsDetail" component={ProSettingsPaymentsDetailScreen} />

        <Stack.Screen name="ProActionCenter" component={ProActionCenterScreen} />

        <Stack.Screen name="ProContacts" component={ProContactsScreen} />
        <Stack.Screen name="ProContactsDetail" component={ProContactsDetailScreen} />

        <Stack.Screen name="ProMyHistory" component={ProMyHistoryScreen} />
        <Stack.Screen name="ProMyHistoryMonth" component={ProMyHistoryMonthScreen} />
        <Stack.Screen name="ProMyHistoryDetail" component={ProMyHistoryDetailScreen} />

        <Stack.Screen name="ProFinances" component={ProFinancesScreen} />
        <Stack.Screen name="ProFinancesMonth" component={ProFinancesMonthScreen} />
        <Stack.Screen name="ProFinancesDetail" component={ProFinancesDetailScreen} />

        <Stack.Screen name="ProWorkTime" component={ProWorkTimeScreen} />
        <Stack.Screen name="ProSchedule" component={ProScheduleScreen} />

        <Stack.Screen name="ProPortfolio" component={ProPortfolioScreen} />
        <Stack.Screen name="ProfileProEdit" component={ProfileProEditScreen} />

        <Stack.Screen name="ProMyService" component={ProMyServiceScreen} />
        <Stack.Screen name="ProMyServiceHome" component={ProMyServiceHomeScreen} />
        <Stack.Screen name="ProMyServiceNew" component={ProMyServiceNewScreen} />
        <Stack.Screen name="ProMyServiceForm" component={ProMyServiceFormScreen} />

        <Stack.Screen name="ProCredit" component={ProCreditScreen} />
        <Stack.Screen name="ProCreditSimulator" component={ProCreditSimulatorScreen} />
        <Stack.Screen name="ProCreditPersonalData" component={ProCreditPersonalDataScreen} />
        <Stack.Screen name="ProCreditBankAccount" component={ProCreditBankAccountScreen} />
        <Stack.Screen name="ProCreditAboutCredit" component={ProCreditAboutCreditScreen} />
        <Stack.Screen name="ProCreditOrderSummary" component={ProCreditOrderSummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
