const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "https://profitpulse.netlify.app/login";
};
