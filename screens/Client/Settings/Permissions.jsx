import React from 'react';

import SwitchList from '_components/settings/SwitchList';

const ClientPermissions = () => {
  const options = [
    { title: 'Camera' },
    { title: 'GPS' },
    { title: 'Contact' },
    { title: 'Regular service' },
    { title: 'Purple service' },
    { title: 'Red service' },
    { title: 'Share photo' },
  ];

  return (
    <SwitchList title="Permissions" options={options} />
  );
};

export default ClientPermissions;
