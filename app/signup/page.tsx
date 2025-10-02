"use client";

import { useState } from "react";
import AuthShell from "@/components/auth/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import LinkedInButton from "@/components/auth/linkedin-button";

type FormState = {
  fullName: string;
  email: string;
  password: string;
  agree: boolean;
};

export default function SignupPage() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    password: "",
    agree: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (key: keyof FormState) => (value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.agree) return;
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsLoading(false);
  };

  return (
    <AuthShell
      title="Create your LinkLift account"
      subtitle="Launch your LinkedIn content engine in minutes."
      alternateAction={{ prompt: "Already have an account?", linkLabel: "Log in", href: "/login" }}
      footer={
        <p>
          Get 14 days free. Then choose a plan that matches your content volume. Cancel anytime, no questions asked.
        </p>
      }
    >
      <div className="space-y-4">
        <LinkedInButton onClick={() => {}} label="Continue with LinkedIn" />
        <div className="flex items-center gap-3 text-xs uppercase tracking-wide text-white/40">
          <span className="h-px flex-1 bg-white/10" />
          <span>Or create account manually</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-2">
          <Label htmlFor="fullName">Full name</Label>
          <Input
            id="fullName"
            required
            placeholder="Adaeze Obi"
            value={form.fullName}
            onChange={(event) => handleChange("fullName")(event.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">Work email</Label>
          <Input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            value={form.email}
            onChange={(event) => handleChange("email")(event.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            required
            placeholder="Create a strong password"
            value={form.password}
            onChange={(event) => handleChange("password")(event.target.value)}
            minLength={8}
          />
          <p className="text-xs text-white/50">
            Use 8 or more characters with a mix of letters, numbers, and symbols.
          </p>
        </div>

        <div className="flex items-start gap-3 rounded-lg bg-white/5 px-4 py-3">
          <Checkbox
            id="agree"
            checked={form.agree}
            onCheckedChange={(checked) => handleChange("agree")(Boolean(checked))}
            className="mt-1 border-white/40"
          />
          <Label htmlFor="agree" className="text-sm text-white/80">
            I agree to the LinkLift{' '}
            <Link href="/terms" className="text-primary underline-offset-2 hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-primary underline-offset-2 hover:underline">
              Privacy Policy
            </Link>.
          </Label>
        </div>

        <Button type="submit" disabled={isLoading || !form.agree} className="w-full bg-primary hover:bg-primary-600">
          {isLoading ? "Creating account..." : "Start free trial"}
        </Button>
      </form>

      <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
        <p className="font-semibold text-white">Why teams choose LinkLift</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Collaborate on editorial calendars and approve posts faster.</li>
          <li>Surface warm leads with intelligent engage streams.</li>
          <li>Measure impact with campaign-level reporting.</li>
        </ul>
      </div>
    </AuthShell>
  );
}
