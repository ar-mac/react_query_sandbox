import { useQuery } from 'react-query'
import { getUsers } from '../api/users'

const View2 = () => {
  const { data, error, isLoading } = useQuery('users', getUsers)
  const {
    data: data2,
    error: error2,
    isLoading: isLoading2,
  } = useQuery('users2', getUsers)

  console.log({ isLoading, isLoading2 })

  return (
    <div>
      <h1>View 2</h1>
      {error ? (
        <div>error: {error}</div>
      ) : isLoading ? (
        'Loading users'
      ) : (
        <ul>
          {data &&
            data.data.map((user) => (
              <li key={user.id} className="UserListItem">
                User email: {user.email} - {user.firstName} {user.lastName}
              </li>
            ))}
        </ul>
      )}
      <hr />
      {error2 ? (
        <div>error2: {error2}</div>
      ) : isLoading2 ? (
        'Loading users2'
      ) : (
        <ul>
          {data2 &&
            data2.data.map((user) => (
              <li key={user.id} className="UserListItem">
                User email: {user.email} - {user.firstName} {user.lastName}
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default View2
