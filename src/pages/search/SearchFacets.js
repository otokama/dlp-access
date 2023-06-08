import { useEffect, Fragment } from "react";
import Collapsible from "../../components/Collapsible";
import { NavLink } from "react-router-dom";
import qs from "query-string";
import FocusLock from "react-focus-lock";

import "../../css/ListPages.scss";
import "../../css/SearchResult.scss";

export const SearchFacets = ({
  searchFacets,
  filters,
  updateModal,
  isActive,
  updateFormState,
  languages,
  defaultSearch
}) => {
  const FocusTrapIfActive = isActive ? FocusLock : Fragment;
  const facetFields = searchFacets
    ? Object.keys(searchFacets).map((el) => ({ ...searchFacets[el], name: el }))
    : [];
  const facetNodes = {};
  if (facetFields.length) {
    facetFields.forEach((field) => {
      facetNodes[`${field.name}List`] = [];
      for (const value of field.values) {
        let isSelected =
          filters[field.name] && filters[field.name].includes(value)
            ? true
            : false;
        facetNodes[`${field.name}List`].push({
          label: value,
          selected: isSelected
        });
      }
    });
  }

  useEffect(() => {
    const keyListener = (e) => {
      if (isActive && e.keyCode === 27) {
        updateModal();
      }
    };
    document.addEventListener("keydown", keyListener);

    return () => {
      document.removeEventListener("keydown", keyListener);
    };
  }, [isActive, updateModal]);

  if (!facetFields.length || !Object.keys(facetNodes).length) {
    return null;
  }

  return (
    <div
      className={isActive ? "facet-modal-wrapper" : null}
      role={isActive ? "dialog" : null}
      aria-modal={isActive}
    >
      <FocusTrapIfActive>
        <div
          className="facet-wrapper"
          role="region"
          aria-labelledby="filters-heading"
        >
          <h2 className="facet-heading" id="filters-heading">
            Filter My Results
          </h2>
          <div
            className="facet-fields"
            data-cy="filter-collapsibles"
            role="group"
            aria-label="Choose and apply filters"
          >
            {facetFields
              .sort((a, b) => a.label.localeCompare(b.label))
              .map((field, idx) => (
                <Collapsible
                  filters={filters}
                  filterField={field.name}
                  filterLabel={field.label}
                  updateFormState={updateFormState}
                  facetNodes={facetNodes[`${field.name}List`]}
                  key={idx}
                  languages={languages}
                />
              ))}
            <div
              className="facet-modal-buttons"
              style={isActive ? { display: "flex" } : { display: "none" }}
            >
              <NavLink
                to={`/search/?${qs.stringify(defaultSearch)}`}
                role="button"
                tabIndex="0"
              >
                Clear
              </NavLink>
              <button
                type="button"
                className="apply-filters"
                onClick={updateModal}
              >
                Apply Filters
              </button>
              <NavLink
                to={`/search/?${qs.stringify(defaultSearch)}`}
                onClick={updateModal}
                role="button"
                tabIndex="0"
                data-autofocus
              >
                <i className="fas fa-times"></i>
                <span className="sr-only">Close</span>
              </NavLink>
            </div>
          </div>
        </div>
      </FocusTrapIfActive>
    </div>
  );
};
