import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop"; // Import the ScrollToTop component

// Import all page components
import HomePage from "./Pages/HomePage";
import LeadersPage from "./Pages/LeadersPage";
import Signup from "./Pages/Signup";
import History from "./Pages/History";
import Training from "./Pages/Training";
import MottoAndCrest from "./Pages/MottoAndCrest";
import Organization from "./Pages/Organization";
import Photo from "./Pages/Photo";
import Video from "./Pages/Video";
import Login from './Pages/Login';
import UpdatesPage from './Pages/UpdatesPage';
import Officer from './Pages/Officer';
import Background from "./Pages/bg";
import BattleHonours from "./Pages/battlehnrs";
import GallantryAwards from "./Pages/GallantryAwds";
import DistinguishedServiceAwards from "./Pages/DistinguishedServiceAwds";
import WearingOfMedals from "./Pages/WearingMdls";
import HonoraryCommission from "./Pages/Honrarycommi";
import ListOfAwardees from "./Pages/ListofAwdees";
import MonetaryAllowances from "./Pages/Monetaryallowa";
import CommonwealthWarGravesCommission from "./Pages/CommonwealthwaregraveComm";
import SouthCommand from "./Pages/SouthCommand";
import ImportantLinksPage from "./Pages/ImportantLinksPage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import SiteCredits from "./Pages/SiteCredits";

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Ensure ScrollToTop is inside Router but outside of Routes */}
      <Routes>
        {/* All your routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/Leaders" element={<LeadersPage />} />
        <Route path="/Pages/History" element={<History />} />
        <Route path="/background" element={<Background />} />
        <Route path="/battle-honours" element={<BattleHonours />} />
        <Route path="/gallantry-awards" element={<GallantryAwards />} />
        <Route path="/distinguished-service-awards" element={<DistinguishedServiceAwards />} />
        <Route path="/wearing-of-medals" element={<WearingOfMedals />} />
        <Route path="/honorary-commission" element={<HonoraryCommission />} />
        <Route path="/list-of-awardees" element={<ListOfAwardees />} />
        <Route path="/monetary-allowances" element={<MonetaryAllowances />} />
        <Route path="/commonwealth-war-graves-commission" element={<CommonwealthWarGravesCommission />} />
        <Route path="/Training" element={<Training />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Photo" element={<Photo />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/UpdatesPage" element={<UpdatesPage />} />
        <Route path="/Officer" element={<Officer />} />
        <Route path="/Pages/Organization" element={<Organization />} />
        <Route path="/Pages/MottoAndCrest" element={<MottoAndCrest />} />
        <Route path="/SouthCommand" element={<SouthCommand />} /> 
        <Route path="/ImportantLinksPage" element={<ImportantLinksPage />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/SiteCredits" element={<SiteCredits />} />
      </Routes>
    </Router>
  );
};

export default App;
