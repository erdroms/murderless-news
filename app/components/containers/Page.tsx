interface PageProps {
  children: React.ReactNode;
}
export const Page = ({ children }: PageProps) => {
  return (
    <div className="md:container md:mx-auto m-6 flex flex-col items-center">
      {children}
    </div>
  );
};
