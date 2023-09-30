import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const email = process.env.EMAIL!;
const password = process.env.EMAIL_PASS!;

export async function POST(request: Request) {
  try {
    if (request.method !== "POST") {
      throw new Error("Only post requests allowed");
    }

    const data = (await request.json()) as CompleteData;

    const generateString = (data: CompleteData) => {
      return Object.entries(data).reduce(
        (str, [key, val]) => (str += `${key}: \n${val} \n \n`),
        "",
      );
    };

    if (!data.phone || !data.contactMethod) {
      throw new Error("Missing data");
    }
    console.log(123);

    let transporter = nodemailer.createTransport({
      name: "timeweb.SMTP",
      port: 465,
      host: " ssl://smtp.timeweb.ru",
      auth: {
        user: email,
        pass: password,
      },
      logger: true,
      debug: true,
    });

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log("error on verify");
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    console.log("verified");

    const mailData = {
      from: email,
      to: "canuczerealme@gmail.com",
      // subject: `Message from`,
      // text: "123",
      // html: `<h3>Sender: </h3><h3>Email:</h3><p></p>`,
      subject: `Dagin Pets: Message from ${data.name}`,
      text: generateString(data),
      html: `<h1>Отправитель: ${data.name}</h1>
      <h2>Телефон: ${data.phone}</h2>
      <h3>Способ связи: ${data.contactMethod}</h3>
      <h3>Животное: ${data.animal}</h3>
      <h3>Маршрут: ${data.from} - ${data.to}</h3>
      <p>${data.message}</p>`,
    };

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailData, (err, response) => {
        if (err) {
          console.log("error on sendmail");
          console.error(err);
          reject(err);
        } else {
          console.log(response);
          console.log("success");
          resolve(response);
        }
      });
    });

    // const mail = await transporter.sendMail();

    console.log("before end");

    return NextResponse.json(
      { message: "Email successfully sent" },
      { status: 200 },
    );
  } catch (e) {
    let message: string;
    if (e instanceof Error) {
      message = e.message;
    } else if (typeof e === "string") {
      message = e;
    } else {
      message = "Bad request";
    }
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
