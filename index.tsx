import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRegistry, Platform } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

if (Platform.OS === 'web') {
  const rootElement = document.getElementById('root');

  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
  } else {
    console.error("Element with ID 'root' not found.");
  }
}
