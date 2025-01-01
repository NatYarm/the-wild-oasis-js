import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://ahxcuiytxsymlhkfflpx.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoeGN1aXl0eHN5bWxoa2ZmbHB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0ODM5MDIsImV4cCI6MjA0ODA1OTkwMn0.5yrpTr-R83T6qdm-2AuxYBl1rHGLjMopu5uyajrPL_s'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
