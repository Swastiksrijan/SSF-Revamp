// src/routes/TermsAndCondition.jsx
import { createFileRoute } from "@tanstack/react-router";
import TermsAndCondition from "../pages/TermsAndCondtion";

export const Route = createFileRoute("/TermsAndCondition")({
  component: TermsAndCondition,
});
