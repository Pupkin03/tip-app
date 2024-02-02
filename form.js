function validateForm(e) {
    e.preventDefault()
    const email = document.loginForm.email.value 
    const password = document.loginForm.password.value 

    if (email.length == 0) {
        alert('please input your email')
    }

    if (password.length <= 5) {
        alert('password cant be less than 5')
    }

    console.log('email:', email)
    console.log('password:', password)
}