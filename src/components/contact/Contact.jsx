import React, { useRef, useState } from 'react'
import * as S from '../contact/Contact.styles'
import emailjs from '@emailjs/browser'

const Contact = () => {


    const [contactDates, setContactDates] = useState({
        name: "",
        email: "",
        message: "",
        checkedTerms: false,
    })

    const [emptyInput, setEmptyInput] = useState(false)
    const [successSendForm, setSuccessSendForm] = useState(false)
    const [errorSendForm, setErrorSendForm] = useState(false)

    const onSubmit = (e) => {
        //evitar cambio de pagina
        e.preventDefault()

        //validate form
        if (contactDates.name === "" || contactDates.email === "" || contactDates.message === "" || contactDates.checkedTerms === false) {
            setEmptyInput(true)
        } else {
            emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_USER_ID
            )
                .then((result) => {
                    setSuccessSendForm(true)
                },
                    (error) => {
                        setErrorSendForm(true)
                    })
        }

        //send form
    }

    const form = useRef()

    return (
        <S.ContainerContact>
            <S.Title>
                ✉️Contact with me
            </S.Title>
            <S.ContainerForm>
                {successSendForm ? (
                    <S.SuccessMessage>The form was sent succesfully</S.SuccessMessage>
                ) : (
                    <S.Form onSubmit={onSubmit} ref={form}>
                        <S.InputForm placeholder='Your name' type='text' name='name' onChange={(e) => setContactDates({ ...contactDates, name: e.target.value })} value={contactDates.name} />
                        <S.InputForm placeholder='Your email' type='email' name='email' onChange={(e) => setContactDates({ ...contactDates, email: e.target.value })} value={contactDates.email} />
                        <S.TextArea placeholder='Write your message' name='message' onChange={(e) => setContactDates({ ...contactDates, message: e.target.value })} value={contactDates.message} />
                        <S.ContainerCondition>
                            <input type="checkbox" onChange={(e) => setContactDates({ ...contactDates, checkedTerms: e.target.checked })} />
                            <span>Accept the terms and conditions</span>
                        </S.ContainerCondition>
                        <S.Button type="submit">
                            Send
                        </S.Button>
                    </S.Form>
                )}
                {emptyInput && (
                    <p>You shoul fill all the inputs and accept terms.</p>
                )}
                {errorSendForm && (<S.TextError>There wasa an error, try it later</S.TextError>)}
            </S.ContainerForm>
        </S.ContainerContact>
    )
}




export default Contact