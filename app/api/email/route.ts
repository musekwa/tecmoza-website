
// import Welcome from '@/emails/Welcome';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   try {
//     const data = await resend.emails.send({
//       from: 'Tecmoza <info@tecmoza.com>',
//       to: ['musekwa2011@gmail.com'],
//       subject: 'Hello world',
//       react: Welcome({ firstName: 'John' }),
//       html: ''
//     });

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error });
//   }
// }
