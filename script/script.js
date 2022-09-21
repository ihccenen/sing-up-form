function checkPwdDiff() {
    if (confirmPwd.value === undefined) return;

    if (confirmPwd.value !== pwd.value) {
        confirmPwd.style.border = '1px solid red';
        document.querySelector('.diff-pwd').textContent =
            '* Password do not match';
    } else {
        confirmPwd.style.border = '';
        document.querySelector('.diff-pwd').textContent = '';
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
