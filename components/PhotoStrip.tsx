import Image from "next/image";
import PhotoPlaceholder from "./PhotoPlaceholder";

export type PhotoStripItem = {
  label: string;
  src?: string;
  width?: number;
  height?: number;
  note?: string;
};

export default function PhotoStrip({
  photos,
  className = "",
}: {
  photos: PhotoStripItem[];
  className?: string;
}) {
  return (
    <ul className={`grid gap-4 sm:grid-cols-3 ${className}`}>
      {photos.map((photo) => (
        <li key={photo.label}>
          <div className="border-[4px] border-ink bg-white p-1.5 shadow-[5px_5px_0_0_#16121f]">
            {photo.src ? (
              <Image
                src={photo.src}
                alt={photo.label}
                width={photo.width ?? 1200}
                height={photo.height ?? 800}
                className="aspect-[4/3] w-full object-cover"
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              />
            ) : (
              <PhotoPlaceholder
                label={photo.label}
                note={photo.note}
                backgroundColor="bg-brand-purple/10"
                textColor="text-ink"
              />
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
