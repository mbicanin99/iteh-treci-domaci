import Login from './Login'

function Pocetna() {

    const user = { username: 'milicab', password: 'mb99' }

    function login(username, password) {
        if (username === user.username && password === user.password)
            alert('Logged in succesfully!')
        else
            alert('Please try again!')
    }

    const tekst = 'Login page'


    return (
        <div>
            <Login tekst={tekst} login={login} />
        </div >
    );
}

export default Pocetna;