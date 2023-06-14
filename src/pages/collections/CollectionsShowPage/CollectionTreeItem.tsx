import TreeItem from "@mui/lab/TreeItem";
import { FC } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  nodes: MapObject;
};
export const CollectionTreeItem: FC<Props> = ({ nodes }) => (
  <TreeItem
    key={nodes.id}
    nodeId={nodes.id}
    label={
      <NavLink to={`/collection/${nodes.custom_key}`}>{nodes.name}</NavLink>
    }
  >
    {Array.isArray(nodes.children)
      ? nodes.children.map((node) => (
          <CollectionTreeItem key={node.id} nodes={node} />
        ))
      : null}
  </TreeItem>
);
