// تأكد من تثبيت مكتبة supabase عبر npm أو استيرادها من CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'YOUR_SUPABASE_URL' // استبدله برابط مشروعك من Supabase
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY' // استبدله بمفتاحك الخاص

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
