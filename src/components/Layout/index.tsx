import React from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelIndo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelIndo />
      <ChannelList />
      <UserInfo />
    </Grid>
  );
}

export default Layout;