import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://jggkkwfiakguntovsbdd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpnZ2trd2ZpYWtndW50b3ZzYmRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzMTYwMTUsImV4cCI6MjA1Mzg5MjAxNX0.gbMg6kngVX_BIRwHqPOtHuhr-MR4xCIoM8snbNAFuNQ')