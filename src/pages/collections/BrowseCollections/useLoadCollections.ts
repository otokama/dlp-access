import { EventHandler, useCallback, useEffect, useState } from "react";
import { fetchSearchResults } from "../../../lib/fetchTools";

type Args = {
  scrollUp: EventHandler<any>;
};

export const useLoadCollections = ({ scrollUp }: Args) => {
  const [collections, setCollections] = useState<Collection[] | null>(null);
  const [nextTokens, setNextTokens] = useState([null]);
  const [limit, setStateLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState({
    field: "title",
    direction: "asc"
  });

  const currentToken = nextTokens[page];

  //Loads top level collections based on
  //filter, sort, limit, and nextToken
  useEffect(() => {
    const loadCollections = async () => {
      let options = {
        filter: {
          category: "collection",
          ...filter
        },
        sort: sort,
        limit: limit,
        nextToken: currentToken
      };
      const searchResults = await fetchSearchResults(this, options);

      setCollections(searchResults.items);
      setTotal(searchResults.total);
      setNextTokens((cur) => {
        const tokens = [...cur];
        tokens[page + 1] = searchResults.nextToken;
        return tokens;
      });
      setTotalPages(Math.ceil(searchResults.total / limit));

      if (typeof scrollUp === "function") {
        scrollUp(new Event("click"));
      }
    };
    loadCollections();
    // scrollUp is a function provided by the parent component
    // however the function is not referentially stable
    // And does not change between renders
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, sort, limit, page, currentToken]);

  const handleFilterDropdown = useCallback((_: string, val: typeof filter) => {
    setFilter(val);
  }, []);

  const handleSortbyDropdown = useCallback((_: string, val: typeof sort) => {
    setSort(val);
  }, []);

  const handleResultsNumberDropdown = useCallback(
    (e: Event, result: { value: number }) => {
      setStateLimit(result.value);
      setPage(0);
    },
    []
  );

  return {
    collections,
    total,
    page,
    limit,
    totalPages,
    handleFilterDropdown,
    handleSortbyDropdown,
    handleResultsNumberDropdown
  };
};
