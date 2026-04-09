import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    if (!data.name || !data.email) {
      return new Response(
        JSON.stringify({ error: 'Faltan datos obligatorios: nombre y email' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const apiKey = import.meta.env.RESEND_API_KEY;
    const toEmail = import.meta.env.CONTACT_TO_EMAIL;

    if (!apiKey || !toEmail) {
      console.error('Missing RESEND_API_KEY or CONTACT_TO_EMAIL');
      return new Response(
        JSON.stringify({ error: 'Configuración del servidor incompleta' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'ClauOnTheGo <contacto@clauonthego.com>',
        to: [toEmail],
        reply_to: data.email,
        subject: `Nueva solicitud de: ${data.name}`,
        html: `
          <h2>Nueva solicitud de contacto</h2>
          <p><strong>Nombre:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Teléfono:</strong> ${data.phone || 'N/A'}</p>
          <p><strong>Interés:</strong> ${data.interest || 'N/A'}</p>
          <p><strong>Mensaje:</strong> ${data.message || 'N/A'}</p>
        `,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Resend API error:', errorText);
      return new Response(
        JSON.stringify({ error: 'Error al enviar email' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    console.error('Unexpected error:', err);
    return new Response(
      JSON.stringify({ error: 'Error del servidor' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
