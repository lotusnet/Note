import type { VFC } from 'react';
import { Layout } from '../components/layout/Layout';

export const CheckList : VFC = () =>
{
  return (
    <>
      <Layout title={`CheckList`}>
      <h1>CheckList</h1>
      <form id="createForm" className="new">
          <div className="new-head">
            <h2 className="new-title">タスクを新規作成</h2>
            <button className="new-button">作成</button>
          </div>

          <label className="new-label" htmlFor="title">タイトル</label>
          <input id="title" className="new-input" name="title" />
        </form>

        <div className="lane">
          <div className="lane-item">
            <div className="lane-item-inner">
              <div className="lane-status">
                <p className="lane-status-name">TODO</p>
              </div>

              <div id="todoList" className="tasks"></div>
            </div>
          </div>

          <div className="lane-item">
            <div className="lane-item-inner">
              <div className="lane-status">
                <p className="lane-status-name">DOING</p>
              </div>

              <div id="doingList" className="tasks"></div>
            </div>
          </div>

          <div className="lane-item">
            <div className="lane-item-inner">
              <div className="lane-status">
                <p className="lane-status-name">DONE</p>
                <button id="deleteAllDoneTask" className="lane-status-delete">DONE のタスクを一括削除</button>
              </div>

              <div id="doneList" className="tasks"></div>
            </div>
          </div>
        </div>
      </Layout>
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
        background-color: #aaa;
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
  )
}

export default CheckList