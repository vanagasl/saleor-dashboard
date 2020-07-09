import { configurationMenuUrl } from "@saleor/configuration";
import useNavigator from "@saleor/hooks/useNavigator";
import React from "react";

import ChannelsListPage from "../../pages/ChannelsListPage";
import { useChannelsList } from "../../queries";
import {
  channelAddUrl,
  ChannelsListUrlQueryParams,
  channelUrl
} from "../../urls";

interface ChannelsListProps {
  params: ChannelsListUrlQueryParams;
}

export const ChannelsList: React.FC<ChannelsListProps> = () => {
  const navigate = useNavigator();
  const { data, loading } = useChannelsList({ displayLoader: true });

  const navigateToChannelCreate = () => navigate(channelAddUrl);

  const onRemove = () => null;

  return (
    <ChannelsListPage
      channelsList={data?.channels}
      disabled={loading}
      navigateToChannelCreate={navigateToChannelCreate}
      onBack={() => navigate(configurationMenuUrl)}
      onRowClick={id => () => navigate(channelUrl(id))}
      onRemove={onRemove}
    />
  );
};

ChannelsList.displayName = "ChannelsList";
export default ChannelsList;
