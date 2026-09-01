// Vercel Serverless Function: /api/contact
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { name = 'Guest', phone = '', email = '', destination = 'General Inquiry', message = '', budget = '' } = req.body || {};

  const leadId = 'LEDMC-' + Date.now().toString().slice(-6);

  console.log(`[Vercel Serverless] New Enquiry: ${leadId} | Name: ${name} | Phone: ${phone} | Dest: ${destination}`);

  return res.status(200).json({
    success: true,
    message: 'Enquiry received successfully! Our destination manager will connect shortly.',
    id: leadId
  });
}
