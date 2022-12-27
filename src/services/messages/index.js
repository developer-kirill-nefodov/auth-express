import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';

const transport = nodemailer.createTransport(smtpTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_NAME,
    pass: process.env.SMTP_PASS
  }
}));

export const sendMessageSMTP = async (option) => {
  await transport.sendMail(option, (e, d) => {
    console.log(e, 'error');
    console.log(d, 'data')
  });
}