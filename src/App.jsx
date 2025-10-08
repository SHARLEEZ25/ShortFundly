import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardMobile from "./MobileView/DashboardMobile.jsx";
import { AiToolMobile } from "./MobileView/AiToolMobile.jsx";
import { ContentUploadScreen } from "./MobileView/PreAiGenerator.jsx";
import { ChooseOutputTypeScreen } from "./MobileView/OutputTypeCard.jsx";
import { PostAIGeneratorScreen } from "./MobileView/PostAiGeneratorMobile.jsx";
import { InputFieldMobile } from "./MobileView/InputFieldMobile.jsx";
import FeedbackModal from "./MobileView/FeedBackMobile.jsx";
import UserSettings from "./MobileView/SettingsMobile.jsx";
import Dashboard from "./Dashboard.jsx";
import AiTool from "./AiTool.jsx";
import AIPosterGenerator from "./AiPosterGenerator.jsx";
import AssetDesktop from "./assetDesktop.jsx";
import {AIPosterGeneratorForm} from "./InputFieldDesktop.jsx";
import Upload from "./UploadFiles.jsx";














function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path ="/ai-tool" element={<AiTool />} />
        <Route path="/ai-poster-generator" element={<AIPosterGenerator />} />
        <Route path="/asset-desktop" element={<AssetDesktop />} />
        <Route path="/input-field-desktop" element={<AIPosterGeneratorForm />} />
        <Route path="/upload-files" element={<Upload />} />
        <Route path="/ai-poster-generator" element={<AIPosterGenerator />} />
        

        
        

        <Route path="/mobile-dashboard" element={<DashboardMobile />} />
        <Route path="/mobile-ai-tool" element={<AiToolMobile />} />
        <Route path="/content-upload" element={<ContentUploadScreen />} />
        <Route path="/choose-output-type" element={<ChooseOutputTypeScreen />} />
        <Route path="/post-ai-generator" element={<PostAIGeneratorScreen />} />
        <Route path="/input-field" element={<InputFieldMobile />} />
        <Route path="/feedback" element={<FeedbackModal />} />
        <Route path="/user-settings" element={<UserSettings />} />


        


        




        
      </Routes>
    </Router>
  );
}

export default App;
