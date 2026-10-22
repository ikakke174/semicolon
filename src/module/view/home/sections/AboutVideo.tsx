"use client";

import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/module/lib/components/shared";
import { site } from "@/module/lib/utility/data/site";

const photoAlt =
  "Colleagues talking together at a laptop in an office, with a play button over the photo";

function Photo() {
  return (
    <Image
      src="/images/about.jpg"
      alt={photoAlt}
      width={1800}
      height={1326}
      quality={95}
      sizes="(min-width: 1024px) 560px, 100vw"
      className="sc-about__photo"
    />
  );
}

// With a real video link the photo opens it in a new tab. Without one, the photo opens a clearly
// labelled sample message, so the play button never does nothing and never pretends to play a video.
export default function AboutVideo() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  if (site.aboutVideoUrl) {
    return (
      <a
        href={site.aboutVideoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="sc-about__video"
        aria-label={`Play the ${site.name} company video (opens in a new tab)`}
      >
        <Photo />
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        className="sc-about__video sc-about__video--button"
        aria-label={`Play the ${site.name} company video (sample, no video added yet)`}
        onClick={() => dialogRef.current?.showModal()}
      >
        <Photo />
      </button>
      <dialog
        ref={dialogRef}
        className="sc-dialog"
        aria-labelledby="sample-video-title"
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        <h3 id="sample-video-title" className="sc-dialog__title">
          Sample video
        </h3>
        <p className="sc-dialog__text">
          No company video has been added yet. Set <code>aboutVideoUrl</code> in{" "}
          <code>src/module/lib/utility/data/site.ts</code> to a real video link and this button will open it.
        </p>
        <Button type="button" onClick={() => dialogRef.current?.close()}>
          Close
        </Button>
      </dialog>
    </>
  );
}
