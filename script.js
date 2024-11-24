const createPersonalButton = document.getElementById('createPersonal');
const createCompanyButton = document.getElementById('createCompany');
const loginForm = document.getElementById('loginForm');
const registerPersonalForm = document.getElementById('registerPersonalForm');
const registerCompanyForm = document.getElementById('registerCompanyForm');

createPersonalButton.addEventListener('click', () => {
    loginForm.classList.remove('active');
    registerCompanyForm.classList.remove('active');
    registerPersonalForm.classList.add('active');
});

createCompanyButton.addEventListener('click', () => {
    loginForm.classList.remove('active');
    registerPersonalForm.classList.remove('active');
    registerCompanyForm.classList.add('active');
});
