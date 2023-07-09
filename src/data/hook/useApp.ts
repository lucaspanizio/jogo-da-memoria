import { useContext } from "react";
import { AppContext } from "@/data/context/AppContext";

export const useApp = () => useContext(AppContext)