import { VFC } from "react";
import { useDrag } from "react-dnd";
import { useRecoilState } from "recoil";
import { DndItemTypes } from "../DndItemTypes";
import { droppedColumnState } from "../recoil/dropColumn";
import { DropResult } from "./IssueColumn";
import { IssueStatus } from "./IssueStatus";

type Props = {
  id: string
  title: string
  status: IssueStatus
};

export const IssueItem: VFC<Props> = ({ id, title, status }) => {
  const [, setDroppedColumnState] = useRecoilState(droppedColumnState);

  const [collected, drag, preview] = useDrag(() => ({
    type: DndItemTypes.Issue,
    end: (_, monitor) => {
      const dropResult = monitor.getDropResult() as DropResult;
      if (dropResult) {
        // ドロップされたカラム番号をstateにセット
        setDroppedColumnState(dropResult.status);
      }
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  const { isDragging: dragging } = collected;

  // ドラッグ中の場合はopacityを変えている
  const opacity = dragging ? 'opacity-50' : 'opacity-100';

  return (
    // refにdragを渡してドラッグ対象にする
    <>
    <div
      ref={drag}
      className={`flex justify-center items-center rounded-2xl h-28 w-40 bg-white ${opacity}`}
    >
      <div className="task-item">
        <span>{title}</span>
        <button>削除</button>
      </div>
    </div>
    <style jsx>{`
      .container {
        max-width: 900px;
        width: 100%;
        margin: 0 auto;
        padding: 20px;
        box-sizing: border-box;
      }
      .title {
        margin: 0;
        margin-bottom: 20px;
        font-weight: bold;
        font-size: 24px;
      }
      
      .new {
        padding: 20px;
        margin: 20px;
        border: 1px solid blueviolet;
      }
      .new-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }
      .new-title {
        margin: 0;
        font-weight: bold;
        font-size: 20px;
      }
      .new-button {
        font-size: 14px;
        cursor: pointer;
        color: blueviolet;
        border: 1px solid blueviolet;
      }
      .new-label {
        font-size: 16px;
      }
      .new-input {
        width: 100%;
        margin-top: 10px;
        padding: 5px;
        font-size: 16px;
        box-sizing: border-box;
        border: 1px solid blueviolet;
      }
      
      .lane {
        display: flex;
        min-height: 300px;
        border: 1px solid blueviolet;
        margin: 20px;
      }
      .lane-item {
        flex: 1 1 0px;
        min-width: 0;
      }
      .lane > .lane-item:not(:first-child) {
        border-left: 1px solid blueviolet;
      }
      .lane-item-inner {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .lane-status {
        display: flex;
        align-items: center;
        height: 40px;
        padding: 0 5px;
        border-bottom: 1px solid blueviolet;
      }
      .lane-status-name {
        margin: 0;
        font-weight: bold;
        font-size: 16px;
      }
      .lane-status-delete {
        margin-left: auto;
        font-size: 10px;
        cursor: pointer;
        color: blueviolet;
        border: 1px solid blueviolet;
      }
      
      .tasks {
        flex: 1 1 0px;
        margin: 0;
        padding: 10px;
        list-style: none;
      }
      .tasks > *:not(:first-child) {
        margin-top: 10px;
      }
      .task-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        border: 1px solid blueviolet;
        background-color: #fff;
        box-sizing: border-box;
        cursor: grab;
      }
      .task-item::before {
        width: 15px;
        height: 15px;
        margin-right: 5px;
        border-radius: 2px;
        background-color: #9fa8da;
        content: "";
      }
      .task-item > span {
        overflow: hidden;
        display: table-cell;
        max-width: 193px;
        word-wrap: break-word;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .task-item > button {
        width: 40px;
        margin-left: auto;
        font-size: 12px;
        cursor: pointer;
      }
      
      .gu-mirror {
        position: fixed !important;
        margin: 0 !important;
        z-index: 9999 !important;
        opacity: 0.8;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
        filter: alpha(opacity=80);
      }
      .gu-hide {
        display: none !important;
      }
      .gu-unselectable {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
      }
      .gu-transit {
        opacity: 0.2;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)";
        filter: alpha(opacity=20);
      }
      `}</style>
    </>
  );
};