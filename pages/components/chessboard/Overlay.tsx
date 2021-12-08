import { VFC } from "react"

export const OverlayTypeMap = {
  IllegalMoveHover: 'Illegal',
  LegalMoveHover: 'Legal',
  PossibleMove: 'Possible',
} as const                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
export type OverlayTypes = typeof OverlayTypeMap[keyof typeof OverlayTypeMap]

export type OverlayProps = {
  type: OverlayTypes
}

export const Overlay: VFC<OverlayProps> = ({type}) =>
{
  const getOverlayColor = (type: OverlayTypes) => {
    switch (type) {
      case OverlayTypeMap.IllegalMoveHover:
        return 'red'
      case OverlayTypeMap.LegalMoveHover:
        return 'mediumturquoise'
      case OverlayTypeMap.PossibleMove:
        return 'yellow'
    }
  }
  const color = getOverlayColor(type)
  return (<>
    <div
      className='overlay'
      role={type}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }}
    />
  </>)

  
}