import * as crypto from "crypto";

interface decryptedOptions {
  algorithm?: string;
  key: string;
  iv: string;
}

const decrypted = (encryptedData: string, options: decryptedOptions) => {
  const { algorithm = "aes-128-cbc", key, iv } = options;
  const cryptedBuffer: string = Buffer.from(encryptedData, "base64").toString(
    "binary"
  );
  const decipher = crypto.createDecipheriv(
    algorithm,
    Buffer.from(key, "base64"),
    Buffer.from(iv, "base64")
  );
  decipher.setAutoPadding(true);
  let decoded: string = decipher.update(cryptedBuffer, "binary", "utf8");
  decoded += decipher.final("utf8");
  return decoded;
};

export default decrypted;
