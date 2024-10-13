// create a forget password function
export default function forgetPassword() {
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const forgetPassword = document.getElementById('forgetPassword') as HTMLInputElement;
    if (emailInput.type === 'email') {
        emailInput.type = 'text';
        forgetPassword.textContent = 'Forget Password';
    } else {
        emailInput.type = 'email';
        forgetPassword.textContent = 'Forget Password';
    }
}