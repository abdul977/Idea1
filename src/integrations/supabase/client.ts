// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import { RealtimeClient } from '@supabase/realtime-js';
import type { Database } from './types';

const SUPABASE_URL = "https://hvxubelswoxcfunljgvg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2eHViZWxzd294Y2Z1bmxqZ3ZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxMzMyNTMsImV4cCI6MjA1MzcwOTI1M30.XmyPE4BTDyvAZlVvYLYlOs2iZIHPrOwQdbX46jh3gV4";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  realtime: {
    params: {
      eventsPerSecond: 10,
    }
  }
});

export const realtimeClient = new RealtimeClient(
  SUPABASE_URL.replace('http', 'ws'),
  {
    params: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      eventsPerSecond: 10,
      heartbeatIntervalMs: 1000
    }
  }
);