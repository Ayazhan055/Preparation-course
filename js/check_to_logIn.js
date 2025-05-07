document.addEventListener('DOMContentLoaded', () => {

const isAuthentificated = localStorage.getItem("is_auth");

if(isAuthentificated != "true"){
    window.location.href = 'log_in.html';
}
});