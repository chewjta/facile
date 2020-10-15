import React from "react";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";
import { BrowseContainer } from "../containers/browse";

export default function Browse() {
  const { coding } = useContent("coding");
  const { fitness } = useContent("fitness");

  const slides = selectionFilter({ coding, fitness });

  console.log(slides);

  return <BrowseContainer slides={slides} />;
}
