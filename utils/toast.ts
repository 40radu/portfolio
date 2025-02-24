import { toast } from "react-toastify";

export function showToast(isSucces: boolean) {
  if (isSucces) {
    toast.success('Merci pour votre message ! Je vous répondrai dans les plus brefs délais !', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  } else {
    toast.error('Une erreur réseau est survenue. Vérifiez votre connexion internet et réessayez.', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  }
}