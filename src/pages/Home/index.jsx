import './styles.css'
import { Card } from '../../components/Card'
import { useState, useEffect } from 'react';

export function Home() {

  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name: '', avatar: ''})

  function handleAddStudent() {    
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }

    setStudents( prevState => [...prevState, newStudent] );
  }

  useEffect(()=> {
    fetch('https://api.github.com/users/lfoalves')
    .then(resolve => resolve.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    })
    .catch(error => console.error(error))
  }, []);

  return (
    <div className='container'>
        <header>
          <h1>Lista de presença</h1>
          <div>
            <strong>{user.name}</strong>
            <img src={user.avatar} alt="Avatar do perfil do admin" />
          </div>
        </header>

        <input
          type="text"
          placeholder='Insira...'
          onChange={e => setStudentName(e.target.value)}
        />
        <button type='button' onClick={handleAddStudent}>
          Adicionar
        </button>

        {
          students.map(student => (
            <Card
              key={student.time} 
              name={student.name}
              time={student.time} 
            />
          ) )
        }
    </div>
  )
}
