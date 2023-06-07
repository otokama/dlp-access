import { useEffect, useState, useCallback } from "react";
import {
  getCollectionMap,
  getTopLevelParentForCollection
} from "../../../lib/fetchTools";

export const useLoadMap = (collection: Collection) => {
  const [collectionMap, setCollectionMap] = useState<MapObject | null>(null);
  const [expanded, setExpanded] = useState<string[]>([]);

  //Loads collection map and sorts it by name
  useEffect(() => {
    const sortMap = (map: MapObject) => {
      const sort = function (node: MapObject) {
        if (Array.isArray(node.children)) {
          const tempChildren = node.children.slice();
          node.children = sortChildren(tempChildren);
          for (const child in node.children) {
            sort(node.children[child]);
          }
        }
      };
      const temp = JSON.parse(JSON.stringify(map));
      sort(temp);
      return temp;
    };

    const sortChildren = (children: MapObject[]) => {
      return children.sort(function (a, b) {
        let aArray = a.name.split(" ");
        let bArray = b.name.split(" ");
        let aNum = parseInt(aArray[aArray.length - 1]);
        let bNum = parseInt(bArray[bArray.length - 1]);
        if (!isNaN(aNum) && !isNaN(bNum)) {
          return aNum > bNum ? 1 : -1;
        } else {
          return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
        }
      });
    };

    const loadMap = async () => {
      let mapIdentifier = collection?.collectionmap_id;
      if (!mapIdentifier) {
        const topLevelParent = await getTopLevelParentForCollection(collection);
        mapIdentifier = topLevelParent.collectionmap_id;
      }
      const map = await getCollectionMap(mapIdentifier);
      if (map) {
        const mapObj = JSON.parse(map);
        const sorted = sortMap(mapObj);
        setCollectionMap(sorted);
        setExpanded(collection.heirarchy_path || []);
      }
    };
    loadMap();
  }, [collection]);

  const handleToggle = useCallback((_: object, nodeIds: string[]) => {
    setExpanded(nodeIds);
  }, []);

  return { collectionMap, expanded, handleToggle };
};
