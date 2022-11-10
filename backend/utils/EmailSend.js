import nodemailer from 'nodemailer'

const EmailSend = async(email, subject, text, html) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST, 
            service: process.env.SERVICE, 
            port: process.env.EMAIL_PORT, 
            secure: Boolean(process.env.SECURE),
            auth: {
                user: process.env.USER, 
                pass: process.env.PASS
            }
        });

        await transporter.sendMail({
            from: process.env.USER, 
            to: email, 
            subject: subject, 
            text: text, 
            html: html
        });
        console.log("Email Sent Successfully");
    } catch (error) {
        console.log("Email not sent");
        console.log(error);
    }
}

export default EmailSend