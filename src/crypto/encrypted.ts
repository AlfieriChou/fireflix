import * as crypto from "crypto";

interface encryptedOptions {
  algorithm?: string;
  key: string;
  iv: string;
}

const encrypted = (data: string, options: encryptedOptions) => {
  const { algorithm = "aes-128-cbc", key, iv } = options;
  const cipher = crypto.createCipheriv(
    algorithm,
    Buffer.from(key, "base64"),
    Buffer.from(iv, "base64")
  );
  let crypted = cipher.update(data, "utf8", "binary");
  crypted += cipher.final("binary");
  crypted = Buffer.from(crypted, "binary").toString("base64");
  return crypted;
};

export default encrypted;
