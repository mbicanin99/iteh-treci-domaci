import Login from './Login'

function Pocetna() {

    const user = { username: 'milicab', password: 'mb99' }

    function login(username, password) {
        if (username === user.username && password === user.password)
            alert('Logged in succesfully!')
        else
            alert('Please try again!')
    }

    return (
        <div>
            <h2 className='login_page'>Login page</h2>
            <Login user={user} login={login} />
        </div >
    );
}

export default Pocetna;