import * as React from 'react';
import Card from 'react-bootstrap/Card'
interface IUserInfoProps {
  theme?: string
  selectedUser:any
}

const UserInfo: React.FunctionComponent<IUserInfoProps> = ({theme, selectedUser}) => {
  const [state, setState] = React.useState()

  React.useEffect(()=>{
    setState(selectedUser)
  }, [selectedUser])

  return (
  <Card 
    className="text-center" 
    bg = {theme === 'dark' ? 'dark' : 'light'}
    text = {theme === 'dark' ? 'white' : 'dark'}>
    <Card.Header>Информация о пользователе</Card.Header>
    <Card.Body>
      <Card.Title>
      Выбранный пользователь: {state === undefined ? null  : state.firstName +" "+ state.lastName}
      </Card.Title>
      <Card.Text>
        Описание:<br />
        {state === undefined ? 'Вся инфрмация о пользователе'  : state.description}
        <br/>
        {
          state === undefined ? null :
          <>
          <span>Адрес проживания:</span> <b>{state.address.streetAddress}</b><br />
          <span>Город:</span> <b>{state.address.city}</b><br />
          <span>Провинция/штат:</span> <b>{state.address.state}</b><br />
          <span>Индекс:</span> <b>{state.address.zip}</b><br />
          </>
        }
      </Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">Тут футер</Card.Footer>
  </Card>
  );
};

export default UserInfo;
