export const config = {
  runtime: 'edge',
};

export default async function handler(request: Request) {
  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    // Para Vercel Edge o Node serverless environment
    // @ts-ignore
    const apiKey = typeof process !== 'undefined' ? process.env.RESEND_API_KEY : undefined;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'Missing RESEND_API_KEY en las variables de entorno de Vercel (Revisa que hayas hecho redeploy).' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
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
        'User-Agent': 'clauonthego-edge/1.0',
      },
      body: JSON.stringify(payload),
    });

    const bodyText = await res.text();
    let resendData: any = {};
    try {
      resendData = JSON.parse(bodyText);
    } catch(e) {}

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: resendData.message || \`Error del servidor: \${bodyText}\` }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: resendData.id }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error?.message || 'Server error' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
