import React from "react";
import ReactDOM from "react-dom/client";
import { Authenticator } from '@aws-amplify/ui-react';
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);
Amplify.configure({
  ...Amplify.getConfig(),
  Interactions: {
    LexV2: {
      'SBSTrackingBot': {
        aliasId: 'FCUXLPJGPY',
        botId: 'LOIWYPKXB2',
        localeId: 'en_GB',
        region: 'eu-west-1'
       
      }
    }
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    
  <React.StrictMode>
    <Authenticator>
      <App />
    </Authenticator>
  </React.StrictMode>
);
