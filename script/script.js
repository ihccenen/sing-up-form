function checkPwdDiff() {
    const textMessage = document.querySelector('.diff-pwd');

    if (confirmPwd.value === undefined) return;

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
const pwd = document.getElementById('password');
const confirmPwd = document.getElementById('confirm-password');

input.forEach((input) => input.addEventListener('invalid', changeBorders));
confirmPwd.addEventListener('keyup', checkPwdDiff);
