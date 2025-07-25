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

// Enhanced helper functions with better error handling and type checking
export const uploadFile = async (bucket, path, file, options = {}) => {
  try {
    if (!bucket || !path || !file) {
      throw new Error('Missing required parameters for file upload');
    }

    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file, {
        cacheControl: '3600',
        upsert: false,
        ...options
      });

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    return handleSupabaseError(error);
  }
};

export const downloadFile = async (bucket, path) => {
  try {
    if (!bucket || !path) {
      throw new Error('Missing required parameters for file download');
    }

    const { data, error } = await supabase.storage
      .from(bucket)
      .download(path);

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    return handleSupabaseError(error);
  }
};

export const deleteFile = async (bucket, path) => {
  try {
    if (!bucket || !path) {
      throw new Error('Missing required parameters for file deletion');
    }

    const { data, error } = await supabase.storage
      .from(bucket)
      .remove([path]);

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    return handleSupabaseError(error);
  }
};

// New utility functions
export const listFiles = async (bucket, path = '') => {
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .list(path);

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    return handleSupabaseError(error);
  }
};

export const getPublicUrl = (bucket, path) => {
  if (!bucket || !path) {
    throw new Error('Missing required parameters for public URL generation');
  }
  
  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(path);

  return data.publicUrl;
};

// Improved error handler with specific error types
export const handleSupabaseError = (error) => {
  const errorDetails = {
    message: error.message,
    code: error?.code || 'UNKNOWN_ERROR',
    timestamp: new Date().toISOString(),
  };

  console.error('Supabase operation failed:', errorDetails);

  return {
    data: null,
    error: errorDetails,
  };
};

export default supabase;
