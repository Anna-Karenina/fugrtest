import * as React from 'react';
import Pagination from 'react-bootstrap/Pagination'
import style from './Pagination.module.css'


const PaginationBasic = ({pageQuantity,setCurrentPage, currentPage}:IPagProps) =>{
  let items = [];
  let active = currentPage;

    for (let number = 1; number <= pageQuantity; number++) {
      items.push(
        <Pagination.Item 
          key={number} 
          active={number === active}
          onClick={()=>setCurrentPage(number)}
          >
          {number}
        </Pagination.Item>,
      );
    }

const toFirsPage =()=>{
  setCurrentPage(1)
}
const toLastPage =()=>{
  setCurrentPage(items.length)
}
const toNextPage =()=>{
  setCurrentPage(++currentPage)
}
const toPrewPage =()=>{
  setCurrentPage(--currentPage)
}

const setDisabled = (direction:string)=>{
    if(currentPage === 1 && direction === 'prev'){
      return {disabled:true}
    }else if(currentPage === items.length && direction === 'next'){
      return {disabled:true}
    }else return {disabled:false}
}

return(
  <div className = {style.pagination}>
    <Pagination>
      <Pagination.First onClick = {toFirsPage} {...setDisabled('prev')} />
      <Pagination.Prev onClick = {toPrewPage}  {...setDisabled('prev')} />
      {
        items.length === 0 ? <Pagination.Ellipsis /> : items
      }
      <Pagination.Next onClick ={toNextPage} {...setDisabled('next')}/>
      <Pagination.Last onClick = {toLastPage} {...setDisabled('next')} />
    </Pagination>
    <br />
  </div>
)
}

interface IPagProps {
  pageQuantity:number
  setPageQuantity?:any
  currentPage:number
  setCurrentPage?:any
}

const AppPagination: React.FC<IPagProps> = ({currentPage,setCurrentPage, pageQuantity}) => {
  return (
    <PaginationBasic 
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
    pageQuantity={pageQuantity}/>
  )
};

export default AppPagination;


