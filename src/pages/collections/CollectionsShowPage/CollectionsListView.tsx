import { useState, useEffect, FC } from "react";
import { CollectionMetadataSection } from "./CollectionMetadataSection";
import { CollectionItems } from "./CollectionItems";
import SocialButtons from "../../../components/SocialButtons";
import { Accordion, Icon } from "semantic-ui-react";

type Props = {
  site: Site;
  collection: Collection;
  metadataTitle: string;
  collectionCustomKey: string;
  viewOption: string;
  title: string;
  media: string;
  hasParentCollection: boolean;
};
export const CollectionsListView: FC<Props> = ({
  site,
  collection,
  metadataTitle,
  collectionCustomKey,
  viewOption,
  title,
  media,
  hasParentCollection
}) => {
  const [isSocialActive, setIsSocialActive] = useState(true);
  const [isMetadataActive, setIsMetadataActive] = useState(true);
  const options = site?.siteOptions && JSON.parse(site.siteOptions);
  const socialButtons = options?.socialMedia;

  //Closes accordion sections on mobile screens and
  //opens them on larger screens
  useEffect(() => {
    const setValues = () => {
      if (window.innerWidth < 992) {
        setIsSocialActive(false);
        setIsMetadataActive(false);
      }
    };
    setValues();
    window.addEventListener("resize", setValues);
    return () => {
      window.removeEventListener("resize", setValues);
    };
  }, []);

  return (
    <div className="mid-content-row list-view row">
      <div className="col-12 col-lg-4 mb-5">
        {socialButtons?.length && (
          <div className="social-buttons-wrapper-box">
            <Accordion>
              <Accordion.Title
                active={isSocialActive}
                index={0}
                onClick={() => {
                  setIsSocialActive(!isSocialActive);
                }}
              >
                <Icon name="dropdown" />
                Share
              </Accordion.Title>
              <Accordion.Content active={isSocialActive}>
                <SocialButtons
                  buttons={socialButtons}
                  url={window.location.href}
                  title={title}
                  media={media}
                  viewOption={viewOption}
                />
              </Accordion.Content>
            </Accordion>
          </div>
        )}
        <Accordion>
          <Accordion.Title
            active={isMetadataActive}
            index={0}
            onClick={() => {
              setIsMetadataActive(!isMetadataActive);
            }}
            id="collection-details-section-header"
          >
            <Icon name="dropdown" />
            {metadataTitle}
          </Accordion.Title>
          <Accordion.Content active={isMetadataActive}>
            <CollectionMetadataSection
              key="collection-metadata-section"
              site={site}
              collection={collection}
              metadataTitle={metadataTitle}
              collectionCustomKey={collectionCustomKey}
              viewOption={viewOption}
              hasParentCollection={hasParentCollection}
            />
          </Accordion.Content>
        </Accordion>
      </div>
      <CollectionItems
        key="collection-items-section"
        collection={collection}
        viewOption={viewOption}
        site={site}
      />
    </div>
  );
};
