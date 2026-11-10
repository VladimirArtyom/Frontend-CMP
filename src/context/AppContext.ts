import { createContext} from "react";
import type { GroupData, RatingCriteria, RatingValue } from "../types";

export interface AppState{
    visitorEmail: string;
    judgeReferral: string;
    judgeName: string;
    currentGroup: GroupData|null;
    ratings: RatingCriteria[],
    setVisitorEmail: (email: string) => void;
    setJudgeReferral: (referral: string) => void;
    setCurrentGroup: (group: GroupData) => void;
    updateRating:(id: string, value: RatingValue) => void;
    resetFlow:() => void;
}


export const AppContext = createContext<AppState | undefined>(undefined);