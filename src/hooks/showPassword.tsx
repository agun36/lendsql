// create a function to show password
export default function showPassword() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const togglePassword = document.getElementById('togglePassword') as HTMLInputElement;
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        togglePassword.textContent = 'Show';
    }
}