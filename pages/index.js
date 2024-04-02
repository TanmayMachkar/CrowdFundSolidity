import React, { useContext, useState, useEffect } from "react";
import { CrowdFundingContext } from '../Context/CrowdFunding';
import { Hero, Card, PopUp } from '../Components';

const index = () => {
  const { titleData, getCampaign, createCampaign, donate, getUserCampaigns, getDonations } = useContext(CrowdFundingContext);

  const [allCampaign, setAllCampaign] = useState();
  const [userCampaign, setUserCampaign] = useState();

  useEffect(() => {
    const getCampaignsData = getCampaign();
    const userCampaignsData = getUserCampaigns();
    return async() => {
      const allData = await getCampaignsData;
      const userData = await userCampaignsData;
      setAllCampaign(allData);
      setUserCampaign(userData);
    }
  }, [])

  //donate popup model
  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign,setDonateCampaign] = useState();

  console.log(donateCampaign);
  return(
    <div>
      <Hero titleData = {titleData} createCampaign = {createCampaign}/>
      <Card 
        title = 'All Listed Campaign'
        allCampaign = {allCampaign}
        setOpenModel = {setOpenModel}
        setDonate = {setDonateCampaign}
      />
      <Card
        title = 'Your Created Campaigns'
        allCampaign = {userCampaign}
        setOpenModel = {setOpenModel}
        setDonate = {setDonateCampaign} //checking how many users have donated + it's details 
      />

      {openModel && (
        <PopUp
          setOpenModel = {setOpenModel}
          getDonations = {getDonations}
          donate = {donateCampaign}
          donateFunction = {donate}
        />  
      )}
    </div>
  );
};

export default index;
