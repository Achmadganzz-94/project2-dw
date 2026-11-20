import type { episodes } from "@/types/Episode";
import { Episodes } from "@/Database/episode";


export const getEpisode = (): episodes[] => {
  const data = localStorage.getItem("episodes");

  if (!data) {
    localStorage.setItem("episodes", JSON.stringify(Episodes));
    return Episodes;
  }

  return JSON.parse(data);
};

export const addEpisode = (episode: episodes): void => {
  const dataLama = getEpisode();

  const dataBaru = [...dataLama, episode];

  localStorage.setItem("episodes", JSON.stringify(dataBaru));
};
export const updateEpisode = (updatedEpisode: episodes) => {
  const episodes = getEpisode();

  const updatedEpisodes = episodes.map((episode) =>
    episode.id === updatedEpisode.id ? updatedEpisode : episode,
  );

  localStorage.setItem("episodes", JSON.stringify(updatedEpisodes));
};
