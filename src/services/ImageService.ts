const images = import.meta.glob("@/assets/movies/*.{png,jpg,jpeg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export const getMovieImage = (imageName: string): string => {
  const imagePath = Object.keys(images).find((path) =>
    path.endsWith(`/${imageName}`),
  );

  return imagePath ? images[imagePath] : "";
};
