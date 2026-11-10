export const ROUTES = {
    home: '/',
    visitor: {
        email: '/visitor/email',
        scan: '/visitor/scan',
        confirm: '/visitor/confirm',
        success: '/visitor/success',
    },
    judge: {
        referral: '/judge/referral',
        scan: '/judge/scan',
        rate: '/judge/rate',
        success: '/judge/success'
    }
} as const