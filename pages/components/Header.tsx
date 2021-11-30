import type { VFC } from 'react';

type Props = {
  title: string
}

export const Header : VFC<Props> = (props: Props) =>
{
  const {title} = props;
  return (
    <>      
      <div>
        <p>HEADER &gt;&gt; [{title}] PAGE</p>
      </div>
    </>
  );
};