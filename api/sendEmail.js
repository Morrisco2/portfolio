import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const { email, name, message } = req.body;

  console.log("Request received from frontend:", email, name, message);

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Must be a verified domain or default sender
      to: process.env.EMAIL_USER,    // Your destination email (set in Vercel env)
      subject: 'Job email from Portfolio',
      html: `
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    console.log("Resend response:", data);

    res.status(200).json({ status: 'ok', data });
  } catch (error) {
    console.error('Email send failed:', error);
    res.status(500).json({ status: 'failed', error });
  }
}
