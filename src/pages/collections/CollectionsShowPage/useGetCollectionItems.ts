import { useCallback, useEffect, useState } from "react";
import { getCollectionItems } from "../../../lib/fetchTools";

export const useGetCollectionItems = (id: string) => {
  const [items, setItems] = useState<Archive[] | null>(null);
  const [total, setTotal] = useState(0);
  const [nextTokens, setNextTokens] = useState([null]);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setStateLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [sort_order, setSort_order] = useState("desc");
  const currentToken = nextTokens[page];

  //Loads collection items based on collection id,
  //sort order, limit, and page
  useEffect(() => {
    const loadItems = async (collectionID: string) => {
      const response = await getCollectionItems(
        collectionID,
        sort_order,
        limit,
        currentToken
      );
      setTotal(response.total);
      setNextTokens((cur) => {
        const tokens = [...cur];
        tokens[page + 1] = response.nextToken;
        return tokens;
      });
      setTotalPages(Math.ceil(response.total / limit));
      setItems(response.items);
    };
    loadItems(id);
  }, [id, limit, sort_order, page, currentToken]);

  const handleResultsNumberDropdown = useCallback(
    (_: object, result: { value: string }) => {
      setStateLimit(parseInt(result.value));
    },
    []
  );

  const handleSortOrderDropdown = useCallback(
    (_: object, result: { value: string }) => {
      setSort_order(result.value);
    },
    []
  );

  const handlePrevPage = useCallback(() => {
    setPage(page - 1);
  }, [page]);

  const handleNextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  return {
    items,
    total,
    totalPages,
    page,
    limit,
    handleResultsNumberDropdown,
    handleSortOrderDropdown,
    handlePrevPage,
    handleNextPage
  };
};
