import { AuthNavbar } from 'layouts/navbars/AuthNavbar';

export default function JoinShipamLayout({
  children // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
