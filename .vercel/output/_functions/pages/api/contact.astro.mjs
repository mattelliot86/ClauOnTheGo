import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resend = new Resend(process.env.RESEND_API_KEY);
const POST = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const message = data.get("message");
    const interest = data.get("interest");
    if (!name || !email) {
      return new Response(
        JSON.stringify({
          error: "Faltan campos obligatorios."
        }),
        { status: 400 }
      );
    }
    const { data: resendData, error } = await resend.emails.send({
      from: "Contacto <onboarding@resend.dev>",
      // Usar este dominio de pruebas para probar antes de verificar tu dominio en Resend
      to: ["clauelliot@gmail.com"],
      subject: `Nueva solicitud de contacto de ${name}`,
      html: `
        <h2>Nueva solicitud de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
        <p><strong>Interés:</strong> ${interest || "No especificado"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message ? message.replace(/\\n/g, "<br>") : "No proporcionado"}</p>
      `
    });
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500
      });
    }
    return new Response(JSON.stringify({ success: true, id: resendData?.id }), {
      status: 200
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error del servidor procesando la solicitud." }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
