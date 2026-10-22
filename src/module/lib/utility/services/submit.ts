import type { SubmitStatus } from "@/module/lib/utility/types/content.interface";

// Sends a JSON POST to the configured endpoint.
// Returns "unconfigured" when no endpoint is set, so the UI never pretends something was sent.
export async function submitJson(
  endpoint: string | undefined,
  payload: unknown,
): Promise<Extract<SubmitStatus, "sent" | "unconfigured" | "error">> {
  if (!endpoint) return "unconfigured";
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    return response.ok ? "sent" : "error";
  } catch {
    return "error";
  }
}
