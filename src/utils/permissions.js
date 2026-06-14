import { ROLES } from "@/constants/roles";

export const canCreatePost = (user) => {
  return user?.role === ROLES.EDITOR || user?.role === ROLES.ADMIN;
};

export const canEditPost = (user, authorId) => {
  if (!user) return false;

  if (user.role === ROLES.ADMIN) {
    return true;
  }

  return user.role === ROLES.EDITOR && user.$id === authorId;
};

export const canDeletePost = canEditPost;
