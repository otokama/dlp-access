import React, { FC, EventHandler } from "react";
import SiteTitle from "../../../components/SiteTitle";
import ItemListView from "../../../components/ItemListView";
import GalleryView from "../../../components/GalleryView";
import ResultsNumberDropdown from "../../../components/ResultsNumberDropdown";
import FilterDropdown from "../../../components/FilterDropdown";
import SortbyDropdown from "../../../components/SortbyDropdown";
import Pagination from "../../../components/Pagination";
import ViewBar from "../../../components/ViewBar";

import "../../../css/ListPages.scss";
import "../../../css/CollectionsListPage.scss";
import { useLoadCollections } from "./useLoadCollections";
import { useView } from "./useView";

type Props = {
  scrollUp: EventHandler<any>;
  site: Site;
};

export const BrowseCollections: FC<Props> = ({ scrollUp, site }) => {
  const browseCollections =
    site?.browseCollections && JSON.parse(site.browseCollections);

  const {
    collections,
    total,
    totalPages,
    page,
    limit,
    handleFilterDropdown,
    handleSortbyDropdown,
    handleResultsNumberDropdown
  } = useLoadCollections({ scrollUp });

  const { view, handleSetView } = useView();

  if (!site || !browseCollections) {
    return null;
  }

  return (
    <div>
      <SiteTitle siteTitle={site.siteTitle} pageTitle="Collections" />
      <div className="collection-browse-wrapper">
        <div className="collection-browse-header">
          <h1 className="list-type">About Our Collections</h1>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="navbar navbar-light justify-content-between"
              role="region"
              aria-label="Browsing Tools"
              aria-controls="browse-results"
            >
              <div
                className="collection-filters"
                role="group"
                aria-roledescription="Filter and sort options"
              >
                <FilterDropdown
                  siteFilter={browseCollections.filter}
                  updateFormState={handleFilterDropdown}
                />
                <SortbyDropdown
                  siteSort={browseCollections.sort}
                  updateFormState={handleSortbyDropdown}
                />
              </div>
              <div className="form-inline collection-view-options">
                <ViewBar
                  view={view}
                  updateFormState={handleSetView}
                  pageViews={["Gallery", "List"]}
                />
                <ResultsNumberDropdown setLimit={handleResultsNumberDropdown} />
              </div>
            </div>
          </div>
          {collections !== null ? (
            <>
              <div
                className="row justify-content-center"
                id="browse-results"
                role="region"
                aria-label="Browse results"
              >
                {collections.map((collection) => {
                  if (view === "Gallery") {
                    return (
                      <GalleryView
                        site={site}
                        key={collection.id}
                        item={collection}
                        category="collection"
                        label={false}
                      />
                    );
                  } else {
                    return (
                      <ItemListView
                        site={site}
                        key={collection.id}
                        item={collection}
                        category="collection"
                        label={false}
                      />
                    );
                  }
                })}
              </div>
              <div aria-live="polite">
                <Pagination
                  numResults={collections.length}
                  total={total}
                  page={page}
                  limit={limit}
                  previousPage={() => page - 1}
                  nextPage={() => page + 1}
                  totalPages={totalPages}
                  isSearch={false}
                  atBottom={true}
                />
              </div>
            </>
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
    </div>
  );
};
