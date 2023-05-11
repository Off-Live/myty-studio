type DevEnv = 'development' | 'staging' | 'production';

export default function useDevEnv(): DevEnv {
  const devEnv = process.env.NODE_ENV as DevEnv;

  return devEnv;
}
