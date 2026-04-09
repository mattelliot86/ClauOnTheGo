import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json().catch(() => ({}));

    // Validate required fields
    if (!data.name || !data.email) {
      return new Response(
        JSON.stringify({ error: "Faltan datos" }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
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
        'Authorization': 'Bearer re_Pi3cVzwm_38QBNFeuLPpgNBTtriLJSW8J',
        'User-Agent': 'clauonthego/1.0' // Required header
      },
      body: JSON.stringify(payload)
    });

    // Handle non-JSON responses
    const contentType = res.headers.get('content-type');

    if (!res.ok) {
      if (contentType?.includes('application/json')) {
        const result = await res.json();
        return new Response(
          JSON.stringify({ error: result }),
          {
            status: res.status,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      } else {
        const text = await res.text();
        return new Response(
          JSON.stringify({ error: text }),
          {
            status: res.status,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }
    }

    const result = await res.json();
    return new Response(
      JSON.stringify({ success: true, data: result }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};