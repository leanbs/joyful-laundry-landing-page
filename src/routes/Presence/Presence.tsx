import { useState } from 'react';
// import { QrReader } from 'react-qr-reader';
import { useZxing } from 'react-zxing';
import AES from 'crypto-js/aes';
import UTF8 from 'crypto-js/enc-utf8';
import { fetch } from '@/utils/fetch';
import { Button } from '@mantine/core';
import { useRouter } from 'next/router';

const Presence = () => {
  const [result, setResult] = useState('');
  const [isPresent, setIsPresent] = useState(false);
  const [user, setUser] = useState({ email: '' });

  const { reload } = useRouter();

  const { ref } = useZxing({
    timeBetweenDecodingAttempts: 10000,
    async onResult(result) {
      setResult(result.getText());

      await handleLogin(result.getText());
    },
  });

  const handleLogin = async (text: string) => {
    const bytes = AES.decrypt(text, 'joysecret1293');
    const originalText = bytes.toString(UTF8);
    const data = JSON.parse(originalText);

    const res = await fetch.put(
      `/presence`,
      {
        email: data.email,
        password: data.password,
      },
      { withCredentials: true },
    );

    if (res.status === 200) {
      setIsPresent(true);
      setUser(res.data.data.user);
    }
  };

  console.log(result, 'result');

  return isPresent ? (
    <>
      <p>Berhasil Absen {user?.email}</p>
      <Button type="button" onClick={reload}>
        Kembali
      </Button>
    </>
  ) : (
    <>
      <video ref={ref} style={{ width: '100%' }} />
      {/* <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p> */}
    </>
  );
};

export default Presence;
