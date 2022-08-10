const IndependenceDay = () => {
  const handleShare = async () => {
    const response = await fetch('https://joyful.id/joyful-logo.png');
    const blob = await response.blob();
    const filesArray: File[] = [
      new File([blob], 'joyful-merdeka-2022.png', {
        type: 'image/png',
        lastModified: new Date().getTime(),
      }),
    ];
    const shareData = {
      files: filesArray,
    };
    navigator.share(shareData as any).then(() => {
      console.log('Shared successfully');
    });
  };

  return (
    <div>
      <img src="/joyful-logo.png" className="w-20 h-10 object-contain" />
      <button className="bg-orange-600 p-4 rounded-lg" onClick={handleShare}>
        share dong
      </button>
    </div>
  );
};

export default IndependenceDay;
