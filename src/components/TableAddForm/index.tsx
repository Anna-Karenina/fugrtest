import * as React from 'react';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import Modal from 'react-bootstrap/Modal'
import style from './TableAddForm.module.css'
import styled from './../Table/Table.module.css'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { IUsers, IUsersList } from '../../interfaces/interfaces';


interface OtherProps  {
  theme?:string
}

const TableAddForm = ({
    theme ,touched, errors, isSubmitting,isValid
  }:
    OtherProps  & FormikProps<IUsers>) => {
  const [lgShow, setShow] = React.useState(false);

  const handleClose = (e:any) => {
    e.stopPropagation()
    setShow(false)};
    
  const handleShow = () => setShow(true);

  return (
    <div  
      className = { style.addbtn } 
      onClick={handleShow}> 
        Добавить
    <Modal
      size="xl"
      show={lgShow}
      aria-labelledby="modal"
      centered
    >
      <Modal.Header>
        <Modal.Title id="modal"> 
          Добавить в таблицу
        </Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Table 
            className='mb-0 table table-striped table-bordered' 
            variant = {theme}>
           <thead 
            className = { theme === 'dark' ? style.darkTheme : style.lightTheme }>
            <tr>
              <th className ={styled.theadOneBox}>
                <span className ={styled.customButton}>
                  First Name
                </span>
              </th>
              <th className ={styled.theadOneBox}>
                <span className ={styled.customButton}>
                  Last Name
                </span>
              </th>
              <th className ={styled.theadOneBox}>
                <span className ={styled.customButton}>
                  email
                </span>
              </th>
              <th className ={styled.theadOneBox}>
                <span className ={styled.customButton}>
                  phone
                </span>
              </th>
             </tr>
            </thead>
            <tbody>
              <tr>
               <th>
                <Field type="input" name="firstName" />
                <div>
                  {touched.firstName && errors.firstName && <i>{errors.firstName}</i>}
                </div>
              </th>
              <th>
               <Field type="input" name="lastName"/>
                <div>
                 {touched.lastName && errors.lastName && <i>{errors.lastName}</i> }
               </div>
              </th>
              <th>
                <Field type="email" name="email" />
                  <div>
                    {touched.email && errors.email && <i>{errors.email}</i>}
                  </div>
              </th>
              <th>
                <Field type="input" name="phone" />
                  <div>
                    {touched.phone && errors.phone && <div>{errors.phone}</div>}
                  </div>
              </th>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Закрыть
        </Button>
      { isValid ?
        <Button
          variant="primary" 
          onClick={handleClose}
          type="submit" 
          disabled={isSubmitting}>
            Добавить в таблицу
        </Button>
        :
         null
      }
      </Modal.Footer>
    </Form>
  </Modal>

  </div>
  )
};
interface MyFormProps {
  initialEmail?: string;
  allUsers:any;
  setAllUsers:any
}
const EnhancedTableAddForm = withFormik<MyFormProps, IUsers, IUsersList >({
  mapPropsToValues: props => {
    return {
      id:   Math.floor(Math.random() * Math.floor(9999)) ,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      description: '',
      allUsers: props.allUsers || null ,
      setAllUsers: props.setAllUsers
    };
  },
  validate: (values: IUsers) => {
    let errors: FormikErrors<IUsers> = {};
    if (!values.firstName) {
      errors.firstName = 'Обязательно';
    }  
    if(!values.lastName) {
      errors.lastName = 'Обязательно';
    }  
    if(!values.email) {
      errors.email = 'Обязательно';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Не корректный формат почты';
    }
     if(!values.phone) {
      errors.phone = 'Обязательно';
    }
    return errors;
  },enableReinitialize: true,//(ререндер после обновления пропсов)

  handleSubmit: (values,{resetForm}) => {
    console.log(values)
    let newUser = {
      id: values.id,
      firstName: values.firstName,
      lastName:values.lastName,
      email:values.email,
      phone:values.phone,
      address: '',
      description: ''
    }
    const allUsersWith = values.allUsers.slice(2)
    const setAllUsers = values.setAllUsers
    // eslint-disable-next-line
    setAllUsers([ ,[newUser, ...values.allUsers[1]],...allUsersWith ])
    resetForm()

  },validateOnMount: true
})(TableAddForm);

export default EnhancedTableAddForm;
