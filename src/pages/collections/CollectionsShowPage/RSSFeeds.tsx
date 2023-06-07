import { FC } from "react";
import { useSignedLink } from "../../../hooks/useSignedLink";

type Props = {
  customKey: string;
  site: Site;
  podcast_links?: string[];
};

export const RSSFeeds: FC<Props> = ({ customKey, site, podcast_links }) => {
  const webFeed = useSignedLink(`rss/${customKey}.rss`, "text", site.siteId);

  function createRssHtml(
    rssUrl: string,
    className: string,
    imageUrl: string,
    alt: string
  ) {
    return (
      <li key={rssUrl}>
        <a
          href={rssUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          <img src={imageUrl} alt={alt} />
        </a>
      </li>
    );
  }

  if (!webFeed && !podcast_links) {
    return null;
  }
  return (
    <ul className="feed-links">
      {!!podcast_links &&
        podcast_links.map((link) => {
          if (link.indexOf("amazon.com") >= 0) {
            return createRssHtml(
              link,
              "border-square",
              "https://static.lib.vt.edu/vtdlp/images/Amazon.png",
              "Listen on Amazon Music"
            );
          } else if (link.indexOf("apple.com") >= 0) {
            return createRssHtml(
              link,
              "border-square",
              "https://static.lib.vt.edu/vtdlp/images/Apple.svg",
              "Listen on Apple Music"
            );
          } else if (
            link.indexOf("goo.gl") >= 0 ||
            link.indexOf("google.com") >= 0
          ) {
            return createRssHtml(
              link,
              "border-curved",
              "https://static.lib.vt.edu/vtdlp/images/Google.svg",
              "Listen on Google Podcasts"
            );
          } else if (link.indexOf("spotify.com") >= 0) {
            return createRssHtml(
              link,
              "badge-outline",
              "https://static.lib.vt.edu/vtdlp/images/Spotify.png",
              "Listen on Spotify"
            );
          } else if (link.indexOf("stitcher.com") >= 0) {
            return createRssHtml(
              link,
              "border-square",
              "https://static.lib.vt.edu/vtdlp/images/Stitcher.png",
              "Listen on Stitcher"
            );
          } else if (link.indexOf("breaker.audio") >= 0) {
            return createRssHtml(
              link,
              "badge-outline",
              "https://static.lib.vt.edu/vtdlp/images/breaker--white.svg",
              "Listen on Breaker"
            );
          } else if (link.indexOf("radiopublic.com") >= 0) {
            return createRssHtml(
              link,
              "border-square",
              "https://static.lib.vt.edu/vtdlp/images/radiopublic-white.png",
              "Listen on Radio Public"
            );
          } else if (link.indexOf("pocketcasts.com") >= 0) {
            return createRssHtml(
              link,
              "border-square",
              "https://static.lib.vt.edu/vtdlp/images/pocketcasts.png",
              "Listen on Pocket Casts"
            );
          } else if (link.indexOf("tunein.com") >= 0) {
            return createRssHtml(
              link,
              "border-square",
              "https://static.lib.vt.edu/vtdlp/images/tunein.png",
              "Listen on Tune In"
            );
          } else if (link.indexOf("podchaser.com") >= 0) {
            return createRssHtml(
              link,
              "border-square",
              "https://static.lib.vt.edu/vtdlp/images/podchaser.png",
              "Listen on Pod Chaser"
            );
          } else if (link.indexOf("podbean.com") >= 0) {
            return createRssHtml(
              link,
              "border-square",
              "https://static.lib.vt.edu/vtdlp/images/podbean.png",
              "Listen on Podbean"
            );
          } else if (link.indexOf("castbox.fm") >= 0) {
            return createRssHtml(
              link,
              "border-square",
              "https://static.lib.vt.edu/vtdlp/images/Castbox.svg",
              "Listen on Castbox"
            );
          } else {
            console.log(`Error: ${link}`);
            return <></>;
          }
        })}
      {webFeed && (
        <li className="custom-badge" key="rss">
          <a href={webFeed} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-rss"></i>
            RSS Link
          </a>
        </li>
      )}
    </ul>
  );
};
