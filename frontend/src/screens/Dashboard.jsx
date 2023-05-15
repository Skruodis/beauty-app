import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import DashboardItem from '../components/DashboardItem';

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: column;
`

const Title = styled.span`
  margin-bottom: 20px;
  padding: 15px;
`

const Input = styled.input`
  margin-bottom: 20px;
`

const Button = styled.button``

function Dashboard() {
  const [reservations, setReservations] = useState([])
  const navigate = useNavigate()
  const fetch = () => {
    axios({
      url: 'http://127.0.0.1:1337/dashboard/reservations',
    }).then((response) => {
      setReservations(response.data)
    }).catch((error) => {
      alert(error)
    })
  }
  useEffect(() => {
    fetch()
  }, [])

  return (
    <Main>
      <Title>Dashboard</Title>
      <Button onClick={() => navigate('/reservation')}>Add reservation</Button>
      {reservations.length > 0 && (
        <>
          <Title>Active reservations</Title>
          {reservations.map((item) => <DashboardItem key={item._id} id={item._id} name={item.name} lastname={item.lastname} email={item.email} date={item.date} refetch={fetch} />)}
        </>
      )}
    </Main>
  );
}

export default Dashboard;