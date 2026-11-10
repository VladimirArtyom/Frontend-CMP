import { useNavigate } from "react-router-dom"
import { AppShell } from "../components/layout/AppShell"
import { Screen } from '../components/layout/Screen';
import { Button } from '../components/ui/Button';
import { ROUTES } from "../config/routes";

export const Home: React.FC = () => {
    const navigate = useNavigate()

    return (
        <AppShell role='home' eventName="Computing Project Fakultas Informatika" >
            <Screen title="Computing Project" subtitle="Pilih Peran untuk melanjutkan">
                <Button size="lg" fullWidth onClick={() => navigate(ROUTES.visitor.email)}>
                    Masuk Sebagai Participant
                </Button>
                <Button size="lg" fullWidth onClick={()=>navigate(ROUTES.judge.referral)}>
                    Masuk Sebagai Dewan Juri
                </Button>

            </Screen>

        </AppShell>
    )
}