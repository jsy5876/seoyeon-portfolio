"use client";

import { useEffect, useState } from "react";
import type { Project } from "../../data/project";
import ProjectImageGallery from "./ProjectImageGallery";

type ProjectDetailModalProps = {
    project: Project | null;
    onClose: () => void;
};

export default function ProjectDetailModal({
    project,
    onClose,
}: ProjectDetailModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!project) return;

        setCurrentImageIndex(0);
        setIsOpen(false);

        const frame = window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                setIsOpen(true);
            });
        });

        return () => window.cancelAnimationFrame(frame);
    }, [project]);

    useEffect(() => {
        if (!project) return;

        const originalBodyOverflow = document.body.style.overflow;
        const originalHtmlOverflow =
            document.documentElement.style.overflow;

        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalBodyOverflow;
            document.documentElement.style.overflow =
                originalHtmlOverflow;
        };
    }, [project]);

    if (!project) return null;

    const modalImages =
        project.images && project.images.length > 0
            ? project.images
            : [project.image];

    const currentImage = modalImages[currentImageIndex];

    const hasMultipleImages = modalImages.length > 1;

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? modalImages.length - 1 : prev - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === modalImages.length - 1 ? 0 : prev + 1
        );
    };

    const handleClose = () => {
        setIsOpen(false);

        window.setTimeout(() => {
            onClose();
        }, 200);
    };

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm transition-opacity duration-200 ${
                isOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleClose}
        >
            <div
                className={`relative max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-[#0f0525] shadow-2xl shadow-purple-900/40 transition-all duration-200 ease-out ${
                    isOpen
                        ? "scale-100 opacity-100 translate-y-0"
                        : "scale-90 opacity-0 translate-y-6"
                }`}
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={handleClose}
                    aria-label="모달 닫기"
                    className="absolute right-5 top-5 z-30 flex h-12 w-12 items-center justify-center rounded-full cursor-pointer border border-white/10 bg-black/50 text-3xl leading-none text-gray-300 transition duration-200 hover:scale-110"
                >
                    ✕
                </button>

                <div className="max-h-[85vh] overflow-y-auto p-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    <ProjectImageGallery
                        project={project}
                        currentImageIndex={currentImageIndex}
                        modalImages={modalImages}
                        currentImage={currentImage}
                        hasMultipleImages={hasMultipleImages}
                        handlePrevImage={handlePrevImage}
                        handleNextImage={handleNextImage}
                        setCurrentImageIndex={setCurrentImageIndex}
                    />

                    <div className="mt-6">
                        <h2
                            id="project-modal-title"
                            className="mt-2 text-3xl font-bold text-white"
                        >
                            {project.title}
                        </h2>
                    </div>

                    <p className="mt-4 leading-7 text-gray-400">
                        {project.detail ?? project.description}
                    </p>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-2xl bg-white/5 p-4">
                            <p className="text-sm text-gray-500">
                                작업 기간
                            </p>

                            <p className="mt-1 font-semibold text-white">
                                {project.duration ?? "미정"}
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white/5 p-4">
                            <p className="text-sm text-gray-500">
                                구성원
                            </p>

                            <p className="mt-1 font-semibold text-white">
                                {project.teamsize ?? "개인 프로젝트"}
                            </p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-bold text-white">
                            🛠️ 사용 기술
                        </h3>

                        <div className="mt-3 flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {!!project.features?.length && (
                        <div className="mt-6">
                            <h3 className="text-xl font-extrabold">
                                <span className="mr-1">📄</span>

                                <span className="bg-gradient-to-r from-purple-400 via-pink-200 to-white bg-clip-text text-transparent">
                                    주요 기능
                                </span>
                            </h3>

                            <ul className="mt-3 space-y-2 text-sm text-gray-300">
                                {project.features.map((feature) => (
                                    <li key={feature}>
                                        ☑️ {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {!!project.troubleshooting?.length && (
                        <div className="mt-6">
                            <h3 className="text-lg font-bold text-white">
                                ⚠️  문제 해결 과정
                            </h3>

                            <div className="relative mt-6 space-y-6 before:absolute before:left-4 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-purple-400/20">
                                {project.troubleshooting.map(
                                    (item, index) => (
                                        <div
                                            key={item.problem}
                                            className="relative flex gap-4"
                                        >
                                            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-purple-400/30 bg-[#26184b] text-sm font-bold text-purple-200">
                                                {index + 1}
                                            </div>

                                            <div className="pt-0.5">
                                                <p className="text-sm font-semibold leading-6 text-white">
                                                    {item.problem}
                                                </p>

                                                <p className="mt-1 text-sm leading-6 text-gray-400">
                                                    {item.solution}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    )}

                    {!!project.learned?.length && (
                        <div className="mt-8 border-t border-white/20 pt-6">
                            <h3 className="text-lg font-bold text-purple-400">
                                🌟  배운 점
                            </h3>

                            <div className="mt-3 space-y-2 text-sm text-gray-300">
                                {project.learned.map((item) => (
                                    <p key={item}>{item}</p>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-8 flex gap-3">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg border border-white/15 px-4 py-2 text-sm text-gray-200 transition hover:border-purple-400 hover:text-purple-300"
                        >
                            GitHub
                        </a>

                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-500"
                        >
                            Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}