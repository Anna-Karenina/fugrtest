import * as React from 'react';
import sortup from './../../assets/sort-up.svg'
import sortdown from './../../assets/sort-down.svg'
import Table from 'react-bootstrap/Table'
import style from './Table.module.css'
import {getUsers} from './../../api/axios'
import {SortForTable} from './../../lib/sortmethods'
import {ITableProps, IUsers, IUsersList} from './../../interfaces/interfaces'


const AppTable: React.FC<ITableProps> = ({theme, usersOnPage, setUsersOnPage, currentPage, setPageQuantity, allUsers , setAllUsers, setSelectedUser }) => {
  const [sort, setSort] = React.useState(true)
  const mySortForTable = new SortForTable(allUsers, sort)
  const checkRef = (user:any) => {
    setSelectedUser(user);
      window.scrollTo(0, 999999);
  }

const sortID = async() =>{
    await mySortForTable.sortById()
    .then((sortedById)=>{setAllUsers(sortedById)})
    setSort(!sort)
}
const sortFistName = async() =>{
  await mySortForTable.sortByFirsName()
  .then((a)=>{setAllUsers(a)})
  setSort(!sort)
}
const sortLastName = async() =>{
  await mySortForTable.sortByLastName()
  .then((a)=>{setAllUsers(a)})
  setSort(!sort)
}
const sortEmail = async() =>{
  await mySortForTable.sortByEmail()
  .then((a)=>{setAllUsers(a)})
  setSort(!sort)
}
                              
  const sortPhone = async() =>{
    await mySortForTable.sortByPhone()
    .then((a)=>{setAllUsers(a)})
       setSort(!sort)
  }

  React.useEffect(()=>{
    let canceled = false 
    const fetchUsers = async () => {
      const data = await getUsers();
      
      const result = data.filter((sameId:IUsers , index:number,self:IUsersList)=>
        index === self.findIndex((t:IUsers) => (
          t.id === sameId.id
        ))
      )
      console.log(result.length)
      const userPerPage:number = 50;
      // eslint-disable-next-line
      const slicedArray = [ ,];
      for (let i = 0; i < result.length; i += userPerPage) {
        slicedArray.push(result.slice(i, i + userPerPage))
      }
      if(!canceled) {
        setAllUsers(slicedArray);
        setPageQuantity(slicedArray.length-1)
      }
    }
    fetchUsers();  
    return ()=>{ canceled = true } 
  }, [setPageQuantity ,setAllUsers])

  React.useEffect(()=>{
    setUsersOnPage(allUsers[currentPage])
  })

  return (
    <Table striped bordered hover variant = {theme}>
          <thead className = {theme === 'dark' ? style.darkTheme : style.lightTheme }>
            <tr>
              <th 
                onClick = {()=>sortID()}
                className ={style.theadOneBox} 
                >
                <span className ={style.customButton}>
                  id 
                  <img  src={sort ? sortup : sortdown} alt='sorting'
                    className = {theme === 'dark' ? style.darkTheme : style.lightTheme }
               style={{width: '18px', height:'auto'}} />
                </span>
               </th>
              <th 
                onClick = {()=>sortFistName()}
                className ={style.theadOneBox}>
                <span className ={style.customButton}>First Name</span>
              </th>
              <th 
                onClick = {()=>sortLastName()}
                className ={style.theadOneBox}>
                <span className ={style.customButton}>Last Name</span>
              </th>
              <th 
                onClick = {()=>sortEmail()}
                className ={style.theadOneBox}>
                <span className ={style.customButton}>email</span>
              </th>
              <th 
                onClick = {()=>sortPhone()}
                className ={style.theadOneBox} >
                <span className ={style.customButton}>phone</span>
              </th>
            </tr>
          </thead>
          <tbody>
        {
         
          usersOnPage === undefined || usersOnPage === null || usersOnPage.legth === 0 ? <tr><th>Loading</th></tr> :
          usersOnPage!.map(({ id, firstName, lastName, email, phone, address,description }:IUsers) =>
          
          <tr 
            onClick = {()=>checkRef({id, firstName, lastName, email, phone, address,description})}
            key={id}> 
              <th>{id}</th>
              <th>{firstName}</th>
              <th>{lastName}</th>
              <th>{email}</th>
              <th>{phone}</th>
          </tr>

          )
        }
        </tbody>
      </Table>
  )
};

export default AppTable;
