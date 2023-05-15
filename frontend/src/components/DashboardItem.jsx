import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    flex: .5;
    background-color: #aaa;
`

const Title = styled.span`
  margin-bottom: 20px;
  padding: 15px;
`

const Input = styled.input``

const Button = styled.button``

function DashboardItem({ id, name, lastname, email, date, refetch }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const [name, lastname, email, date] = e.target
      await axios({
        url: `http://127.0.0.1:1337/reservation/${id}`,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          name: name.value,
          lastname: lastname.value,
          email: email.value,
          date: date.value,
        }
      })
      refetch()
      setIsEditing(false)
    } catch (e) {
      alert(e)
    }
  }

  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      await axios({
        url: `http://127.0.0.1:1337/reservation/${id}`,
        method: 'DELETE',
      })
      refetch()
    } catch (e) {
      alert(e)
    }
  }

  return (
    <Main>
      <form onSubmit={handleSubmit}>
        {isEditing ? (
          <>
            <Input required name="name" placeholder='Name' defaultValue={name} />
            <Input required name="lastname" placeholder='Lastname' defaultValue={lastname} />
            <Input required name="email" placeholder='Email' defaultValue={email} />
            <Input name="date" type='datetime-local' defaultValue={date} />
          </>
        ) : (
          <>
            <Title>{name}</Title>
            <Title>{lastname}</Title>
            <Title>{email}</Title>
            <Title>{date}</Title>
          </>
        )}
        {isEditing ? (
          <Button type="submit">Save</Button>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <Button onClick={handleDelete}>Delete</Button>
          </>
        )}
      </form>
    </Main>
  );
}

export default DashboardItem;
