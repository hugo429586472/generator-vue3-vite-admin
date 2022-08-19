export const getItem = <T>(key: string) => {
  const data = window.localStorage.getItem(key);
  if (!data) return null;
  try {
    return JSON.parse(data) as T;
  } catch {
    // console.log(`get ${key} error`, err);
    return null;
  }
};

export const setItem = (key: string, value: any) => {
  // if (typeof value === 'object') {
  //   value = JSON.stringify(value)
  // }
  value = JSON.stringify(value);
  window.localStorage.setItem(key, value);
};

export const removeItem = (key: string) => {
  window.localStorage.removeItem(key);
};
