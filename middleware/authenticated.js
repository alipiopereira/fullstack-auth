const authenticated = ({ $auth, redirect }) => {
    let user = $auth.loggedIn
    if (user) {
        console.log(user)
        console.log('logado')
    } else {
        console.log('não está logado')
        redirect('/login')
    }
}

export default authenticated