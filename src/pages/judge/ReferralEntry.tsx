import { useState } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import { useNavigate } from "react-router-dom";
import { isNotEmpty } from "../../utils/validators";
import { ROUTES } from "../../config/routes";
import { Screen } from '../../components/layout/Screen';
import { Stack } from "../../components/ui/Stack";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui";

export const ReferralEntry: React.FC = () => {
    const [code, setCode] = useState('');
    const [error, setError] = useState<string>()
    const {setJudgeReferral} = useAppContext();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!isNotEmpty(code)){
            setError('Masukan Kode Referral Anda')
            return
        }
        setJudgeReferral(code.trim())
        navigate(ROUTES.judge.scan)
    }

    return(
        <Screen title="Selamat Datang Dewan Juri"
        subtitle="Silahkan masukan kode referral Anda untuk memulai proses penilaian">
            <Stack as="form" onSubmit={handleSubmit} noValidate>
                <Input
                    mono
                    label="Kode Referral"
                    placeholder="CONTEH-123"
                    value={code}
                    error={error}
                    onChange={(e)=>{
                        setCode(e.target.value)
                        setError(undefined);
                    }                   }
                ></Input>
                <Button
                    type="submit"
                    size='lg'
                    fullWidth
                >Verifikasi Juri</Button>
            </Stack>
        </Screen>
    )
}


