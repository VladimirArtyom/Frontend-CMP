import { useNavigate } from "react-router-dom"
import { useAppContext } from "../../hooks/useAppContext"

export const JudgeScanQR: React.FC = () => {

    const navigate = useNavigate()
    const {judgeName} = useAppContext()
    const handleScan = useGroupScan()
}