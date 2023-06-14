import { useState, FC } from "react";
import { addNewlineInDesc } from "../../../lib/MetadataRenderer";
import { getDescriptionLabel } from "src/lib/getDescriptionLabel";

type Props = {
  description: string[] | null;
  site: Site;
};

export const CollectionDescription: FC<Props> = ({ description, site }) => {
  const [descriptionTruncated, setDescriptionTruncated] = useState(true);
  const TRUNCATION_LENGTH = 600;

  if (!description || !description.length) {
    return null;
  }
  const visibleText = descriptionTruncated
    ? [description[0].substring(0, TRUNCATION_LENGTH)]
    : description;
  return (
    <div
      className={`description ${descriptionTruncated ? "trunc" : "full"}`}
      id="collection-description"
    >
      <div>
        {addNewlineInDesc(
          visibleText,
          getDescriptionLabel(
            JSON.parse(site.displayedAttributes),
            "collection"
          )
        )}{" "}
        {(description[0].length >= TRUNCATION_LENGTH ||
          description.length > 1) && (
          <span>
            <button
              onClick={() => setDescriptionTruncated(!descriptionTruncated)}
              className="more"
              type="button"
              aria-controls="collection-description"
              aria-expanded="false"
            >
              . . .[more]
            </button>
            <button
              onClick={() => setDescriptionTruncated(!descriptionTruncated)}
              className="less"
              type="button"
              aria-controls="collection-description"
              aria-expanded="true"
            >
              . . .[less]
            </button>
          </span>
        )}
      </div>
    </div>
  );
};
