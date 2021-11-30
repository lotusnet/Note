import Link from 'next/link';
import type { VFC } from 'react';
import { Header } from "./Header";

type Props = {
  title: string,
  children: React.ReactNode;
}

export const Layout : VFC<Props> = (props: Props) =>
{
    const {title, children} = props;
    return (
      <>
        <Header title={title} />
        <hr/>
        <div>
        { children }
        </div>        
        <hr/>
        <Link href={`/`}><a>HOME</a></Link> | <Link href={`/note`}><a>NOTE</a></Link> | <Link href={`/schedule`}><a>SCHEDULE</a></Link> | <Link href={`/checklist`}><a>CHECK LIST</a></Link> | <Link href={`/about`}><a>ABOUT</a></Link>
        <footer>©2021. PETRO</footer>
      </>
    );
}

export default Layout