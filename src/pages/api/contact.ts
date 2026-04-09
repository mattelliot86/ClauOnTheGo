import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse request data
    const data = await request.json().catch((e) => {
      console.error('JSON parse error:', e);
      return {};
    });

    console.log('Received data:', data);

    // Validate required fields
    if (!data.name || !data.email) {
      return new Response(
        JSON.stringify({ error: "Faltan datos obligatorios: nombre y email" }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Get API key from environment
    const apiKey = import.meta.env.RESEND_API_KEY;
    const contactEmail = import.meta.env.CONTACT_TO_EMAIL;


    if (!apiKey || !contactEmail) {
      console.error('Missing RESEND_API_KEY or CONTACT_TO_EMAIL environment variable');
      return new Response(
        JSON.stringify({ error: "Configuración del servidor incompleta" }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const payload = {
      from: 'ClauOnTheGo <contacto@clauonthego.com>',
      to: [contactEmail],
      reply_to: data.email,
      subject: `Nueva solicitud de: ${data.name}`,
      html: `
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Teléfono:</strong> ${data.phone || 'N/A'}</p>
        <p><strong>Interés:</strong> ${data.interest || 'N/A'}</p>
        <p><strong>Mensaje:</strong> ${data.message || 'N/A'}</p>
      `
    };

    console.log('Sending to Resend API...');

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'User-Agent': 'clauonthego/1.0'
      },
      body: JSON.stringify(payload)
    });

    console.log('Resend API response status:', res.status);

    // Handle response
    const contentType = res.headers.get('content-type');

    if (!res.ok) {
      let errorData;

      if (contentType?.includes('application/json')) {
        errorData = await res.json();
        console.error('Resend API error (JSON):', errorData);
      } else {
        errorData = await res.text();
        console.error('Resend API error (text):', errorData);
      }

      return new Response(
        JSON.stringify({
          error: 'Error al enviar email',
          details: errorData,
          status: res.status
        }),
        {
          status: res.status,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const result = await res.json();
    console.log('Email sent successfully:', result);

    return new Response(
      JSON.stringify({ success: true, data: result }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (err: any) {
    console.error('Unexpected error in contact handler:', err);
    return new Response(
      JSON.stringify({
        error: 'Error del servidor',
        message: err.message,
        stack: err.stack
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};