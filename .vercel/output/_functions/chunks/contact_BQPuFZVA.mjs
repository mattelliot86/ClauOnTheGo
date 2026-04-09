const prerender = false;
const POST = async ({ request }) => {
  try {
    const data = await request.json().catch((e) => {
      console.error("JSON parse error:", e);
      return {};
    });
    console.log("Received data:", data);
    if (!data.name || !data.email) {
      return new Response(
        JSON.stringify({ error: "Faltan datos obligatorios: nombre y email" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const apiKey = undefined                              ;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      return new Response(
        JSON.stringify({ error: "Configuración del servidor incompleta" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const payload = {
      from: "onboarding@resend.dev",
      to: "clauelliot@gmail.com",
      subject: `Nueva solicitud de: ${data.name}`,
      html: `
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Teléfono:</strong> ${data.phone || "N/A"}</p>
        <p><strong>Interés:</strong> ${data.interest || "N/A"}</p>
        <p><strong>Mensaje:</strong> ${data.message || "N/A"}</p>
      `
    };
    console.log("Sending to Resend API...");
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        "User-Agent": "clauonthego/1.0"
      },
      body: JSON.stringify(payload)
    });
    console.log("Resend API response status:", res.status);
    const contentType = res.headers.get("content-type");
    if (!res.ok) {
      let errorData;
      if (contentType?.includes("application/json")) {
        errorData = await res.json();
        console.error("Resend API error (JSON):", errorData);
      } else {
        errorData = await res.text();
        console.error("Resend API error (text):", errorData);
      }
      return new Response(
        JSON.stringify({
          error: "Error al enviar email",
          details: errorData,
          status: res.status
        }),
        {
          status: res.status,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const result = await res.json();
    console.log("Email sent successfully:", result);
    return new Response(
      JSON.stringify({ success: true, data: result }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (err) {
    console.error("Unexpected error in contact handler:", err);
    return new Response(
      JSON.stringify({
        error: "Error del servidor",
        message: err.message,
        stack: err.stack
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
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
