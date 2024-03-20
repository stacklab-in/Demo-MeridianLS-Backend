const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const config = {
  host: process.env.MAIL_HOSTNAME,
  secure: false,
  secureConnection: true, // TLS requires secureConnection to be false
  tls: {
    ciphers: "SSLv3",
  },
  requireTLS: false,
  port: process.env.MAIL_PORT,
  debug: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);

function sendEmail(orderDetails) {
  const { orderNumber, recipientName, trackingNumber, carrierName, estimatedDeliveryDate, trackingLink, shipmentStatus, recipientEmail } = orderDetails;

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: recipientEmail, // Replace with recipient's email address
    subject: `Shipment Tracking Information - ${orderNumber}`,
    text: `Dear ${recipientName},
    We are excited to inform you that your order #${orderNumber} has been successfully processed and is now on its way to you. Here are the details of your shipment:
    Order Number: ${orderNumber}
    Shipment Tracking Number: ${trackingNumber}
    Carrier: ${carrierName}
    Estimated Delivery Date: ${estimatedDeliveryDate}
    You can track your shipment using the following link: ${trackingLink}
    Shipment Status: ${shipmentStatus}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

module.exports = sendEmail;
