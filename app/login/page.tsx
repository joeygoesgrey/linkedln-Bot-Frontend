"use client";

import { useState } from "react";
import AuthShell from "@/components/auth/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

type LoginFormState = {
  email: string;
  password: string;
  remember: boolean;
};

export default function LoginPage() {
  const [form, setForm] = useState<LoginFormState>({
    email: "",
    password: "",
    remember: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (key: keyof LoginFormState) => (value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Log in to access your content studio and engage streams."
      alternateAction={{ prompt: "New to LinkLift?", linkLabel: "Create account", href: "/signup" }}
      footer={
        <div className="space-y-2">
          <p className="font-semibold text-white">Need help?</p>
          <p>Reach out to support@linklift.ai and we’ll get you posting again within minutes.</p>
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-6">
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
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="/forgot-password" className="text-xs text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            required
            placeholder="Enter your password"
            value={form.password}
            onChange={(event) => handleChange("password")(event.target.value)}
          />
        </div>

        <div className="flex items-center justify-between text-sm text-white/70">
          <div className="flex items-center gap-2">
            <Checkbox
              id="remember"
              checked={form.remember}
              onCheckedChange={(checked) => handleChange("remember")(Boolean(checked))}
              className="border-white/40"
            />
            <Label htmlFor="remember" className="text-sm text-white/70">
              Keep me signed in
            </Label>
          </div>
          <span className="italic text-white/50">Secure by design</span>
        </div>

        <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary-600">
          {isLoading ? "Signing in..." : "Sign in"}
        </Button>
      </form>

      <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
        <p className="font-semibold text-white">What’s new in LinkLift</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Fresh engage-stream templates for SaaS, consulting, and agency pipelines.</li>
          <li>AI hook packs trained on your top-performing posts.</li>
          <li>Smart scheduling recommendations based on audience activity.</li>
        </ul>
      </div>
    </AuthShell>
  );
}
