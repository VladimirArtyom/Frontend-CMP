import type { ReactNode } from "react";
import { useState } from "react";
import { type RatingCriteria, type GroupData, INITIAL_RATINGS, type RatingValue } from '../types/index';
import { AppContext } from "./AppContext";
import { APP_CONFIG } from "../config/app";

export const AppProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [visitorEmail, setVisitorEmail] = useState('');
    const [judgeReferral, setJudgeReferral] = useState('');
    const [currentGroup, setCurrentGroup] = useState<GroupData|null>(null);
    const [ratings, setRatings] = useState<RatingCriteria[]>(INITIAL_RATINGS)

    const updateRating = (id: string, value: RatingValue) =>setRatings(
        (prev) =>prev.map((r) => (r.id === id ? {...r, value}: r))
    )

    const resetFlow = () => {
        setCurrentGroup(null);
        setRatings(INITIAL_RATINGS);
    }

    return (
        <AppContext.Provider
            value={{
                visitorEmail,
                judgeReferral,
                judgeName: APP_CONFIG.judgeName,
                currentGroup,
                ratings,
                setVisitorEmail,
                setJudgeReferral,
                setCurrentGroup,
                updateRating,
                resetFlow,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}