import { Header } from "./Header";

interface PageProps {
  children: React.ReactNode;
}
export const Page = ({ children }: PageProps) => {
  return (
    <>
      <Header />
      <div className="mx-2 md:container md:mx-auto md:max-w-2xl">
        {children}
      </div>
    </>
  );
};

interface PageTitleProps {
  children: React.ReactNode;
}
export const PageTitle = ({ children }: PageTitleProps) => (
  <h1 className="text-3xl">{children}</h1>
);

Page.Title = PageTitle;

interface PageHeadingProps {
  left?: React.ReactNode;
  title: string;
  right?: React.ReactNode;
}

export const PageHeading = ({ left, title, right }: PageHeadingProps) => (
  <div className="my-4 grid grid-cols-8 items-center">
    <div className="col-span-2">{left}</div>
    <div className="col-span-4 justify-self-center">
      <Page.Title>{title}</Page.Title>
    </div>
    <div className="col-span-2">{right}</div>
  </div>
);

Page.Heading = PageHeading;
