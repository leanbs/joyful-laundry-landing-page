import Image from 'next/image';
import download from 'downloadjs';
import { sendEventTracker } from '@/utils/analytics/tracker';

const IndependenceDay = () => {
  const handleShare = async () => {
    const response = await fetch(
      'https://joyful.id/image/joyful-laundry-merdeka.jpg',
    );
    const blob = await response.blob();
    const filesArray: File[] = [
      new File([blob], 'joyful-laundry-merdeka-2022.jpg', {
        type: 'image/jpeg',
        lastModified: new Date().getTime(),
      }),
    ];
    const shareData = {
      files: filesArray,
    };
    navigator.share(shareData as any).then(() => {
      console.log('Shared successfully');

      sendEventTracker({
        name: 'click',
        category: `banner - merdeka 2022`,
        label: 'share banner merdeka 2022',
      });
    });
  };

  const handleDownload = () => {
    download(
      'https://joyful.id/image/joyful-laundry-merdeka.jpg',
      `joyful-laundry-merdeka.jpg`,
    );

    sendEventTracker({
      name: 'click',
      category: `banner - merdeka 2022`,
      label: 'download banner merdeka 2022',
    });
  };

  return (
    <div className="text-center mb-4">
      <div className="p-4">
        <Image
          alt="joyful-banner-merdeka-2022"
          src="/image/joyful-laundry-merdeka.jpg"
          className="object-contain"
          layout="responsive"
          width={1200}
          height={1200}
        />
      </div>
      <div className="flex gap-x-4 items-center justify-center">
        <button
          className="bg-orange-600 text-white text-bold px-4 py-2 rounded-lg"
          onClick={handleShare}
        >
          Bagikan
        </button>
        <button
          className="bg-orange-600 text-white text-bold px-4 py-2 rounded-lg"
          onClick={handleDownload}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default IndependenceDay;
