import { useQuery } from 'react-query'
import { getUsers } from '../api/users'

const View1 = () => {
  const { data, error, isLoading } = useQuery('users', getUsers)

  if (isLoading) {
    return 'LOADING View 1'
  }

  return (
    <div>
      <h1>View 1</h1>
      {error ? (
        <div>error: {error}</div>
      ) : (
        <ul>
          {data.data.map((user) => (
            <li key={user.id} className="UserListItem">
              User name: {user.firstName} {user.lastName} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default View1
