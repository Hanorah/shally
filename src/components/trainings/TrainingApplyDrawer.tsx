"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  MessageCircle,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { PACKAGES, SITE } from "@/lib/constants";

const experienceOptions = ["Beginner", "I bake sometimes", "I already sell"];
const accommodationOptions = [
  "Yes, I need accommodation",
  "No, I have a place to stay",
];

const STEPS = [
  {
    title: "About you",
    subtitle: "Your name and the best number to reach you on.",
  },
  {
    title: "Choose your class",
    subtitle: "Select the programme you want to apply for.",
  },
  {
    title: "Training details",
    subtitle: "Your experience level and accommodation needs.",
  },
  {
    title: "Your goal",
    subtitle: "What you want to learn or achieve.",
  },
] as const;

type ApplicationForm = {
  name: string;
  phone: string;
  package: string;
  experience: string;
  accommodation: string;
  goal: string;
};

type TrainingApplyDrawerProps = {
  open: boolean;
  onClose: () => void;
  initialPackage?: string;
};

export default function TrainingApplyDrawer({
  open,
  onClose,
  initialPackage = PACKAGES[1].name,
}: TrainingApplyDrawerProps) {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<ApplicationForm>({
    name: "",
    phone: "",
    package: initialPackage,
    experience: experienceOptions[0],
    accommodation: accommodationOptions[0],
    goal: "",
  });

  const totalSteps = STEPS.length;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    setStep(0);
    setForm({
      name: "",
      phone: "",
      package: initialPackage,
      experience: experienceOptions[0],
      accommodation: accommodationOptions[0],
      goal: "",
    });
  }, [open, initialPackage]);

  useEffect(() => {
    if (!open) return;

    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } })
      .lenis;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    lenis?.stop();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      lenis?.start();
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const whatsappUrl = useMemo(() => {
    const message = [
      "Hi Shally Pastries Training, I want to apply for a class.",
      "",
      `Name: ${form.name || "Not provided"}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Package: ${form.package}`,
      `Experience: ${form.experience}`,
      `Accommodation: ${form.accommodation}`,
      `Goal: ${form.goal || "Not provided"}`,
    ].join("\n");

    return `${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
  }, [form]);

  const canContinue =
    step === 0
      ? form.name.trim().length > 1 && form.phone.trim().length >= 10
      : true;

  if (!open || !mounted) return null;

  const current = STEPS[step];

  return createPortal(
    <div className="fixed inset-0 z-[120]">
      <button
        type="button"
        aria-label="Close application"
        className="absolute inset-0 bg-[#1a120c]/50 backdrop-blur-md"
        onClick={onClose}
      />

      <aside
        data-lenis-prevent
        className="drawer-slide-in absolute inset-y-3 right-3 flex w-[calc(100%-1.5rem)] max-w-[480px] flex-col overflow-hidden rounded-[28px] border border-border/80 bg-background shadow-[-24px_0_80px_rgba(0,0,0,0.18)] sm:inset-y-4 sm:right-4 sm:w-full"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-orange/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-24 -left-16 h-48 w-48 rounded-full bg-brand-purple/15 blur-3xl" />

        <div className="relative border-b border-border/80 px-6 pb-5 pt-5 sm:px-7 sm:pt-6">
          <div className="mb-5 flex items-center justify-end">
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface/80 text-foreground transition-colors hover:bg-hover"
            >
              <X size={17} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {STEPS.map((_, i) => (
              <div key={i} className="flex flex-1 items-center gap-2">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-heading text-[12px] font-bold transition-all duration-300 ${
                    i < step
                      ? "bg-brand-orange text-white"
                      : i === step
                        ? "bg-foreground text-background ring-4 ring-foreground/10"
                        : "border border-border bg-surface text-muted"
                  }`}
                >
                  {i < step ? <Check size={14} strokeWidth={3} /> : i + 1}
                </span>
                {i < STEPS.length - 1 && (
                  <span
                    className={`h-px flex-1 transition-colors duration-300 ${
                      i < step ? "bg-brand-orange" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          data-lenis-prevent
          className="relative flex-1 overflow-y-auto overscroll-contain px-6 py-6 sm:px-7"
        >
          <div key={step} className="drawer-step-in">
            <p className="font-heading text-[11px] font-semibold tracking-[2px] text-brand-orange uppercase">
              Step {step + 1} of {totalSteps}
            </p>
            <h3 className="mt-2 font-heading text-[clamp(22px,4vw,28px)] font-extrabold tracking-[-0.03em] text-foreground">
              {current.title}
            </h3>
            <p className="mt-2 max-w-sm font-body text-[14px] leading-relaxed text-muted">
              {current.subtitle}
            </p>

            <div className="mt-8">
              {step === 0 && (
                <div className="space-y-5">
                  <label className="block">
                    <span className="mb-2 flex items-center gap-2 font-heading text-[13px] font-semibold text-foreground">
                      <User size={14} className="text-muted" />
                      Full name
                    </span>
                    <input
                      value={form.name}
                      onChange={(e) =>
                        setForm((c) => ({ ...c, name: e.target.value }))
                      }
                      placeholder="e.g. Ada Okonkwo"
                      autoFocus
                      className="w-full rounded-[18px] border border-border bg-surface px-4 py-3.5 font-body text-[15px] text-foreground shadow-sm outline-none transition-all placeholder:text-muted-light focus:border-foreground/30 focus:ring-4 focus:ring-foreground/5"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 flex items-center gap-2 font-heading text-[13px] font-semibold text-foreground">
                      <MessageCircle size={14} className="text-muted" />
                      Phone / WhatsApp
                    </span>
                    <input
                      value={form.phone}
                      onChange={(e) =>
                        setForm((c) => ({ ...c, phone: e.target.value }))
                      }
                      placeholder="080..."
                      type="tel"
                      className="w-full rounded-[18px] border border-border bg-surface px-4 py-3.5 font-body text-[15px] text-foreground shadow-sm outline-none transition-all placeholder:text-muted-light focus:border-foreground/30 focus:ring-4 focus:ring-foreground/5"
                    />
                  </label>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-3">
                  {PACKAGES.map((pkg) => {
                    const selected = form.package === pkg.name;
                    return (
                      <button
                        key={pkg.name}
                        type="button"
                        onClick={() =>
                          setForm((c) => ({ ...c, package: pkg.name }))
                        }
                        className={`group relative w-full overflow-hidden rounded-[22px] border p-5 text-left transition-all duration-300 ${
                          selected
                            ? "border-brand-orange bg-brand-orange text-white shadow-[0_20px_50px_rgba(255,106,43,0.28)]"
                            : "border-border bg-surface hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
                        }`}
                      >
                        {pkg.featured && !selected && (
                          <span className="mb-2 inline-flex rounded-full bg-brand-orange/15 px-2.5 py-0.5 font-heading text-[10px] font-semibold uppercase tracking-wide text-brand-orange">
                            Popular
                          </span>
                        )}
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-heading text-[16px] font-bold">
                              {pkg.name}
                            </p>
                            <p
                              className={`mt-1 font-body text-[13px] ${
                                selected ? "text-white/80" : "text-muted"
                              }`}
                            >
                              {pkg.note}
                            </p>
                          </div>
                          <p className="font-heading text-[22px] font-extrabold tracking-tight">
                            {pkg.price}
                          </p>
                        </div>
                        {selected && (
                          <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-white/25">
                            <Check size={13} strokeWidth={3} />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8">
                  <div>
                    <p className="font-heading text-[13px] font-semibold text-foreground">
                      Baking experience
                    </p>
                    <div className="mt-3 grid gap-2.5">
                      {experienceOptions.map((option) => {
                        const selected = form.experience === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() =>
                              setForm((c) => ({ ...c, experience: option }))
                            }
                            className={`rounded-[16px] border px-4 py-3.5 text-left font-body text-[14px] transition-all ${
                              selected
                                ? "border-foreground bg-foreground text-background shadow-sm"
                                : "border-border bg-surface text-foreground hover:bg-hover"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <p className="font-heading text-[13px] font-semibold text-foreground">
                      Accommodation
                    </p>
                    <div className="mt-3 grid gap-2.5">
                      {accommodationOptions.map((option) => {
                        const selected = form.accommodation === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() =>
                              setForm((c) => ({ ...c, accommodation: option }))
                            }
                            className={`rounded-[16px] border px-4 py-3.5 text-left font-body text-[14px] transition-all ${
                              selected
                                ? "border-foreground bg-foreground text-background shadow-sm"
                                : "border-border bg-surface text-foreground hover:bg-hover"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <label className="block">
                    <span className="mb-2 flex items-center gap-2 font-heading text-[13px] font-semibold text-foreground">
                      <Sparkles size={14} className="text-muted" />
                      Your goal
                    </span>
                    <textarea
                      value={form.goal}
                      onChange={(e) =>
                        setForm((c) => ({ ...c, goal: e.target.value }))
                      }
                      placeholder="e.g. I want to learn cake decorating and start selling from home..."
                      rows={5}
                      className="w-full resize-none rounded-[18px] border border-border bg-surface px-4 py-3.5 font-body text-[15px] leading-relaxed text-foreground shadow-sm outline-none transition-all placeholder:text-muted-light focus:border-foreground/30 focus:ring-4 focus:ring-foreground/5"
                    />
                  </label>
                  <div className="mt-5 rounded-[20px] border border-border bg-surface-muted/80 p-4">
                    <p className="font-body text-[13px] leading-relaxed text-muted">
                      Submitting opens WhatsApp with your answers filled in.
                      Shally Pastries Training will confirm your seat,
                      accommodation, and payment details from there.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="relative border-t border-border/80 bg-surface/80 px-6 py-5 backdrop-blur-xl sm:px-7">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-hover disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Previous step"
            >
              <ArrowLeft size={16} />
            </button>

            {step < totalSteps - 1 ? (
              <button
                type="button"
                disabled={!canContinue}
                onClick={() =>
                  setStep((s) => Math.min(totalSteps - 1, s + 1))
                }
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-foreground font-heading text-[14px] font-semibold text-background transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue
                <ArrowRight size={16} />
              </button>
            ) : (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-brand-orange font-heading text-[14px] font-semibold text-white shadow-[0_12px_32px_rgba(255,106,43,0.35)] transition-transform hover:scale-[1.01]"
              >
                Send on WhatsApp
                <ArrowRight size={16} />
              </a>
            )}
          </div>
        </div>
      </aside>
    </div>,
    document.body
  );
}
