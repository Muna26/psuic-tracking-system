export const uploadFile = async (file) => {
    console.log("Uploading file:", file.name);
    // Simulating a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return true;
};
