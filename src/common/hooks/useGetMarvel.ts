import { marvelClient } from "common/clients/marvelClient";
import useSWR from "swr";

export const useGetMarvel = () => {
  const fetcher = () =>
    marvelClient({ params: "characters" })
      .get("")
      .then((response: any) => response.data);

  const { data, error, isValidating } = useSWR("/", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    characters: data?.data || null,
    charactersLoading: isValidating,
    charactersError: error,
  };
};
