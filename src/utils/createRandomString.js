const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export  function generateRandomString() {

    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 12; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
}
// export async function decryptRandomString(secret){
//     const decrypted = await E2EE.decrypt(
//         secret.aes_key, 
//         secret.iv, 
//         keys.private_key, 
//         secret.cipher_text
//     );
//     return decrypted
// }