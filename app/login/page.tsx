"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccess("")

    // Simulate API call
    setTimeout(() => {
      if (email && password) {
        setSuccess("Login successful! Redirecting...")
        // In a real app, redirect to dashboard
        setTimeout(() => {
          window.location.href = "/dashboard"
        }, 1500)
      } else {
        setError("Please fill in all fields")
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Gradient accents */}
      <div className="absolute top-1/4 -left-1/2 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 -right-1/2 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-12">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">P</span>
          </div>
          <span className="font-bold text-lg text-foreground">Project Pulse</span>
        </Link>

        <Card className="border-border bg-card/50 backdrop-blur-sm">
          <CardHeader className="space-y-2">
            <CardTitle className="text-3xl">Welcome Back</CardTitle>
            <CardDescription>Sign in to your Project Pulse account</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error message */}
              {error && (
                <div className="flex gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <p>{error}</p>
                </div>
              )}

              {/* Success message */}
              {success && (
                <div className="flex gap-3 p-4 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <p>{success}</p>
                </div>
              )}

              {/* Email input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-10 bg-input border-border"
                  disabled={isLoading}
                />
              </div>

              {/* Password input */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-foreground">
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs text-secondary hover:text-secondary/80 transition-colors"
                  >
                    Forgot?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-10 bg-input border-border"
                  disabled={isLoading}
                />
              </div>

              {/* Sign in button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-10 gap-2"
              >
                {isLoading ? "Signing in..." : "Sign In"}
                {!isLoading && <ArrowRight className="w-4 h-4" />}
              </Button>
            </form>

            {/* Sign up link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link href="/register" className="text-secondary hover:text-secondary/80 font-medium transition-colors">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Trust badges */}
        <div className="mt-8 text-center space-y-4">
          <p className="text-xs text-muted-foreground">Trusted by 500+ teams worldwide</p>
          <div className="flex items-center justify-center gap-6 opacity-60">
            <span className="text-xs font-semibold text-muted-foreground">SOC 2 Certified</span>
            <span className="text-xs font-semibold text-muted-foreground">256-bit Encrypted</span>
            <span className="text-xs font-semibold text-muted-foreground">99.9% Uptime</span>
          </div>
        </div>
      </div>
    </main>
  )
}
