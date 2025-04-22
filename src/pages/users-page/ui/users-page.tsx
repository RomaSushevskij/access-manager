import { UserCard } from "@/app/entities/users";
import { mockUsers } from "@/app/entities/users/model/types.ts";

export const UsersPage = () => {
  return (
    <div>
      <div>
        {mockUsers.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
};
