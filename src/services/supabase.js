import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zmkksxkauxjeexydggdi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpta2tzeGthdXhqZWV4eWRnZ2RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE5OTkxNTcsImV4cCI6MjAwNzU3NTE1N30.apofYAdDSdUqqwQO86Zqu-UV4PWtWd7JiDCJO0lKL3Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
