export const isAdminUser = () => {
  if (typeof window === 'undefined') return false;
  const userInfo = window.localStorage.getItem('userInfo');
  if (!userInfo) return false;
  try {
    const parsed = JSON.parse(userInfo);
    return parsed.role === 'admin';
  } catch {
    return false;
  }
};

export const setUserInfo = (data) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem('userInfo', JSON.stringify(data));
};

export const getUserInfo = () => {
  if (typeof window === 'undefined') return null;
  const userInfo = window.localStorage.getItem('userInfo');
  if (!userInfo) return null;
  try {
    return JSON.parse(userInfo);
  } catch {
    return null;
  }
};

export const logoutUser = () => {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem('userInfo');
};
