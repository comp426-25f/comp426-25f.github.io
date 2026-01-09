'use client';

import Image from 'next/image';

const dummyImages = [
  '/content/wrapped/showcase_1.jpg',
  '/content/wrapped/showcase_2.jpg',
  '/content/wrapped/showcase_3.jpg',
  '/content/wrapped/showcase_4.jpg',
  '/content/wrapped/showcase_5.jpg',
  '/content/wrapped/showcase_6.jpg',
  '/content/wrapped/showcase_7.jpg',
  '/content/wrapped/showcase_8.jpg',
  '/content/wrapped/showcase_9.jpg',
  '/content/wrapped/showcase_10.jpg'
];

export default function ShowcaseGallery() {
  return (
    <div className="w-full">
      <div
        className="flex flex-row gap-4 overflow-x-auto pb-2 my-5"
        style={{ msOverflowStyle: 'none' }}>
        {dummyImages.map((url, index) => (
          <div
            key={index}
            className="relative shrink-0 w-[400px] h-[300px] rounded-3xl overflow-hidden">
            <Image
              src={url}
              alt={`Showcase image ${index + 1}`}
              fill
              className="object-cover"
              sizes="400px"
            />
          </div>
        ))}
      </div>

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
