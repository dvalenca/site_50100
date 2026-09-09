import PhotoPlaceholder from "./PhotoPlaceholder";

type PhotoStripProps = {
  photos: { label: string; note?: string }[];
  className?: string;
};

export default function PhotoStrip({ photos, className = "" }: PhotoStripProps) {
  return (
    <ul className={`grid gap-4 sm:grid-cols-3 ${className}`}>
      {photos.map((photo) => (
        <li key={photo.label}>
          <div className="border-[4px] border-ink bg-white p-1.5 shadow-[5px_5px_0_0_#16121f]">
            <PhotoPlaceholder
              label={photo.label}
              note={photo.note}
              backgroundColor="bg-brand-purple/10"
              textColor="text-ink"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
