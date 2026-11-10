import { Outlet, useLocation } from "react-router-dom"
import { AppShell } from "../components/layout/AppShell"
import { JUDGE_STEPS } from "../config/steps"

export const JudgeLayout: React.FC = () => {
    const {pathname} = useLocation() 
    return(
        <AppShell
        role="judge"
        eventName="Sistem Penilaian"
        steps={{labels: JUDGE_STEPS.labels, current: JUDGE_STEPS.byPath[pathname] ?? 0}}
        >
            <Outlet/>
        </AppShell>
    );
}