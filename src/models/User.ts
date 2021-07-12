import Entity from './Entity';

interface User extends Entity {
  userName: string;
  password?: string;
  email: string;
  userVerified: boolean;
}

export default User;
