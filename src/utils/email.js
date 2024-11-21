import nodemailer from 'nodemailer';

export const sendEmail = async (nome, email, telefone, mensagem) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Ou outro serviço (Ex: Outlook, SendGrid)
        auth: {
            user: process.env.EMAIL_USER, // Configurado no .env
            pass: process.env.EMAIL_PASS, // Configurado no .env
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.RECEIVER_EMAIL, // Configurado no .env
        subject: `Nova mensagem de contato: ${nome}`,
        text: `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`,
    };

    await transporter.sendMail(mailOptions);
};
