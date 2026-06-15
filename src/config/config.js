const config = {
  appwriteUrl: import.meta.env.VITE_APPWRITE_URL,
  appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  appwritePostsTableId: import.meta.env.VITE_APPWRITE_POSTS_TABLE_ID,
  appwriteProfilesTableId: import.meta.env.VITE_APPWRITE_PROFILES_TABLE_ID,
  appwriteBucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
};

export default config;
