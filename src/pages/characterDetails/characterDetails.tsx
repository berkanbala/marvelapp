import { ICharacterDetails } from "common/models/characterDetails";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../common/components/ui/loading/loading";
import styles from "./characterDetails.module.scss";

export const CharacterDetails = () => {
  const [characterDetails, setCharacterDetails] = useState<ICharacterDetails>(
    {} as ICharacterDetails
  );
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const query = `${process.env.REACT_APP_API_URL}/characters/${id}?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_API_HASH}`;

  useEffect(() => {
    fetch(`${query}`)
      .then((response) => response.json())
      .then((data) => setCharacterDetails(data?.data?.results[0]))
      .catch((error) => console.warn(error))
      .finally(() => setLoading(false));
  }, [id, query]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{characterDetails?.name}</h1>
      </div>
      <div className={styles.images}>
        <img
          src={`${characterDetails?.thumbnail?.path}.${characterDetails?.thumbnail?.extension}`}
          alt="Character Details"
        />
      </div>
      <div className={styles.details}>
        <div className={styles.title}>
          <h2>Comics</h2>
          <p>{characterDetails?.comics?.available}</p>
          <h2>Series</h2>
          <p>{characterDetails?.series?.available}</p>
          <h2>Stories</h2>
          <p>{characterDetails?.stories?.available}</p>
          <h2>Events</h2>
          <p>{characterDetails?.events?.available}</p>
        </div>
        <div className={styles.description}>
          {characterDetails?.description !== ""
            ? characterDetails?.description
            : "No brief description available for this character. "}
        </div>
      </div>
    </div>
  );
};
