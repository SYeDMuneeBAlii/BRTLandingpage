export const resolvePath = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('blob:') || path.startsWith('data:')) return path;
  
  // Ensure path starts with / for public assets
  return path.startsWith('/') ? path : `/${path}`;
};

