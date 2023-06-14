import { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { searchCollections } from "../../../graphql/queries";
import { getTopLevelParentForCollection } from "../../../lib/fetchTools";

type GetCollection = {
  searchCollections: {
    items: [any];
  };
};

export const useGetCollection = (customKey: string) => {
  const [collection, setCollection] = useState<Collection | null>(null);
  const [collectionCustomKey, setCollectionCustomKey] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState<string[] | null>(null);
  const [thumbnail_path, setThumbnail_path] = useState("");
  const [creator, setCreator] = useState<string[] | null>(null);
  const [updatedAt, setUpdatedAt] = useState("");
  const [isError, setIsError] = useState(false);

  // Fetches collection data from customKey and retrieves top level parent collection
  useEffect(() => {
    const getCollection = async (customKey: string) => {
      const options = {
        order: "ASC",
        limit: 1,
        filter: {
          collection_category: {
            eq: process.env.REACT_APP_REP_TYPE!.toLowerCase()
          },
          visibility: { eq: true },
          custom_key: {
            matchPhrase: customKey
          }
        }
      };
      const response = (await API.graphql(
        graphqlOperation(searchCollections, options)
      )) as { data: GetCollection };
      try {
        const collection = response.data.searchCollections.items[0];
        const topLevelParentCollection = await getTopLevelParentForCollection(
          collection
        );
        setCollection(collection);
        setCollectionCustomKey(topLevelParentCollection.custom_key);
        setTitle(topLevelParentCollection.title);
        setDescription(topLevelParentCollection?.description);
        setThumbnail_path(topLevelParentCollection?.thumbnail_path);
        setCreator(topLevelParentCollection?.creator);
        setUpdatedAt(topLevelParentCollection?.updatedAt);
      } catch (error) {
        console.error(`Error fetching collection: ${customKey}`);
        setIsError(true);
      }
    };
    getCollection(customKey);
  }, [customKey]);

  return {
    collection,
    collectionCustomKey,
    title,
    description,
    thumbnail_path,
    creator,
    updatedAt,
    isError
  };
};
