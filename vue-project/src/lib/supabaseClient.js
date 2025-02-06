import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://qibtzziihsrxexvtarsp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpYnR6emlpaHNyeGV4dnRhcnNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwMjcwNzAsImV4cCI6MjA1MzYwMzA3MH0.CM-ohn6I_KO9PVpgDi5OsFdIXW_HxIFrMe_rOwoZKpQ')