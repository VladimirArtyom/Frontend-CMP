import { useState } from 'react'
import { Button } from './components/ui'
import { Input } from './components/ui/Input'
import { TopBar } from './components/layout/TopBar'
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { Screen } from './components/layout/Screen';
import { Logo } from './components/layout/Logo';
import { StepIndicator } from './components/layout/StepIndicator';
import { AppShell } from './components/layout/AppShell';
import { JudgeLayout } from './layouts/JudgeLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppProvider';
import { ROUTES } from './config/routes';
import { Home } from './pages/Home';
import { ReferralEntry } from './pages/judge/ReferralEntry';


const App: React.FC = () => (
  <AppProvider>
    <BrowserRouter>
    <Routes>
      <Route path={ROUTES.home} element={<Home/>}/>
      <Route element={<JudgeLayout/>}>
        <Route path={ROUTES.judge.referral} element={<ReferralEntry/>}/>
        <Route path={ROUTES.judge.scan} element={<ReferralEntry/>}/>
        <Route path={ROUTES.judge.success} element={<ReferralEntry/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  </AppProvider>

)
export default App
