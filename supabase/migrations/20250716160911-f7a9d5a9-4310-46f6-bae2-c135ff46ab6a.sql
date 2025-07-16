
-- Create a table for email notifications/subscriptions
CREATE TABLE public.notify_me (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'active'
);

-- Add an index on email for better performance
CREATE INDEX idx_notify_me_email ON public.notify_me(email);

-- Add an index on created_at for sorting
CREATE INDEX idx_notify_me_created_at ON public.notify_me(created_at);

-- Add a unique constraint to prevent duplicate emails
ALTER TABLE public.notify_me ADD CONSTRAINT unique_notify_me_email UNIQUE (email);
