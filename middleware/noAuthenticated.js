const authenticated = ({ $auth, redirect }) => {
    let loggedIn = $auth.loggedIn
    if (loggedIn) {
        redirect('/profile')
    } else {
    }
}

export default authenticated