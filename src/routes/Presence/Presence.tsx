import { useState } from 'react';
// import { QrReader } from 'react-qr-reader';
import { useZxing } from 'react-zxing';
import AES from 'crypto-js/aes';
import UTF8 from 'crypto-js/enc-utf8';
import useLogin from '@/hooks/use-login';
import { fetch } from '@/utils/fetch';

const Presence = () => {
  const [result, setResult] = useState('');
  const login = useLogin;
  const { ref } = useZxing({
    async onResult(result) {
      setResult(result.getText());

      await handleLogin(result.getText());
    },
  });

  const handleLogin = async (text: string) => {
    const bytes = AES.decrypt(text, 'joysecret1293');
    const originalText = bytes.toString(UTF8);
    const data = JSON.parse(originalText);

    const res = await login({
      email: data.email,
      password: data.password,
    });

    if (res.data.status === 200) {
      await fetch.post(
        `/presence`,
        {
          status: 1,
          user: res?.data?.user,
        },
        { withCredentials: true },
      );
    }
  };

  return (
    <>
      <video ref={ref} style={{ width: '100%' }} />
      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </>
  );
};

export default Presence;
