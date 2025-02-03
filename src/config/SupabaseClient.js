import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with environment variables
const supabaseUrl = process.env.SUPABASE_URL || 'https://awfprypjmqbaoyvucnul.supabase.co';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

// Create Supabase client instance
const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  },
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  },
  db: {
    schema: 'public'
  },
  global: {
    headers: {
      'x-application-name': 'my-portfolio'
    }
  }
});

// Helper functions for common Supabase operations
export const uploadFile = async (bucket, path, file) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file, {
      cacheControl: '3600',
      upsert: false
    });
  if (error) throw error;
  return data;
};

export const downloadFile = async (bucket, path) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .download(path);
  if (error) throw error;
  return data;
};

export const deleteFile = async (bucket, path) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .remove([path]);
  if (error) throw error;
  return data;
};

// Custom error handler for Supabase operations
export const handleSupabaseError = (error) => {
  console.error('Supabase operation failed:', error.message);
  // Add custom error handling logic here
  throw error;
};

export default supabase;
