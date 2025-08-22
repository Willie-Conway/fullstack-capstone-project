// AuthContext.js
/* jshint esversion: 8 */
const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');


// Get all gifts
router.get('/', async (req, res, next) => {
    // ...
});

import React, { createContext, useState, useContext } from 'react';
import logger from './logger';


const AppContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, userName, setUserName }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
