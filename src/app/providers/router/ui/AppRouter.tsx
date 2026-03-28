import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routeConfig } from "@/shared/config/routeConfig/routeConfig";

import { PageLoader } from "@/widgets/PageLoader";

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map((value) => (
        <Route
          key={value.path}
          {...value}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{value.element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};
