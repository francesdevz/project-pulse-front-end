"use client"

import { useState, useCallback, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react"
import { 
    FormValidationMessages, 
    ValidationPatterns, 
    ValidationRules,
    RedirectDelays,
    RedirectPaths,
    FormLabels,
    PageContent,
    FormPlaceholders
} from '@/utils/helpers'

interface FormData {
  name: string
  email: string
  password: string
  confirmPassword: string
  company: string
  termsAccepted: boolean
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    termsAccepted: false,
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }, [])

  const handleCheckboxChange = useCallback((checked: boolean | "indeterminate") => {
    setFormData(prev => ({ ...prev, termsAccepted: checked === true }))
  }, [])

  const validateForm = useCallback((): string | null => {
    const { name, email, password, confirmPassword, termsAccepted } = formData

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      return FormValidationMessages.REQUIRED_FIELDS
    }

    if (!ValidationPatterns.EMAIL.test(email)) {
      return FormValidationMessages.INVALID_EMAIL
    }

    if (password.length < ValidationRules.PASSWORD_MIN_LENGTH) {
      return FormValidationMessages.PASSWORD_MIN_LENGTH
    }

    if (password !== confirmPassword) {
      return FormValidationMessages.PASSWORDS_MATCH
    }

    if (!termsAccepted) {
      return FormValidationMessages.TERMS_REQUIRED
    }

    return null
  }, [formData])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    
    setError("")
    setSuccess("")
    setIsLoading(true)

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      setIsLoading(false)
      return
    }

    try {
      await new Promise(resolve => setTimeout(resolve, RedirectDelays.API_SIMULATION))
      
      setSuccess(FormValidationMessages.SUCCESS)

      setTimeout(() => {
        window.location.href = RedirectPaths.DASHBOARD
      }, RedirectDelays.SUCCESS)
      
    } catch (err) {
      setError(FormValidationMessages.ERROR_GENERIC)
    } finally {
      setIsLoading(false)
    }
  }, [validateForm])

  const backgroundElements = useMemo(() => (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/4 -left-1/2 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 -right-1/2 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
    </>
  ), [])

  const logo = useMemo(() => (
    <Link href={RedirectPaths.HOME} className="flex items-center justify-center gap-2 mb-12">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
        <span className="text-primary-foreground font-bold">P</span>
      </div>
      <span className="font-bold text-lg text-foreground">{PageContent.LOGO_TEXT}</span>
    </Link>
  ), [])

  const trustBadges = useMemo(() => (
    <div className="mt-8 text-center space-y-4">
      <p className="text-xs text-muted-foreground">{FormLabels.TRIAL_INFO}</p>
      <div className="flex items-center justify-center gap-6 opacity-60">
        <span className="text-xs font-semibold text-muted-foreground">{FormLabels.SECURITY_BADGES.SOC2}</span>
        <span className="text-xs font-semibold text-muted-foreground">{FormLabels.SECURITY_BADGES.ENCRYPTED}</span>
        <span className="text-xs font-semibold text-muted-foreground">{FormLabels.SECURITY_BADGES.GDPR}</span>
      </div>
    </div>
  ), [])

  const cardHeader = useMemo(() => (
    <CardHeader className="space-y-2">
      <CardTitle className="text-3xl">{PageContent.TITLE}</CardTitle>
      <CardDescription>{PageContent.DESCRIPTION}</CardDescription>
    </CardHeader>
  ), [])

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden py-12">
      {backgroundElements}
      
      <div className="relative z-10 w-full max-w-md">
        {logo}
        
        <Card className="border-border bg-card/50 backdrop-blur-sm">
          {cardHeader}
          
          <CardContent>
            <FormFillUp
              formData={formData}
              error={error}
              success={success}
              isLoading={isLoading}
              onChange={handleChange}
              onCheckboxChange={handleCheckboxChange}
              onSubmit={handleSubmit}
            />
          </CardContent>
        </Card>

        {trustBadges}
      </div>
    </main>
  )
}

interface FormFillUpProps {
  formData: FormData
  error: string
  success: string
  isLoading: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onCheckboxChange: (checked: boolean | "indeterminate") => void
  onSubmit: (e: React.FormEvent) => void
}

const FormFillUp = ({
  formData,
  error,
  success,
  isLoading,
  onChange,
  onCheckboxChange,
  onSubmit,
}: FormFillUpProps) => {
 
  const errorMessage = useMemo(() => {
    if (!error) return null
    return (
      <div className="flex gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm">
        <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
        <p>{error}</p>
      </div>
    )
  }, [error])

  const successMessage = useMemo(() => {
    if (!success) return null
    return (
      <div className="flex gap-3 p-4 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm">
        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
        <p>{success}</p>
      </div>
    )
  }, [success])

  const formInputs = useMemo(() => [
    {
      id: "name",
      name: "name",
      label: FormLabels.NAME,
      type: "text" as const,
      placeholder: FormPlaceholders.NAME,
      value: formData.name,
      required: true,
    },
    {
      id: "email",
      name: "email",
      label: FormLabels.EMAIL,
      type: "email" as const,
      placeholder: FormPlaceholders.EMAIL,
      value: formData.email,
      required: true,
    },
    {
      id: "company",
      name: "company",
      label: FormLabels.COMPANY,
      type: "text" as const,
      placeholder: FormPlaceholders.COMPANY,
      value: formData.company,
      required: false,
    },
    {
      id: "password",
      name: "password",
      label: FormLabels.PASSWORD,
      type: "password" as const,
      placeholder: FormPlaceholders.PASSWORD,
      value: formData.password,
      required: true,
      helperText: FormLabels.PASSWORD_HELPER,
    },
    {
      id: "confirmPassword",
      name: "confirmPassword",
      label: FormLabels.CONFIRM_PASSWORD,
      type: "password" as const,
      placeholder: FormPlaceholders.CONFIRM_PASSWORD,
      value: formData.confirmPassword,
      required: true,
    },
  ], [formData])

  const signInLink = useMemo(() => (
    <div className="mt-6 text-center">
      <p className="text-sm text-muted-foreground">
        {FormLabels.SIGN_IN_PROMPT}{" "}
        <Link href={RedirectPaths.LOGIN} className="text-secondary hover:text-secondary/80 font-medium transition-colors">
          {FormLabels.SIGN_IN_LINK}
        </Link>
      </p>
    </div>
  ), [])

  const submitButtonText = useMemo(() => 
    isLoading ? FormLabels.CREATING_ACCOUNT : FormLabels.CREATE_ACCOUNT,
    [isLoading]
  )

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-5">
        {errorMessage}
        {successMessage}

        {formInputs.map((input) => (
          <FormInput
            key={input.id}
            id={input.id}
            name={input.name}
            label={input.label}
            type={input.type}
            placeholder={input.placeholder}
            value={input.value}
            onChange={onChange}
            disabled={isLoading}
            required={input.required}
            helperText={input.helperText}
          />
        ))}

        <TermsCheckbox
          checked={formData.termsAccepted}
          onCheckedChange={onCheckboxChange}
          disabled={isLoading}
        />

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-10 gap-2"
        >
          {submitButtonText}
          {!isLoading && <ArrowRight className="w-4 h-4" />}
        </Button>
      </form>

      {signInLink}
    </>
  )
}

interface FormInputProps {
  id: string
  name: string
  label: string
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
  required?: boolean
  helperText?: string
}

const FormInput = ({
  id,
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  disabled,
  required = false,
  helperText,
}: FormInputProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-10 bg-input border-border"
        disabled={disabled}
        required={required}
      />
      {helperText && (
        <p className="text-xs text-muted-foreground">{helperText}</p>
      )}
    </div>
  )
}

interface TermsCheckboxProps {
  checked: boolean
  onCheckedChange: (checked: boolean | "indeterminate") => void
  disabled: boolean
}

const TermsCheckbox = ({ checked, onCheckedChange, disabled }: TermsCheckboxProps) => {
  return (
    <div className="flex items-start gap-3">
      <Checkbox
        id="terms"
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className="mt-1"
      />
      <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer select-none">
        {FormLabels.TERMS.split("Terms of Service and Privacy Policy").map((part, index) => 
          index === 0 ? (
            <span key={index}>
              {part}
              <Link href="#" className="text-secondary hover:text-secondary/80 transition-colors">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-secondary hover:text-secondary/80 transition-colors">
                Privacy Policy
              </Link>
            </span>
          ) : null
        )}
      </label>
    </div>
  )
}