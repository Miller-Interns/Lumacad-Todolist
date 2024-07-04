
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css';

export function notify (message : string, autoCloseTimeSeconds: number) {

    toast.success(message, {autoClose: autoCloseTimeSeconds * 1000, position: 'bottom-right'} )
}