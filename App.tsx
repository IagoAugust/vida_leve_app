import React from 'react';
import 'expo-dev-client';
import { Routes } from './src/routes';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export default function App() {
  GoogleSignin.configure({
    webClientId: '391556643539-29ed68mjanl601krtd34fjpvidmcqulj.apps.googleusercontent.com',
  });

  return (
      <Routes />
  );
}
