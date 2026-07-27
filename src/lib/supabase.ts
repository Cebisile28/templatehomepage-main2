import { createClient } from "@supabase/supabase-js";

// Read environment variables (Vite uses `import.meta.env`; fall back to process.env for other environments)
const supabaseUrl =
  (typeof import.meta !== "undefined" && (import.meta as any).env?.VITE_SUPABASE_URL) ||
  (globalThis as any).process?.env?.VITE_SUPABASE_URL ||
  "";
const supabaseAnonKey =
  (typeof import.meta !== "undefined" && (import.meta as any).env?.VITE_SUPABASE_ANON_KEY) ||
  (globalThis as any).process?.env?.VITE_SUPABASE_ANON_KEY ||
  "";

function looksLikeAnonKey(key: string) {
  if (!key || typeof key !== "string") return false;
  if (key.length < 20) return false;
  if (/your|replace|xxxx|<|>/.test(key.toLowerCase())) return false;
  return true;
}

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase env variables missing:", { supabaseUrl, supabaseAnonKey });
  throw new Error(
    "Missing Supabase environment variables. Create a .env file with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY."
  );
}

if (!looksLikeAnonKey(supabaseAnonKey)) {
  console.error("Supabase anon key looks invalid:", supabaseAnonKey);
  throw new Error(
    "Invalid Supabase anon key. Ensure you copied the project's public anon key into VITE_SUPABASE_ANON_KEY."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);