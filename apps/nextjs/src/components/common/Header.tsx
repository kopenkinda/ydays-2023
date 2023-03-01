import { useSession } from "@clerk/nextjs";

export default function Header() {
  const { isLoaded, isSignedIn, session } = useSession();
  return (
    <div className="sticky top-0 flex border-b border-gray-200">
      {isLoaded && isSignedIn && (
        <div className="flex items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
            <img
              src={session.user.profileImageUrl}
              alt=""
              className="h-10 w-10 rounded-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
