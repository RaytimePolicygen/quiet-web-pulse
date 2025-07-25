// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://zkuplzcekkckzqjyudtd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprdXBsemNla2tja3pxanl1ZHRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2ODEwMjcsImV4cCI6MjA2ODI1NzAyN30.RdA8xIpupEheVU-X_kqU2CH1WIFqJ3Bx-e6AFSY9LSI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});