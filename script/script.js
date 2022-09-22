function changePwdVisibility(e) {
    const inputPwd = e.target.previousElementSibling;

    if (e.target.textContent === 'visibility_off') {
        e.target.textContent = 'visibility';
    } else {
        e.target.textContent = 'visibility_off';
    }

    if (inputPwd.type === 'password') {
        inputPwd.type = 'text';
    } else {
        inputPwd.type = 'password';
    }
}

function checkPwdDiff() {
    const textMessage = document.querySelector('.diff-pwd');

    if (confirmPwd.value === undefined || confirmPwd.value === '') return;

    if (confirmPwd.value !== pwd.value) {
        confirmPwd.style.border = '1px solid red';
        textMessage.textContent = '* Password do not match';
    } else {
        confirmPwd.style.border = '';
        textMessage.textContent = '';
    }
}

function changeBorders(e) {
    e.target.style.border = '1px solid red';
}

const input = Array.from(document.querySelectorAll('input'));
const pwd = document.querySelector('#password');
const confirmPwd = document.querySelector('#confirm-password');
const eyeBtn = Array.from(
    document.querySelectorAll('.material-symbols-outlined')
);

input.forEach((input) => input.addEventListener('invalid', changeBorders));
eyeBtn.forEach((eye) => eye.addEventListener('click', changePwdVisibility));
pwd.addEventListener('keyup', checkPwdDiff);
confirmPwd.addEventListener('keyup', checkPwdDiff);
