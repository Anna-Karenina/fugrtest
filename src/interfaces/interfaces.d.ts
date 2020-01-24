
export interface ITableProps {
  theme?: string;
  usersOnPage?:any;
  setUsersOnPage?:any
  pageQuantity?: number;
  setPageQuantity?:any;
  currentPage:number;
  setCurrentPage?:any;
  allUsers?:any;
  setAllUsers?:any;
  selectedUser?:any;
  setSelectedUser?:any
}

export interface IUsers {
  [x: string]:any;
  id: number ;
  firstName: string;
  lastName:string
  email:  string;
  phone: string;
  address?: string;
  description?: string;
  allUsers?:any;
  setAllUsers?:any;
}
export type IUsersList = [IUsers]

