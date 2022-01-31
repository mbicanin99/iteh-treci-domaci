
function Pocetna() {

    const user = { username: 'milicab', password: 'mb99' }

    function login(username, password) {
        if (username === user.username && password === user.password)
            alert('Logged in succesfully!')
    }

    return (
        <div>
            <h4>Login page</h4>
            <Login user={user} login={login()} />
        </div >
    );
}

export default Pocetna;