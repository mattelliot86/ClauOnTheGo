import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  // Inicializamos Resend dentro de la función para evitar que falle al arrancar la función en Vercel
  // y usamos import.meta.env que es la forma segura en Astro
  const resend = new Resend(import.meta.env.RESEND_API_KEY);
  
  try {
    const data = await request.formData();
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const phone = data.get('phone') as string;
    const message = data.get('message') as string;
    const interest = data.get('interest') as string;

    if (!name || !email) {
      return new Response(
        JSON.stringify({
          error: 'Faltan campos obligatorios.',
        }),
        { status: 400 }
      );
    }

    const { data: resendData, error } = await resend.emails.send({
      from: 'Contacto <onboarding@resend.dev>', // Usar este dominio de pruebas para probar antes de verificar tu dominio en Resend
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
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ success: true, id: resendData?.id }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Error del servidor procesando la solicitud.' }),
      { status: 500 }
    );
  }
};
