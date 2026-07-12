import { useDispatch } from "react-redux";

import { AppDispatch } from "@/app/providers/StoreProvider";

/**
 * Типизированная версия useDispatch для работы с actions и async thunks приложения.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
