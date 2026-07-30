import { useRef, useState } from "react";
import {
  ActionIcon,
  Box,
  Group,
  Image,
  Modal,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  MdChevronLeft,
  MdChevronRight,
  MdZoomIn,
  MdZoomOut,
} from "react-icons/md";

type MediaItem = {
  src: string;
  alt: string;
  /** Videos play inline; images open full screen when clicked. Defaults to image. */
  type?: "image" | "video";
};

type MediaCarouselProps = {
  media: MediaItem[];
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.5;

const SLIDE_STYLE = {
  flex: "0 0 100%",
  scrollSnapAlign: "start",
  display: "block",
} as const;

/**
 * Horizontally scrolling media strip, one item per view, driven by arrow
 * buttons. Clicking an image opens it full screen, where it can be zoomed.
 */
const MediaCarousel = ({ media }: MediaCarouselProps) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [lightboxOpened, { open, close }] = useDisclosure(false);

  // The lightbox only ever shows images, so it navigates its own subset.
  const images = media.filter((item) => item.type !== "video");

  const scrollToIndex = (next: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const clamped = Math.max(0, Math.min(next, media.length - 1));
    viewport.scrollTo({
      left: clamped * viewport.clientWidth,
      behavior: "smooth",
    });
  };

  // Keeps the arrows in sync when scrolling by trackpad, touch or keyboard.
  const handleScroll = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    setIndex(Math.round(viewport.scrollLeft / viewport.clientWidth));
  };

  const openLightbox = (item: MediaItem) => {
    setLightboxIndex(Math.max(0, images.indexOf(item)));
    setZoom(MIN_ZOOM);
    open();
  };

  const showInLightbox = (next: number) => {
    setLightboxIndex(Math.max(0, Math.min(next, images.length - 1)));
    setZoom(MIN_ZOOM);
  };

  const changeZoom = (delta: number) =>
    setZoom((current) =>
      Math.max(MIN_ZOOM, Math.min(current + delta, MAX_ZOOM)),
    );

  const lightboxImage = images[lightboxIndex];

  return (
    <>
      <Box pos="relative">
        <Box
          ref={viewportRef}
          onScroll={handleScroll}
          style={{
            display: "flex",
            alignItems: "center",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            borderRadius: 8,
            border: "1px solid var(--mantine-color-default-border)",
          }}
        >
          {media.map((item) =>
            item.type === "video" ? (
              <Box key={item.src} style={SLIDE_STYLE}>
                <video
                  controls
                  aria-label={item.alt}
                  style={{ width: "100%", display: "block" }}
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Box>
            ) : (
              <UnstyledButton
                key={item.src}
                onClick={() => openLightbox(item)}
                aria-label={`View full screen: ${item.alt}`}
                style={{ ...SLIDE_STYLE, cursor: "zoom-in" }}
              >
                <Image src={item.src} alt={item.alt} />
              </UnstyledButton>
            ),
          )}
        </Box>

        <ActionIcon
          variant="default"
          size="lg"
          radius="xl"
          aria-label="Previous item"
          disabled={index === 0}
          onClick={() => scrollToIndex(index - 1)}
          pos="absolute"
          left={8}
          top="50%"
          style={{ transform: "translateY(-50%)" }}
        >
          <MdChevronLeft size={24} />
        </ActionIcon>

        <ActionIcon
          variant="default"
          size="lg"
          radius="xl"
          aria-label="Next item"
          disabled={index === media.length - 1}
          onClick={() => scrollToIndex(index + 1)}
          pos="absolute"
          right={8}
          top="50%"
          style={{ transform: "translateY(-50%)" }}
        >
          <MdChevronRight size={24} />
        </ActionIcon>
      </Box>

      <Modal
        opened={lightboxOpened}
        onClose={close}
        fullScreen
        title={
          <Group gap="xs">
            <ActionIcon
              variant="default"
              aria-label="Zoom out"
              disabled={zoom === MIN_ZOOM}
              onClick={() => changeZoom(-ZOOM_STEP)}
            >
              <MdZoomOut size={20} />
            </ActionIcon>
            <Text size="sm" c="dimmed" w={48} ta="center">
              {Math.round(zoom * 100)}%
            </Text>
            <ActionIcon
              variant="default"
              aria-label="Zoom in"
              disabled={zoom === MAX_ZOOM}
              onClick={() => changeZoom(ZOOM_STEP)}
            >
              <MdZoomIn size={20} />
            </ActionIcon>

            {images.length > 1 && (
              <>
                <ActionIcon
                  variant="default"
                  aria-label="Previous image"
                  disabled={lightboxIndex === 0}
                  onClick={() => showInLightbox(lightboxIndex - 1)}
                  ml="md"
                >
                  <MdChevronLeft size={20} />
                </ActionIcon>
                <Text size="sm" c="dimmed">
                  {lightboxIndex + 1} / {images.length}
                </Text>
                <ActionIcon
                  variant="default"
                  aria-label="Next image"
                  disabled={lightboxIndex === images.length - 1}
                  onClick={() => showInLightbox(lightboxIndex + 1)}
                >
                  <MdChevronRight size={20} />
                </ActionIcon>
              </>
            )}
          </Group>
        }
        styles={{ body: { height: "calc(100vh - 60px)", overflow: "auto" } }}
      >
        {/* Width-based zoom (rather than a transform) so the container scrolls
            naturally once the image grows past the viewport. */}
        <Image
          src={lightboxImage?.src}
          alt={lightboxImage?.alt}
          onClick={() => (zoom === MIN_ZOOM ? setZoom(2) : setZoom(MIN_ZOOM))}
          style={{
            display: "block",
            margin: "0 auto",
            width: `${zoom * 100}%`,
            maxWidth: "none",
            cursor: zoom === MIN_ZOOM ? "zoom-in" : "zoom-out",
          }}
        />
      </Modal>
    </>
  );
};

export default MediaCarousel;
