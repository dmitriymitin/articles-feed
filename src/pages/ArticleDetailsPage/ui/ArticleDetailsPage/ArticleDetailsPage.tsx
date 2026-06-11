import React from 'react';
import { useParams } from "react-router-dom";

import { ArticleDetails } from "@/entities/Article";

const ArticleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <ArticleDetails id={id!} />
    </div>
  );
};

export default ArticleDetailsPage
