import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json().catch(() => ({}));
    
    // Si envían sin nombre ni email, asumimos que es un error del cliente 
    if (!data.name || !data.email) {
      return new Response(JSON.stringify({ error: "Faltan datos" }), { status: 400 });
    }

    const payload = {
      from: 'onboarding@resend.dev',
      to: 'clauelliot@gmail.com',
      subject: `Nueva solicitud de: ${data.name}`,
      html: `
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Teléfono:</strong> ${data.phone || 'N/A'}</p>
        <p><strong>Interés:</strong> ${data.interest || 'N/A'}</p>
        <p><strong>Mensaje:</strong> ${data.message || 'N/A'}</p>
      `
    };

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer re_Pi3cVzwm_38QBNFeuLPpgNBTtriLJSW8J`
      },
      body: JSON.stringify(payload)
    });

    const result = await res.json();

    if (!res.ok) {
      return new Response(JSON.stringify({ error: result }), { status: 400 });
    }

    return new Response(JSON.stringify({ success: true, data: result }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 400 });
  }
};
