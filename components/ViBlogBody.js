import getTranslation from "@/lib/getTranslation";
import React from "react";

const ViBlogBody = async ({ data }) => {
  const body = await getTranslation(data.body);

  return <div dangerouslySetInnerHTML={{ __html: body }} />;
};

export default ViBlogBody;
