function saveAuthToken(token) {
  localStorage.setItem('token', token);
}

function checkToken(token) {
  return localStorage.getItem(token);
}

function removeAuthToken() {
  localStorage.removeItem('token');
}

export { saveAuthToken, checkToken, removeAuthToken };