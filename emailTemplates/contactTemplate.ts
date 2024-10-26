export const contactEmailTemplate = (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  return `
      <div style="font-family: Trebuchet MS, sans-serif; line-height: 1.5; padding: 15px;">
        <h2 style="background-color: #1A1B1E; color: #F9F9F9; padding: 30px; text-align: center; font-size: 24px;">Hi, Honest... You've got mail!</h2>
        <p style="font-size: 16px; margin: 10px 0;"><strong>Name:</strong> ${formData.name}</p>
        <p style="font-size: 16px; margin: 10px 0;"><strong>Email:</strong> ${formData.email}</p>
        <p style="font-size: 16px; margin: 10px 0;"><strong>Message:</strong></p>
        <p style="font-size: 20px; margin: 10px 0;">${formData.message}</p>
        <br/>
        <hr/>
        <footer style="color: gray; margin-top: 20px; text-align: center;">
          <p style="margin: 0;">This email was sent from your portfolio website's contact form.</p>
        </footer>
      </div>
    `;
};
