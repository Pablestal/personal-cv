// Sensitive contact info (email, phone) is loaded from environment variables.
// See .env.example for the required variables.
export const contact = {
  name: 'Pablo Estévez Álvarez',
  photo: '/assets/pablo-thumb.jpeg',
  location: 'A Coruña, Spain',
  email: {
    user: (import.meta.env.CONTACT_EMAIL_USER ?? '') as string,
    domain: (import.meta.env.CONTACT_EMAIL_DOMAIN ?? '') as string,
  },
  phone: {
    parts: ((import.meta.env.CONTACT_PHONE_PARTS ?? '') as string).split(',').filter(Boolean),
  },
  linkedIn: {
    url: 'https://linkedin.com/in/pablestal',
    display: 'linkedin.com/in/pablestal',
  },
};
