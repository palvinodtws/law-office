
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL , process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export default supabase;


// const SUPABASE_KEY = 'SUPABASE_CLIENT_API_KEY'


// const SUPABASE_URL = "https://cpgylxwucdqkcpsvrccs.supabase.co"

// const supabase = createClient(SUPABASE_URL, process.env.SUPABASE_KEY);
