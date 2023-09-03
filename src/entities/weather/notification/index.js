import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Notification({ response, message }) {
  const toastEmitter = {
    position: 'top-right',
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  };

  if (response.status === 400) {
    toast.error('Please enter a valid city', toastEmitter);
  } else {
    toast.error(message, toastEmitter);
  }
}
export default Notification;
