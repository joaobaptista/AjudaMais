'use strict';
const functions  = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});

let url = "smtps://<EMAIL>%40gmail.com:"+encodeURIComponent('<SENHA>') + "@smtp.gmail.com:465";
let transporter = nodemailer.createTransport(url);

exports.enviarEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    let remetente = '"Portal Ajuda+" <portalajudamais@gmail.com>';

    let name = req.body['name'];
    let email = req.body['email']; // lista de e-mails destinatarios separados por ,
    let assunto = req.body['subject'];
    let mensagem = req.body['message'];

    let email1 = {
        from: remetente,
        to: remetente, 
        subject: assunto,
        text: "corpo",
        html: mensagem
    };
    let email2 = {
        from: remetente,
        to: email, 
        subject: "Equipe Portal Ajuda+",
        text: "corpo",
        html: "Olá, muito obrigado por entrar em contato com o Portal Ajuda+, em breve entraremos em contato com você!" 
    };
    transporter.sendMail(email1, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Mensagem %s enviada: %s', info.messageId, info.response);
    });
    transporter.sendMail(email2, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Mensagem %s enviada: %s', info.messageId, info.response);
    });
  });
});
