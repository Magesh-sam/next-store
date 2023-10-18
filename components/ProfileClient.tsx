import { getSession } from "@auth0/nextjs-auth0";

export default async function ProfileServer() {
  const data = await getSession();
  const user = data?.user;

  return (
    user && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}
