import { ROUTES } from "./routes"

export interface StepConfig{
    labels: string[],
    byPath: Record<string, number>
}

export const VISITOR_STEPS: StepConfig = {
  labels: ['Email', 'Scan', 'Vote'],
  byPath: {
    [ROUTES.visitor.email]: 0,
    [ROUTES.visitor.scan]: 1,
    [ROUTES.visitor.confirm]: 2,
    [ROUTES.visitor.success]: 2,
  },
};

export const JUDGE_STEPS: StepConfig = {
  labels: ['Kode', 'Scan', 'Nilai'],
  byPath: {
    [ROUTES.judge.referral]: 0,
    [ROUTES.judge.scan]: 1,
    [ROUTES.judge.rate]: 2,
    [ROUTES.judge.success]: 2,
  },
};
