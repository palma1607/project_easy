const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');

exports.sendEmail = functions.https.onCall((data, context) => {
  sgMail.setApiKey(functions.config().sendgrid.key);

  const msg = {
    to: data.email,
    from: 'daibabicz@gmail.com',
    templateId: 'd-b0a6e3c3a8924d0999ced5fd49442ffa',
  };

  return sgMail
    .send(msg)
    .then(() => ({success: true}))
    .catch(error => ({error: error.toString()}));
});
