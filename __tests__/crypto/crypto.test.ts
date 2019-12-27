import * as crypto from 'crypto';
import encrypted from '../../src/crypto/encrypted';
import decrypted from '../../src/crypto/decrypted';

describe('Crypto', () => {
  it('aes crypto', done => {
    const tt: string = 'abc';
    const iv = crypto.randomBytes(16).toString('base64');
    const key = crypto.randomBytes(16).toString('base64');
    const encryptedData = encrypted(tt, { key, iv });
    const decryptedData = decrypted(encryptedData, { key, iv });
    expect(decryptedData).toEqual(tt);
    done();
  });
});
