import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const SUPABASE_URL = "https://vkenmuxkhhfixrjvbaon.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrZW5tdXhraGhmaXhyanZiYW9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE5MDg4MTMsImV4cCI6MTk4NzQ4NDgxM30.1BqLTXfLMbmDsuLX9L_gxuu9GR0CxUs5gZi-h1gVHTY";
// Better put your these secret keys in .env file
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
