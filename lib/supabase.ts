import { createClient, type SupabaseClient } from "@supabase/supabase-js"

// Use env if available, fallback to provided values (safe for client as anon key is public)
const SUPABASE_URL =
  (typeof process !== "undefined" && (process as any).env?.NEXT_PUBLIC_SUPABASE_URL) ||
  "https://rvtllumsiiwrciuzsqtq.supabase.co"

const SUPABASE_ANON_KEY =
  (typeof process !== "undefined" && (process as any).env?.NEXT_PUBLIC_SUPABASE_ANON_KEY) ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2dGxsdW1zaWl3cmNpdXpzcXRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwMzQxMjAsImV4cCI6MjA2OTYxMDEyMH0.zQVr-95TR9HCPPa_Jd4pqtwvsWYFiUd0meupHt5Rje4"

let supabaseClient: SupabaseClient | null = null

export function getSupabaseClient(): SupabaseClient {
  if (!supabaseClient) {
    supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  }
  return supabaseClient
}
