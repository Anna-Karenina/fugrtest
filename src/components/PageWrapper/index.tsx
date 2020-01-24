import * as React from 'react';
import AppTable from './../Table'
import TableAddForm from './../TableAddForm'
import { IUsersList, IUsers } from '../../interfaces/interfaces';
import AppPagination from '../Pagination';
import UserInfo from '../UserInfo';
import SearchButton from '../SearchButton'
import styled from './PageWrapper.module.css'

export interface IWraperProps {
  theme?: string;
}


const  Wrapper = ({theme}: IWraperProps) => {
  const [usersOnPage, setUsersOnPage] = React.useState<IUsersList | null>()
  const [pageQuantity, setPageQuantity] = React.useState()
  const [currentPage, setCurrentPage] = React.useState(1)
  const [allUsers , setAllUsers ] =React.useState([])
  const [selectedUser, setSelectedUser] = React.useState<IUsers | null>()
  
  return (
   <main 
    className = 'ml-auto mr-auto col-xl-8 col-md-9 col-12'>
      <div className={styled.listHeader}>
     <TableAddForm 
        allUsers = {allUsers} 
        setAllUsers = {setAllUsers}
     />

    <SearchButton allUsers={allUsers}/> 

      </div>
     <div>
      <AppTable 
        theme = {theme} 
        usersOnPage = {usersOnPage} 
        setUsersOnPage = {setUsersOnPage}
        pageQuantity = {pageQuantity}
        setPageQuantity = {setPageQuantity}
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}
        allUsers = {allUsers} 
        setAllUsers = {setAllUsers}
        selectedUser = {selectedUser}
        setSelectedUser ={setSelectedUser}
      /> 
     </div>
     <AppPagination
        pageQuantity={pageQuantity}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    <UserInfo   
      theme = {theme} 
      selectedUser = {selectedUser}/>
  </main>
  );
}
export default Wrapper