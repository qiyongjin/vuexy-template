import { usePopupStore } from '@/store/popupStore'

export const usePopup = (massage: string, type: 'success' | 'error' | 'info' | 'warning') => {
  const popupStore = usePopupStore()

  popupStore.setPopup(true, massage, type)
}
