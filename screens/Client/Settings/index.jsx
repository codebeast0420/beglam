import React from 'react';

import Settings from '_components/settings';

const ClientSettings = () => {
  const options = [
    { title: 'Profile', href: 'ProfileClient' },
    { title: 'Permissions', href: 'ClientSettingsPermissions' },
    { title: 'Language', href: 'ClientSettingsLanguage', value: 'English' },
    { title: 'Security', href: 'ClientSettingsSecurity' },
    { title: 'Notifications', href: 'ClientSettingsNotifications', value: 'Disable all' },
    { title: 'Policy Privacy', href: 'ClientHome' },
    { title: 'T&U', href: 'ClientHome' },
    { title: 'FaQ', href: 'ClientHome' },
  ];

  return (
    <Settings options={options} />
  );
};

export default ClientSettings;
