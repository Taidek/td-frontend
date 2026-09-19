"use client";

import { Activity, ExternalLink, TrendingUp } from "lucide-react";
import type { SyntheticEvent } from "react";

import Card from "@/components/common/Card";
import {
  CONTRACT_PLACEHOLDER,
  METRIC,
  STATS,
} from "@/constants/escrowConstants";

export default function EscrowTelemetryCard() {
  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = String(data.get("contract") ?? "").trim();
    if (value) {
      window.location.href = `https://solscan.io/account/${value}`;
    }
  }

  return (
    <Card
      style={{
        boxShadow:
          "0 0 4px rgba(0,0,0,0.25), 0 8px 10px rgba(0,0,0,0.1), 0 20px 25px rgba(0,0,0,0.1)",
      }}
      className="relative flex flex-col gap-4 overflow-hidden rounded-[9px] before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-primary before:to-transparent"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-[2px] bg-primary" />
          <p className="text-[14px] font-semibold uppercase tracking-[1.2px] text-ink-soft">
            Premios en escrow en tiempo real
          </p>
        </div>
        <span className="bg-surface-3 px-2 py-0.5 text-[14px] font-medium tracking-[0.22px] text-ink-muted">
          SOL/USDC ORACLE
        </span>
      </div>

      <div className="flex items-baseline gap-3">
        <span className="font-display text-[clamp(48px,7vw,96px)] font-normal leading-none tracking-[2px] text-ink-soft">
          {METRIC}
        </span>
        <span className="font-condensed text-2xl font-semibold tracking-[0.72px] text-ink-muted">
          USDC
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <Activity className="size-3 text-primary-pale" />
          <span className="text-base font-medium tracking-[0.22px] text-primary-pale">
            Equivalente aproximado ~784.2 SOL
          </span>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="size-3 text-success" />
          <span className="text-2xl font-medium text-success">+12.4% hoy</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-1 bg-surface-3 p-2"
          >
            <p
              className={`font-condensed text-2xl leading-none ${stat.color} ${stat.weight}`}
            >
              {stat.value}
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.8px] text-ink-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between gap-2 rounded-[2px] bg-surface-input px-2 py-1.5"
      >
        <label htmlFor="contract" className="sr-only">
          Contrato
        </label>
        <input
          id="contract"
          name="contract"
          type="text"
          placeholder={CONTRACT_PLACEHOLDER}
          className="min-w-0 flex-1 bg-transparent text-[11px] font-medium text-ink-soft placeholder:text-ink-border placeholder:opacity-100 focus:outline-none focus-visible:text-ink-soft"
        />
        <button
          type="submit"
          className="inline-flex shrink-0 items-center gap-1.5 text-[11px] font-medium text-ink-muted transition-colors hover:text-ink"
        >
          Explorar
          <ExternalLink className="size-[9px]" />
        </button>
      </form>
    </Card>
  );
}
