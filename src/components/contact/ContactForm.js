import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    firstname: yup.string().required("Please enter a first name").min(2, "First name needs to be atleast 2 characters"),
    lastname: yup.string().required("Please enter a last name").min(2, "Last name needs to be atleast 2 characters"),
    email: yup.string().required('Email is required').email('Email is in a invalid format'),
    msg: yup.string().required("Please enter a message").min(10, "Message needs to be atleast 10 characters"),
});

function ContactForm() {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit() {
        document.querySelector('.form').style.display = 'none';
        document.querySelector('.thanks').style.display = 'block';
    }

    return (
        <div className="contact">
            <h2 className="thanks">Thank you for contacting me!</h2>
            <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    First name: <input className="contactfield" name="firstname" placeholder="First name" ref={register} />
                    {errors.firstname && <p className="error">{errors.firstname.message}</p>}
                    <br />
                    Last name: <input className="contactfield" name="lastname" placeholder="Last name" ref={register} />
                    {errors.lastname && <p className="error">{errors.lastname.message}</p>}
                    <br />
                    Email: <input className="contactfield" name="email" type="email" placeholder="Mail@mail.com" ref={register} />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                    <br />
                     Message: <textarea className="contactfieldtxt" name="msg" placeholder="Here you can type your message to me" ref={register} />
                    {errors.msg && <p className="error">{errors.msg.message}</p>}
                    <br />
                    <input className="submit" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default ContactForm;



