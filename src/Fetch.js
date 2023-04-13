import { useFetch } from "./useFetch";

const baseUrl = "https://jsonplaceholder.typicode.com";

const Fetch = () => {
  // Costom Hook 호출하기(정적)
  const { data: userData } = useFetch(baseUrl, "users");
  const { data: postData } = useFetch(baseUrl, "posts");
  const { data: todoData } = useFetch(baseUrl, "todos");

  // Costom Hook 호출하기(동적)
  const { data, fetchUrl } = useFetch(baseUrl, "users");

  return (
    <div>
      <h1>User</h1>
      {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
      <h1>Post</h1>
      {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
      <h1>Todo</h1>
      {todoData && <pre>{JSON.stringify(todoData[0], null, 2)}</pre>}

      <h1>Fetch</h1>
      <button onClick={() => fetchUrl("users")}>Users</button>
      <button onClick={() => fetchUrl("posts")}>Posts</button>
      <button onClick={() => fetchUrl("todos")}>Todos</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Fetch;
