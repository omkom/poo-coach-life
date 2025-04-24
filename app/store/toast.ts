// app/store/toast.ts
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export interface Toast {
  id: string
  title?: string
  message: string
  variant: 'success' | 'error' | 'warning' | 'info'
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
  duration?: number
  dismissible?: boolean
}

interface ToastState {
  toasts: Toast[]
}

export const useToastStore = defineStore('toast', {
  state: (): ToastState => ({
    toasts: []
  }),
  
  actions: {
    add(toast: Omit<Toast, 'id'>) {
      const id = uuidv4()
      this.toasts.push({
        id,
        variant: 'info',
        position: 'bottom-right',
        duration: 3000,
        dismissible: true,
        ...toast
      })
      
      // Auto-dismiss si duration > 0
      if (toast.duration !== 0) {
        setTimeout(() => {
          this.remove(id)
        }, toast.duration || 3000)
      }
      
      return id
    },
    
    remove(id: string) {
      const index = this.toasts.findIndex(t => t.id === id)
      if (index !== -1) {
        this.toasts.splice(index, 1)
      }
    },
    
    // Méthodes d'utilité pour différents types de notifications
    success(message: string, options = {}) {
      return this.add({
        message,
        variant: 'success',
        ...options
      })
    },
    
    error(message: string, options = {}) {
      return this.add({
        message,
        variant: 'error',
        ...options
      })
    },
    
    warning(message: string, options = {}) {
      return this.add({
        message,
        variant: 'warning',
        ...options
      })
    },
    
    info(message: string, options = {}) {
      return this.add({
        message,
        variant: 'info',
        ...options
      })
    },
    
    // Effacer toutes les notifications
    clearAll() {
      this.toasts = []
    }
  }
})