import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorageItem = (itemKey: string) => {
  return new Promise(async (resolve: Function, reject: Function) => {
    const storageData: null | string = await AsyncStorage.getItem(itemKey);

    try {
      if (storageData) {
        resolve(JSON.parse(storageData));
      } else {
        resolve(storageData);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const setStorageItem = (itemKey: string, data: string | object) => {
  return new Promise(async (resolve: Function, reject: Function) => {
    try {
      if (data && typeof data === 'object') {
        await AsyncStorage.setItem(itemKey, JSON.stringify(data));
      } else {
        await AsyncStorage.setItem(itemKey, data);
      }

      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export const removeStorageItem = (itemKey: string) => {
  return new Promise(async (resolve: Function, reject: Function) => {
    try {
      await AsyncStorage.removeItem(itemKey);

      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
