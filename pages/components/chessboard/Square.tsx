import type { VFC } from 'react';

export const colorMap = {
  darkslateblue: 'darkslateblue',
  white: 'white',
} as const                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
export type colors = typeof colorMap[keyof typeof colorMap]

type Props = {
  colors: colors
  children: React.ReactNode
}

export const Square : VFC<Props> = (props: Props) => {
  const { colors, children } = props;
  const stroke = colors === colorMap.darkslateblue ? colorMap.white : colorMap.darkslateblue
  return (
    <> 
      <div style={{
          backgroundColor: colors,
          color: stroke,
          width: '100%',
          height: '100%',
          textAlign: 'center'
        }} >
        {children}
      </div>
    </>
  );
};

export default Square