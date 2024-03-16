import { storage } from 'wxt/storage';
import type {
  MaybeRef,
  RemovableRef,
  StorageLikeAsync,
  UseStorageAsyncOptions,
} from '@vueuse/core'
import {
  useStorageAsync,
} from '@vueuse/core'

const storageLocal: StorageLikeAsync = {
  removeItem(key: string) {
    return storage.removeItem(`local:${key}`)
  },

  setItem(key: string, value: string) {
    return storage.setItem(`local:${key}`, { [key]: value })
  },

  async getItem(key: string) {
    return (await storage.getItem(`local:${key}`))[key]
  },
}

export const useStorageLocal = <T>(
  key: string,
  initialValue: MaybeRef<T>,
  options?: UseStorageAsyncOptions<T>,
): RemovableRef<T> => useStorageAsync(key, initialValue, storageLocal, options)
