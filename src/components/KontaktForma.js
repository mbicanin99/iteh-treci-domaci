import { useState } from 'react'

function KontaktForma() {

    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [number, setNumber] = useState();
    const [message, setMessage] = useState();

    function handleName(e) {
        setName(e.target.value)
    }

    function handleLastname(e) {
        setLastname(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handleNumber(e) {
        setNumber(e.target.value)
    }

    function handleMessage(e) {
        setMessage(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        alert(name + " " + lastname + " " + email + " " + number + " " + message)
    }

    return (
        <div>
            <h1>Contact us</h1>
            <form id='kontakt_forma'>
                <div className="form-field">
                    <label>Name: </label>
                    <input type={'text'} id='name_field' value={name} onChange={handleName} />
                </div>
                <div className="form-field">
                    <label>Lastname: </label>
                    <input type={'text'} id='lastname_field' value={lastname} onChange={handleLastname} />
                </div>
                <div className="form-field">
                    <label>Email: </label>
                    <input type={'email'} id='email_field' value={email} onChange={handleEmail} />
                </div>
                <div className="form-field">
                    <label>Phone number: </label>
                    <input type={'text'} id='phone_field' value={number} onChange={handleNumber} />
                </div>
                <div className="form-field">
                    <label>Message: </label>
                    <textarea rows={5} cols={5} id='message_field' value={message} onChange={handleMessage} />
                </div>
                <button type="submit" onClick={handleSubmit} id='btn_subit_form'>Submit</button>
            </form>
        </div>
    )
}

export default KontaktForma