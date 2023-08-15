import { defineStore } from 'pinia'

export const usePopupStore = defineStore(
  'popup', {
    state: () => ({
      message: {
        alert: false,
        message: '',
        type: 'success',
      },
    }),
    actions: {
      setPopup(lang: boolean, msg: string, types: string) {
        this.message.alert = lang
        this.message.message = msg
        this.message.type = types
      },
    },
  })
