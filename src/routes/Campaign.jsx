// src/routes/Campaign.jsx
import { createFileRoute } from "@tanstack/react-router";
import AbtDetailed from "../pages/AboutDetailed";

export const Route = createFileRoute("/Campaign")({
  component: AbtDetailed,
});
