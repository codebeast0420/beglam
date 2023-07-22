import React from 'react';

import Settings from '_components/settings';

const ProSettings = () => {

  const options = [
    { title: 'Profile', href: 'ProfilePro' },
    { title: 'Permissions', href: 'ProSettingsPermissions' },
    { title: 'Language', href: 'ProSettingsLanguage', value: 'English' },
    { title: 'Security', href: 'ProSettingsSecurity' },
    { title: 'Watermarks', href: 'ProSettingsWatermarks' },
    { title: 'Notifications', href: 'ProSettingsNotifications', value: 'Disable all' },
    { title: 'Payments', href: 'ProSettingsPayments' },
    { title: 'Extra & Fees', href: 'ProSettingsExtra' },
    { title: 'Policy Privacy', href: 'ProHome' },
    { title: 'T&U', href: 'ProHome' },
    { title: 'FAQ', href: 'ProHome' },
    { title: 'Report', href: 'ProHome' },
  ];

  return (
    <Settings options={options} />
  );
};

export default ProSettings;
