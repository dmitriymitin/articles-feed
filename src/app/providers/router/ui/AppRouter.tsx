import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { PageLoader } from "@/widgets/PageLoader";

import { routeConfig } from "@/shared/config/routeConfig/routeConfig";

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
