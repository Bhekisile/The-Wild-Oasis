import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ylwklmkhhcjypyfdjsmn.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlsd2tsbWtoaGNqeXB5ZmRqc21uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2NTA1MDIsImV4cCI6MjAyMzIyNjUwMn0.NpLOYgVaUOq5lfzoztCdMlJ8XH2dfER07NBjhKk3niU";
const supabase = createClient(SUPABASE_URL, supabaseKey);

export default supabase;
