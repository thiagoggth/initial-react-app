import User from './User';

interface Entity {
  id: number;
  createdBy?: User;
  createdAt: Date;
  updatedBy?: User;
  updatedAt?: Date;
  isActive: boolean;
}
export default Entity;
