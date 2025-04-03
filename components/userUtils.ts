'use client'

export const updateAccessToken = (access_token) => {
  sessionStorage.setItem('access_token', access_token);
};

export const updateRefreshToken = (refresh_token) => {
  sessionStorage.setItem('refresh_token', refresh_token);
};

export const getAccessToken = () => {
  return JSON.parse(sessionStorage.getItem('access_token') || 'null');
};

export const getRefreshToken = () => {
  return JSON.parse(sessionStorage.getItem('refresh_token') || 'null');
};

export const clearSession = () => {
  sessionStorage.removeItem('access_token');
  sessionStorage.removeItem('refresh_token');
};