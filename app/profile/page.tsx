import ProfileClient from "@/components/ProfileClient";

function Profile() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <h1>User Profile</h1>
      <ProfileClient />
    </main>
  );
}

export default Profile;
