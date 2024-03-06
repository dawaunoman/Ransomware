const fileEncryptor = require('file-encryptor');
const path = require('path');

// Set the paths of the input and output files
const inputFile = 'input.txt';
const encryptedFile = 'encrypted.enc';
const decryptedFile = 'decrypted.txt';

// Set your secret key for encryption
const secretKey = 'YourSecretKey';

// Encrypt the file
fileEncryptor.encryptFile(inputFile, encryptedFile, secretKey, function(err) {
    if (err) {
        console.log('Encryption error:', err);
    } else {
        console.log('File encrypted successfully!');
        
        // Decrypt the file
        fileEncryptor.decryptFile(encryptedFile, decryptedFile, secretKey, function(err) {
            if (err) {
                console.log('Decryption error:', err);
            } else {
                console.log('File decrypted successfully!');
            }
        });
    }
});
