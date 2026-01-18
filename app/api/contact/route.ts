import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    // Валидация
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "Все поля обязательны для заполнения" },
        { status: 400 }
      );
    }

    // Email валидация
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Некорректный email адрес" },
        { status: 400 }
      );
    }

    // Отправка email через Resend
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY не настроен в переменных окружения");
      // В режиме разработки продолжаем без отправки email
      if (process.env.NODE_ENV === 'development') {
        console.log("Contact form submission (DEV - email disabled):", {
          name,
          phone,
          email,
          message,
          timestamp: new Date().toISOString(),
        });
        return NextResponse.json(
          { message: "Сообщение успешно отправлено (DEV MODE)" },
          { status: 200 }
        );
      }
      return NextResponse.json(
        { error: "Email сервис не настроен. Обратитесь к администратору." },
        { status: 500 }
      );
    }

    // Инициализация Resend только когда API ключ доступен
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      const { data, error } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
        to: 'ads@nomadplatforms.co.uk',
        subject: `Новая заявка от рекламодателя: ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #1e40af; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #1e40af; }
                .value { margin-top: 5px; padding: 10px; background-color: white; border-radius: 4px; }
                .footer { background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 8px 8px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>Новая заявка от рекламодателя</h2>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">Имя:</div>
                    <div class="value">${name}</div>
                  </div>
                  <div class="field">
                    <div class="label">Телефон:</div>
                    <div class="value">${phone}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email:</div>
                    <div class="value">${email}</div>
                  </div>
                  <div class="field">
                    <div class="label">Сообщение:</div>
                    <div class="value">${message.replace(/\n/g, '<br>').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
                  </div>
                </div>
                <div class="footer">
                  <p>Это автоматическое сообщение с сайта Nomad Pays</p>
                  <p>Время отправки: ${new Date().toLocaleString('ru-RU')}</p>
                </div>
              </div>
            </body>
          </html>
        `,
        reply_to: email,
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          { error: "Ошибка при отправке email. Попробуйте позже." },
          { status: 500 }
        );
      }

      console.log("Email sent successfully to ads@nomadplatforms.co.uk:", data);
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      return NextResponse.json(
        { error: "Ошибка при отправке email. Попробуйте позже." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Сообщение успешно отправлено" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Ошибка при обработке запроса" },
      { status: 500 }
    );
  }
}
