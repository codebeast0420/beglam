import React from 'react';

import SwitchList from '_components/settings/SwitchList';

const ProPermissions = () => {
  const options = [
    { title: 'Camera' },
    { title: 'GPS' },
    { title: 'Contact' },
    { title: 'Name search' },
    { title: 'Regular service' },
    { title: 'Purple service' },
    { title: 'Red service' },
  ];

  return (
    <SwitchList title="Permissions" options={options} />
  );
};

export default ProPermissions;
