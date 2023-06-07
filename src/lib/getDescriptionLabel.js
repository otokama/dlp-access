/**
 * Isolates the description field's labels from the displayed attributes array
 * @param displayedAttributes
 * @param type
 * @returns Array of description field's labels or an empty array if no label has been set
 */
export const getDescriptionLabel = (displayedAttributes, type) => {
  const descriptionLabel = displayedAttributes[type].filter(
    (obj) => obj.field === "description"
  );
  return !!descriptionLabel.length
    ? descriptionLabel[0].label
    : descriptionLabel;
};
