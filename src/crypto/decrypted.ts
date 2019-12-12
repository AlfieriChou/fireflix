import * as crypto from 'crypto';

const decrypted = (key: string, iv: string, crypted: string) => {
  const cryptedBuffer: string = Buffer.from(crypted, 'base64').toString('binary');
  const aeskey: Buffer = Buffer.from(key, 'base64');
  const ivKey: Buffer = Buffer.from(iv, 'base64');
  const decipher = crypto.createDecipheriv('aes-128-cbc', aeskey, ivKey);
  decipher.setAutoPadding(true);
  let decoded: string = decipher.update(cryptedBuffer, 'binary', 'utf8');
  decoded += decipher.final('utf8');
  return decoded;
};

export default decrypted;
