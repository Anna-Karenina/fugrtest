export class SortForTable { 
  constructor(users,sorted){
    this.users =  users.flat()
    this.sorted = sorted
  }

  async sortById(){
   let  flatUsers = this.users
   flatUsers.sort((a, b) =>  a.id - b.id);
    if(this.sorted === false){
      flatUsers.reverse()
    }
    let arr=[]
    while(flatUsers.length) arr.push(flatUsers.splice(0,50));
      // eslint-disable-next-line
    return arr = [, ...arr]
}
 
  async sortByFirsName(){
    let  flatUsers = this.users
    flatUsers.sort(function(a, b){
      var nameA=a.firstName.toLowerCase(), nameB=b.firstName.toLowerCase()
      if (nameA < nameB) 
        return -1
      if (nameA > nameB)
        return 1
      return 0
    })
     if(this.sorted === false){
       flatUsers.reverse()
     }
     let arr=[]
     while(flatUsers.length) arr.push(flatUsers.splice(0,50));
       // eslint-disable-next-line
     return arr = [, ...arr]
  }

  async sortByLastName(){
    let  flatUsers = this.users
    flatUsers.sort(function(a, b){
      var nameA=a.lastName.toLowerCase(), nameB=b.lastName.toLowerCase()
      if (nameA < nameB)
        return -1
      if (nameA > nameB)
        return 1
      return 0
    })
     if(this.sorted === false){
       flatUsers.reverse()
     }
     let arr=[]
     while(flatUsers.length) arr.push(flatUsers.splice(0,50));
       // eslint-disable-next-line
     return arr = [, ...arr]
  }

  async sortByEmail(){
    let  flatUsers = this.users
    flatUsers.sort(function(a, b){
      var nameA=a.email.toLowerCase(), nameB=b.email.toLowerCase()
      if (nameA < nameB)
        return -1
      if (nameA > nameB)
        return 1
      return 0
    })
     if(this.sorted === false){
       flatUsers.reverse()
     }
     let arr=[]
     while(flatUsers.length) arr.push(flatUsers.splice(0,50));
       // eslint-disable-next-line
     return arr = [, ...arr]
  }

  async sortByPhone(){
    let flatUsers = this.users
    flatUsers.map(i => i.phone.replace(/[^-0-9]/gim,''))
    
    if(this.sorted === false){
      flatUsers.reverse()
    }
    let arr=[]
    while(flatUsers.length) arr.push(flatUsers.splice(0,50));
      // eslint-disable-next-line
    return arr = [, ...arr]
  }
  
}
