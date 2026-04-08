export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const apiKey = typeof process !== "undefined" ? process.env.RESEND_API_KEY : undefined                              ;
    if (!apiKey) {
      throw new Error("No se encontró la configuración del servidor (falta la API Key).");
    }
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const message = data.get("message");
    const interest = data.get("interest");
    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const payload = {
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
    };
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify(payload)
    });
    const resendData = await res.json();
    if (!res.ok) {
      throw new Error(resendData.message || "Error al comunicarse con Resend.");
    }
    return new Response(JSON.stringify({ success: true, id: resendData.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error in contact handler:", error);
    return new Response(
      JSON.stringify({ error: error?.message || "Error del servidor procesando la solicitud." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
