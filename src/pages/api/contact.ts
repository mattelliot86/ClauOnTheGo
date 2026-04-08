import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const apiKey = typeof process !== 'undefined' ? process.env.RESEND_API_KEY : import.meta.env.RESEND_API_KEY;

    if (!apiKey) {
      throw new Error('No se encontró la configuración del servidor (falta la API Key).');
    }

    if (!apiKey) {
      throw new Error('No se encontró la configuración del servidor (falta la API Key).');
    }

    const data = await request.json();
    const name = data.name as string;
    const email = data.email as string;
    const phone = data.phone as string;
    const message = data.message as string;
    const interest = data.interest as string;

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: 'Faltan campos obligatorios.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const payload = {
      from: 'Contacto <contacto@clauonthego.com>',
      to: ['clauelliot@gmail.com'],
      subject: `Nueva solicitud de contacto de ${name}`,
      html: `
        <h2>Nueva solicitud de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
        <p><strong>Interés:</strong> ${interest || 'No especificado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message ? message.replace(/\\n/g, '<br>') : 'No proporcionado'}</p>
      `,
    };

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'User-Agent': 'clauonthego/1.0',
      },
      body: JSON.stringify(payload),
    });

    const resendDataText = await res.text();
    let resendData: any = {};
    try {
      resendData = JSON.parse(resendDataText);
    } catch(e) {}

    if (!res.ok) {
      throw new Error(resendData.message || `Error del servidor: ${resendDataText}`);
    }

    return new Response(JSON.stringify({ success: true, id: resendData.id }), {
      status: 200, headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('Error in contact handler:', error);
    // Cambiamos el status de 500 a 400 para evitar que Vercel sobrescriba el body del error 
    // con su página HTML genérica ("A server error has occurred").
    return new Response(
      JSON.stringify({ error: error?.message || 'Error del servidor procesando la solicitud.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
