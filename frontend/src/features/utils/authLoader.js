import { redirect } from 'react-router-dom';
import { checkToken } from '../../features/utils/loginHelper';

async function authLoader() {
  const token = checkToken('token');
  if (!token) {
    throw redirect('/login');
  }
  return null;
}

export { authLoader };