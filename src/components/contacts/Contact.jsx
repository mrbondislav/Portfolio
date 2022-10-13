import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { TbBrandTelegram } from 'react-icons/tb';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const form = React.useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5rksnmh', 'template_4m6eqw8', form.current, 'KFECZ6wwbgulT68bB')

        e.target.reset();
    };

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
    };

    const notify = () => toast.success("Message sent!", toastOptions);

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>vlad.fedoseev11111@gmail.com</h5>
                        <a href="mailto:vlad.fedoseev11111@gmail.com" target="_blank">Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+79009803404</h5>
                        <a href="https://api.whatsapp.com/send?phone=89009803404" target="_blank">Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <TbBrandTelegram className='contact__option-icon' />
                        <h4>Telegram</h4>
                        <h5>+79009803404</h5>
                        <a href="tg://resolve?domain=<Vlad Fedoseev>" target="_blank">Send a Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button onClick={notify} type='submit' className='btn btn-primary'>Send Message</button>
                </form>
                <ToastContainer />
            </div>
        </section>
    )
}

export default Contact;