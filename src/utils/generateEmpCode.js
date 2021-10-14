export const generateEmpCode = () => {
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    return `EMP${randomNumber}`;
}