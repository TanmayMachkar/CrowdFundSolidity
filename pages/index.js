import React, {useState, useContext, useEffect} from "react";

import {CrowdFundingContext} from '../Context/CrowdFunding';
import {Hero, Card, PopUp} from '../Components';

const index = () => {
  const{
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations
  } = useContext(CrowdFundingContext);

  const [allCampaign, setAllCampaign] = useState();
  const [userCampaign, setUserCampaign] = useState();

  useEffect(() => {
    const getCampaignsData = getCampaigns();
    const userCampaignsData = getUserCampaigns();
    return async() => {
      const allData = await getCampaignsData;
      const userData = await userCampaignsData;
      setAllCampaign(allData);
      setUserCampaign(userData);
    }
  }, [])
  return <div>index</div>;
};

export default index;
