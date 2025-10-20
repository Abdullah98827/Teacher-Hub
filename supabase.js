import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://otbkyffjfmjekkybkubs.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90Ymt5ZmZqZm1qZWtreWJrdWJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5NDAwODYsImV4cCI6MjA3NjUxNjA4Nn0.EAUqzLoeeGC17tQPWN_bBEu1O1rx9JSP-_V-oK5v7gk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)