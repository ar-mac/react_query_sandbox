import { useQuery } from 'react-query'
import { getUsers } from '../api/users'

const View2 = () => {
  const { data, error, isLoading } = useQuery('users', getUsers)

  if (isLoading) {
    return 'LOADING View 2'
  }

  return (
    <div>
      <h1>View 2</h1>
      {error ? (
        <div>error: {error}</div>
      ) : (
        <ul>
          {data.data.map((user) => (
            <li key={user.id} className="UserListItem">
              User email: {user.email} - {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>
      )}
    </div>
  )}

export default View2;
