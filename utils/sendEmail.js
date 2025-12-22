export const sendEmail = async ({ to, subject, message }) => {
    console.log("Sending email:", { to, subject, message });
    // Simulating a delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return true;
};
