import axios from 'axios';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`

const Container = styled.div`
  background-color: #aaa;
  width: 400px;
  border-radius: 20px;
  padding: 24px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  margin-bottom: 20px;
`

const Button = styled.button``

function Reservation() {
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const [name, lastname, email, date] = e.target
      await axios({
        url: 'http://127.0.0.1:1337/reservation',
        method: 'POST',
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
      alert('Reservation added!')
    } catch (e) {
      alert(e)
    }
  }
  return (
    <Main>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input required name="name" placeholder='Name' />
          <Input required name="lastname" placeholder='Lastname' />
          <Input required name="email" placeholder='Email' />
          <Input name="date" type='datetime-local' />
          <Button type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Main>
  );
}

export default Reservation;
