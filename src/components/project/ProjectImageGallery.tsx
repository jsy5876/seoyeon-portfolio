import Image from "next/image";
import type { Project } from "../../data/project";

type ProjectImageGalleryProps = {
    project: Project;
    currentImageIndex: number;
    modalImages: string[];
    currentImage: string;
    hasMultipleImages: boolean;
    handlePrevImage: () => void;
    handleNextImage: () => void;
    setCurrentImageIndex: (index: number) => void;
};

export default function ProjectImageGallery({
    project,
    currentImageIndex,
    modalImages,
    currentImage,
    hasMultipleImages,
    handlePrevImage,
    handleNextImage,
    setCurrentImageIndex,
}: ProjectImageGalleryProps) {
    return (
        <>
            <div className="relative w-full overflow-hidden rounded-2xl bg-slate-900">
                <Image
                    src={currentImage}
                    alt={`${project.title} 상세 이미지 ${
                        currentImageIndex + 1
                    }`}
                    width={1200}
                    height={800}
                    sizes="100vw"
                    className="h-auto w-full object-contain"
                />

                {hasMultipleImages && (
                    <>
                        <button
                            type="button"
                            aria-label="이전 이미지"
                            onClick={handlePrevImage}
                            className="absolute left-4 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/50 text-xl text-white transition hover:scale-110 hover:bg-black/70"
                        >
                            {"<"}
                        </button>

                        <button
                            type="button"
                            aria-label="다음 이미지"
                            onClick={handleNextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/50 text-xl text-white transition hover:scale-110 hover:bg-black/70"
                        >
                            {">"}
                        </button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
                            {currentImageIndex + 1} /{" "}
                            {modalImages.length}
                        </div>
                    </>
                )}
            </div>

            {hasMultipleImages && (
                <div className="mt-4 flex justify-center gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    {modalImages.map((image, index) => (
                        <button
                            key={image}
                            type="button"
                            onClick={() =>
                                setCurrentImageIndex(index)
                            }
                            className={`relative h-16 w-28 shrink-0 overflow-hidden rounded-xl border transition ${
                                currentImageIndex === index
                                    ? "border-purple-400"
                                    : "border-white/10 opacity-60 hover:opacity-100"
                            }`}
                        >
                            <Image
                                src={image}
                                alt={`${project.title} 미리보기 ${
                                    index + 1
                                }`}
                                fill
                                sizes="112px"
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </>
    );
}