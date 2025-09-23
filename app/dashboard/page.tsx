"use client";

import { useState } from "react";
import CreatePostComposer from "@/components/dashboard/create-post-composer";

export default function DashboardPage() {
  const [isLongForm, setIsLongForm] = useState(true);

  const toggleOutputLength = () => setIsLongForm((prev) => !prev);

  return (
    <CreatePostComposer
      isLongForm={isLongForm}
      onToggleLongForm={toggleOutputLength}
    />
  );
}
