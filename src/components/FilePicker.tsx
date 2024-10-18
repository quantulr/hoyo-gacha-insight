import { DragDrop } from "@uppy/react";
import { useState } from "react";
import Uppy from "@uppy/core";
import zh_CN from "@uppy/locales/lib/zh_CN";
// import DB from "@uppy/dashboard";
import "@uppy/core/dist/style.min.css";
import "@uppy/drag-drop/dist/style.min.css";
// import "@uppy/dashboard/dist/style.min.css";
import "./FilePicker.css";

const FilePicker = () => {
  const [uppy] = useState(
    () =>
      new Uppy({
        locale: zh_CN,
        onBeforeFileAdded(currentFile, _files) {
          console.log(currentFile.extension);
          const ext = currentFile.extension;
          if (ext === "json") {
            // json
            // reader
            // console.log( currentFile.data.text());
            currentFile.data.text().then((text) => {
              const gachaData: any[] = JSON.parse(text)["hkrpg"][0]["list"];
              console.log(gachaData);

              // const gachaCz = gachaData.filter(
              //   (el) => el["gacha_type"] === "1",
              // );
              // const gachaNew = gachaData.filter(
              //   (el) => el["gacha_type"] === "2",
              // );
              // const gachaCharact = gachaData.filter(
              //   (el) => el["gacha_type"] === "11",
              // );
              // const gachaWep = gachaData.filter(
              //   (el) => el["gacha_type"] === "12",
              // );
              // console.log(gachaNew);
            });
          } else if (ext === "xlsx") {
            // excel
          }
          return currentFile;
        },

        restrictions: {
          maxNumberOfFiles: 1,
          allowedFileTypes: [
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/json",
          ],
        },
        allowMultipleUploadBatches: false,
      }),
  );
  return <DragDrop id="uppy-dragdrop" width={460} uppy={uppy} />;
};

export default FilePicker;
