// constants/form-messages.ts
export const FormValidationMessages = {
  REQUIRED_FIELDS: "Please fill in all required fields",
  INVALID_EMAIL: "Please enter a valid email address",
  PASSWORD_MIN_LENGTH: "Password must be at least 8 characters long",
  PASSWORDS_MATCH: "Passwords do not match",
  TERMS_REQUIRED: "You must accept the terms and conditions",
  SUCCESS: "Account created successfully! Redirecting...",
  ERROR_GENERIC: "Something went wrong. Please try again.",
} as const

export const FormLabels = {
  NAME: "Full Name",
  EMAIL: "Email",
  COMPANY: "Company (optional)",
  PASSWORD: "Password",
  CONFIRM_PASSWORD: "Confirm Password",
  TERMS: "I agree to the Terms of Service and Privacy Policy",
  CREATE_ACCOUNT: "Create Account",
  CREATING_ACCOUNT: "Creating account...",
  SIGN_IN_PROMPT: "Already have an account?",
  SIGN_IN_LINK: "Sign in",
  PASSWORD_HELPER: "At least 8 characters",
  TRIAL_INFO: "14-day free trial • No credit card required",
  SECURITY_BADGES: {
    SOC2: "SOC 2 Certified",
    ENCRYPTED: "256-bit Encrypted",
    GDPR: "GDPR Compliant",
  },
} as const

export const FormPlaceholders = {
  NAME: "John Doe",
  EMAIL: "you@company.com",
  COMPANY: "Your Company",
  PASSWORD: "••••••••",
  CONFIRM_PASSWORD: "••••••••",
} as const

export const PageContent = {
  TITLE: "Create Account",
  DESCRIPTION: "Join 500+ teams mastering project timelines",
  LOGO_TEXT: "Project Pulse",
} as const

// constants/patterns.ts
export const ValidationPatterns = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
} as const

export const ValidationRules = {
  PASSWORD_MIN_LENGTH: 8,
} as const

// constants/redirects.ts
export const RedirectPaths = {
  DASHBOARD: "/dashboard",
  LOGIN: "/login",
  HOME: "/",
} as const

export const RedirectDelays = {
  SUCCESS: 1500, // 1.5 seconds
  API_SIMULATION: 1000, // 1 second
} as const